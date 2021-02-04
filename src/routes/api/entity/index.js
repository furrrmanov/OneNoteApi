import express from 'express'
import entityList from './entityList'
import createEntity from './createEntity'
import updateEntity from './updateEntity'
import deleteEntity from './deleteEntity'

const router = express.Router()

router.post('/entity-list', entityList)
router.post('/create-entity', createEntity)
router.post('/update-entity', updateEntity)
router.delete('/delete-entity', deleteEntity)

export default router
