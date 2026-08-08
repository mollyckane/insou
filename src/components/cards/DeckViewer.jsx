"use client";

import { useState } from "react";
import DeckControls from "@/components/cards/DeckControls";
import DeckGridView from "@/components/cards/DeckGridView";
import DeckStackView from "@/components/cards/DeckStackView";
import useDeck from "@/hooks/useDeck";

export default function DeckViewer({
    cards,
    coverImage,
}) {
    const {
        isDeckStarted,
        isRestartingDeck,
        displayedCards,
        currentCardIndex,
        remainingCardCount,
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

    function handleToggleView() {
        setViewMode((currentMode) =>
            currentMode === "deck" ? "grid" : "deck"
        );
    }

    return (
        <>
            {viewMode === "grid" ? (
                <DeckGridView
                    cards={displayedCards}
                    coverImage={coverImage}
                    favoriteCardIds={favoriteCardIds}
                />
            ) : (
                <DeckStackView
                    isDeckStarted={isDeckStarted}
                    isRestartingDeck={isRestartingDeck}
                    displayedCards={displayedCards}
                    currentCardIndex={currentCardIndex}
                    remainingCardCount={remainingCardCount}
                    showFavoritesOnly={showFavoritesOnly}
                    coverImage={coverImage}
                    onStart={startDeck}
                    onNextCard={handleNextCard}
                    onRestart={handleRestart}
                />
            )}

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