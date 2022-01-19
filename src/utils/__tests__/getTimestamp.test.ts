import getTimestamp from '../getTimestamp';

describe('getTimestamp Util', () => {
  it('should return a number', () => {
    expect(getTimestamp()).toBeInstanceOf(Number);
  });
});
