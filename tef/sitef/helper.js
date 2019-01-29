const _ = require('lodash/string')

exports.formatDate = (date) => {
  const d = date.getDate()
  const m = date.getMonth() + 1 
  const y = date.getFullYear()
  const dd = d < 10 ? '0' + d : d
  const mm = m < 10 ? '0' + m : m
  return `${dd}${mm}${y}`
}