"use client";

import { useEffect, useState } from "react";
import CardBack from "@/components/cards/CardBack";
import DeckCard from "@/components/cards/DeckCard";
import EmptyDeckState from "@/components/cards/EmptyDeckState";

function GridCard({
    card,
    coverImage,
    isFavorite,
    showFavoritesOnly,
    areAllCardsFaceUp,
}) {
    const shouldShowFaceUp = !showFavoritesOnly || isFavorite;
    const [isFaceUp, setIsFaceUp] = useState(shouldShowFaceUp);

    useEffect(() => {
        setIsFaceUp(shouldShowFaceUp);
    }, [shouldShowFaceUp]);

    function toggleCard() {
        setIsFaceUp((currentValue) => !currentValue);
    }

    return (
        <div className="relative aspect-[3/4] w-full [perspective:1000px]">
            <div
                role="button"
                tabIndex={0}
                onClick={toggleCard}
                className={[
                    "relative h-full w-full [transform-style:preserve-3d]",
                    "transition-transform duration-500",
                    isFaceUp
                        ? "[transform:rotateY(180deg)]"
                        : "",
                ].join(" ")}
            >
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <CardBack
                        coverImage={coverImage}
                        className="mt-0 h-full min-h-0"
                    />
                </div>

                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <DeckCard
                        card={card}
                        index={0}
                        disableRotation
                    />
                </div>
            </div>
        </div>
    );
}

export default function DeckGridView({
    cards = [],
    coverImage,
    favoriteCardIds = new Set(),
    showFavoritesOnly = false,
    areAllCardsFaceUp = true,
}) {
    if (cards.length === 0) {
        return (
            <EmptyDeckState message="No cards in this deck" />
        );
    }

    return (
        <section
            aria-label="Cards in this deck"
            className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
            {cards.map((card) => {
                const isFavorite = favoriteCardIds.has(card.id);

                return (
                    <GridCard
                        key={card.id}
                        card={card}
                        variant="grid"
                        coverImage={coverImage}
                        isFavorite={favoriteCardIds.has(card.id)}
                        showFavoritesOnly={showFavoritesOnly}
                        areAllCardsFaceUp={areAllCardsFaceUp}
                    />
                );
            })}
        </section>
    );
  }