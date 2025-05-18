import { Test, TestingModule } from '@nestjs/testing';
import { RouteStopsController } from './route-stops.controller';

describe('RouteStopsController', () => {
  let controller: RouteStopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteStopsController],
    }).compile();

    controller = module.get<RouteStopsController>(RouteStopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
