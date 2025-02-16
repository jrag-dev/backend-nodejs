import User from "../models/user.model.js";


class UserRepository {

  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async findAll() {
    return await User.find({});
  }

  async findByEmail(email) {
    return await User.findOne({ email }).populate('roles');
  }

  async findById(id) {
    return await User.findById(id);
  }
  
  async findByIdWithoutPassword(id) {
    return await User.findById(id, { password: 0 });
  }

  async update(id, userData) {
    return await User.findOneAndUpdate({ _id: id }, userData, { new: true });
  }

  async delete(id) {
    return await User.findOneAndDelete({ _id: id });
  }
}

export default UserRepository;