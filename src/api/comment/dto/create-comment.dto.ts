import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateCommentDto {
  @IsOptional()
  @IsString()
  commentDescription: string;

  @IsOptional()
  @IsString()
  commentPhoto: string;

  @IsUUID()
  postId: string;

  @IsNumber()
  @IsPositive()
  userId: number;
}
