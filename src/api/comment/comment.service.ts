import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteResult,
  EntityNotFoundError,
  Repository,
  UpdateResult,
} from 'typeorm';
import { Comment } from '@entity/api/comment/comment.entity';
import {
  IComment,
  ICreateComment,
  IUpdateComment,
} from '@interface/api/comment/comment.interface';

@Injectable()
export class CommentService {
  @InjectRepository(Comment)
  private readonly commentRepository: Repository<Comment>;

  async create({
    postId,
    userId,
    ...createCommentData
  }: ICreateComment): Promise<IComment> {
    const { commentId }: IComment = await this.commentRepository.save({
      ...createCommentData,
      commentCreatedAt: new Date(),
      post: { postId },
      user: { userId },
    });

    return await this.commentRepository.findOneBy({ commentId });
  }

  async findAll(): Promise<Array<IComment>> {
    return await this.commentRepository.find();
  }

  async findOne(commentId: string): Promise<IComment> {
    return await this.commentRepository.findOneBy({ commentId });
  }

  async update(commentId: string, updateCommentData: IUpdateComment) {
    const updateResult: UpdateResult = await this.commentRepository.update(
      commentId,
      {
        ...updateCommentData,
        commentUpdatedAt: new Date(),
      },
    );

    if (!updateResult.affected)
      throw new EntityNotFoundError(Comment, commentId);

    return await this.commentRepository.findOneBy({ commentId });
  }

  async remove(commentId: string): Promise<string> {
    const deleteResult: DeleteResult = await this.commentRepository.delete(
      commentId,
    );

    if (!deleteResult.affected)
      throw new EntityNotFoundError(Comment, commentId);

    return commentId;
  }
}
