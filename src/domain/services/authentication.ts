import {User} from '../entities/user';

export interface AuthenticationService {
  login(email: string, password: string): Promise<User>;
}
