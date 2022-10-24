import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUpSwagger } from './util/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		allowedHeaders:
			'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
		credentials: true,
	});
	setUpSwagger(app);
	await app.listen(3000);
}
bootstrap();
