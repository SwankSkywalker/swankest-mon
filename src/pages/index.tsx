//import { api } from "@/utils/api";

import { getOptionsForVote } from "@/utils/getRandomPokemon";

export default function Home() {
  const [first, second] = getOptionsForVote();
    return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokémon is roundest?</div>
      <div className="p-2 "/>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-blue-500">{first}</div>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-green-500">{second}</div>
      </div>
    </div>
    );
}
