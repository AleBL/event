import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { completeEvent, completeQuest, Event, EventDate, Id, Quest } from 'core';
import { EventPrisma } from 'src/events/event.prisma';

@Controller('events')
export class EventsController {
    constructor(readonly eventPrisma: EventPrisma) {}

    @Get()
    async getEvents() {
        const events = await this.eventPrisma.getAll();
        return events.map(this.serializeEvent);
    }

    @Post("acess")
    async acessEvent(@Body() body: { id: string, password: string }) {
        const event = await this.eventPrisma.getById(body.id);
        
        if (!event) {
            throw new Error("Event not found");
        }

        if (event.password !== body.password) {
            throw new Error("Invalid password");
        }

        return this.serializeEvent(event);
    }

    @Get(':idOrAlias')
    async getEvent(@Param('idOrAlias') idOrAlias: string) {
        let event: Event;
        if(Id.valid(idOrAlias)) {
            event = await this.eventPrisma.getById(idOrAlias);
        } else {
            event = await this.eventPrisma.getByAlias(idOrAlias);
        }

        return this.serializeEvent(event);
    }

    @Get('/validate/:alias/:id')
    async getValidateAlias(@Param('alias') alias: string, @Param('id') id: string) {
        const event = await this.eventPrisma.getByAlias(alias);
        return { valid: !event || event.id === id };
    }

    @Post()
    async createEvent(@Body() event: Event) {
        const eventPersisted = await this.eventPrisma.getByAlias(event.alias);

        if (eventPersisted) {
            throw new Error("Event already exists");
        }

        const eventComplete = completeEvent(this.deserializeEvent(event));
        await this.eventPrisma.saveEvent(eventComplete);
    }

    @Post(':alias/quest')
    async createQuest(@Param('alias') alias: string, @Body() quest: Quest) {
        const event = await this.eventPrisma.getByAlias(alias);
        if (!event) {
            throw new Error("Event not found");
        }
        
        const questComplete = completeQuest(quest);
        await this.eventPrisma.saveQuest(event, questComplete);
        return this.serializeEvent(event);
    }

    private serializeEvent(event: Event) {
        if (!event) return null;
        return {
            ...event,
            date: EventDate.toString(event.date)
        };
    }

    private deserializeEvent(event: any): Event {
        return {
            ...event,
            date: EventDate.parse(event.date)
        };
    }
}
