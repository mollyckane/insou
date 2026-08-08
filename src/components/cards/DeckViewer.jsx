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
        allCards,
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
    const [areAllCardsFaceUp, setAreAllCardsFaceUp] = useState(false);

    function handleToggleView() {
        setViewMode((currentMode) => {
            const nextMode = currentMode === "deck" ? "grid" : "deck";

            if(nextMode === "grid"){
                setAreAllCardsFaceUp(true);
            }
            if(nextMode === "deck"){
                setAreAllCardsFaceUp(false);
            }
            return nextMode;
        });
    }

    return (
        <>
            {viewMode === "grid" ? (
                <DeckGridView
                    cards={allCards}
                    coverImage={coverImage}
                    favoriteCardIds={favoriteCardIds}
                    showFavoritesOnly={showFavoritesOnly}
                    areAllCardsFaceUp={areAllCardsFaceUp}
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