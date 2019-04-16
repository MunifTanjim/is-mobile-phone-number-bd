interface RegExps {
  [key: string]: RegExp
}

const regexps: RegExps = {
  false: /^1[356789]\d{8}$/,
  true: /^\+?8801[356789]\d{8}$/,
  undefined: /^(\+?88)?01[356789]\d{8}$/
}

export default function isMobilePhoneNumberBd(
  mobilePhoneNumber: string,
  withCountryCode?: boolean
): boolean {
  const regex = regexps[String(withCountryCode)]
  return regex.test(mobilePhoneNumber)
}
