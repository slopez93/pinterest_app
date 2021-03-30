import 'reflect-metadata';

import {mock, verify, when, reset, instance} from 'ts-mockito';
import {GetDiscoverDetailUseCase} from '~/application/usecases/GetDiscoverDetailUseCase';
import {UserRemoteDataSource} from '~/infrastructure/datasources/userRemoteDataSource';
import {DiscoverDetailModel} from '~/infrastructure/models/discoverDetail';

describe('Test GetDiscoverDetailUseCase', () => {
  const mockUserRemoteDataSource = mock<UserRemoteDataSource>();

  afterEach(() => {
    reset(mockUserRemoteDataSource);
  });

  test('should success', async () => {
    const id = 1;
    const name = 'name';
    const category = 'category';
    const description = 'description';
    const images = ['url'];
    const sizes = ['M'];
    const availableSizes = ['M'];
    const price = 12.99;
    const discountPrice = 2.0;
    const currency = '$';

    const expectedResponse = new DiscoverDetailModel(
      id,
      name,
      category,
      description,
      images,
      sizes,
      availableSizes,
      price,
      discountPrice,
      currency,
    );

    when(mockUserRemoteDataSource.discoverDetail(id)).thenResolve(
      expectedResponse,
    );

    const userRemoteDataSource = instance(mockUserRemoteDataSource);
    const getDiscoverDetailUseCase = new GetDiscoverDetailUseCase(
      userRemoteDataSource,
    );

    const response = await getDiscoverDetailUseCase.execute(id);

    expect(response).toEqual(expectedResponse);
    verify(mockUserRemoteDataSource.discoverDetail(id)).once();
  });
});
