import { IUser } from '../user/user.interface';

export interface IPost {
  postId: string;
  postDescription?: string;
  postPhoto?: string;
  postState: number;
  postCreatedAt: Date;
  postUpdatedAt: Date;
  user: IUser;
}

export interface ICreatePost
  extends Pick<IPost, 'postDescription' | 'postPhoto'> {
  userId: number;
}

export type IUpdateUser = Omit<ICreatePost, 'userId'>;
