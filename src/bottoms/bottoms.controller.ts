import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BottomsService } from './bottoms.service';
import { CreateBottomDto } from './dto/create-bottom.dto';
import { UpdateBottomDto } from './dto/update-bottom.dto';

@Controller('bottoms')
export class BottomsController {
  constructor(private readonly bottomsService: BottomsService) {}

  @Post()
  create(@Body() createBottomDto: CreateBottomDto) {
    return this.bottomsService.create(createBottomDto);
  }

  @Get()
  findAll() {
    return this.bottomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bottomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBottomDto: UpdateBottomDto) {
    return this.bottomsService.update(+id, updateBottomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bottomsService.remove(+id);
  }
}
