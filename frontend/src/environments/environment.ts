export const environment = {
  production: false,
  useMock: false,
  apiUrl:
    window.location.hostname === 'localhost'
      ? 'http://localhost:8080/api'
      : '/assets/mocks'
};
