import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../../data/interface/api/user/user.interface").IUser>;
    findAll(): Promise<import("../../data/interface/api/user/user.interface").IUser[]>;
    findOne(id: string): Promise<import("../../data/interface/api/user/user.interface").IUser>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../../data/interface/api/user/user.interface").IUser>;
    remove(id: string): Promise<number>;
}
