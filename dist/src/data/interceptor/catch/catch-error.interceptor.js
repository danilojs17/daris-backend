"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const CatchErrorsList = {
    BadRequestException: (exception) => {
        const errorMessage = exception.getResponse();
        return {
            status: common_1.HttpStatus.BAD_REQUEST,
            message: typeof errorMessage.message === 'object'
                ? errorMessage.message.join(', ')
                : errorMessage.message,
            code: exception.name,
        };
    },
    HttpException: (exception) => {
        return {
            status: exception.getStatus(),
            message: exception.message,
            code: exception.getStatus().toString(),
        };
    },
    QueryFailedError: (exception) => {
        const rawMessage = exception.message;
        return {
            status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            message: rawMessage
                .replace(/for key \'*.*\'/, '')
                .replace(/\a parent row: a foreign key constraint fails *.*/, 'because have other associated records'),
            code: exception.name,
        };
    },
    EntityNotFoundError: (exception) => {
        return {
            status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            message: exception.message,
            code: exception.name,
        };
    },
    CannotCreateEntityIdMapError: (exception) => {
        return {
            status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            message: exception.message,
            code: exception.name,
        };
    },
    UpdateValuesMissingError: (exception) => {
        return {
            status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
            message: exception.message,
            code: exception.name,
        };
    },
    UnauthorizedException: (exception) => {
        return {
            status: common_1.HttpStatus.UNAUTHORIZED,
            message: 'Your session is closed, please login',
            code: exception.name,
        };
    },
    Error: (exception) => {
        console.log('exception', exception);
        return {
            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
            code: 'HTTP_ERROR',
        };
    },
    NotFoundException: (exception) => {
        return {
            status: common_1.HttpStatus.NOT_FOUND,
            message: exception.message,
            code: exception.name,
        };
    },
    ForbiddenException: (exception) => {
        return {
            status: common_1.HttpStatus.FORBIDDEN,
            message: exception.message,
            code: exception.name,
        };
    },
    EntityPropertyNotFoundError: (exception) => {
        return {
            status: common_1.HttpStatus.BAD_REQUEST,
            message: exception.message,
            code: exception.name,
        };
    },
    NotAcceptableException: (exception) => {
        return {
            status: common_1.HttpStatus.NOT_ACCEPTABLE,
            message: exception.message,
            code: exception.name,
        };
    },
};
exports.default = CatchErrorsList;
//# sourceMappingURL=catch-error.interceptor.js.map