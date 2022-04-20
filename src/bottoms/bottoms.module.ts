import { Module } from '@nestjs/common';
import { BottomsService } from './bottoms.service';
import { BottomsController } from './bottoms.controller';

@Module({
  controllers: [BottomsController],
  providers: [BottomsService]
})
export class BottomsModule {}
