import { Test, TestingModule } from '@nestjs/testing';
import { RouteStopsService } from './route-stops.service';

describe('RouteStopsService', () => {
  let service: RouteStopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteStopsService],
    }).compile();

    service = module.get<RouteStopsService>(RouteStopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
