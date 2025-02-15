import { createJsonWebToken } from "../middlewares/jwt.middleware.js";
import AuthService from "../services/auth.service.js";
import RoleService from "../services/role.service.js";
import UserService from "../services/user.service.js";


class AuthController {

  constructor() {
    this.authService = new AuthService();
    this.userService = new UserService();
    this.roleService = new RoleService();
  }

  async register(req, res) {
    const { username, email, password, roles } = req.body;
    try {
      const existEmail = await this.userService.getByEmail(email);
      if (existEmail) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
      }

      
      const newUser = await this.authService.register(
        {
          username,
          email,
          password
        }
      )
       
      const token = createJsonWebToken({ id: newUser._id });

      res.status(201).json({ success: true, message: 'User registered successfully', token })
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }

  async login(req, res) {
    try {
      res.status(201).json({ success: true, message: 'User logged successfully'})
    } catch (err) { 
      res.status(500).json({ success: false, message: err.message });
    }
  }
}

export default AuthController;