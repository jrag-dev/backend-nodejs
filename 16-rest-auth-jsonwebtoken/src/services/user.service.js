import UserRepository from "../repository/user.repository.js";


class UserService {

  constructor() {
    this.userRespository = new UserRepository();
  }

  async getByEmail(email) {
    return await this.userRespository.findByEmail(email);

  }

  async getById(id) {
    return await this.userRespository.findById(id);
  }
  
  async getByIdWithoutPassword(id) {
    return await this.userRespository.findByIdWithoutPassword(id);
  }
}

export default UserService;