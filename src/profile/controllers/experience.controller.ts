import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Experience } from 'src/entities/experience';
import { ControllerInterface } from 'src/shared/interface/controller.interface';
import { ExperienceRequest } from '../dto/experience.dto';
import { ExperienceService } from '../services/experience.service';

@Controller('experience')
export class ExperienceController implements ControllerInterface {
  constructor(private experienceService: ExperienceService) {}
  index(query: any, req: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(@Body() experienceDto: ExperienceRequest): Promise<Experience> {
    return await this.experienceService.add(experienceDto);
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
