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
      console.log("Roles: ", foundedRoles)
      newUser.roles = foundedRoles.map( role => role._id );
    } else {
      const role = await this.roleService.findRoleByName("user");
      console.log("rol: ", role)
      console.log("rol id: ", role._id)
      newUser.roles = [role._id];
    }

    console.log(newUser)
    return await this.userRespository.create(newUser);
  }

  async login(userData) {

  }
}

export default AuthService;