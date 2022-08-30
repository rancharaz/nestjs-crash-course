/* eslint-disable */

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //creating swagger and it's title
  const config = new DocumentBuilder()
                .setTitle('Nest Api')
                .setDescription("The description of the api")
                .setVersion('1.0')
                .build();

                const document = SwaggerModule.createDocument(app, config);
                SwaggerModule.setup('/', app, document)

  await app.listen(3000);
}
bootstrap();
