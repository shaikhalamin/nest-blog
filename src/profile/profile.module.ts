import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { ProfileController } from './controllers/profile.controller';
import { ProfileRepository } from './repository/profile.repository';
import { ProfileService } from './services/profile.service';
import { ExperienceService } from './services/experience.service';
import { ExperienceController } from './controllers/experience.controller';
import { ExperienceRepository } from './repository/experience.repository';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([ProfileRepository, ExperienceRepository]),
  ],
  controllers: [ProfileController, ExperienceController],
  providers: [ProfileService, ExperienceService],
})
export class ProfileModule {}
