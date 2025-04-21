import { Test, TestingModule } from '@nestjs/testing';
import { StopesController } from './stopes.controller';

describe('StopesController', () => {
  let controller: StopesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StopesController],
    }).compile();

    controller = module.get<StopesController>(StopesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
