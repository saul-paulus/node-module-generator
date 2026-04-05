class UserEntity {
  constructor({ id, ...props }) {
    this.id = id;
    Object.assign(this, props);
  }
}

module.exports = UserEntity;
