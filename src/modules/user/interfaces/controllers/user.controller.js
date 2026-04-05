class UserController {
  constructor({ userUseCase }) {
    this.userUseCase = userUseCase;
  }

  create = async (req, res, next) => {
    try {
      const result = await this.userUseCase.execute(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
