function forLoop(array) {
  for (let i = 0; i < 25; i++)
  array.assign(`I am ${i} strange loop${ i === 0 ? '' : 's'}.`)
}