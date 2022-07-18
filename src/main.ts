import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Maskmarket API')
    .setDescription('The Maskmarket API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // if (!process.env['JWT_SECRET'] || !process.env['PASSWORD_HASH_SALT'])
  //   throw new Error('Shit happened, cannot find jwt secret or salt in environment');
  
  await app.listen(process.env['MASK_API_PORT'], 'localhost');

}
bootstrap();
