import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';
export declare class Post {
    postId: string;
    postDescription?: string;
    postPhoto?: string;
    postState: number;
    postCreatedAt: Date;
    postUpdatedAt: Date;
    user: User;
    comment: Array<Comment>;
}
