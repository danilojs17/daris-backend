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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const catch_error_interceptor_1 = require("./catch-error.interceptor");
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
        this.logger = new common_1.Logger('GlobalCatch');
    }
    catch(exception, host) {
        const exeptionName = exception.constructor.name;
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const errorCached = catch_error_interceptor_1.default[exeptionName];
        let responseBody = {
            message: exception.message.message,
            code: 'HttpException',
            status: 500,
        };
        if (errorCached) {
            responseBody = errorCached(exception);
            this.logger.error(`Error ${exception} ${responseBody.message}`);
        }
        if (!errorCached) {
            const message = exception.message;
            if (message)
                responseBody.message = message;
            this.logger.error(`Error not handled, description ${typeof exception === 'object' ? JSON.stringify(exception) : exception}, message ${message}`);
        }
        responseBody.path = httpAdapter.getRequestUrl(ctx.getRequest());
        responseBody.status =
            exception instanceof common_1.HttpException
                ? exception.getStatus()
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        httpAdapter.reply(response, responseBody, responseBody.status);
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=catch.interceptor.js.map