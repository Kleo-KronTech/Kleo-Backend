import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CommonService } from '../../common/services/common.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { reminders } from '../../database/schema/reminders';

@Injectable()
export class RemindersService extends CommonService {
  
  async create(createReminderDto: CreateReminderDto) {
  try {
    await this.db.insert(reminders).values({
      text: createReminderDto.text,
      reminderDate: new Date(createReminderDto.reminderDate),
      category: createReminderDto.category,
      repeatDays: createReminderDto.repeatDays,
    });

    return {
      message: "Reminder created successfully",
    };

  } catch (error) {
    console.error("Create reminder error:", error);
    throw new InternalServerErrorException();
  }
}

  async findAll() {
    try {
      const result = await this.db
        .select()
        .from(reminders);

      return result;
    } catch (e) {
      console.error('Fetch reminders error:', e);
      throw new InternalServerErrorException();
    }
  }
}