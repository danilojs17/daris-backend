import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  postId: string;

  @Column({ type: 'text', nullable: true })
  postDescription?: string;

  @Column({ type: 'text', nullable: true })
  postPhoto?: string;

  @Column({ type: 'int', nullable: false, default: 1 })
  postState: number;

  @CreateDateColumn({ type: 'timestamp' })
  postCreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  postUpdatedAt: Date;

  @ManyToOne(() => User, (user) => user.post)
  user: User;

  @OneToMany(() => Comment, (comment) => comment)
  comment: Array<Comment>;
}
