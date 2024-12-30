import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { CreateTaskDto } from './task.dto';  // Assuming it's in the task.dto.ts file

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  // Create a new task
  async create(data: CreateTaskDto): Promise<Task> {
    const created = new this.taskModel(data);
    return created.save();
  }

  // Get all tasks
  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  // Get a task by ID
  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  // Update a task by ID
  async update(id: string, data: CreateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // Delete a task by ID
  async remove(id: string): Promise<void> {
    await this.taskModel.findByIdAndDelete(id).exec();
  }
}