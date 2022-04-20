import { Test, TestingModule } from '@nestjs/testing';
import { BottomsService } from './bottoms.service';

describe('BottomsService', () => {
  let service: BottomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BottomsService],
    }).compile();

    service = module.get<BottomsService>(BottomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
