export const TOGGLE_GOOD_TIME = 'TOGGLE_GOOD_TIME'
export function toggleGoodTime () {
  return { type: TOGGLE_GOOD_TIME }
}

export const TIME_IS_GOOD = 'TIME_IS_GOOD'
export function timeIsGood () {
  return { type: TIME_IS_GOOD }
}

export const TIME_IS_BAD = 'TIME_IS_BAD'
export function timeIsBad () {
  return { type: TIME_IS_BAD }
}
