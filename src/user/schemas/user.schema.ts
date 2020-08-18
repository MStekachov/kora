import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {OrderInformation} from './order.information'

@Schema()
export class User extends Document {
  @Prop()
  phone: string;

  @Prop()
  address: number;

  @Prop()
  name: string;

  @Prop([ OrderInformation ])
  orderInformation: OrderInformation[];
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface IUser {
  phone: string;
  address: number;
  name: string;
  orderInformation: OrderInformation[];
}