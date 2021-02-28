import {Container} from 'inversify';
import {AuthLoginUseCase} from '../../application/usecases/AuthLoginUseCase';
import {GetDiscoverUseCase} from '../../application/usecases/GetDiscoverUseCase';
import {GetUserPinsUseCase} from '../../application/usecases/GetUserPinsUseCase';
import {UserRepository} from '../../domain/repositories/userRepository';
import {AuthenticationService} from '../../domain/services/authentication';
import {
  UserRemoteDataSource,
  UserRemoteDataSourceImpl,
} from '../../infrastructure/datasources/user/userRemoteDataSource';
import {UserRepositoryImpl} from '../../infrastructure/persistence/userRepositoryImpl';
import {AuthenticationImpl} from '../../infrastructure/services/authentication';
import {
  INavigation,
  NavigationImpl,
} from '../../infrastructure/services/navigation';
import {HttpManager, HttpManagerImpl} from '../networking';

const serviceLocator = new Container();

// UseCases
serviceLocator.bind<AuthLoginUseCase>('AuthLoginUseCase').to(AuthLoginUseCase);
serviceLocator
  .bind<GetUserPinsUseCase>('GetUserPinsUseCase')
  .to(GetUserPinsUseCase);
serviceLocator
  .bind<GetDiscoverUseCase>('GetDiscoverUseCase')
  .to(GetDiscoverUseCase);

// Services
serviceLocator
  .bind<AuthenticationService>('AuthenticationService')
  .to(AuthenticationImpl);

/// Repositories
serviceLocator.bind<UserRepository>('UserRepository').to(UserRepositoryImpl);

// Datasources
serviceLocator
  .bind<UserRemoteDataSource>('UserRemoteDataSource')
  .to(UserRemoteDataSourceImpl);

// Libraries
serviceLocator.bind<HttpManager>('HttpManager').to(HttpManagerImpl);
serviceLocator.bind<INavigation>('INavigation').to(NavigationImpl);

export {serviceLocator};
