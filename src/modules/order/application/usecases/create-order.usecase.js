class CreateOrderUseCase {
  constructor({ orderRepository }) {
    this.orderRepository = orderRepository;
  }

  async execute(dto) {
    // Validate DTO...
    // Apply business logic...
    
    const entity = await this.orderRepository.save(dto);
    return entity;
  }
}

module.exports = CreateOrderUseCase;
