import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './task.dto';

@Controller('api/tasks')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Post()
  async create(@Body() data: CreateTaskDto) {
    return this.service.create(data);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  // GET /api/tasks/:id - Get task details by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  // PUT /api/tasks/:id - Update a task by ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CreateTaskDto) {
    return this.service.update(id, data);
  }

  // DELETE /api/tasks/:id - Delete a task by ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}