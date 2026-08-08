import { notFound } from "next/navigation";
import Link from "next/link";
import {
    decks,
    quoteCards,
    affirmationCards,
    animalCards,
} from "@/lib/data";
import DeckViewer from "@/components/cards/DeckViewer";

const cardsByDeckId = {
    "quote-cards": quoteCards,
    "affirmation-cards": affirmationCards,
    "animal-cards": animalCards,
};

export default async function DeckPage({ params }) {
    const { deckId } = await params;
    const selectedDeck = decks.find(
        (deck) => deck.id === deckId
    );
    
    if (!selectedDeck) {
        notFound();
    }

    const cards = cardsByDeckId[selectedDeck.id] ?? [];

    return (
        <main className="min-h-screen bg-rose-100/45 px-6 py-30 text-stone-800">
            <div className="mx-auto max-w-5xl">
                <Link
                    href="/decks"
                    className="mb-5 text-sm uppercase tracking-[0.3em] text-stone-500"
                >
                    Back to decks
                </Link>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight">
                    {selectedDeck.title}
                </h1>

                <p className="mt-4 max-w-2xl text-stone-600">
                    {selectedDeck.description}
                </p>

                <DeckViewer
                    cards={cards}
                    coverImage={selectedDeck.coverImage}
                />
            </div>
        </main>
    );
}