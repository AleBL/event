import AcessViaQrCode from "@/components/event/AcessViaQrCode";
import InfoEvent from "@/components/event/InfoEvent";
import ListQuest from "@/components/event/ListQuest";
import Statistic from "@/components/shared/Statistic";
import { Event, Quest } from "@/core";

export interface DashboardEventProps {
    event: Event;
    confirmeds: Quest[];
    notConfirmeds: Quest[];
    total: number;
}

export default function DashboardEvent(props: DashboardEventProps) {
    return (
    <div className="flex flex-col gap-2">
        <div className="flex gap-2 self-stretch">
            <InfoEvent event={props.event}/>
            <AcessViaQrCode event={props.event}/>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-4">
            <Statistic
                text="Expected quests:"
                value={props.event.expectedAudience}
                image="/icons/quests.svg"
            />

            <Statistic
                text="Confirmeds:"
                value={props.confirmeds.length}
                image="/icons/confirmeds.svg"
            />

            <Statistic
                text="Total confirmed:"
                value={props.total}
                image="/icons/quests.svg"
            />
        </div>

        <button className="button blue self-end mt-12">
            <span>Refresh list quest</span>
        </button>

        <span>
            Quests confirmeds:
        </span>
        <ListQuest quests={props.confirmeds} />
        <span>
            Quests not confirmeds:
        </span>
        <ListQuest quests={props.notConfirmeds} />
    </div>
    );
}