import { Test, TestingModule } from '@nestjs/testing';
import { BusController } from './bus.controller';

describe('BusController', () => {
  let controller: BusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusController],
    }).compile();

    controller = module.get<BusController>(BusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
