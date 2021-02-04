import express from 'express'
import upload from '../../../utils/uploadMiddleware'
import uploadFile from './upload'
import deleteFile from './delete'

const router = express.Router()

router.post('/upload', upload.single('image'), uploadFile)
router.delete('/delete', deleteFile)

export default router
