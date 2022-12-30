declare const _default: {
    dbConnection: string;
    env: string;
    host: string;
    port: string | number;
    session: {
        secret: string;
        saveUninitialized: boolean;
        resave: boolean;
        cookie: {
            maxAge: number;
        };
    };
    jwtKey: string;
};
export default _default;
