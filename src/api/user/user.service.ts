import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteResult,
  EntityNotFoundError,
  Repository,
  UpdateResult,
} from 'typeorm';
import { User } from '@entity/api/user/user.entity';
import {
  ICreateUser,
  IUser,
  IUpdateUser,
  IUserCondition,
} from '@interface/api/user/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserData: ICreateUser): Promise<IUser> {
    const { userId }: IUser = await this.userRepository.save({
      ...createUserData,
      userCreatedAt: new Date(),
    });

    return await this.userRepository.findOneBy({ userId });
  }

  async findAll(): Promise<Array<IUser>> {
    return await this.userRepository.find();
  }

  async findOne(userId: number): Promise<IUser> {
    return await this.userRepository.findOneBy({ userId });
  }

  async update(userId: number, updateUserData: IUpdateUser): Promise<IUser> {
    const updateResult: UpdateResult = await this.userRepository.update(
      userId,
      {
        ...updateUserData,
        userUpdatedAt: new Date(),
      },
    );

    if (!updateResult.affected) throw new EntityNotFoundError(User, userId);
    return await this.userRepository.findOneBy({ userId });
  }

  async remove(userId: number): Promise<number> {
    const deleteResult: DeleteResult = await this.userRepository.delete(userId);

    if (!deleteResult.affected) throw new EntityNotFoundError(User, userId);
    return userId;
  }

  async findWithCondition(userCondition: IUserCondition): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { ...userCondition, userState: 1 },
    });
  }
}
