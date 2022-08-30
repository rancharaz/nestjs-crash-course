/* eslint-disable */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//primary operator in @Controller as path
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //decorator as path to app
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
