console.log('first task')
console.time()
for(let i = 0; i<10000000; i++){
  const h3 = document.querySelector('h3')
  h3.textContent = `Hey, Everyone Is Waiting On Me`
}
console.timeEnd()
console.log('next task')