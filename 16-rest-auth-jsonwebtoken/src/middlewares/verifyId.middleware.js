import { Types } from "mongoose";

export default function(req, res, next) {
  const { id } = req.params;
  const isObjectId = Types.ObjectId.isValid(id);
  if (!isObjectId) {
    return res.status(400).json({ success: false, message: 'ObjectId format not valid' });
  }
  next();
}