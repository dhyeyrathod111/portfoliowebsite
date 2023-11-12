import { connectionstr } from '@/model/connection'
import { Servicesmodel } from '@/model/service';
import mongoose from 'mongoose'

export default async function handler(req, res) {
  await mongoose.connect(connectionstr);
  const data = await Servicesmodel.find();
  res.status(200).json({ serviceresponse: data })
}





