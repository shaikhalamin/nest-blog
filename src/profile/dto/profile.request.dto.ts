import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

@Exclude()
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
}
