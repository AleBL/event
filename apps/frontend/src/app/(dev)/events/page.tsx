import { events } from '@/core';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'react-qr-code';

export default function PageEvents() {
    return (
        <div className="grid grid-cols-3 gap-5">
            {events.map((event) => (
                <div key={event.id}
                    className="flex flex-col w-fit lg:w-auto lg:max-w-96 bg-zinc-800 rounded-lg overflow-hidden"
                >
                    <div className="relative w-full h-60">
                        <Image
                            src={event.image}
                            alt={event.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-center text-center p-7 gap-5">
                        <span className="text-lg font-black">{event.name}</span>
                        <p className="flex-1 text-sm textzinc-400">{event.description}</p>
                        <QRCode
                            value={JSON.stringify({ id: event.id, password: event.password })}
                            className="w-44 h-44"
                        />
                        
                        <div className="flex gap-5">
                            <Link
                                href={`/event/admin/${event.id}/${event.password}`}
                                className="flex-1 button red">
                                    Admin
                            </Link>

                            <Link
                                href={`/invitation/${event.alias}`}
                                className="flex-1 button green">
                                    Invite
                            </Link>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}