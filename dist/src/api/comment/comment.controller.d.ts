import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<import("../../data/interface/api/comment/comment.interface").IComment>;
    findAll(): Promise<import("../../data/interface/api/comment/comment.interface").IComment[]>;
    findOne(id: string): Promise<import("../../data/interface/api/comment/comment.interface").IComment>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<import("../../data/entity/api/comment/comment.entity").Comment>;
    remove(id: string): Promise<string>;
}
