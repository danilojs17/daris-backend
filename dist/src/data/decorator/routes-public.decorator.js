"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = void 0;
const common_1 = require("@nestjs/common");
const definitions_1 = require("../constant/definitions/definitions");
const Public = () => (0, common_1.SetMetadata)(definitions_1.IS_PUBLIC_KEY, true);
exports.Public = Public;
//# sourceMappingURL=routes-public.decorator.js.map