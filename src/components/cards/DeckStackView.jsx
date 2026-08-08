"use client";

import { useEffect, useRef } from "react";
import CardBack from "@/components/cards/CardBack";
import DeckCard from "@/components/cards/DeckCard";
import DeckCover from "@/components/cards/DeckCover";
import EmptyDeckState from "@/components/cards/EmptyDeckState";

export default function DeckStackView({
    hasStarted,
    isRestarting,
    visibleCards,
    currentCardIndex,
    remainingCards,
    showFavoritesOnly,
    coverImage,
    onStart,
    onNextCard,
    onRestart,
}) {
    const cardsRef = useRef(null);
    const hasAutoScrolled = useRef(false);

    const currentCards = visibleCards.slice(
        0,
        currentCardIndex + 1
    );

    useEffect(() => {
        if (
            !hasStarted ||
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
    }, [hasStarted]);

    return (
        <section className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {!hasStarted ? (
                <DeckCover
                    coverImage={coverImage}
                    onStart={onStart}
                />
            ) : visibleCards.length === 0 ? (
                <EmptyDeckState
                    message={
                        showFavoritesOnly
                            ? "No favourites"
                            : "No cards in this deck"
                    }
                />
            ) : (
                <>
                    {remainingCards > 0 ? (
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
                        className={`relative mt-6 min-h-[400px] w-full scroll-mt-6 ${isRestarting ? "deck-exit" : ""
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