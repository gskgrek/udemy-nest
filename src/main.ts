import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // remove from body attrs that are not in related dto
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
