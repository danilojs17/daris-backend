import {
  IsOptional,
  IsNumber,
  IsNotEmpty,
  IsString,
  IsPositive,
  MaxLength,
} from 'class-validator';

export class CreatePostDto {
  @IsOptional()
  @IsString()
  @MaxLength(200)
  postDescription: string;

  @IsOptional()
  @IsString()
  postPhoto: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  userId: number;
}
