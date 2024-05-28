import express from "express";
import UserController from "./controllers/user.controller";
import UserService from "../domain/users/user.service";

export function setupRouter(): express.Router {
  const router = express.Router();
  const userService = new UserService();
  const userController = new UserController(userService);

  router.use(express.json());

  router.route("/").get((req, res) => res.status(200).json({ response: "OK" }));

  // User
  router.post(`/users`, (req, res) => userController.create(req, res));

  router.use((req, res) => {
    return res.status(404).json({ error: "Failed! Route not found!" });
  });

  return router;
}

export default setupRouter;
