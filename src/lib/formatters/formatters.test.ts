import { decimalFromInt, percentFromInt } from './formatters'

describe('Formatters', () => {
  describe('decimalFromInt', () => {
    it('should be able transforms an int value into a decimal correctly', () => {
      const value = 60
      expect(decimalFromInt(value)).toBe('$60.00')
    })

    it('should be able transforms null or undefined into "-"', () => {
      expect(decimalFromInt(null)).toBe('-')
      expect(decimalFromInt(undefined)).toBe('-')
    })
  })

  describe('percentFromInt', () => {
    it('should be able transforms an int value into a percent correctly', () => {
      const value = -0.0007
      expect(percentFromInt(value)).toBe('-0.07%')
    })

    it('should be able transforms null or undefined into "-"', () => {
      expect(percentFromInt(null)).toBe('-')
      expect(percentFromInt(undefined)).toBe('-')
    })
  })
})
