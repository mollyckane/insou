import Link from "next/link";
import BlobCursor from "@/components/effects/BlobCursor";
import NeuralGlow from "@/components/effects/NeuralGlow";

export default function HomePage() {
  const links = [
    { href: "/decks", label: "Card Decks" },
    { href: "/journal", label: "Journal" },
    { href: "/habits", label: "Habits" },
    { href: "/planner", label: "Planner" },
    { href: "/sound-garden", label: "Sound Garden" },
  ];

  return (
    <>
    
    <NeuralGlow />
    <BlobCursor />
    <main className="min-h-screen bg-stone-100 text-stone-800 ">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-30 z-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-500">
          INSOU
        </p>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          A soft interactive space for comfort, routine and small next steps.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
          This is the first version of INSOU. Started with a deck of cards and habit tracker blah blah blah want to make a sound garden if u even care God.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 z-100">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium transition hover:bg-rose-100 hover:text-indigo-400 hover:border-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}