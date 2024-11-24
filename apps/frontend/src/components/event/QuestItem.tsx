import { Quest } from "@/core";

export interface QuestItemProps {
    quest: Quest
}

export default function QuestItem(props: QuestItemProps) {
    return (
        <li className="flex justify-between bg-black/40 px-6 py-3 rounded-md border border-zinc-800">
            <div className="flex flex-col">
                <span className="text-xl font-bold">{ props.quest.name }</span>
                <span className="text-sm text-zinc-400">{ props.quest.email }</span>
            </div>

            <div className="flex flex-col items-end">
                <span className="text-zinc-400 text-sm">Companions</span>
                <span className="text-xl font-bold">{ props.quest.countCompanions }</span>
            </div>
        </li>
    );
}