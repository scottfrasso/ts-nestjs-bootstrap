import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function standupApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  return app;
}

async function bootstrap() {
  const app = await standupApp();
  await app.listen(3000);
}

bootstrap();
