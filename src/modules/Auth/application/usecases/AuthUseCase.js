export default class AuthUseCase {
  constructor({ authRepository, jwtService }) {
    this.authRepository = authRepository;
    this.jwtService = jwtService;
  }

  async execute(inputData) {
    // Logic for AuthUseCase
    return { success: true, data: inputData };
  }
}
