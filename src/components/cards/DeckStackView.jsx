"use client";

import { useEffect, useRef } from "react";
import CardBack from "@/components/cards/CardBack";
import DeckCard from "@/components/cards/DeckCard";
import DeckCover from "@/components/cards/DeckCover";
import EmptyDeckState from "@/components/cards/EmptyDeckState";

export default function DeckStackView({
    isDeckStarted,
    isRestartingDeck,
    displayedCards,
    currentCardIndex,
    remainingCardCount,
    showFavoritesOnly,
    coverImage,
    onStart,
    onNextCard,
    onRestart,
}) {
    const cardsRef = useRef(null);
    const hasAutoScrolled = useRef(false);

    const currentCards = displayedCards.slice(
        0,
        currentCardIndex + 1
    );

    useEffect(() => {
        if (
            !isDeckStarted ||
            hasAutoScrolled.current
        ) {
            return;
        }

        const isSmallScreen = window.matchMedia(
            "(max-width: 639px)"
        ).matches;

        if (!isSmallScreen) {
            return;
        }

        requestAnimationFrame(() => {
            cardsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });

        hasAutoScrolled.current = true;
    }, [isDeckStarted]);

    return (
        <section className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {!isDeckStarted ? (
                <DeckCover
                    coverImage={coverImage}
                    onStart={onStart}
                />
            ) : displayedCards.length === 0 ? (
                <EmptyDeckState
                    message={
                        showFavoritesOnly
                            ? "No favourites"
                            : "No cards in this deck"
                    }
                />
            ) : (
                <>
                    {remainingCardCount > 0 ? (
                        <CardBack
                            coverImage={coverImage}
                            onClick={onNextCard}
                        />
                    ) : (
                        <EmptyDeckState
                            message="No cards remaining"
                            onRestart={onRestart}
                            showRestart
                        />
                    )}

                    <div
                        ref={cardsRef}
                        className={`relative min-h-[400px] w-full scroll-mt-6 ${isRestartingDeck ? "deck-exit" : ""
                            }`}
                    >
                        {currentCards.map((card, index) => (
                            <DeckCard
                                key={card.id}
                                card={card}
                                index={index}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}