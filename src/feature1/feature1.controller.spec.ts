import { Test, TestingModule } from '@nestjs/testing';
import { Feature1Controller } from './feature1.controller';

describe('Feature1Controller', () => {
  let controller: Feature1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Feature1Controller],
    }).compile();

    controller = module.get<Feature1Controller>(Feature1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
