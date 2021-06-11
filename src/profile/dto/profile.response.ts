import { IsNotEmpty } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { UserResponse } from 'src/user/dto/user.response';
import { ExperienceDto } from './experience.dto';

@Exclude()
export class ProfileResponse {
  @Expose()
  @IsNotEmpty()
  id: number;

  @Expose()
  @IsNotEmpty()
  full_name: string;

  @Expose()
  @IsNotEmpty()
  cv_name: string;

  @Expose()
  @IsNotEmpty()
  email: string;

  @Expose()
  @IsNotEmpty()
  phone: string;

  @Expose()
  @IsNotEmpty()
  city: string;

  @Expose()
  @IsNotEmpty()
  country: string;

  @Expose()
  @IsNotEmpty()
  designation: string;

  @Expose()
  emergency_contact: string;

  @Expose()
  postal_code: string;

  @Expose()
  cityzenship: string;

  @Expose()
  maritial_status: string;

  @Expose()
  specialized_at: string;

  @Expose()
  about_info: string;

  @Expose()
  profile_title: string;

  @Expose()
  profile_meta: string;

  @Expose()
  date_of_birth: string;

  @Expose()
  profile_meta_descriptions: string;

  @Expose()
  linkedin_profile_path: string;

  @Expose()
  github_profile_path: string;

  @Expose()
  twitter_profile_path: string;

  @Expose()
  @Type(() => UserResponse)
  user: UserResponse;

  @Expose()
  @Type(() => ExperienceDto)
  experiences: ExperienceDto;
}
