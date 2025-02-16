import { hashPassword } from "../helpers/bcrypt.js";
import UserRepository from "../repository/user.repository.js";
import RoleService from "./role.service.js";

class AuthService {

  constructor() {
    this.userRespository = new UserRepository();
    this.roleService = new RoleService();
  }

  async register(userData) {
    const { username, email, password, roles } = userData;
    const hashedPassword = await hashPassword(password);
    const newUser = {
      username,
      email,
      password: hashedPassword
    }

    if (roles) {
      const foundedRoles = await this.roleService.findRoles(roles);
      newUser.roles = foundedRoles.map( role => role._id );
    } else {
      const role = await this.roleService.findRoleByName("user");
      newUser.roles = [...role].map(item => item._id)
    }

    return await this.userRespository.create(newUser);
  }

  async login(userData) {

  }
}

export default AuthService;