import { IPost } from '../post/post.interface';
import { IUser } from '../user/user.interface';

export interface IComment {
  commentId: string;
  commentDescription?: string;
  commentPhoto?: string;
  commentState: number;
  commentCreatedAt: Date;
  commentUpdatedAt: Date;
  user: IUser;
  post: IPost;
}

export interface ICreateComment
  extends Pick<IComment, 'commentDescription' | 'commentPhoto'> {
  postId: string;
  userId: number;
}

export interface IUpdateComment
  extends Pick<ICreateComment, 'commentDescription' | 'commentPhoto'> {
  commentState?: number;
}
