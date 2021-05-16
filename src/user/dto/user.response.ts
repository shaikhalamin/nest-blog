import { IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponse {
  @Expose()
  @IsNotEmpty()
  id: number;

  @Expose()
  @IsNotEmpty()
  first_name: string;

  @Expose()
  @IsNotEmpty()
  last_name: string;

  @Expose()
  @IsNotEmpty()
  is_active: string;
}
