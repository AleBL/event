"use client";
import DashboardEvent from "@/components/event/DashboardEvent";
import FormEventPassword from "@/components/event/FormEventPassword";
import { Event,events, Quest } from "core";
import { use, useEffect, useState } from "react";

export default function PageAdminEvent(props: any) {
    const params: { all: string[] } = use(props.params);

    const id = params.all[0];
    const [event, setEvent] = useState<Event | null>(null);
    const [password, setPassword] = useState<string | null>(params.all[1] ?? null);

    const questConfirmeds = event?.quests.filter((quest) => quest.confirmed) ?? [];
    const questNotConfirmeds = event?.quests.filter((quest) => !quest.confirmed) ?? [];

    const total = questConfirmeds?.reduce(
        (total: number, quest: Quest) =>
            total + quest.countCompanions + 1, 0
    ) ?? 0;

    function loadEvent() {
        const event = events.find((e) => e.id === id && e.password === password);
        setEvent(event ?? null);
    }

    useEffect(() => {
        loadEvent();
    }, [id, password]);

    return (
        <div className="flex flex-col items-center">
            {event ? (
                <DashboardEvent
                    event={event}
                    confirmeds={questConfirmeds}
                    notConfirmeds={questNotConfirmeds}
                    total={total}
                />
            ) : (
                <FormEventPassword />
            )}
        </div>
    );
}