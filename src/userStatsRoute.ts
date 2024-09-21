import express from 'express'
import connectToDatabase from './db'
import { getUserStats, feedUserStats } from './userStatsService'
const router = express.Router()

router.get('/user-stats', async (req, res) => {
  try {
    await connectToDatabase()
    const result = await getUserStats()
    res.json(result)
  } catch (error) {
    console.error('An error occurred:', error)
    res.status(500).json({ error: 'An error occurred while fetching user statistics' })
  }
})

router.post('/user-stats', async (req, res) => {
  try {
    await connectToDatabase()
    await feedUserStats()
    res.json({ message: 'Data successfully inserted' })
  } catch (error) {
    console.error('An error occurred:', error)
    res.status(500).json({ error: 'An error occurred while feeding user statistics' })
  }
})

export default router
