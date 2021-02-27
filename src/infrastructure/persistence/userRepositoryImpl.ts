import {injectable, inject} from 'inversify';
import {User} from '../../domain/entities/user';
import {UserRepository} from '../../domain/repositories/userRepository';
import {UserRemoteDataSource} from '../datasources/user/userRemoteDataSource';

@injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @inject('UserRemoteDataSource') private dataSource: UserRemoteDataSource,
  ) {}

  async login(email: string, password: string): Promise<User> {
    const user = await this.dataSource.login(email, password);

    return User.create(user.name, user.token, user.pins);
  }
}
