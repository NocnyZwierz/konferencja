import { Test, TestingModule } from '@nestjs/testing';
import { KonferencjaController } from './konferencja.controller';

describe('KonferencjaController', () => {
  let controller: KonferencjaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonferencjaController],
    }).compile();

    controller = module.get<KonferencjaController>(KonferencjaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
