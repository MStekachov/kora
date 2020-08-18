import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './schemas/user.schema';
import { OrderInformation, OrderInformationSchema } from './schemas/order.information';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: OrderInformation.name, schema: OrderInformationSchema }
    ])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
