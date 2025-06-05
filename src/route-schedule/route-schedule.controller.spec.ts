import { Test, TestingModule } from '@nestjs/testing';
import { RouteScheduleController } from './route-schedule.controller';
import { RouteScheduleService } from './route-schedule.service';

describe('RouteScheduleController', () => {
  let controller: RouteScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteScheduleController],
      providers: [RouteScheduleService],
    }).compile();

    controller = module.get<RouteScheduleController>(RouteScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
