import { Test, TestingModule } from '@nestjs/testing';
import { KonferencjaService } from './konferencja.service';

describe('KonferencjaService', () => {
  let service: KonferencjaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KonferencjaService],
    }).compile();

    service = module.get<KonferencjaService>(KonferencjaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
