import { decks } from "@/lib/data";
import Link from "next/link";

export default function DecksPage() {
    return (
        <main className="min-h-screen bg-rose-100/45 px-6 py-30 text-stone-800">
            <div className="mx-auto max-w-5xl">
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Decks
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                    Card decks
                </h1>
                <p className="mt-4 max-w-2xl text-stone-600">
                    This page will hold the animal cards, affirmations, tiny next steps,
                    and other soft interactive decks.
                </p>
            </div>
            {/* Deck cards */}
            <div className="mx-auto max-w-5xl card-decks mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {decks.map((deck) => (
                    <Link
                        href={`/decks/${deck.id}`}
                        key={deck.id}
                        className="block"
                    >
                        <article className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:scale-105 hover:shadow-md">
                            <div
                                className="aspect-[3/4] w-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url("${deck.coverImage}")`,
                                }}
                                aria-label={`${deck.title} cover`}
                            >
                                <div className="flex h-full flex-col justify-end bg-gradient-to-t from-stone-900/70 to-transparent text-white"> 
                                    <div className="p-6">
                                        <h2 className="text-lg font-semibold tracking-tight">
                                            {deck.title}
                                        </h2>

                                        <p className="mt-2 text-sm">
                                            {deck.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
            <div className="mt-12 mx-auto max-w-5xl">
                <p className="text-sm text-stone-500">
                    More decks coming soon! If you have ideas for decks, please reach
                    out.
                </p>
            </div>
        </main>
    );
}
                 