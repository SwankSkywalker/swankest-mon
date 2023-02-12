export default function Home() {
  return (
  <div className="h-screen w-screen flex flex-col justify-center">
    <div className="text-2xl text-center">Which Pokémon is roundest?</div>
    <div className="border rounded p-8 flex justify-between">
      <div className="w-16 h-16 bg-red-200"/>
      <div>Vs</div>
      <div className="w-16 h-16 bg-red-200"/>
    </div>
  </div>
  );
}
