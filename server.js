const http = require('http')
const port = 3000

const rotas = {
  '/': 'Curso de Node!',
  '/livros': 'Entrei na página de Livros',
  '/autores': 'Listagem de Autores',
  '/editra': 'Listagem de Autores',
  '/sobre': 'Informação Sobre o Projeto',
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(rotas[req.url])
})

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
