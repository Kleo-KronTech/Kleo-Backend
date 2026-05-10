import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { SendMessageDto } from './dto/send-message.dto';
import { Public } from '../../common/decorators/public.decorator';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('send')
  @Public()
  send(@Body() dto: SendMessageDto) {
    return this.messagesService.send(dto);
  }
}