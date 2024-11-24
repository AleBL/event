import { use } from "react";

export default function PageInvitation(props: any) {
    const params: { alias: string } = use(props.params);

    return (
        <div>
            <span>{ params.alias }</span>
        </div>
    );
}
