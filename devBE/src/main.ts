import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { setUpSwagger } from './util/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setUpSwagger(app);

  await app.listen(3000);
}
bootstrap();
