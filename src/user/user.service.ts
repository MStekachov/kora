import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, IUser } from "./schemas/user.schema";
import { Model } from 'mongoose';
import { UserModule } from './user.module';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {
        console.log(this.userModel)
    }

    async create(createUserDto: IUser): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
      }
    
      async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
      }
}
