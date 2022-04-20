import { Test, TestingModule } from '@nestjs/testing';
import { BottomsController } from './bottoms.controller';
import { BottomsService } from './bottoms.service';

describe('BottomsController', () => {
  let controller: BottomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BottomsController],
      providers: [BottomsService],
    }).compile();

    controller = module.get<BottomsController>(BottomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
