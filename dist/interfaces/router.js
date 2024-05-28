"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./controllers/user.controller"));
const user_service_1 = __importDefault(require("../domain/users/user.service"));
function setupRouter() {
    const router = express_1.default.Router();
    const userService = new user_service_1.default();
    const userController = new user_controller_1.default(userService);
    router.use(express_1.default.json());
    router.route("/").get((req, res) => res.status(200).json({ response: "OK" }));
    // User
    router.post(`/users`, (req, res) => userController.create(req, res));
    router.use((req, res) => {
        return res.status(404).json({ error: "Failed! Route not found!" });
    });
    return router;
}
exports.setupRouter = setupRouter;
exports.default = setupRouter;
