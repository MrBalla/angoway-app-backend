import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { patchNestjsSwagger } from '@anatine/zod-nestjs';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    patchNestjsSwagger();

    const config = new DocumentBuilder().setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);;

    SwaggerModule.setup('api-doc', app, document);

    app.enableCors({ origin:"*" })
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log(`Swagger is running on: ${await app.getUrl()}/api-doc`);
}
bootstrap();
