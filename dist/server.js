"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const ormconfig_1 = require("./ormconfig");
const typeorm_1 = require("typeorm");
const postController_1 = require("./controllers/postController");
(() => __awaiter(this, void 0, void 0, function* () {
    try {
        yield typeorm_1.createConnection(ormconfig_1.default);
    }
    catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }
    const app = new app_1.default([
        new postController_1.default(),
    ]);
    app.listen();
}))();
//# sourceMappingURL=server.js.map