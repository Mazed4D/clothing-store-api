import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findOne(username: string) {
    const user = await this.repository.findOne({
      where: { username },
      select: ['username', 'password', 'id', 'displayName'],
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async update(
    username: string,
    updateUserDto: UpdateUserDto,
    curUsername: string,
  ) {
    const user = await this.repository.findOne({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException();
    }
    if (user.username !== curUsername) {
      throw new ForbiddenException(
        'Cannot perform action on a different user.',
      );
    }

    Object.assign(user, updateUserDto);

    return await this.repository.save(user);
  }

  async remove(username: string, curUsername: string) {
    const user = await this.repository.findOne({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException();
    }
    if (user.username !== curUsername) {
      throw new ForbiddenException(
        'Cannot perform action on a different user.',
      );
    }

    await this.repository.remove(user);
    return null;
  }
}
