const CreateUserUseCase = require('./create-user.usecase');

describe('CreateUserUseCase', () => {
  let useCase;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      save: jest.fn()
    };
    useCase = new CreateUserUseCase({ userRepository: mockRepository });
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
