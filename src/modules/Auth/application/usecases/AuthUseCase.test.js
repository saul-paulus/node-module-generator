const AuthUseCase = require('./AuthUseCase');

describe('AuthUseCase', () => {
  let useCase;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn()
    };
    useCase = new AuthUseCase({ 
      authRepository: mockRepository,
      jwtService: {} 
    });
  });

  describe('execute', () => {
    it('should call repository create and return success', async () => {
      const mockDto = { name: 'Test' };
      const mockResult = { id: 1, ...mockDto };
      mockRepository.create.mockResolvedValue(mockResult);

      const result = await useCase.execute(mockDto);

      expect(mockRepository.create).toHaveBeenCalledWith(mockDto);
      expect(result).toEqual({ success: true, data: mockDto });
    });
  });
});
