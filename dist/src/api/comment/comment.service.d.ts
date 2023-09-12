import { Comment } from '@entity/api/comment/comment.entity';
import { IComment, ICreateComment, IUpdateComment } from '@interface/api/comment/comment.interface';
export declare class CommentService {
    private readonly commentRepository;
    create({ postId, userId, ...createCommentData }: ICreateComment): Promise<IComment>;
    findAll(): Promise<Array<IComment>>;
    findOne(commentId: string): Promise<IComment>;
    update(commentId: string, updateCommentData: IUpdateComment): Promise<Comment>;
    remove(commentId: string): Promise<string>;
}
