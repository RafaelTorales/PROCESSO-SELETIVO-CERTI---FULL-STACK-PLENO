import { Request, Response } from "express";
import UserService from "../../domain/users/user.service";

export default class UserController {
  constructor(private userService: UserService) {}

  async create(req: Request, res: Response) {
    console.log(req.body);

    return res.send("Criando um usuário");
  }
}
