import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '@entity/api/post/post.entity';
import {
  DeleteResult,
  EntityNotFoundError,
  Repository,
  UpdateResult,
} from 'typeorm';
import {
  ICreatePost,
  IPost,
  IUpdateUser,
} from '@interface/api/post/post.interface';

@Injectable()
export class PostService {
  @InjectRepository(Post)
  private readonly postRepository: Repository<Post>;

  async create({ userId, ...createPostData }: ICreatePost): Promise<IPost> {
    const { postId }: IPost = await this.postRepository.save({
      ...createPostData,
      user: { userId },
      postCreatedAt: new Date(),
    });

    return await this.postRepository.findOneBy({ postId });
  }

  async findAll(): Promise<IPost[]> {
    return await this.postRepository.find();
  }

  async findOne(postId: string): Promise<IPost> {
    return await this.postRepository.findOneBy({ postId });
  }

  async update(postId: string, updatePostData: IUpdateUser): Promise<IPost> {
    const updateResult: UpdateResult = await this.postRepository.update(
      postId,
      {
        ...updatePostData,
        postUpdatedAt: new Date(),
      },
    );

    if (!updateResult.affected) throw new EntityNotFoundError(Post, postId);
    return await this.postRepository.findOneBy({ postId });
  }

  async remove(postId: string): Promise<string> {
    const deleteResult: DeleteResult = await this.postRepository.delete(postId);

    if (!deleteResult.affected) throw new EntityNotFoundError(Post, postId);
    return postId;
  }
}
