import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InstagramPhotoModule } from './instagram-photo/instagram-photo.module';
import { InstagramPhotoController } from './instagram-photo/instagram-photo.controller';
@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://testerwarmup:123123123@cluster0.g0bwnzc.mongodb.net/instagram_image_downloader?retryWrites=true&w=majority&appName=Cluster0`),
    InstagramPhotoModule,
  ],
  controllers: [AppController, InstagramPhotoController],
  providers: [AppService],
})
export class AppModule {}