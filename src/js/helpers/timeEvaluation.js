import moment from 'moment-timezone'

export { formatTime, isGoodTime }

function getNow () {
  return moment().tz('America/Los_Angeles')
}

function formatTime (moment = getNow()) {
  return moment.format('dddd, MMMM Do YYYY, h:mm a')
}

function workDay (moment = getNow()) {
  const day = moment.day()
  return day > 0 && day < 6
}

function workHour (moment = getNow()) {
  return moment.hour() < 19
}

function ultimateTime (moment = getNow()) {
  const day = moment.day()
  const hour = moment.hour()

  return day === 6 && hour > 13 && hour < 18
}

function golfPracticeTime (moment = getNow()) {
  const day = moment.day()
  const hour = moment.hour()

  return (day === 1 || day === 3) && (hour > 17 && hour < 19)
}

function golfPlayingTime (moment = getNow()) {
  const day = moment.day()
  const hour = moment.hour()

  return (day === 0) && (hour > 9 && hour < 14)
}

function isGoodTime (moment = getNow()) {
  return !(
    (workDay(moment) && workHour(moment)) ||
    ultimateTime(moment) ||
    golfPracticeTime(moment) ||
    golfPlayingTime(moment)
  )
}
