import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import { join } from 'path';
import * as fs from 'fs-extra';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  const exists = await fs.pathExists('images');

  if (!exists) {
    await fs.ensureDir('images');
  }

  app.useStaticAssets(join('images'))
  app.enableCors({
    origin: [
      'https://www.instagram.com',
    ]
  });
  await app.listen(3000);
}
bootstrap();
