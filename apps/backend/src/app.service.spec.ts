import { AppService } from './app.service';

describe('AppService', () => {
  it('returns the backend greeting', () => {
    expect(new AppService().getHello()).toBe('Hello from NestJS Backend!');
  });
});
