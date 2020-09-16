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
const express = require("express");
const typeorm_1 = require("typeorm");
const PostNotFoundException_1 = require("../exceptions/PostNotFoundException");
const validation_middleware_1 = require("../middleware/validation.middleware");
const post_dto_1 = require("../model/post.dto");
const post_1 = require("../model/post");
class PostController {
    constructor() {
        this.path = '/posts';
        this.router = express.Router();
        this.postRepository = typeorm_1.getRepository(post_1.default);
        this.createPost = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const postData = request.body;
            const newPost = this.postRepository.create(postData);
            yield this.postRepository.save(newPost);
            response.send(newPost);
        });
        this.getAllPosts = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postRepository.find();
            response.send(posts);
        });
        this.getPostById = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const post = yield this.postRepository.findOne(id);
            if (post) {
                response.send(post);
            }
            else {
                next(new PostNotFoundException_1.default(id));
            }
        });
        this.modifyPost = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const postData = request.body;
            yield this.postRepository.update(id, postData);
            const updatedPost = yield this.postRepository.findOne(id);
            if (updatedPost) {
                response.send(updatedPost);
            }
            else {
                next(new PostNotFoundException_1.default(id));
            }
        });
        this.deletePost = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const deleteResponse = yield this.postRepository.delete(id);
            if (deleteResponse.raw[1]) {
                response.sendStatus(200);
            }
            else {
                next(new PostNotFoundException_1.default(id));
            }
        });
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(this.path, validation_middleware_1.default(post_dto_1.default), this.createPost);
        this.router.get(this.path, this.getAllPosts);
        this.router.get(`${this.path}/:id`, this.getPostById);
        this.router.patch(`${this.path}/:id`, validation_middleware_1.default(post_dto_1.default, true), this.modifyPost);
        this.router.delete(`${this.path}/:id`, this.deletePost);
    }
}
exports.default = PostController;
//# sourceMappingURL=postController.js.map