import useApi from './useApi';
import testHook from './testHook';

describe('useApi()', () => {
  test('hook should run successfully', () => {
    testHook(() => useApi('https://randomuser.me/api/'));
  });
  test('loading should be falsy', () => {
    let loading;
    testHook(() => useApi('https://randomuser.me/api/'));
    expect(loading).toBeFalsy;
  });
  test('data should be not null', () => {
    let data;
    testHook(() => useApi('https://randomuser.me/api/'));
    expect(data).toBeTruthy;
  });
  test('hook should throw an error given invalid url', () => {
    let errorMsg = 'AxiosError';
    testHook(() => useApi('a'));
    expect(errorMsg).toBeInTheDocument;
  });
});
