import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUpSwagger } from './util/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	setUpSwagger(app);
	await app.listen(3000);
}
bootstrap();
