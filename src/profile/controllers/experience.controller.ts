import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Experience } from 'src/entities/experience';
import { ControllerInterface } from 'src/shared/interface/controller.interface';
import { ExperienceDto, ExperienceUpdateRequest } from '../dto/experience.dto';
import { ExperienceService } from '../services/experience.service';

@Controller('experience')
export class ExperienceController implements ControllerInterface {
  constructor(private experienceService: ExperienceService) {}
  index(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  @Post('/')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async create(@Body() experienceDto: ExperienceDto): Promise<ExperienceDto> {
    return plainToClass(
      ExperienceDto,
      await this.experienceService.add(experienceDto),
    );
  }
  show(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async edit(
    @Param('id') id: number,
    @Body() experienceUpdateDto: ExperienceUpdateRequest,
  ): Promise<Experience> {
    return await this.experienceService.update(id, experienceUpdateDto);
  }
  destroy(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
