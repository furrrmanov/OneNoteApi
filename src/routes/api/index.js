import express from 'express'
import notebook from './notebook'
import storage from './storage'
import authentication from './auth'
import catalog from './catalog'
import userProfiles from './profile'

const router = express.Router()
router.use('/userProfiles', userProfiles)
router.use('/notebook', notebook)
router.use('/catalog', catalog)
router.use('/storage', storage)
router.use('/auth', authentication)

export default router
