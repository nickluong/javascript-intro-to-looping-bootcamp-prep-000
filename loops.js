function forLoop(array){
for(var i = 0 ; i < 25 ; i++){
  array.push(`I am ${i} strange loops${ i === 0 ? '' : 's'}"`)
}
}