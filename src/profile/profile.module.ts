import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './controllers/profile.controller';
import { ProfileRepository } from './repository/profile.repository';
import { ProfileService } from './services/profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileRepository])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
