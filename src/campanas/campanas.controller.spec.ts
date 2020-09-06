import { Test, TestingModule } from '@nestjs/testing';
import { CampanaController } from './campanas.controller';

describe('CampanasController', () => {
  let controller: CampanaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampanaController],
    }).compile();

    controller = module.get<CampanaController>(CampanaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
