import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

const port = process.env.PORT || 8080;
dotenv.config(); 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('task manager backend')
    .setDescription('task manager documentation')
    .setVersion('1.0')
    .addTag('TASK MANAGER')
    .build();
  
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, doc);

  app.enableCors({
    origin: '*',
  });

  // Use the global exception filter
  app.useGlobalFilters(new AllExceptionsFilter());

  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true, // Strip out properties that are not in the DTO
        forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are included
        transform: true, // Automatically transform payloads to match the DTO class
    }),
  );

  console.log('[CONSOLE LOG] process.env.PORT: ' + process.env.PORT);
  console.log('[CONSOLE LOG] process.env.PORT: ' + process.env.MONGO_URI);

  await app.listen(port, "0.0.0.0");
}
bootstrap();