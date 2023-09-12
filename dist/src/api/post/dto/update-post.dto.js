"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_post_dto_1 = require("./create-post.dto");
class UpdatePostDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(create_post_dto_1.CreatePostDto, ['userId'])) {
}
exports.UpdatePostDto = UpdatePostDto;
//# sourceMappingURL=update-post.dto.js.map