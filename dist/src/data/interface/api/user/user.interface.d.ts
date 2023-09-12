import { IPost } from '../post/post.interface';
export interface IUser {
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
    post?: Array<IPost>;
}
export type ICreateUser = Omit<IUser, 'userId' | 'userState' | 'userCreatedAt' | 'userUpdatedAt' | 'post'>;
export type IUpdateUser = Partial<ICreateUser>;
export interface IUserCondition {
    userId?: number;
    username?: string;
}
