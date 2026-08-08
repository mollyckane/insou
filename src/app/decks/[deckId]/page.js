import { decks } from "../../../lib/data";

export default async function DeckPage({ params }) {
    const { deckId } = await params;

    const selectedDeck = decks.find(
        (deck) => deck.id === deckId
    );

    return (
        <main>
            <h1>{selectedDeck.title}</h1>
            <p>{selectedDeck.description}</p>
        </main>
    );
}