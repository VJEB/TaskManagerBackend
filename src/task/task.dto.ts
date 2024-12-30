import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Write blog post', description: 'Title of the task' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Write a post about NestJS', description: 'Description of the task', required: false })
  @IsString()
  description?: string;

  @ApiProperty({ example: false, description: 'Completion status of the task', default: false })
  @IsBoolean()
  completed?: boolean;

}
