import express from 'express'
import profileList from './profileList'
import createProfile from './create'
import isAuthenticated from '../../../utils/authMiddleware/'

const router = express.Router()

router.post('/', profileList)
router.post('/create-profile', createProfile)

export default router
