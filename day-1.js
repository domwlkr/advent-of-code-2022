const data = require('./data.json')

// Get highest total calories
const sum = (dataArray) => dataArray.reduce((acc, value) => acc + value, 0)
const totalsArray = data.map(item => sum(item))
const highestValue = Math.max(...totalsArray)

console.log('Highest total calories: ', highestValue)

// Top three
const topTheeValues = totalsArray.sort((a, b) => b - a).slice(0, 3)
const totalTopThree = sum(topTheeValues)

console.log('Top 3 highest total calories: ', totalTopThree)