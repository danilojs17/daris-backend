"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const config_1 = require("@nestjs/config");
const env_helper_1 = require("../common/helper/env.helper");
const typeorm_1 = require("@nestjs/typeorm");
const nest_morgan_1 = require("nest-morgan");
const core_1 = require("@nestjs/core");
const typeorm_config_1 = require("./data/database-config/typeorm-sql/typeorm.config");
const catch_interceptor_1 = require("./data/interceptor/catch/catch.interceptor");
const response_interceptor_1 = require("./data/interceptor/response/response.interceptor");
const api_module_1 = require("./api/api.module");
const socket_module_1 = require("./shared/socket/socket.module");
const post_manager_module_1 = require("./core/post-manager/post-manager.module");
const messages_manager_module_1 = require("./core/messages-manager/messages-manager.module");
const envFilePath = (0, env_helper_1.getEnvPath)(`${__dirname}/../common/envs`);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath, isGlobal: true }),
            event_emitter_1.EventEmitterModule.forRoot({ delimiter: '.' }),
            typeorm_1.TypeOrmModule.forRootAsync(typeorm_config_1.TypeOrmConfigAsync),
            nest_morgan_1.MorganModule,
            socket_module_1.SocketModule,
            api_module_1.ApiModule,
            post_manager_module_1.PostManagerModule,
            messages_manager_module_1.MessagesManagerModule,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: catch_interceptor_1.AllExceptionsFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: (0, nest_morgan_1.MorganInterceptor)('dev'),
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_interceptor_1.ResponseInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map