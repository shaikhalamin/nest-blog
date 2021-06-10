import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Profile } from 'src/entities/profile';
import { ControllerInterface } from 'src/shared/interface/controller.interface';
import { ProfileRequestDto } from '../dto/profile.request.dto';
import { ProfileResponse } from '../dto/profile.response';
import { ProfileUpdateDto } from '../dto/profile.update.request.dto';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController implements ControllerInterface {
  constructor(private profileService: ProfileService) {}

  @Get('/')
  async index(): Promise<ProfileResponse> {
    return plainToClass(ProfileResponse, await this.profileService.findById(1));
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async create(@Body() profileDto: ProfileRequestDto): Promise<Profile> {
    return await this.profileService.add(profileDto);
  }

  @Get('/:id')
  async show(@Param('id') id: number): Promise<ProfileResponse> {
    return plainToClass(
      ProfileResponse,
      await this.profileService.findById(id),
    );
  }

  @Put('/:id')
  async edit(
    @Param('id') id: number,
    @Body() profileUpdateDto: ProfileUpdateDto,
  ): Promise<ProfileResponse> {
    return plainToClass(
      ProfileResponse,
      await this.profileService.update(id, profileUpdateDto),
    );
  }
  destroy(id: number, req?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
