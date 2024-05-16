import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })

export class InstagramPhoto extends Document {

  @Prop({ required: true })
  imageUserProfile: string;

  @Prop({ required: true })
  image: string;

}

export const InstagramPhotoSchema = SchemaFactory.createForClass(InstagramPhoto);
