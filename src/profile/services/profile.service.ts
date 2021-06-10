import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from 'src/entities/profile';
import { ServiceInterface } from 'src/shared/interface/service.interface';
import { UserService } from 'src/user/user.service';
import { ProfileRequestDto } from '../dto/profile.request.dto';
import { ProfileUpdateDto } from '../dto/profile.update.request.dto';
import { ProfileRepository } from '../repository/profile.repository';

@Injectable()
export class ProfileService implements ServiceInterface {
  constructor(
    private profileRepository: ProfileRepository,
    private userService: UserService,
  ) {}

  async add(profileDto: ProfileRequestDto): Promise<Profile> {
    const user = await this.userService.findById(profileDto.user_id);
    return await this.profileRepository.addProfile(profileDto, user);
  }

  async findById(id: number): Promise<Profile> {
    const profile = await this.profileRepository.findById(id);
    if (!profile) {
      throw new NotFoundException('Profile not found !');
    }
    return profile;
  }

  async update(
    id: number,
    profileUpdateDto: ProfileUpdateDto,
  ): Promise<Profile> {
    const profile = await this.findById(id);
    return await this.profileRepository.updateProfile(
      profile,
      profileUpdateDto,
    );
  }
  delete(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
