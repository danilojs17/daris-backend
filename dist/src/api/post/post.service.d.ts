import { ICreatePost, IPost, IUpdateUser } from '@interface/api/post/post.interface';
export declare class PostService {
    private readonly postRepository;
    create({ userId, ...createPostData }: ICreatePost): Promise<IPost>;
    findAll(): Promise<IPost[]>;
    findOne(postId: string): Promise<IPost>;
    update(postId: string, updatePostData: IUpdateUser): Promise<IPost>;
    remove(postId: string): Promise<string>;
}
