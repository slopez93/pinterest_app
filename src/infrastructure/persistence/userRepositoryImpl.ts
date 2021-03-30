import {injectable, inject} from 'inversify';
import {UserRepository} from '@Domain/repositories/userRepository';
import {UserRemoteDataSource} from '../datasources/userRemoteDataSource';

@injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}
}
