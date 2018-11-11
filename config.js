module.exports = {
  token: process.env.TOKEN,
  amounts: (process.env.AMOUNTS && process.env.AMOUNTS.split(' ')) || [3, 10, 60] // list of amounts available (in seconds)
}
