import RoleRepository from "../repository/role.repository.js";



class RoleService {

  constructor() {
    this.roleRepository = new RoleRepository();
  }

  async createRoles() {
    return this.roleRepository.create();
  }

  async findRoles(roles) {
    return await this.roleRepository.find(roles);
  }

  async findRoleByName(role) {
    return await this.roleRepository.findOne(role);
  }

}

export default RoleService;