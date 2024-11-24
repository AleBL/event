import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { completeQuest, Event, EventDate, events, Id, Quest } from 'core';

@Controller('events')
export class EventsController {

    @Get()
    async getEvents() {
        return events.map(this.serializeEvent);
    }

    @Post("acess")
    async acessEvent(@Body() body: { id: string, password: string }) {
        const event = events.find((event) => event.id === body.id && event.password === body.password);
        
        if (!event) {
            throw new Error("Event not found");
        }

        return this.serializeEvent(event);
    }


    private serializeEvent(event: Event) {
        if (!event) return null;
        return {
            ...event,
            date: EventDate.toString(event.date)
        };
    }

}
