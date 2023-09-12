import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
export declare class JwtConfigAsync implements JwtOptionsFactory {
    createJwtOptions(): JwtModuleOptions | Promise<JwtModuleOptions>;
}
