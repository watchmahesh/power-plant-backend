import { Document, Schema, model } from 'mongoose'

const batterySchema = new Schema(
  {
    name: { type: String },
    postcode: { type: String },
    wattCapacity: { type: Number },
  },
  { timestamps: true }
)
export interface IBattery extends Document {
    name: String,
    postcode: String,
    wattCapacity: Number,
}

const Battery = model<IBattery>('Battery', batterySchema)
export default Battery
