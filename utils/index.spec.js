import hexRgb from './hex-rgb';

describe('utils', () => {
  describe('hexRgb', () => {
    const hex = '#2e5bff';

    it('returns an rgba value', () => {
      const color = hexRgb(hex, 0.1);

      expect(color).toBe('rgba(46, 91, 255, 0.1)');
    });

    it('returns an rgb value', () => {
      const color = hexRgb(hex);

      expect(color).toBe('rgb(46, 91, 255)');
    });
  });
});
