import { Controller, Get, Post, Body, Param, Headers, Head, NotFoundException} from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messageService:MessagesService;

    constructor(){
        this.messageService = new MessagesService();
    }

    @Get()
    listMessages(){
        return this.messageService.findAll()
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string){
       const message = await this.messageService.findOne(id)

       if(!message){
        throw new NotFoundException("Message Not Found")
       }
       return message;
    }

    @Post()
    createMessage(@Body() body:CreateMessageDto, @Headers() host:any ){
        return this.messageService.create(body.content)
    }
}
