import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Event",
};
interface Props {
  params: {};
}
const EventPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-primary min-h-80 flex justify-center items-center">
        <h1 className="sm:text-6xl text-4xl text-white font-bold">Event</h1>
      </div>
      <div className="min-h-screen p-6">
        <div className="container mx-auto">Content goes here..</div>
      </div>
    </main>
  );
};

export default EventPage;
