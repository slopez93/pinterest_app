import {inject, injectable} from 'inversify';
import {User} from '../../domain/entities/user';
import {AuthenticationService} from '../../domain/services/authentication';

@injectable()
export class AuthLoginUseCase {
  constructor(
    @inject('AuthenticationService')
    private authenticationService: AuthenticationService,
  ) {}

  async execute(email: string, password: string): Promise<User> {
    try {
      return await this.authenticationService.login(email, password);
    } catch (error) {
      throw new Error(`Error get users: ${error.message}`);
    }
  }
}
