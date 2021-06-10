import { IsEmail, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class ProfileUpdateDto {
  @IsOptional()
  @IsNotEmpty()
  full_name: string;

  @IsOptional()
  @IsNotEmpty()
  cv_name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  phone: string;

  @IsOptional()
  @IsNotEmpty()
  city: string;

  @IsOptional()
  @IsNotEmpty()
  country: string;

  @IsOptional()
  @IsNotEmpty()
  designation: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  user_id: number;

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
