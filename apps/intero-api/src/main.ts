/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = ["*"];

  app.enableCors({
    credentials: true,
    origin: allowedOrigins,
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());

  SwaggerModule.setup(
    "/api",
    app,
    SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('Intero Server API')
    .setDescription('API server for the Intero interior design project.')
    .setVersion('1.0.0')
    .build(),),
  );
  
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
