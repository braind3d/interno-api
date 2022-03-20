import { Test, TestingModule } from '@nestjs/testing';
import { W2fpController } from './w2fp.controller';

describe('W2fpController', () => {
  let controller: W2fpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [W2fpController],
    }).compile();

    controller = module.get<W2fpController>(W2fpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
