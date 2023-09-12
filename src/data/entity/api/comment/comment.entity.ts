import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Post } from '../post/post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  commentId: string;

  @Column({ type: 'text', nullable: true })
  commentDescription?: string;

  @Column({ type: 'text', nullable: true })
  commentPhoto?: string;

  @Column({ type: 'int', nullable: false, default: 1 })
  commentState: number;

  @CreateDateColumn({ type: 'timestamp' })
  commentCreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  commentUpdatedAt: Date;

  @ManyToOne(() => User, (user) => user.comment)
  user: User;

  @ManyToOne(() => Post, (post) => post.comment)
  post: Post;
}
