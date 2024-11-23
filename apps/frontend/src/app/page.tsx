import Page from "@/components/template/Page";
import { Event } from "@/core";

export default function Home() {
  const e: Partial<Event> = {};
  return (
    <Page className="w-full">
      <div>Inicio</div>
    </Page>
  );
}
