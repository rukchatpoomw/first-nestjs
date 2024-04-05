import { Test, TestingModule } from '@nestjs/testing';
import { Feature1Service } from './feature1.service';

describe('Feature1Service', () => {
  let service: Feature1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Feature1Service],
    }).compile();

    service = module.get<Feature1Service>(Feature1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
