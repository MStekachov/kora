import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class OrderInformation extends Document {
  @Prop()
  orderDate: Date;

  @Prop()
  sumOfOrder: number;

  @Prop()
  source: string;
}

export const OrderInformationSchema = SchemaFactory.createForClass(OrderInformation)

export interface IOrderInformation {
  readonly orderDate: Date;
  readonly sumOfOrder: number;
  readonly source: string;
}