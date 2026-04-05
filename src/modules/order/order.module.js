const { asClass, asFunction } = require('awilix');

const OrderController = require('./interfaces/controllers/order.controller');
const createOrderRoutes = require('./interfaces/routes/order.routes');
const CreateOrderUseCase = require('./application/usecases/create-order.usecase');
const OrderRepository = require('./infrastructure/repositories/order.repository.impl');

module.exports = function registerOrderModule(container) {
  container.register({
    orderController: asClass(OrderController).singleton(),
    orderRoutes: asFunction(createOrderRoutes).singleton(),
    orderUseCase: asClass(CreateOrderUseCase).singleton(),
    // Providing the interface's name as the injection token for the implementation
    orderRepository: asClass(OrderRepository).singleton(),
  });
};
