import express from 'express'
import signIn from './signIn'
import signOut from './signOut'

const router = express.Router()

router.put('/sign-in', signIn)
router.delete('/sign-out', signOut)

export default router
