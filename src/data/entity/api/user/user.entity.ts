import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Post } from '../post/post.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  userId: number;

  @Column({ type: 'varchar', length: 32, nullable: false, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  userPassword: string;

  @Column({ type: 'varchar', length: 32, nullable: false })
  userFullname: string;

  @Column({ type: 'varchar', length: 32, nullable: false })
  userLastname: string;

  @Column({ type: 'varchar', length: 12, nullable: false })
  userPhone: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  userEmail?: string;

  @Column({ type: 'tinyint', nullable: false })
  userState: number;

  @CreateDateColumn({ type: 'timestamp' })
  userCreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  userUpdatedAt?: Date;

  @OneToMany(() => Post, (post) => post.user)
  post: Array<Post>;

  @OneToMany(() => Comment, (comment) => comment.user)
  comment: Array<Comment>;
}
