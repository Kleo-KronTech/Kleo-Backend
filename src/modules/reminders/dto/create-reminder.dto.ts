import { IsArray, IsInt, IsString, Length, ArrayNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReminderDto {
  @ApiProperty({
    description: 'Reminder text content',
    example: 'Take medication'
  })
  @IsString()
  @Length(1, 255)
  text!: string;

  @ApiProperty({
    description: 'Selected day of month (based on your UI)',
    example: 26
  })
  @IsInt()
  date!: number;

  @ApiProperty({
    description: 'Time of reminder in HH:mm AM/PM format',
    example: '08:30 AM'
  })
  @IsString()
  @Length(1, 20)
  time!: string;

  @ApiProperty({
    description: 'Category of reminder',
    example: 'health'
  })
  @IsString()
  @Length(1, 40)
  category!: string;

  @ApiProperty({
    description: 'Days when reminder repeats (Mon, Tue, etc.)',
    example: ['Mon', 'Wed', 'Fri']
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  repeatDays?: string[];
}