import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateCommentDto extends PartialType(
  OmitType(CreateCommentDto, ['postId', 'userId']),
) {
  @IsOptional()
  @IsNumber()
  commentState: number;
}
