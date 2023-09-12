import { User } from '../user/user.entity';
import { Post } from '../post/post.entity';
export declare class Comment {
    commentId: string;
    commentDescription?: string;
    commentPhoto?: string;
    commentState: number;
    commentCreatedAt: Date;
    commentUpdatedAt: Date;
    user: User;
    post: Post;
}
