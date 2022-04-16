import express from 'express'
import upload from '../../../utils/uploadMiddleware'
import uploadFile from './upload'
import deleteFile from './delete'
import isAuthenticated from '../../../utils/authMiddleware/'

const router = express.Router()

router.post('/upload', upload.single('image'), uploadFile)
router.delete('/delete', isAuthenticated, deleteFile)

export default router
