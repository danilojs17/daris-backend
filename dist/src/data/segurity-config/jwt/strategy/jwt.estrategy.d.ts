type PayloadToken = {
    sub: number;
    username: string;
};
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate({ sub, username }: PayloadToken): Promise<{
        userId: number;
        username: string;
    }>;
}
export {};
