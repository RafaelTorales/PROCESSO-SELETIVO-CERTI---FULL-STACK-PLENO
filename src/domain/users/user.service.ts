import User from "./entities/user";

export default class UserService {
  public async create(userDTO: User) {
    const user: User = new User();
    user.name = userDTO.name;
    await user.save();
    return user;
  }
}
