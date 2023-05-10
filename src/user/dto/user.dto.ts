import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firtname: string;
  @IsNotEmpty()
  lastname: string;
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  coordinate: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  id: string;
  firtname: string;
  lastname: string;
  age: number;
}
