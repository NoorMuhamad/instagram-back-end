import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstagramPhoto, InstagramPhotoSchema } from './schemas/instagram-photo.schema';
import { InstagramPhotoService } from './instagram-photo.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: InstagramPhoto.name, schema: InstagramPhotoSchema }])],
  providers: [InstagramPhotoService],
  exports: [InstagramPhotoService],
})
export class InstagramPhotoModule {}
