import { connectionstr } from '@/model/connection'
import { Servicesmodel } from '@/model/service';
import mongoose from 'mongoose'

export default async function handler(req, res) {
    const apiprops = req.query.servicesdetails;
    await mongoose.connect(connectionstr);
    const data = await Servicesmodel.findOne({
        url_slug: apiprops
    });
    res.status(200).json({ serviceresponse: data })
}
