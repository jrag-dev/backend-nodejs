import jwt from "jsonwebtoken";
import UserService from "../services/user.service.js";
import { verifyJsonWebToken } from "../helpers/jwt.js";

const userService = new UserService();

export const createJsonWebToken = (payload) => {
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '1h'
    }
  )
  return token;
}

export const verifyAuthUser = async (req, res, next) => {
  //const token = req.headers["x-access-token"];
  const token = req.headers['authorization']?.slice(7, );

  if (!token) {
    return res.status(403).json({ success: false, message: 'No Token provided'})
  }

  const decoded = verifyJsonWebToken(token);

  if (!decoded) {
    return res.status(400).json({
      success: false,
      message: 'Token not valid'
    })
  }

  const user = await userService.getByIdWithoutPassword(decoded.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not Found'
    })
  }

  req.user_id = decoded.id;

  console.log(req.user_id, user);

  next();
}