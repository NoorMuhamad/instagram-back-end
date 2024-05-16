import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { InstagramPhotoService } from './instagram-photo.service';
import { InstagramPhoto } from './schemas/instagram-photo.schema';

@Controller('instagram-photos')

export class InstagramPhotoController {
  constructor(
    @Inject(InstagramPhotoService)
    private readonly instagramPhotoService: InstagramPhotoService,
  ) { }

  @Get()
  async findAll(): Promise<InstagramPhoto[]> {
    return await this.instagramPhotoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<InstagramPhoto | null> {
    return await this.instagramPhotoService.findById(id);
  }

  @Post()
  async create(@Body() instagramPhoto: InstagramPhoto): Promise<InstagramPhoto> {

    // await fetch(instagramPhoto.image)
    //   .then(response => response.blob())
    //   .then(blob => {
    //     console.log('=-=-=-=-=-=-=-=-=-=-');
        
    //       // Create a Blob object representing the image data

    //       const blobUrl = URL.createObjectURL(blob);

    //       // Create an anchor element

    //   })
    //   .catch(error => {
    //       console.error('Error fetching image:', error);
    //   });

    return this.instagramPhotoService.create(instagramPhoto);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() instagramPhoto: InstagramPhoto): Promise<InstagramPhoto> {
    return this.instagramPhotoService.update(id, instagramPhoto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<InstagramPhoto> {
    return this.instagramPhotoService.delete(id);
  }

}
