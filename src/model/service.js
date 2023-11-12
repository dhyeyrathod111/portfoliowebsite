import mongoose from 'mongoose';
const servicesschema = new mongoose.Schema({
    name: String, description: String
});
export const Servicesmodel = mongoose.models.services || mongoose.model("services", servicesschema);