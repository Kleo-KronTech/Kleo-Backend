import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CommonService } from '../../common/services/common.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { reminders } from '../../database/schema/reminders';

@Injectable()
export class RemindersService extends CommonService {
  
  async create(dto: CreateReminderDto) {
    try {
      const id = crypto.randomUUID();

      const reminder = {
        id,
        text: dto.text,
        date: dto.date,
        time: dto.time,
        category: dto.category,
        repeatDays: dto.repeatDays ?? [],
      };

      await this.db.insert(reminders).values(reminder);

      return {
        message: 'Reminder created successfully',
        reminder,
      };
    } catch (e) {
      console.error('Create reminder error:', e);
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