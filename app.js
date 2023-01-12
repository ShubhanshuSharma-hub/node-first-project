const http = require('http')

// const server = http.createServer((req, res)=>{
//     if(req.url === '/'){
//         res.end('Home page')
//     }
//     if(req.url === '/about'){
//         res.end('About Page')
//     }
//     res.end('Error page')
// })
// const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end('Hoomie')
  } 
  if(req.url === '/about'){
    res.end('Here is the about page')
  }
  res.end(`
  <h1>ERROR</h1>
  <p>We can't find the page you are looking for</p>
  <a href='/'>back to Home Page</a>
  `)
})

server.listen(5000)
// server.listen(5000, ()=>{
//     console.log('server is running on port 5000...')
// })