import express from 'express'
import entity from './entity'
import storage from './storage'
import authentication from './auth'

const router = express.Router()

router.use('/entity', entity)
router.use('/storage', storage)
router.use('/auth', authentication)

export default router
