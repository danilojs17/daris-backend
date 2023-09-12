import { CreateCommentDto } from './create-comment.dto';
declare const UpdateCommentDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateCommentDto, "userId" | "postId">>>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
    commentState: number;
}
export {};
