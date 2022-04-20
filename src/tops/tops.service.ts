import { Injectable } from '@nestjs/common';
import { CreateTopDto } from './dto/create-top.dto';
import { UpdateTopDto } from './dto/update-top.dto';

@Injectable()
export class TopsService {
  create(createTopDto: CreateTopDto) {
    return 'This action adds a new top';
  }

  findAll() {
    return `This action returns all tops`;
  }

  findOne(id: number) {
    return `This action returns a #${id} top`;
  }

  update(id: number, updateTopDto: UpdateTopDto) {
    return `This action updates a #${id} top`;
  }

  remove(id: number) {
    return `This action removes a #${id} top`;
  }
}
