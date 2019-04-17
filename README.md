# isMobilePhoneNumberBd

Mobile phone number validator for Bangladesh

## Usage

**CommonJS**

```js
const isMobilePhoneNumberBd = require('@muniftanjim/is-mobile-phone-number-bd').default
```

**ES Module**
```js
import isMobilePhoneNumberBd from '@muniftanjim/is-mobile-phone-number-bd'
```

### Validation

```js
isMobilePhoneNumberBd('+8801712345678') // true
isMobilePhoneNumberBd('8801712345678')  // true
isMobilePhoneNumberBd('01712345678')    // true
isMobilePhoneNumberBd('1712345678')     // false
```

### Validation w/ CountryCode

```js
const withCountryCode = true
isMobilePhoneNumberBd('+8801712345678', withCountryCode) // true
isMobilePhoneNumberBd('8801712345678', withCountryCode)  // true
isMobilePhoneNumberBd('01712345678', withCountryCode)    // false
isMobilePhoneNumberBd('1712345678', withCountryCode)     // false
```

### Validation w/o CountryCode

```js
const withCountryCode = false
isMobilePhoneNumberBd('+8801712345678', withCountryCode) // false
isMobilePhoneNumberBd('8801712345678', withCountryCode)  // false
isMobilePhoneNumberBd('01712345678', withCountryCode)    // false
isMobilePhoneNumberBd('1712345678', withCountryCode)     // true
```
