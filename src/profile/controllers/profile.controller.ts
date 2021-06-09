import { Body, Controller, Post } from '@nestjs/common';
import { Profile } from 'src/entities/profile';
import { ControllerInterface } from 'src/shared/interface/controller.interface';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController implements ControllerInterface {
  constructor(private profileService: ProfileService) {}
  index(query: any, req: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  @Post('/')
  async create(@Body() profileDto: any): Promise<Profile> {
    return await this.profileService.add(profileDto);
  }
  show(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  edit(id: number, body?: any, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  destroy(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
