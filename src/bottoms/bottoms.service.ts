import { Injectable } from '@nestjs/common';
import { CreateBottomDto } from './dto/create-bottom.dto';
import { UpdateBottomDto } from './dto/update-bottom.dto';

@Injectable()
export class BottomsService {
  create(createBottomDto: CreateBottomDto) {
    return 'This action adds a new bottom';
  }

  findAll() {
    return `This action returns all bottoms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bottom`;
  }

  update(id: number, updateBottomDto: UpdateBottomDto) {
    return `This action updates a #${id} bottom`;
  }

  remove(id: number) {
    return `This action removes a #${id} bottom`;
  }
}
