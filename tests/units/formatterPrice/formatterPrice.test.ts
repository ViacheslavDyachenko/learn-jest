const helpers = require('./formatterPriceAndDiscount');

describe('formatterPrice', () => {
    test('Форматирование маленькой скидки', () => {
        expect(helpers.formatterDiscount(134)).toBe('- 134 ₽')
    })
    test('Форматирование средней скидки', () => {
        expect(helpers.formatterDiscount(1345)).toBe('- 1 345 ₽')
    })
    test('Форматирование большой скидки', () => {
        expect(helpers.formatterDiscount(13457)).toBe('- 13 457 ₽')
    })
    test('Форматирование скидки оканчивающейся на 0', () => {
        expect(helpers.formatterDiscount(13450)).toBe('- 13 450 ₽')
    })
    test('Форматирование маленькой цены', () => {
        expect(helpers.formatterPrice(134)).toBe('134 ₽')
    })
    test('Форматирование средней цены', () => {
        expect(helpers.formatterPrice(1345)).toBe('1 345 ₽')
    })
    test('Форматирование большой цены', () => {
        expect(helpers.formatterPrice(13457)).toBe('13 457 ₽')
    })
})