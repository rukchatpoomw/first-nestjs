import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World4!';
  }

  getText(): string {
    return 'This is text.';
  }
}
