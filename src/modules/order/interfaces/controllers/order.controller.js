class OrderController {
  constructor({ orderUseCase }) {
    this.orderUseCase = orderUseCase;
  }

  create = async (req, res, next) => {
    try {
      const result = await this.orderUseCase.execute(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = OrderController;
