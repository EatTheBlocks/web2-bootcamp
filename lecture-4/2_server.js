import { createServer } from 'http'

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello, World!')
  }
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
