import jwt from "jsonwebtoken";


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

export const verifyJsonWebToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded;
  } catch (err) {
    return false
  }
}