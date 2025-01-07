import { Controller, Get, Post, Body, Param, Headers, Head } from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
    @Get()
    listMessages(){
        return "all the messages..."
    }

    @Get('/:id')
    getMessage(@Param('id') id:string){
       console.log(id)
    }

    @Post()
    createMessage(@Body() body:CreateMessageDto, @Headers() host:any ){
        console.log(host.host);
        console.log(body);
    }
}
