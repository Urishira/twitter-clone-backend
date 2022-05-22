import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    //this make a casting of data ensuring all endpoints are protected from
    //receiving incorrect data
    new ValidationPipe({
      transform: true,
      whitelist: true, // this is filtering the data non requested
      forbidNonWhitelisted: true, // this throw a notification of data non requested
    }),
  );
  await app.listen(3000);
}
bootstrap();
