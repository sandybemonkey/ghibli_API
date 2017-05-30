import express from 'express'
import * as Rx from 'rx'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import { GraphQLSchema } from 'graphql'
import { queryType } from './query/root'

const app = express()
const requests$ = new Rx.Subject()


const sendHello = (e) => {
  console.log('sending hello');
  e.res.writeHead(200, { 'Content-Type': 'text/html' });
  e.res.end('<h1>Hello World</h1>\n');
}

requests$
  .subscribe(sendHello)

const port = process.env.PORT || 3000

const schema = new GraphQLSchema({
  query: queryType
})

app.get('/hello', (req, res) => {
  requests$.onNext({ req: req, res: res })
})


app.use('/', cors(), graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
