import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { completeQuest, Event, EventDate, events, Id, Quest } from 'core';

@Controller('events')
export class EventsController {

    @Get()
    async getEvents() {
        return events.map(this.serializeEvent);
    }


    private serializeEvent(event: Event) {
        if (!event) return null;
        return {
            ...event,
            date: EventDate.toString(event.date)
        };
    }

}
