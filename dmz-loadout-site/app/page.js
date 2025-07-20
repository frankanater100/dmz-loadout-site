import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">DMZ Loadout Generator</h1>
      <p className="mb-10 text-gray-400">Choose a tool below to get started:</p>
      <div className="space-y-4 text-lg">
        <Link href="/meta" className="hover:text-yellow-400">🔥 Meta Tier List</Link>
        <Link href="/builder" className="hover:text-yellow-400">🛠️ Loadout Builder</Link>
        <Link href="/generator" className="hover:text-yellow-400">🎲 Random Loadout</Link>
      </div>
    </main>
  );
}
