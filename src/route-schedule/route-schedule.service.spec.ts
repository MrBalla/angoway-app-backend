import { Test, TestingModule } from '@nestjs/testing';
import { RouteScheduleService } from './route-schedule.service';

describe('RouteScheduleService', () => {
  let service: RouteScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteScheduleService],
    }).compile();

    service = module.get<RouteScheduleService>(RouteScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
