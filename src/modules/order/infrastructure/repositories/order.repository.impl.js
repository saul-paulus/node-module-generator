const IOrderRepository = require('../../domain/repositories/order.repository.interface');
const OrderEntity = require('../../domain/entities/order.entity');

class OrderRepositoryImpl extends IOrderRepository {
  // If using Prisma, you would do: constructor({ prisma }) { super(); this.prisma = prisma; }
  constructor() {
    super();
    this.db = new Map();
  }

  async save(dto) {
    const id = Date.now().toString(); // Mock ID generation
    const entity = new OrderEntity({ id, ...dto });
    this.db.set(id, entity);
    return entity;
  }

  async findById(id) {
    return this.db.get(id) || null;
  }
}

module.exports = OrderRepositoryImpl;
