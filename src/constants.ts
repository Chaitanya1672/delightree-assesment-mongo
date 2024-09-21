import { ObjectId } from 'mongodb'

export const USERS = [
  {
    _id: new ObjectId(),
    username: 'User1',
    email: 'user1@example.com',
    age: 23,
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    username: 'User2',
    email: 'user2@example.com',
    age: 29,
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    username: 'User3',
    email: 'user3@example.com',
    age: 35,
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    username: 'User4',
    email: 'user4@example.com',
    age: 45,
    createdAt: new Date(),
  },
]

export const POSTS = [
  {
    _id: new ObjectId(),
    title: 'Post1',
    content: 'Content1',
    authorId: USERS[0]._id,
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    title: 'Post2',
    content: 'Content2',
    authorId: USERS[1]._id,
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    title: 'Post3',
    content: 'Content3',
    authorId: USERS[2]._id,
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    title: 'Post4',
    content: 'Content4',
    authorId: USERS[3]._id,
    createdAt: new Date(),
  },
]

export const COMMENTS = [
  {
    _id: new ObjectId(),
    text: 'Comment1',
    postId: POSTS[0]._id,
    userId: USERS[1]._id,
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    text: 'Comment2',
    postId: POSTS[1]._id,
    userId: USERS[2]._id,
    createdAt: new Date(),
  },
  {
    _id: new ObjectId(),
    text: 'Comment3',
    postId: POSTS[2]._id,
    userId: USERS[3]._id,
    createdAt: new Date(),
  },
]

export const LIKES = [
  { _id: new ObjectId(), postId: POSTS[0]._id, userId: USERS[2]._id, createdAt: new Date() },
  { _id: new ObjectId(), postId: POSTS[1]._id, userId: USERS[3]._id, createdAt: new Date() },
  { _id: new ObjectId(), postId: POSTS[2]._id, userId: USERS[0]._id, createdAt: new Date() },
]

export const VIEWS = [
  { _id: new ObjectId(), postId: POSTS[0]._id, userId: USERS[0]._id, timestamp: new Date() },
  { _id: new ObjectId(), postId: POSTS[1]._id, userId: USERS[1]._id, timestamp: new Date() },
  { _id: new ObjectId(), postId: POSTS[2]._id, userId: USERS[2]._id, timestamp: new Date() },
  { _id: new ObjectId(), postId: POSTS[3]._id, userId: USERS[3]._id, timestamp: new Date() },
]
