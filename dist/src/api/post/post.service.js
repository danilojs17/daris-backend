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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("../../data/entity/api/post/post.entity");
const typeorm_2 = require("typeorm");
let PostService = class PostService {
    async create(_a) {
        var { userId } = _a, createPostData = __rest(_a, ["userId"]);
        const { postId } = await this.postRepository.save(Object.assign(Object.assign({}, createPostData), { user: { userId }, postCreatedAt: new Date() }));
        return await this.postRepository.findOneBy({ postId });
    }
    async findAll() {
        return await this.postRepository.find();
    }
    async findOne(postId) {
        return await this.postRepository.findOneBy({ postId });
    }
    async update(postId, updatePostData) {
        const updateResult = await this.postRepository.update(postId, Object.assign(Object.assign({}, updatePostData), { postUpdatedAt: new Date() }));
        if (!updateResult.affected)
            throw new typeorm_2.EntityNotFoundError(post_entity_1.Post, postId);
        return await this.postRepository.findOneBy({ postId });
    }
    async remove(postId) {
        const deleteResult = await this.postRepository.delete(postId);
        if (!deleteResult.affected)
            throw new typeorm_2.EntityNotFoundError(post_entity_1.Post, postId);
        return postId;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(post_entity_1.Post),
    __metadata("design:type", typeorm_2.Repository)
], PostService.prototype, "postRepository", void 0);
PostService = __decorate([
    (0, common_1.Injectable)()
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map