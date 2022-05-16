import mongoose from "mongoose";

export interface CreatePriceDto {
  _id?: mongoose.Types.ObjectId;
  product: string;
  store: string;
  city: string;
  price: number;
  discount: boolean;
  discount_price: number;
  discount_end: Date;
  createdAt: number;
}