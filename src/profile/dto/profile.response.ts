import { IsNotEmpty } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { UserResponse } from 'src/user/dto/user.response';

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
  @Type(() => UserResponse)
  user: UserResponse;
}
