import { Injectable } from '@nestjs/common';
import { Profile } from 'src/entities/profile';
import { ServiceInterface } from 'src/shared/interface/service.interface';
import { ProfileRequestDto } from '../dto/profile.request.dto';
import { ProfileRepository } from '../repository/profile.repository';

@Injectable()
export class ProfileService implements ServiceInterface {
  constructor(private profileRepository: ProfileRepository) {}
  async add(profileDto: ProfileRequestDto): Promise<Profile> {
    return await this.profileRepository.addProfile(profileDto);
  }
  findById(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  update(id: number, body: any, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
