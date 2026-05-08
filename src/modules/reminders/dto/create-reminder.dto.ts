import {
  IsArray,
  IsDateString,
  IsString,
  Length,
} from "class-validator";

export class CreateReminderDto {
  @IsString()
  @Length(1, 255)
  text!: string;

  @IsDateString()
  reminderDate!: string;

  @IsString()
  category!: string;

  @IsArray()
  repeatDays!: string[];
}