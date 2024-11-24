import { events } from '@/core';
import Image from 'next/image';
import Link from 'next/link';

export default function PageEvents() {
    return (
        <div className="grid grid-cols-3 gap-5">
            {events.map((event) => (
                <div key={event.id}
                    className="flex flex-col w-fit lg:w-auto lg:max-w-96 bg-zinc-800 rounded-lg overflow-hidden"
                >
                    <div className="relative w-full h-44">
                        <Image
                            src={event.image}
                            alt={event.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 flex flex-col p-7">
                        <span className="text-lg font-black">{event.name}</span>
                        <span className="flex-1 text-sm textzinc-400">{event.description}</span>
                        
                        <div className="flex gap-5">
                            <Link
                                href={`/event/admin/${event.id}/${event.password}`}
                                className="flex-1 button red">
                                    Admin
                            </Link>

                            <Link
                                href={`/invitation/admin/${event.alias}`}
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