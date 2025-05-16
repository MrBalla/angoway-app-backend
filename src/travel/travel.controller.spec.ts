import { Test, TestingModule } from '@nestjs/testing';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';

describe('TravelController', () => {
  let controller: TravelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelController],
      providers: [TravelService],
    }).compile();

    controller = module.get<TravelController>(TravelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
