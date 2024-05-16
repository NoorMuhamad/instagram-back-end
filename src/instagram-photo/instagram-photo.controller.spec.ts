import { Test, TestingModule } from '@nestjs/testing';
import { InstagramPhotoController } from './instagram-photo.controller';

describe('InstagramPhotoController', () => {
  let controller: InstagramPhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstagramPhotoController],
    }).compile();

    controller = module.get<InstagramPhotoController>(InstagramPhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
