import Role from "../models/roles.model.js";


class RoleRepository {

  async create() {
    try {
      const count = await Role.estimatedDocumentCount();
  
      if (count > 0) return;
  
      const values = await Promise.all(
        [
          new Role({ name: 'user' }).save(),
          new Role({ name: 'admin' }).save(),
          new Role({ name: 'employee' }).save(),
        ]
      )
      console.log(values);
    } catch (err) {
      console.log(err)
    }
  }

  async find(roles) {
    const foundRoles = await Role.find({ name: {$in: roles} });
    return foundRoles;
  }

  async findOne(role) {
    return await Role.find({ name: role });
  }
  
}

export default RoleRepository;