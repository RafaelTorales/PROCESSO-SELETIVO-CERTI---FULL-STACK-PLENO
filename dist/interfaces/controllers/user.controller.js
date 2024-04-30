"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(req, res) {
        console.log(req.body);
        return res.send("Criando um usuário");
    }
}
exports.default = UserController;
