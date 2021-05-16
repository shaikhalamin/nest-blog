import { IsNotEmpty } from 'class-validator';
export class UserRequestDto {
  @IsNotEmpty({ each: true, message: 'First name can not be empty' })
  first_name: string;

  @IsNotEmpty()
  last_name: string;
}
