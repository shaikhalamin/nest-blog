import { IsInt, IsNotEmpty } from 'class-validator';

export class ExperienceRequest {
  @IsNotEmpty()
  company_name: string;

  @IsNotEmpty()
  company_email: string;

  @IsNotEmpty()
  company_phone: string;

  @IsNotEmpty()
  company_location: string;

  @IsNotEmpty()
  company_city: string;

  @IsNotEmpty()
  company_country: string;

  @IsNotEmpty()
  company_website: string;

  @IsNotEmpty()
  project_website: string;

  @IsNotEmpty()
  designation: string;

  @IsNotEmpty()
  job_type: string;

  @IsNotEmpty()
  date_from: string;

  @IsNotEmpty()
  date_to: string;

  @IsNotEmpty()
  job_responsibility: string;

  @IsNotEmpty()
  work_stack: string;

  @IsNotEmpty()
  @IsInt()
  profile_id: number;
}
