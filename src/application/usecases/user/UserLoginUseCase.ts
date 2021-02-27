import {inject, injectable} from 'inversify';
import {User} from '../../../domain/entities/user';
import {UserRepository} from '../../../domain/repositories/userRepository';

@injectable()
export class UserLoginUseCase {
  constructor(
    @inject('UserRepository') private userRepository: UserRepository,
  ) {}

  async execute(email: string, password: string): Promise<User> {
    try {
      return await this.userRepository.login(email, password);
    } catch (error) {
      throw new Error(`Error get users: ${error.message}`);
    }
  }
}
