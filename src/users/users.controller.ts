import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':username')
  async findOne(@Param('username') username: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.usersService.findOne(username);
    return user;
  }

  @Patch(':username')
  async update(
    @Param('username') username: string,
    @User() user: any,
    @Body('user') updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(
      username,
      updateUserDto,
      user.username,
    );
  }

  @Delete(':username')
  async remove(@Param('username') username: string, @User() user: any) {
    return await this.usersService.remove(username, user.username);
  }
}
