// src/main.ts (Backend - NestJS)

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; 
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.enableCors({
    origin: 'http://localhost:4200', // El origen de tu aplicación Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Habilitamos la tubería de validación
  // app.useGlobalPipes(new ValidationPipe()); // Si usas la línea de la imagen

  // Swagger (Documentación API)
  const config = new DocumentBuilder()
    .setTitle('The Produt API description')
    .setDescription('The Produt API description') // Título y descripción de ejemplo
    .setVersion('1.0')
    .addTag('product')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000); // El puerto de tu servidor NestJS
}
bootstrap();