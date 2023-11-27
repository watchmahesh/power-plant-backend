import asyncWrapper from '@utils/asyncWrapper'
import { returnResponse } from '@utils/returnResponse'
import batteryServices from '@services/battery.services'

// Endpoint for adding batteries
export const addBattries = asyncWrapper(async (req, res) => {
  const returns = await batteryServices.add(req)
  returnResponse(res, returns)
})

// Endpoint for fetching batteries with statistics
export const getBattries = asyncWrapper(async (req, res) => {
    const returns = await batteryServices.getBatteries(req)
    returnResponse(res, returns)
  })
