import { Router } from 'express'
import batteryRouter from './battery.routes'
const router = Router()
router.use('/batteries', batteryRouter)
export default router
