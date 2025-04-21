import { Test, TestingModule } from '@nestjs/testing';
import { StopesService } from './stopes.service';

describe('StopesService', () => {
  let service: StopesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StopesService],
    }).compile();

    service = module.get<StopesService>(StopesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
