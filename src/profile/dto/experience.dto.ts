import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
@Exclude()
export class ExperienceDto {
  @Expose()
  @IsNotEmpty()
  company_name: string;

  @Expose()
  @IsNotEmpty()
  company_email: string;

  @Expose()
  @IsNotEmpty()
  company_phone: string;

  @Expose()
  @IsNotEmpty()
  company_location: string;

  @Expose()
  @IsNotEmpty()
  company_city: string;

  @Expose()
  @IsNotEmpty()
  company_country: string;

  @Expose()
  @IsNotEmpty()
  company_website: string;

  @Expose()
  @IsNotEmpty()
  project_website: string;

  @Expose()
  @IsNotEmpty()
  designation: string;

  @Expose()
  @IsNotEmpty()
  job_type: string;

  @Expose()
  @IsNotEmpty()
  date_from: string;

  @Expose()
  @IsNotEmpty()
  date_to: string;

  @Expose()
  @IsNotEmpty()
  job_responsibility: string;

  @Expose()
  @IsNotEmpty()
  work_stack: string;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  profile_id: number;
}

export class ExperienceUpdateRequest {
  @IsOptional()
  @IsNotEmpty()
  company_name: string;

  @IsOptional()
  @IsNotEmpty()
  company_email: string;

  @IsOptional()
  @IsNotEmpty()
  company_phone: string;

  @IsOptional()
  @IsNotEmpty()
  company_location: string;

  @IsOptional()
  @IsNotEmpty()
  company_city: string;

  @IsOptional()
  @IsNotEmpty()
  company_country: string;

  @IsOptional()
  @IsNotEmpty()
  company_website: string;

  @IsOptional()
  @IsNotEmpty()
  project_website: string;

  @IsOptional()
  @IsNotEmpty()
  designation: string;

  @IsOptional()
  @IsNotEmpty()
  job_type: string;

  @IsOptional()
  @IsNotEmpty()
  date_from: string;

  @IsOptional()
  @IsNotEmpty()
  date_to: string;

  @IsOptional()
  @IsNotEmpty()
  job_responsibility: string;

  @IsOptional()
  @IsNotEmpty()
  work_stack: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  profile_id: number;
}
