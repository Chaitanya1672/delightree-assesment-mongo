import User from './models/User'
import type { PipelineStage } from 'mongoose'
import Post from './models/Post'
import Comment from './models/Comment'
import Like from './models/Like'
import View from './models/View'
import { COMMENTS, LIKES, POSTS, USERS, VIEWS } from './constants'

async function getUserStats() {
  const pipeline: PipelineStage[] = [
    {
      $project: {
        _id: 1,
        ageRange: {
          $switch: {
            branches: [
              { case: { $and: [{ $gte: ['$age', 18] }, { $lte: ['$age', 24] }] }, then: '18-24' },
              { case: { $and: [{ $gte: ['$age', 25] }, { $lte: ['$age', 34] }] }, then: '25-34' },
              { case: { $and: [{ $gte: ['$age', 35] }, { $lte: ['$age', 44] }] }, then: '35-44' },
            ],
            default: '45+',
          },
        },
      },
    },
    {
      $lookup: {
        from: 'posts',
        localField: '_id',
        foreignField: 'authorId',
        as: 'posts',
      },
    },
    {
      $lookup: {
        from: 'comments',
        localField: '_id',
        foreignField: 'userId',
        as: 'comments',
      },
    },
    {
      $lookup: {
        from: 'likes',
        localField: '_id',
        foreignField: 'userId',
        as: 'likes',
      },
    },
    {
      $lookup: {
        from: 'views',
        localField: '_id',
        foreignField: 'userId',
        as: 'views',
      },
    },
    {
      $group: {
        _id: '$ageRange',
        totalUsers: { $sum: 1 },
        totalPosts: { $sum: { $size: '$posts' } },
        totalComments: { $sum: { $size: '$comments' } },
        totalLikes: { $sum: { $size: '$likes' } },
        totalViews: { $sum: { $size: '$views' } },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]
  const stats = await User.aggregate(pipeline).exec()
  return stats
}

async function feedUserStats() {
  try {
    // Step 1: Insert Dummy Users
    await User.insertMany(USERS)

    // Step 2: Insert Dummy Posts
    await Post.insertMany(POSTS)

    // Step 3: Insert Dummy Comments
    await Comment.insertMany(COMMENTS)

    // Step 4: Insert Dummy Likes
    await Like.insertMany(LIKES)

    // Step 5: Insert Dummy Views
    await View.insertMany(VIEWS)
  } catch (error) {
    console.error('Error in feedUserStats:', error)
    throw error
  }
}

export { feedUserStats, getUserStats }
