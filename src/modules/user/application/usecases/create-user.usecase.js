class CreateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(dto) {
    // Validate DTO...
    // Apply business logic...
    
    const entity = await this.userRepository.save(dto);
    return entity;
  }
}

module.exports = CreateUserUseCase;
