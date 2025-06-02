import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { sentry } from '@hono/sentry'

const app = new Hono()

const SENTRY_DSN = "";

app.use('*', sentry({
  dsn: SENTRY_DSN,
}))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/test', (c) => {
  throw new Error('test')
})

serve({
  fetch: app.fetch,
  port: 3001
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
