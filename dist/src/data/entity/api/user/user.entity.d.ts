import { Post } from '../post/post.entity';
import { Comment } from '../comment/comment.entity';
export declare class User {
    userId: number;
    username: string;
    userPassword: string;
    userFullname: string;
    userLastname: string;
    userPhone: string;
    userEmail?: string;
    userState: number;
    userCreatedAt: Date;
    userUpdatedAt?: Date;
    post: Array<Post>;
    comment: Array<Comment>;
}
