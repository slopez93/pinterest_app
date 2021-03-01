import 'reflect-metadata';

import {instance, mock, reset, verify, when} from 'ts-mockito';

import {AuthLoginUseCase} from '~/application/usecases/AuthLoginUseCase';
import {User} from '~/domain/entities/user';
import {AuthenticationService} from '~/domain/services/authentication';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Test AuthLoginUseCase', () => {
  const mockAuthService = mock<AuthenticationService>();

  afterEach(() => {
    reset(mockAuthService);
  });

  test('should successful login', async () => {
    const email = 'test@test.com';
    const password = '1234';

    const user: User = User.create('name', 'token');

    when(mockAuthService.login(email, password)).thenResolve(user);

    const authenticationService = instance(mockAuthService);
    const authLoginUseCase = new AuthLoginUseCase(authenticationService);

    const response = await authLoginUseCase.execute(email, password);

    expect(response).toEqual(user);
    verify(mockAuthService.login(email, password)).once();
  });

  test('should fail login', async () => {
    const email = 'test@test.com';
    const password = '1234';

    const error = new Error('Exception error');

    when(mockAuthService.login(email, password)).thenReject(error);

    const authenticationService = instance(mockAuthService);
    const authLoginUseCase = new AuthLoginUseCase(authenticationService);

    const response = await expect(
      authLoginUseCase.execute(email, password),
    ).rejects.toThrow(new Error('Error login user: Exception error'));

    expect(response).toEqual(undefined);
  });
});
