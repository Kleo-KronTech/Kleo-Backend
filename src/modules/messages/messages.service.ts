import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CommonService } from '../../common/services/common.service';
import { SendMessageDto } from './dto/send-message.dto';
import { messages } from '../../database/schema/messages';

@Injectable()
export class MessagesService extends CommonService {
  async send(dto: SendMessageDto) {
    try {
      await this.db.insert(messages).values({
        message: dto.message,
        patientId: dto.patientId,
        sentBy: dto.sentBy,
      });

      console.log("Message saved to DB:", dto);
      return { success: true, message: dto.message };
    } catch (error) {
      console.error("Send message error:", error);
      throw new InternalServerErrorException();
    }
  }
}