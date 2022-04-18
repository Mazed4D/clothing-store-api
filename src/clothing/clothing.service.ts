import { Injectable } from '@nestjs/common';
import { CreateClothingDto } from './dto/create-clothing.dto';
import { UpdateClothingDto } from './dto/update-clothing.dto';

@Injectable()
export class ClothingService {
  create(createClothingDto: CreateClothingDto) {
    return 'This action adds a new clothing';
  }

  findAll() {
    return `This action returns all clothing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clothing`;
  }

  update(id: number, updateClothingDto: UpdateClothingDto) {
    return `This action updates a #${id} clothing`;
  }

  remove(id: number) {
    return `This action removes a #${id} clothing`;
  }
}
