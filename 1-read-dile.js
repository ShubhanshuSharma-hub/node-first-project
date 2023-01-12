const {readFile, writeFile} = require('fs')

console.log('started the first tast')
readFile('./content/first.txt', 'utf8', (err, result)=>{
  if(err){
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first tast')
})
console.log('starting next tast')