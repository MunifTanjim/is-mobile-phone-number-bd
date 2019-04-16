import isMobilePhoneNumberBd from './index'

describe('validator: withCountryCode = undefined', () => {
  test('must start with: +880/880/0', () => {
    expect(isMobilePhoneNumberBd('+8801712345678')).toBe(true)
    expect(isMobilePhoneNumberBd('8801712345678')).toBe(true)
    expect(isMobilePhoneNumberBd('01712345678')).toBe(true)

    expect(isMobilePhoneNumberBd('1712345678')).toBe(false)
  })

  test('must have valid operator identifier digit: 3/5/6/7/8/9', () => {
    expect(isMobilePhoneNumberBd('01312345678')).toBe(true)
    expect(isMobilePhoneNumberBd('01512345678')).toBe(true)
    expect(isMobilePhoneNumberBd('01612345678')).toBe(true)
    expect(isMobilePhoneNumberBd('01712345678')).toBe(true)
    expect(isMobilePhoneNumberBd('01812345678')).toBe(true)
    expect(isMobilePhoneNumberBd('01912345678')).toBe(true)
  })

  test('before operator identifier digit: must have 1', () => {
    expect(isMobilePhoneNumberBd('01712345678')).toBe(true)
    expect(isMobilePhoneNumberBd('02712345678')).toBe(false)
  })

  test('after operator identifier digit: must have 8 digits', () => {
    expect(isMobilePhoneNumberBd('0171234567')).toBe(false)
    expect(isMobilePhoneNumberBd('017123456789')).toBe(false)
  })
})

describe('validator: withCountryCode = true', () => {
  test('must start with: +880/880', () => {
    expect(isMobilePhoneNumberBd('+8801712345678', true)).toBe(true)
    expect(isMobilePhoneNumberBd('8801712345678', true)).toBe(true)

    expect(isMobilePhoneNumberBd('01712345678', true)).toBe(false)
    expect(isMobilePhoneNumberBd('1712345678', true)).toBe(false)
  })

  test('must have valid operator identifier digit: 3/5/6/7/8/9', () => {
    expect(isMobilePhoneNumberBd('8801312345678', true)).toBe(true)
    expect(isMobilePhoneNumberBd('8801512345678', true)).toBe(true)
    expect(isMobilePhoneNumberBd('8801612345678', true)).toBe(true)
    expect(isMobilePhoneNumberBd('8801712345678', true)).toBe(true)
    expect(isMobilePhoneNumberBd('8801812345678', true)).toBe(true)
    expect(isMobilePhoneNumberBd('8801912345678', true)).toBe(true)
  })

  test('before operator identifier digit: must have 1', () => {
    expect(isMobilePhoneNumberBd('8801712345678', true)).toBe(true)
    expect(isMobilePhoneNumberBd('8802712345678', true)).toBe(false)
  })

  test('after operator identifier digit: must have 8 digits', () => {
    expect(isMobilePhoneNumberBd('880171234567', true)).toBe(false)
    expect(isMobilePhoneNumberBd('88017123456789', true)).toBe(false)
  })
})

describe('validator: withCountryCode = false', () => {
  test('must start with: 1', () => {
    expect(isMobilePhoneNumberBd('+8801712345678', false)).toBe(false)
    expect(isMobilePhoneNumberBd('8801712345678', false)).toBe(false)
    expect(isMobilePhoneNumberBd('01712345678', false)).toBe(false)

    expect(isMobilePhoneNumberBd('1712345678', false)).toBe(true)
  })

  test('must have valid operator identifier digit: 3/5/6/7/8/9', () => {
    expect(isMobilePhoneNumberBd('1312345678', false)).toBe(true)
    expect(isMobilePhoneNumberBd('1512345678', false)).toBe(true)
    expect(isMobilePhoneNumberBd('1612345678', false)).toBe(true)
    expect(isMobilePhoneNumberBd('1712345678', false)).toBe(true)
    expect(isMobilePhoneNumberBd('1812345678', false)).toBe(true)
    expect(isMobilePhoneNumberBd('1912345678', false)).toBe(true)
  })

  test('before operator identifier digit: must have 1', () => {
    expect(isMobilePhoneNumberBd('1712345678', false)).toBe(true)
    expect(isMobilePhoneNumberBd('2712345678', false)).toBe(false)
  })

  test('after operator identifier digit: must have 8 digits', () => {
    expect(isMobilePhoneNumberBd('171234567', false)).toBe(false)
    expect(isMobilePhoneNumberBd('17123456789', false)).toBe(false)
  })
})
