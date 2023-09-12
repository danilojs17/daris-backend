import { IUser } from '../user/user.interface';
export type IJwtToken = Omit<IUser, 'userPassword' | 'userState' | 'userCreatedAt' | 'userUpdatedAt' | 'userEmail' | 'userPhone'>;
