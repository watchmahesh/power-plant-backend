import { Router } from 'express'
import { addBattries, getBattries } from '@controllers/battery.controller'
import {batteryValidator } from 'validators/battery.validation'

const batteryRouter = Router()
batteryRouter.post('/add',batteryValidator, addBattries)
batteryRouter.get('/list', getBattries)

export default batteryRouter
