import { SuccessBattery } from '@constants/battery.contant';
import { Request } from 'express';
import { IReturnResponse } from '@interfaces/response'
import Battery from '@models/battery.model';


const batteryServices = {


    add: async (req: Request): Promise<IReturnResponse> => {
        try {
            const { batteries } = req.body;
            const data = await Battery.insertMany(batteries);
            return {
                ok: true,
                status: SuccessBattery.addBattery.status,
                message: SuccessBattery.addBattery.msg,
                data: data
            }
        } catch (error) {
            console.error(error);
            return {
                ok: true,
                status: SuccessBattery.error.status,
                message: SuccessBattery.error.msg,
                data: {}
            }
        }
    },

    getBatteries: async (req: Request): Promise<IReturnResponse> => {
        try {
            const filter = await batteryServices.filterQuery(req);
            const batteries = await Battery.find(filter).select('-createdAt -updatedAt -__v').sort({ name: 1 });
            const totalWattCapacity = batteries.reduce((total, battery) => total + battery.wattCapacity.valueOf(), 0);
            const averageWattCapacity = (totalWattCapacity / (batteries.length || 1)).toFixed(2);
            const statistics = {
                totalWattCapacity: totalWattCapacity,
                averageWattCapacity: parseFloat(averageWattCapacity),
            };
            return {
                ok: true,
                status: SuccessBattery.listBattery.status,
                message: SuccessBattery.listBattery.msg,
                data: { batteries, statistics },
            }
        } catch (error) {
            console.error(error);
            return {
                ok: false,
                status: SuccessBattery.error.status,
                message: SuccessBattery.error.msg,
                data: {}
            }
        }
    },

    filterQuery: async (req: any) => {
        const { minPostcode, maxPostcode } = req.query;
        let filter: any = {};
        if (minPostcode && maxPostcode) {
            filter.postcode = { $gte: minPostcode, $lte: maxPostcode };
        }
        return filter;
    }
}
export default batteryServices
