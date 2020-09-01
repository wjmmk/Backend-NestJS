import { Schema } from 'mongoose';

export const ProductSchema = new Schema({

    name: {type: String, required: true},
    description: {type: String, required: true},
    imageURL: {type: String, required: true}, 
    price: {type: Number, required: true},
    created_At: {type: Date, default: Date.now}

  })