import { IsEmail, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class ProfileRequestDto {
  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  cv_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  designation: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  user_id: number;
}
