const IProductRepository = require('../../domain/repositories/product.repository.interface');
const ProductEntity = require('../../domain/entities/product.entity');

class ProductRepositoryImpl extends IProductRepository {
  // If using Prisma, you would do: constructor({ prisma }) { super(); this.prisma = prisma; }
  constructor() {
    super();
    this.db = new Map();
  }

  async save(dto) {
    const id = Date.now().toString(); // Mock ID generation
    const entity = new ProductEntity({ id, ...dto });
    this.db.set(id, entity);
    return entity;
  }

  async findById(id) {
    return this.db.get(id) || null;
  }
}

module.exports = ProductRepositoryImpl;
