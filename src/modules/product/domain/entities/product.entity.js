class ProductEntity {
  constructor({ id, ...props }) {
    this.id = id;
    Object.assign(this, props);
  }
}

module.exports = ProductEntity;
