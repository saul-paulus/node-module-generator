const AuthController = require('./AuthController');

describe('AuthController', () => {
  let controller;
  let mockUseCase;
  let mockReq;
  let mockRes;
  let mockNext;

  beforeEach(() => {
    mockUseCase = {
      execute: jest.fn()
    };
    controller = new AuthController({ 
      authRepository: {}, 
      authUseCase: mockUseCase 
    });
    mockReq = {
      body: { test: 'data' }
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
  });

  describe('index', () => {
    it('should return result if use case succeeds', async () => {
      const mockResult = { success: true, data: mockReq.body };
      mockUseCase.execute.mockResolvedValue(mockResult);

      await controller.index(mockReq, mockRes, mockNext);

      expect(mockUseCase.execute).toHaveBeenCalledWith(mockReq.body);
      expect(mockRes.json).toHaveBeenCalledWith(mockResult);
    });

    it('should call next with error if use case fails', async () => {
      const error = new Error('Test error');
      mockUseCase.execute.mockRejectedValue(error);

      await controller.index(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
