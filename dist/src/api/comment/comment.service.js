"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("../../data/entity/api/comment/comment.entity");
let CommentService = class CommentService {
    async create(_a) {
        var { postId, userId } = _a, createCommentData = __rest(_a, ["postId", "userId"]);
        const { commentId } = await this.commentRepository.save(Object.assign(Object.assign({}, createCommentData), { commentCreatedAt: new Date(), post: { postId }, user: { userId } }));
        return await this.commentRepository.findOneBy({ commentId });
    }
    async findAll() {
        return await this.commentRepository.find();
    }
    async findOne(commentId) {
        return await this.commentRepository.findOneBy({ commentId });
    }
    async update(commentId, updateCommentData) {
        const updateResult = await this.commentRepository.update(commentId, Object.assign(Object.assign({}, updateCommentData), { commentUpdatedAt: new Date() }));
        if (!updateResult.affected)
            throw new typeorm_2.EntityNotFoundError(comment_entity_1.Comment, commentId);
        return await this.commentRepository.findOneBy({ commentId });
    }
    async remove(commentId) {
        const deleteResult = await this.commentRepository.delete(commentId);
        if (!deleteResult.affected)
            throw new typeorm_2.EntityNotFoundError(comment_entity_1.Comment, commentId);
        return commentId;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(comment_entity_1.Comment),
    __metadata("design:type", typeorm_2.Repository)
], CommentService.prototype, "commentRepository", void 0);
CommentService = __decorate([
    (0, common_1.Injectable)()
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map