import { PrismaClient } from "@prisma/client";
import { events } from "core";

async function seed() {
    const prisma = new PrismaClient();

    const transactions = events.map(async (event) => {
        try {
            await prisma.event.create({
                data: {
                    id: event.id,
                    alias: event.alias,
                    password: event.password,
                    name: event.name,
                    date: event.date,
                    local: event.local,
                    description: event.description,
                    image: event.image,
                    imageBackground: event.imageBackground,
                    expectedAudience: event.expectedAudience,
                    quests: {
                        create: event.quests.map((quest) =>({
                            id: quest.id,
                            name: quest.name,
                            email: quest.email,
                            confirmed: quest.confirmed,
                            hasCompanions: quest.hasCompanions,
                            countCompanions: quest.countCompanions
                        }))
                    }
                }
            })
        } catch (error) {
            console.log('Error:', error);
        }
    });

    await Promise.all(transactions);
}

seed();
