import { Event } from "core";
import QRCode from "react-qr-code";

export interface AcessViaQrCodeProps {
    event: Event
}


export default function AcessViaQrCode(props: AcessViaQrCodeProps) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center border border-zinc-800 px-10">
            <span className="text-sm font-light text-zinc-400">Acess via Mobile</span>
            <QRCode 
                value={JSON.stringify({
                    id: props.event.id,
                    password: props.event.password
                })}
                className="w-40 h-40"
            />
        </div>
    );
}