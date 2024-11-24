import { Injectable } from '@nestjs/common';
import { Event, Quest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
    constructor(readonly prisma: PrismaProvider) {}

    saveEvent(event: Event) {
        return this.prisma.event.create({ data: event as any });
    }

    saveQuest(event: Event, quest: Quest) {
        return this.prisma.quest.create({
            data: {
                ...quest,
                countCompanions: +(quest.countCompanions ?? 0),
                event: {
                    connect: {
                        id: event.id,
                    },
                },
            }
        });
    }

    async getAll():Promise<Event[]> {
        return this.prisma.event.findMany() as any;
    }

    async getById(id: string, complete: boolean = false): Promise<Event | null> {
    return this.prisma.event.findUnique({
        select: {
            id: true,
            alias: true,
            name: true,
            date: true,
            local: true,
            description: true,
            image: true,
            imageBackground: true,
            expectedAudience: complete,
            password: complete,
            quests: complete
        },
        where: { id },
    }) as any;
    }

    async getByAlias(alias: string, includeQuests: boolean = false): Promise<Event | null> {
        return this.prisma.event.findUnique({
            where: { alias },
            include: { quests: includeQuests }
        }) as any;
    }
    
}
