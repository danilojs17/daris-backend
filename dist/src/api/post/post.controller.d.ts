import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<import("../../data/interface/api/post/post.interface").IPost>;
    findAll(): Promise<import("../../data/interface/api/post/post.interface").IPost[]>;
    findOne(id: string): Promise<import("../../data/interface/api/post/post.interface").IPost>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("../../data/interface/api/post/post.interface").IPost>;
    remove(id: string): Promise<string>;
}
