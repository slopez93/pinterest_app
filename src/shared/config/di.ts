import {Container} from 'inversify';
import {PinRepository} from '~/domain/repositories/pinRepository';
import {
  PinRemoteDataSource,
  PinRemoteDataSourceImpl,
} from '~/infrastructure/datasources/pinRemoteDataSource';
import {PinRepositoryImpl} from '~/infrastructure/persistence/pinRepositoryImpl';
import {AuthLoginUseCase} from '../../application/usecases/AuthLoginUseCase';
import {GetDiscoverDetailUseCase} from '../../application/usecases/GetDiscoverDetailUseCase';
import {GetDiscoverUseCase} from '../../application/usecases/GetDiscoverUseCase';
import {GetPinDetailUseCase} from '../../application/usecases/GetPinDetailUseCase';
import {GetPinsUseCase} from '../../application/usecases/GetPinsUseCase';
import {UserRepository} from '../../domain/repositories/userRepository';
import {AuthenticationService} from '../../domain/services/authentication';
import {
  UserRemoteDataSource,
  UserRemoteDataSourceImpl,
} from '~/infrastructure/datasources/userRemoteDataSource';
import {UserRepositoryImpl} from '../../infrastructure/persistence/userRepositoryImpl';
import {AuthenticationImpl} from '../../infrastructure/services/authentication';
import {CameraImpl, ICamera} from '../../infrastructure/services/camera';
import {
  INavigation,
  NavigationImpl,
} from '../../infrastructure/services/navigation';
import {HttpManager, HttpManagerImpl} from '../networking';

const serviceLocator = new Container();

// UseCases
serviceLocator.bind<AuthLoginUseCase>('AuthLoginUseCase').to(AuthLoginUseCase);
serviceLocator.bind<GetPinsUseCase>('GetPinsUseCase').to(GetPinsUseCase);
serviceLocator
  .bind<GetDiscoverUseCase>('GetDiscoverUseCase')
  .to(GetDiscoverUseCase);
serviceLocator
  .bind<GetPinDetailUseCase>('GetPinDetailUseCase')
  .to(GetPinDetailUseCase);
serviceLocator
  .bind<GetDiscoverDetailUseCase>('GetDiscoverDetailUseCase')
  .to(GetDiscoverDetailUseCase);

// Services
serviceLocator
  .bind<AuthenticationService>('AuthenticationService')
  .to(AuthenticationImpl);

/// Repositories
serviceLocator.bind<UserRepository>('UserRepository').to(UserRepositoryImpl);
serviceLocator.bind<PinRepository>('PinRepository').to(PinRepositoryImpl);

// Datasources
serviceLocator
  .bind<PinRemoteDataSource>('PinRemoteDataSource')
  .to(PinRemoteDataSourceImpl);
serviceLocator
  .bind<UserRemoteDataSource>('UserRemoteDataSource')
  .to(UserRemoteDataSourceImpl);

// Libraries
serviceLocator.bind<HttpManager>('HttpManager').to(HttpManagerImpl);
serviceLocator.bind<INavigation>('INavigation').to(NavigationImpl);
serviceLocator.bind<ICamera>('ICamera').to(CameraImpl);

export {serviceLocator};
