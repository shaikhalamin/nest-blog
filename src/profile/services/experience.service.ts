import { Injectable } from '@nestjs/common';
import { Experience } from 'src/entities/experience';
import { ServiceInterface } from 'src/shared/interface/service.interface';
import { ExperienceRequest } from '../dto/experience.dto';
import { ExperienceRepository } from '../repository/experience.repository';
import { ProfileService } from './profile.service';

@Injectable()
export class ExperienceService implements ServiceInterface {
  constructor(
    private experienceRepository: ExperienceRepository,
    private profileService: ProfileService,
  ) {}

  async add(experienceRequestDto: ExperienceRequest): Promise<Experience> {
    const profile = await this.profileService.findById(
      experienceRequestDto.profile_id,
    );
    return await this.experienceRepository.addExperience(
      experienceRequestDto,
      profile,
    );
  }
  async findById(id: number): Promise<any> {
    return await this.experienceRepository.findById(id);
  }
  update(id: number, body: any, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
