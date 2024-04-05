import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Feature1Controller } from './feature1/feature1.controller';
import { Feature1Service } from './feature1/feature1.service';

@Module({
  imports: [],
  controllers: [AppController, Feature1Controller],
  providers: [AppService, Feature1Service],
})
export class AppModule {}
