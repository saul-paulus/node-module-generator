export default class AuthController {
  constructor({ authRepository, authUseCase }) {
    this.authRepository = authRepository;
    this.authUseCase = authUseCase;
  }

  async index(req, res, next) {
    try {
      const result = await this.authUseCase.execute(req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
