import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.SERVER_PORT || 3333
import userStatsRoute from './userStatsRoute'

app.get('/', (req, res) => {
  res.send('Hello server is healthy')
})

// GET and POST route for getting calculation grouped by user-age
app.use('/api', userStatsRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
