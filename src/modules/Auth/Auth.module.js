import { asClass, asFunction } from 'awilix';

import AuthController from './interfaces/controllers/AuthController';
import createAuthRoutes from './interfaces/routes/auth.routes';
import CreateAuthUseCase from './application/usecases/CreateAuthUseCase';
import PrismaAuthRepository from './infrastructure/repositories/PrismaAuthRepository';

export default function registerAuthModule(container) {
  container.register({
    authController: asClass(AuthController).singleton(),
    authRoutes: asFunction(createAuthRoutes).singleton(),
    CreateAuthUseCase: asClass(CreateAuthUseCase).singleton(),
    authRepository: asFunction(({ prismaAuthRepository }) => prismaAuthRepository).scoped(),
  });
}
