import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors();

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://10.11.0.227:3000',
    ],
    methods: ["GET", "POST",'DELETE','PUT'],
    credentials: true,
  });

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
