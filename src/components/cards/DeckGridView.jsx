"use client";

import DeckCard from "@/components/cards/DeckCard";
import EmptyDeckState from "@/components/cards/EmptyDeckState";

export default function DeckGridView({ cards = [] }) {
    if (cards.length === 0) {
        return (
            <EmptyDeckState message="No cards in this deck" />
        );
    }

    return (
        <section
            aria-label="Cards in this deck"
            className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="relative min-h-[400px] w-full"
                >
                    <DeckCard
                        card={card}
                        index={0}
                        disableRotation={true}
                    />
                </div>
            ))}
        </section>
    );
}