import { Streamings } from "@/models/streamings";

export default function Card({ streaming }: { streaming: Streamings }) {
  return (
    <main className="w-[304px] h-[456px] overflow-hidden shadow-lg border rounded-lg flex items-center justify-center ">
      <img src={`https://image.tmdb.org/t/p/w342/${streaming.poster_path || streaming.backdrop_path || streaming.profile_path}`} alt="" className="bg-cover h-full w-full" />
    </main>
  );
}