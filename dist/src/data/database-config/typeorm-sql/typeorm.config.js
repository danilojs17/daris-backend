"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfigAsync = void 0;
exports.TypeOrmConfigAsync = {
    useFactory: async () => {
        return {
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            port: +process.env.DATABASE_PORT,
            database: process.env.DATABASE_NAME,
            entities: ['dist/**/*.entity.{ts,js}'],
            migrations: ['dist/migrations/*.{ts,js}'],
            charset: 'utf8',
            migrationsTableName: 'typeorm_migrations',
            logger: 'file',
            synchronize: process.env.DATABASE_SYNC === 'true' ? true : false,
        };
    },
};
//# sourceMappingURL=typeorm.config.js.map