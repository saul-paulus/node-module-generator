const OrderController = require('./order.controller');

describe('OrderController', () => {
  let controller;
  let mockUseCase;
  let mockReq;
  let mockRes;
  let mockNext;

  beforeEach(() => {
    mockUseCase = {
      execute: jest.fn()
    };
    controller = new OrderController({ orderUseCase: mockUseCase });
    mockReq = {
      body: { test: 'data' }
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
  });

  describe('create', () => {
    it('should return 201 and result if use case succeeds', async () => {
      const mockResult = { id: 1, ...mockReq.body };
      mockUseCase.execute.mockResolvedValue(mockResult);

      await controller.create(mockReq, mockRes, mockNext);

      expect(mockUseCase.execute).toHaveBeenCalledWith(mockReq.body);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({ success: true, data: mockResult });
    });

    it('should call next with error if use case fails', async () => {
      const error = new Error('Test error');
      mockUseCase.execute.mockRejectedValue(error);

      await controller.create(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
