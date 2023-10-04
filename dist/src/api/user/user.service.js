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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../data/entity/api/user/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserData) {
        const { userId } = await this.userRepository.save(Object.assign(Object.assign({}, createUserData), { userCreatedAt: new Date() }));
        return await this.userRepository.findOneBy({ userId });
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(userId) {
        return await this.userRepository.findOneBy({ userId });
    }
    async update(userId, updateUserData) {
        const updateResult = await this.userRepository.update(userId, Object.assign(Object.assign({}, updateUserData), { userUpdatedAt: new Date() }));
        if (!updateResult.affected)
            throw new typeorm_2.EntityNotFoundError(user_entity_1.User, userId);
        return await this.userRepository.findOneBy({ userId });
    }
    async remove(userId) {
        const deleteResult = await this.userRepository.delete(userId);
        if (!deleteResult.affected)
            throw new typeorm_2.EntityNotFoundError(user_entity_1.User, userId);
        return userId;
    }
    async findWithCondition(userCondition) {
        return await this.userRepository.findOne({
            where: Object.assign(Object.assign({}, userCondition), { userState: 1 }),
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map