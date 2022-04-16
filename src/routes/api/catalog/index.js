import express from 'express'
import catalogList from './catalogList'
import createCatalog from './create'
import updateCatalog from './update'
import deleteCatalog from './delete'
import isAuthenticated from '../../../utils/authMiddleware/'

const router = express.Router()

router.post('/', isAuthenticated, catalogList)
router.post('/create-catalog', isAuthenticated, createCatalog)
router.post('/update-catalog', isAuthenticated, updateCatalog)
router.delete('/delete-catalog', isAuthenticated, deleteCatalog)

export default router
