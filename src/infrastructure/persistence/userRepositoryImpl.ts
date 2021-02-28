import {injectable, inject} from 'inversify';
import {UserRepository} from '../../domain/repositories/userRepository';
import {UserRemoteDataSource} from '../datasources/user/userRemoteDataSource';

@injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}
}
