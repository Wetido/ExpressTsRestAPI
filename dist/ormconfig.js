"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: "localhost",
    port: Number("5432"),
    username: "postgres",
    password: "jakub1",
    database: "ts",
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map