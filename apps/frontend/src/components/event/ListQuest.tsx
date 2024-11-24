import QuestItem from "@/components/event/QuestItem";
import { Quest } from "@/core";

export interface ListQuestProps {
    quests: Quest[];
}

export default function ListQuest(props: ListQuestProps) {
    return (
        <div>
            <ul className="flex flex-col gap-2">
                {props.quests.map((quest) => (
                    <QuestItem key={quest.id} quest={quest} />
                ))}
            </ul>
        </div>
    );
}