import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InstagramPhoto } from './schemas/instagram-photo.schema';
import axios from 'axios';
import * as fs from 'fs-extra';
import * as path from 'path';

const ENDPOINT_URL = 'http://localhost:3000/'

@Injectable()

export class InstagramPhotoService {

  constructor(
    @InjectModel(InstagramPhoto.name)
    private readonly instagramPhotoModel: Model<InstagramPhoto>,
  ) { }

  async create(createInstagramPhotoDto: InstagramPhoto): Promise<InstagramPhoto> {

    try {

      const response = await axios.get(createInstagramPhotoDto.image, { responseType: 'arraybuffer' });

      const filename = `image_${Date.now()}.jpg`;

      const localFilePath = path.join('images', filename);

      await fs.outputFile(localFilePath, response.data);

      const data = {
        imageUserProfile: createInstagramPhotoDto.imageUserProfile,
        image: `${ENDPOINT_URL}${filename}`,
      }
      const createdInstagramPhoto = new this.instagramPhotoModel(data);
      return createdInstagramPhoto.save();

    } catch (error) {
      console.error('Error downloading image:', error);
      throw error;
    }

  }

  async findAll(): Promise<InstagramPhoto[]> {
    return this.instagramPhotoModel.find().sort({ createdAt: -1 }).exec();
  }

  async findById(id: string): Promise<InstagramPhoto | null> {
    return this.instagramPhotoModel.findById(id).exec();
  }

  async update(id: string, updateInstagramPhotoDto: InstagramPhoto): Promise<InstagramPhoto | null> {
    return this.instagramPhotoModel.findByIdAndUpdate(id, updateInstagramPhotoDto, { new: true }).exec();
  }

  async delete(id: string): Promise<InstagramPhoto | null> {
    const image = await this.instagramPhotoModel.findByIdAndDelete(id).exec();
    await fs.unlink('images/' + image.image.replace(ENDPOINT_URL, ''));
    return image;
  }
}