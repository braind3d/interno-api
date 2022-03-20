import { Test, TestingModule } from '@nestjs/testing';
import { W2fpService } from './w2fp.service';

describe('W2fpService', () => {
  let service: W2fpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [W2fpService],
    }).compile();

    service = module.get<W2fpService>(W2fpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
