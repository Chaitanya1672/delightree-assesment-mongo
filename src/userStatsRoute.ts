import express from 'express'
import { getUserStats, feedUserStats } from './userStatsService'
import connectDatabaseMiddleware from './middleware'
const router = express.Router()

router.get('/user-stats', connectDatabaseMiddleware, async (req, res) => {
  try {
    const result = await getUserStats()
    res.json(result)
  } catch (error) {
    console.error('An error occurred:', error)
    res.status(500).json({ error: 'An error occurred while fetching user statistics' })
  }
})

router.post('/user-stats', connectDatabaseMiddleware, async (req, res) => {
  try {
    await feedUserStats()
    res.json({ message: 'Data successfully inserted' })
  } catch (error) {
    console.error('An error occurred:', error)
    res.status(500).json({ error: 'An error occurred while feeding user statistics' })
  }
})

export default router
