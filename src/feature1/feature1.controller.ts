import { Controller, Get } from '@nestjs/common';
import { Feature1Service } from './feature1.service';

@Controller('feature1')
export class Feature1Controller {
    constructor(
        private _f1: Feature1Service,
    ) { }

    @Get() 
  getText(): string {
    return this._f1.getText()
  }
}
