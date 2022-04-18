import { Module } from '@nestjs/common';
import { ClothingService } from './clothing.service';
import { ClothingController } from './clothing.controller';

@Module({
  controllers: [ClothingController],
  providers: [ClothingService]
})
export class ClothingModule {}
