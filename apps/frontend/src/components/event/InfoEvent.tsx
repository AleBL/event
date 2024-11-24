import Info from "@/components/shared/Info";
import { Event } from "@/core";

export interface InfoEventProps {
    event: Event;
    className?: string;
}

export default function InfoEvent(props: InfoEventProps) {
    const { event } = props;

    return (
        <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
            <div className="flex-1 flex items-center gap-4 borderzinc-800 px-6 py-3 rounded-lg">
                <span className="text-2xl font-black">{event.alias}: </span>
                <span className="text-xl text-zinc-300">{event.name}</span>
            </div>
            <div className="flex gap-2">
                <Info label="Date:">
                    <span>
                        {new Date(event.date!).toLocaleDateString()}
                        {" "}
                        {new Date(event.date!).toLocaleTimeString()}
                    </span>
                </Info>
                <Info label="Local:">{event.local}</Info>
            </div>

            <Info label="Description:">{event.description}</Info>
        </div>
    );
}