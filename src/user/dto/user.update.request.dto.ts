import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UserUpdateRequestDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  password: string;
}
