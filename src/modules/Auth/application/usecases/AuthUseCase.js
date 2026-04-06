export default class AuthUseCase {
  constructor({ authRepository, jwtService }) {
    this.authRepository = authRepository;
    this.jwtService = jwtService;
  }

  async execute(inputData) {
    // Logic for AuthUseCase
    const result = await this.authRepository.create(inputData);
    return { success: true, data: result };
  }
}
