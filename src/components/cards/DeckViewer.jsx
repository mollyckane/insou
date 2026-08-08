"use client";

import { useEffect, useRef, useState} from "react";
import CardBack from "@/components/cards/CardBack";
import DeckCard from "@/components/cards/DeckCard";
import DeckControls from "@/components/cards/DeckControls";
import DeckCover from "@/components/cards/DeckCover";
import DeckGrid from "@/components/cards/DeckGrid";
import EmptyDeckState from "@/components/cards/EmptyDeckState";
import useDeck from "@/hooks/useDeck";

export default function DeckViewer({
    cards,
    coverImage,
}) {
    const {
        hasStarted,
        isRestarting,
        visibleCards,
        currentCardIndex,
        remainingCards,
        canGoPrevious,
        canGoNext,
        canToggleFavorite,
        isCurrentCardFavorite,
        showFavoritesOnly,
        favoriteCardIds,
        handleNextCard,
        handlePreviousCard,
        handleShuffle,
        handleRestart,
        handleToggleFavorite,
        handleToggleFavoritesOnly,
        startDeck,
    } = useDeck(cards);

    const [viewMode, setViewMode] = useState("deck");
    const cardsRef = useRef(null);
    const hasAutoScrolled = useRef(false);

    useEffect(() => {
        if (
            !hasStarted ||
            viewMode !== "deck" ||
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
    }, [hasStarted, viewMode]);

    function handleToggleView() {
        setViewMode((currentMode) =>
            currentMode === "deck" ? "grid" : "deck"
        );
    }

    const currentCards = visibleCards.slice(
        0,
        currentCardIndex + 1
    );

    return (
        <> {viewMode === "grid" ? (
                <DeckGrid 
                    cards={visibleCards}
                    coverImage={coverImage}
                    favoriteCardIds={favoriteCardIds}
                />
            ) : (
                <section className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {!hasStarted ? (
                        <DeckCover
                            coverImage={coverImage}
                            onStart={startDeck}
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
                            {/* Left side */}
                            {remainingCards > 0 ? (
                                <CardBack
                                    coverImage={coverImage}
                                    onClick={handleNextCard}
                                />
                            ) : (
                                <EmptyDeckState
                                    message="No cards remaining"
                                    onRestart={handleRestart}
                                    showRestart
                                />
                            )}

                            {/* Right side: keep the pile rendered */}
                            <div
                                ref={cardsRef}
                                className={`relative mt-6 min-h-[400px] w-full ${isRestarting
                                    ? "deck-exit"
                                    : ""
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
            )
        }
            

            <DeckControls
                onPrevious={handlePreviousCard}
                onNext={handleNextCard}
                onRestart={handleRestart}
                onShuffle={handleShuffle}
                onToggleFavorite={handleToggleFavorite}
                onToggleFavoritesOnly={handleToggleFavoritesOnly}
                onToggleView={handleToggleView}
                viewMode={viewMode}
                canGoPrevious={canGoPrevious}
                canGoNext={canGoNext}
                canToggleFavorite={canToggleFavorite}
                isCurrentCardFavorite={isCurrentCardFavorite}
                showFavoritesOnly={showFavoritesOnly}
            />
        </>
    );
}