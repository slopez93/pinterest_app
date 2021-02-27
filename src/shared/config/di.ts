import {Container} from 'inversify';
import {UserLoginUseCase} from '../../application/usecases/user/UserLoginUseCase';
import {UserRepository} from '../../domain/repositories/userRepository';
import {
  UserRemoteDataSource,
  UserRemoteDataSourceImpl,
} from '../../infrastructure/datasources/user/userRemoteDataSource';
import {UserRepositoryImpl} from '../../infrastructure/persistence/userRepositoryImpl';
import {HttpManager, HttpManagerImpl} from '../networking';

const serviceLocator = new Container();

// UseCases
serviceLocator.bind<UserLoginUseCase>('UserLoginUseCase').to(UserLoginUseCase);

/// Repositories
serviceLocator.bind<UserRepository>('UserRepository').to(UserRepositoryImpl);

// Datasources
serviceLocator
  .bind<UserRemoteDataSource>('UserRemoteDataSource')
  .to(UserRemoteDataSourceImpl);

// Libraries
serviceLocator.bind<HttpManager>('HttpManager').to(HttpManagerImpl);

export {serviceLocator};
