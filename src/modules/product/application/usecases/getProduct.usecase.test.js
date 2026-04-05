const GetproductUseCase = require('./getProduct.usecase');

describe('GetproductUseCase', () => {
  let useCase;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      save: jest.fn()
    };
    useCase = new GetproductUseCase({ productRepository: mockRepository });
  });

  describe('execute', () => {
    it('should save data using the repository and return the entity', async () => {
      const mockDto = { name: 'Test' };
      const mockEntity = { id: 1, ...mockDto };
      mockRepository.save.mockResolvedValue(mockEntity);

      const result = await useCase.execute(mockDto);

      expect(mockRepository.save).toHaveBeenCalledWith(mockDto);
      expect(result).toEqual(mockEntity);
    });
  });
});
