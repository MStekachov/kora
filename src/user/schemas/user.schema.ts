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
  readonly phone: string;
  readonly address: number;
  readonly name: string;
  readonly orderInformation: OrderInformation[];
}