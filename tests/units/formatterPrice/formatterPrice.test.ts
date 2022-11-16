import { formatterDiscount, formatterPrice, formatter } from './formatterPriceAndDiscount';

describe('formatterPrice', () => {
    test('Форматирование маленькой скидки', () => {
        expect(formatterDiscount(134)).toBe('- 134 ₽')
    })
    test('Форматирование средней скидки', () => {
        expect(formatterDiscount(1345)).toBe('- 1 345 ₽')
    })
    test('Форматирование большой скидки', () => {
        expect(formatterDiscount(13457)).toBe('- 13 457 ₽')
    })
    test('Форматирование скидки оканчивающейся на 0', () => {
        expect(formatterDiscount(13450)).toBe('- 13 450 ₽')
    })
    test('Форматирование скидки равной 0', () => {
        expect(formatterDiscount(0)).toBe('0')
    })
    test('Форматирование маленькой цены', () => {
        expect(formatterPrice(134)).toBe('134 ₽')
    })
    test('Форматирование средней цены', () => {
        expect(formatterPrice(1345)).toBe('1 345 ₽')
    })
    test('Форматирование большой цены', () => {
        expect(formatterPrice(13457)).toBe('13 457 ₽')
    })
    test('Форматирование средней цены со вторым регистром начинающимся на 0', () => {
        expect(formatterPrice(1045)).toBe('1 045 ₽')
    })
    test('Форматирование большой цены со вторым регистром начинающимся на 00', () => {
        expect(formatterPrice(13007)).toBe('13 007 ₽')
    })
    test('Форматирование цены равной 0', () => {
        expect(formatterPrice(0)).toBe('0')
    })
    test('Форматирование второго регистра большой цены', () => {
        expect(formatter(13457 % 1000, 2)).toBe(457)
    })
    test('Форматирование второго регистра средней цены', () => {
        expect(formatter(1345 % 1000, 2)).toBe(345)
    })
    test('Форматирование второго регистра маленькой цены', () => {
        expect(formatter(13 % 1000, 2)).toBe(13)
    })
})