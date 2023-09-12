import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsEmail,
  MaxLength,
  IsPhoneNumber,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  userPassword: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  userFullname: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  userLastname: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  userPhone: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(200)
  userEmail?: string;
}
