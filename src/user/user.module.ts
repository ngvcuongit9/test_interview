import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import {  UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';
// import {  UserRepository } from './repositories/user.repository';


@Module({
  imports: [  
  ],
  controllers: [UserController],
  providers: [
    UserService,
    // UserRepository
  ],
})
export class UserModule {}
