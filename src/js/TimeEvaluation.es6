const moment = require('moment-timezone')

const getNow = () => {
  return moment()
    .tz('America/Los_Angeles')
}

const formatTime = (moment = getNow()) => {
  return moment.format('dddd, MMMM Do YYYY, h:mm a')
}

const workDay = (moment = getNow()) => {
  let day = moment.day()
  return day > 0 && day < 6
}

const workHour = (moment = getNow()) => {
  return moment.hour() < 19
}

const ultimateTime = (moment = getNow()) => {
  let day = moment.day()
  let hour = moment.hour()

  return day === 6 && hour > 13 && hour < 18
}

const golfPracticeTime = (moment = getNow()) => {
  let day = moment.day()
  let hour = moment.hour()

  return (day === 1 || day === 3) && (hour > 17 && hour < 19)
}

const golfPlayingTime = (moment = getNow()) => {
  let day = moment.day()
  let hour = moment.hour()

  return (day === 0) && (hour > 9 && hour < 14)
}

const isGoodTime = (moment = getNow()) => {
  return !(
    (workDay(moment) && workHour(moment)) ||
    ultimateTime(moment) ||
    golfPracticeTime(moment) ||
    golfPlayingTime(moment)
  )
}

module.exports = { getNow, formatTime, isGoodTime }
