import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Loads environment variables from a .env file
    MongooseModule.forRoot(process.env.MONGO_URI),
    TaskModule
  ],
})
export class AppModule {}
