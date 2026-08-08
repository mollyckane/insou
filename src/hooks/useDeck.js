"use client";

import { useEffect, useState } from "react";

export default function useDeck(cards) {
    const [hasStarted, setHasStarted] =
        useState(false);

    const [currentCardIndex, setCurrentCardIndex] =
        useState(0);

    const [isRestarting, setIsRestarting] =
        useState(false);

    const [displayCards, setDisplayCards] =
        useState(cards);

    const [favoriteCardIds, setFavoriteCardIds] =
        useState(new Set());

    const [hasLoadedFavorites, setHasLoadedFavorites] =
        useState(false);

    const [showFavoritesOnly, setShowFavoritesOnly] =
        useState(false);

    useEffect(() => {
        try {
            const savedFavorites =
                localStorage.getItem("favorite-card-ids");

            if (savedFavorites) {
                setFavoriteCardIds(
                    new Set(JSON.parse(savedFavorites))
                );
            }
        } catch (error) {
            console.error(
                "Could not load favourite cards:",
                error
            );
        } finally {
            setHasLoadedFavorites(true);
        }
    }, []);

    useEffect(() => {
        if (!hasLoadedFavorites) return;

        localStorage.setItem(
            "favorite-card-ids",
            JSON.stringify([...favoriteCardIds])
        );
    }, [favoriteCardIds, hasLoadedFavorites]);

    const visibleCards = showFavoritesOnly
        ? displayCards.filter((card) =>
            favoriteCardIds.has(card.id)
        )
        : displayCards;

    const remainingCards =
        visibleCards.length -
        currentCardIndex -
        1;

    const currentCard = visibleCards[currentCardIndex];

    const canGoPrevious =
        hasStarted && currentCardIndex > 0;

    const canGoNext =
        !hasStarted ||
        currentCardIndex <
        visibleCards.length - 1;

    const canToggleFavorite =
        Boolean(currentCard);

    const isCurrentCardFavorite = currentCard
        ? favoriteCardIds.has(currentCard.id)
        : false;

    function startDeck() {
        setHasStarted(true);
    }

    function handleNextCard() {
        if (!hasStarted) {
            startDeck();
            return;
        }

        if (canGoNext) {
            setCurrentCardIndex(
                currentCardIndex + 1
            );
        }
    }

    function handlePreviousCard() {
        if (canGoPrevious) {
            setCurrentCardIndex(
                currentCardIndex - 1
            );
        }
    }

    function handleShuffle() {
        const shuffledCards = [...displayCards];

        for (
            let index = shuffledCards.length - 1;
            index > 0;
            index--
        ) {
            const randomIndex = Math.floor(
                Math.random() * (index + 1)
            );

            [
                shuffledCards[index],
                shuffledCards[randomIndex],
            ] = [
                    shuffledCards[randomIndex],
                    shuffledCards[index],
                ];
        }
        setDisplayCards(shuffledCards);
    }

    function handleRestart() {
        if (isRestarting) return;

        setIsRestarting(true);

        setTimeout(() => {
            setDisplayCards(cards);
            setCurrentCardIndex(0);
            setHasStarted(false);
            setIsRestarting(false);
        }, 400);
    }

    function handleToggleFavorite() {
        if (!currentCard) return;

        setFavoriteCardIds((previousFavorites) => {
            const updatedFavorites = new Set(
                previousFavorites
            );

            if (
                updatedFavorites.has(
                    currentCard.id
                )
            ) {
                updatedFavorites.delete(
                    currentCard.id
                );
            } else {
                updatedFavorites.add(currentCard.id);
            }

            return updatedFavorites;
        });
    }

    function handleToggleFavoritesOnly() {
        setShowFavoritesOnly((currentValue) => {
            setCurrentCardIndex(0);
            setHasStarted(true);
    
            return !currentValue;
        });
    }

    useEffect(() => {
        if (visibleCards.length === 0) {
            setCurrentCardIndex(0);
            return;
        }

        if (
            currentCardIndex >=
            visibleCards.length
        ) {
            setCurrentCardIndex(
                visibleCards.length - 1
            );
        }
    }, [visibleCards.length, currentCardIndex]);

    return {
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
        startDeck,
        favoriteCardIds,
        handleNextCard,
        handlePreviousCard,
        handleShuffle,
        handleRestart,
        handleToggleFavorite,
        handleToggleFavoritesOnly,
    };
}