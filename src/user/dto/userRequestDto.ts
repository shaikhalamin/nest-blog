import { IsNotEmpty } from 'class-validator';
export class UserRequestDto {
  @IsNotEmpty({ each: true, message: 'First name can not be empty' })
  firstName: string;
  @IsNotEmpty()
  lastName: string;
}
