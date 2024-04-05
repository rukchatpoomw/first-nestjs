import { Injectable } from '@nestjs/common';

@Injectable()
export class Feature1Service {
  getText(): string {
    return "feature1"
  }
}
