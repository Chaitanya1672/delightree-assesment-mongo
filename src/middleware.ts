import connectToDatabase from './db'

import type { NextFunction, Request, Response } from 'express'

const connectDatabaseMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await connectToDatabase()
    next()
  } catch (error) {
    console.error('Database connection error:', error)
    res.status(500).json({ error: 'Failed to connect to the database' })
  }
}

export default connectDatabaseMiddleware
