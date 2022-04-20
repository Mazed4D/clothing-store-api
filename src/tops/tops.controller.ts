import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TopsService } from './tops.service';
import { CreateTopDto } from './dto/create-top.dto';
import { UpdateTopDto } from './dto/update-top.dto';

@Controller('tops')
export class TopsController {
  constructor(private readonly topsService: TopsService) {}

  @Post()
  create(@Body() createTopDto: CreateTopDto) {
    return this.topsService.create(createTopDto);
  }

  @Get()
  findAll() {
    return this.topsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopDto: UpdateTopDto) {
    return this.topsService.update(+id, updateTopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topsService.remove(+id);
  }
}
