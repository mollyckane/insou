import Link from "next/link";
import { decks, quoteCards, affirmationCards, animalCards } from "@/lib/data";
import DeckViewer from "@/components/cards/DeckViewer";

export default async function DeckPage({ params }) {
    const { deckId } = await params;

    const selectedDeck = decks.find(
        (deck) => deck.id === deckId
    );

    return (
        <main className="min-h-screen bg-rose-100/45 px-6 py-30 text-stone-800">
            <div className="mx-auto max-w-5xl">
                <Link href="/decks" className="mb-5 text-sm uppercase tracking-[0.3em] text-stone-500">Back to decks</Link>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight">{selectedDeck.title}</h1>
                <p className="mt-4 max-w-2xl text-stone-600">{selectedDeck.description}</p>

                {selectedDeck.id === "quote-cards" && (
                    <DeckViewer 
                        cards={quoteCards} 
                        coverImage={selectedDeck.coverImage}
                    />
                )}  
                {selectedDeck.id === "affirmation-cards" && (
                    <DeckViewer
                        cards={affirmationCards}
                        coverImage={selectedDeck.coverImage}
                    />
                )} 
                {selectedDeck.id === "animal-cards" && (
                    <DeckViewer
                        cards={animalCards}
                        coverImage={selectedDeck.coverImage}
                    />
                )}
            </div>   
        </main>
    );
}