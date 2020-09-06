import { Test, TestingModule } from '@nestjs/testing';
import { CampanaService } from './campanas.service';

describe('CampanasService', () => {
  let service: CampanaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampanaService],
    }).compile();

    service = module.get<CampanaService>(CampanaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
