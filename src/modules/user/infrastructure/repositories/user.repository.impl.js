const IUserRepository = require('../../domain/repositories/user.repository.interface');
const UserEntity = require('../../domain/entities/user.entity');

class UserRepositoryImpl extends IUserRepository {
  // If using Prisma, you would do: constructor({ prisma }) { super(); this.prisma = prisma; }
  constructor() {
    super();
    this.db = new Map();
  }

  async save(dto) {
    const id = Date.now().toString(); // Mock ID generation
    const entity = new UserEntity({ id, ...dto });
    this.db.set(id, entity);
    return entity;
  }

  async findById(id) {
    return this.db.get(id) || null;
  }
}

module.exports = UserRepositoryImpl;
