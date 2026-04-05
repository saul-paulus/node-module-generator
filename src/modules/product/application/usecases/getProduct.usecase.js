class GetproductUseCase {
  constructor({ productRepository }) {
    this.productRepository = productRepository;
  }

  async execute(dto) {
    // Validate DTO...
    // Apply business logic...
    
    const entity = await this.productRepository.save(dto);
    return entity;
  }
}

module.exports = GetproductUseCase;
