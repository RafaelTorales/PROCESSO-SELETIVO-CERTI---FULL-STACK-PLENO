import { Request, Response } from "express";
import UserService from "../../domain/users/user.service";

export default class UserController {
  constructor(private userService: UserService) {}

  async create(req: Request, res: Response) {
    const user = await this.userService.create(req.body)
    return res.status(201).json(user);
  }
}
