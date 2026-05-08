import { Body, Controller, Get, Post } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { Public } from '../../common/decorators/public.decorator';

@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @Public()
  create(@Body() dto: CreateReminderDto) {
    return this.remindersService.create(dto);
  }

  @Get()
  @Public()
  findAll() {
    return this.remindersService.findAll();
  }
}