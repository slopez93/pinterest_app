/* eslint-disable @typescript-eslint/no-unused-vars */
import {injectable} from 'inversify';
import {User} from '@Domain/entities/user';
import {AuthenticationService} from '@Domain/services/authentication';

type UserCredential = {
  name: string;
  token: string;
};

@injectable()
export class AuthenticationImpl implements AuthenticationService {
  async login(email: string, password: string): Promise<User> {
    const response: UserCredential = await new Promise((resolve) =>
      setTimeout(() => {
        resolve(require('../__mocks__/login.json'));
      }, 500),
    );

    return User.create(response.name, response.token);
  }
}
