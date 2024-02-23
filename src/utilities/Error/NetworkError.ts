export class NetWorkError extends Error {
  constructor() {
    super('network error');
    this.name = 'NetWorkError';
  }
}
