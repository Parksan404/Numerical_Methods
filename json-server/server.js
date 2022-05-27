const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('data.json')
const middlewares = jsonServer.defaults()
const swaggerUI=require('swagger-ui-express')
const swaggerDocumant = require('./swag.json')
var cors = require("cors")
const rules = auth.rewriter({
  // Permission rules
  users: 600,
  messages: 640,
  // Other rules
  '/posts/:category': '/posts?category=:category',
})

server.db = router.db

server.use(cors())
server.use(rules)
server.use(middlewares)
server.use(auth)
server.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocumant))
server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})