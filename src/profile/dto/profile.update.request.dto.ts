import { IsNotEmpty, IsOptional } from 'class-validator';
import { ProfileRequestDto } from './profile.request.dto';

export class ProfileUpdateDto extends ProfileRequestDto {
  @IsOptional()
  @IsNotEmpty()
  emergency_contact: string;

  @IsOptional()
  @IsNotEmpty()
  postal_code: string;

  @IsOptional()
  @IsNotEmpty()
  cityzenship: string;

  @IsOptional()
  @IsNotEmpty()
  maritial_status: string;

  @IsOptional()
  @IsNotEmpty()
  specialized_at: string;

  @IsOptional()
  @IsNotEmpty()
  about_info: string;

  @IsOptional()
  @IsNotEmpty()
  profile_title: string;

  @IsOptional()
  @IsNotEmpty()
  profile_meta: string;

  @IsOptional()
  @IsNotEmpty()
  date_of_birth: string;

  @IsOptional()
  @IsNotEmpty()
  profile_meta_descriptions: string;

  @IsOptional()
  @IsNotEmpty()
  linkedin_profile_path: string;

  @IsOptional()
  @IsNotEmpty()
  github_profile_path: string;

  @IsOptional()
  @IsNotEmpty()
  twitter_profile_path: string;

  //   picture_cover;
  //   picture_about;
  //   cv_file;
  //   smo_image;
}
