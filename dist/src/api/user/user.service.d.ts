import { Repository } from 'typeorm';
import { User } from '@entity/api/user/user.entity';
import { ICreateUser, IUser, IUpdateUser, IUserCondition } from '@interface/api/user/user.interface';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserData: ICreateUser): Promise<IUser>;
    findAll(): Promise<Array<IUser>>;
    findOne(userId: number): Promise<IUser>;
    update(userId: number, updateUserData: IUpdateUser): Promise<IUser>;
    remove(userId: number): Promise<number>;
    findWithCondition(userCondition: IUserCondition): Promise<IUser>;
}
