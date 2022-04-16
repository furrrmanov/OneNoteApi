import express from 'express'
import entityList from './notebookList'
import createNotebook from './create'
import updateNotebook from './update'
import deleteNotebook from './delete'
import isAuthenticated from '../../../utils/authMiddleware/'

const router = express.Router()

router.post('/', entityList)
router.post('/create-notebook', isAuthenticated, createNotebook)
router.post('/update-notebook', isAuthenticated, updateNotebook)
router.delete('/delete-notebook', isAuthenticated, deleteNotebook)

export default router
