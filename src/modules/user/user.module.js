const { asClass, asFunction } = require('awilix');

const UserController = require('./interfaces/controllers/user.controller');
const createUserRoutes = require('./interfaces/routes/user.routes');
const CreateUserUseCase = require('./application/usecases/create-user.usecase');
const UserRepository = require('./infrastructure/repositories/user.repository.impl');

module.exports = function registerUserModule(container) {
  container.register({
    userController: asClass(UserController).singleton(),
    userRoutes: asFunction(createUserRoutes).singleton(),
    userUseCase: asClass(CreateUserUseCase).singleton(),
    // Providing the interface's name as the injection token for the implementation
    userRepository: asClass(UserRepository).singleton(),
  });
};
