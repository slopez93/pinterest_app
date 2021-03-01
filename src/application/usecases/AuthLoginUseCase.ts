import {inject, injectable} from 'inversify';
import {User} from '@Domain/entities/user';
import {AuthenticationService} from '@Domain/services/authentication';

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
      throw new Error(`Error login user: ${error.message}`);
    }
  }
}
