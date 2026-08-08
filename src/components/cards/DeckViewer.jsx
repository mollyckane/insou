'use client';

import Image from 'next/image';
import DeckControls from '@/components/cards/DeckControls';
import CardBack from '@/components/cards/CardBack';
import { useState } from 'react';

export default function DeckViewer({ cards, coverImage }) {
    const [hasStarted, setHasStarted ] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isRestarting, setIsRestarting] = useState(false);
    const [displayCards, setDisplayCards] = useState(cards);
    const [favoriteCardIds, setFavoriteCardIds] = useState(new Set());

    function handleNextCard(){
        if(!hasStarted){
            setHasStarted(true);
            return;
        }
        if(currentCardIndex < displayCards.length - 1){
            setCurrentCardIndex(currentCardIndex + 1);
        }
    }

    function handlePreviousCard(){
        if(currentCardIndex > 0){
            setCurrentCardIndex(currentCardIndex - 1);
        }
    }

    function handleShuffle(){
        const shuffledCards = [...displayCards];

        for(let index = shuffledCards.length - 1; index > 0; index--){
            const randomIndex = Math.floor(Math.random() * (index+1));

            [shuffledCards[index], shuffledCards[randomIndex]] = 
            [shuffledCards[randomIndex], 
            shuffledCards[index]];
        }
        setDisplayCards(shuffledCards);
    }

    function handleRestart(){
        if(isRestarting) return;
        setIsRestarting(true);
        
        setTimeout(() => {
            setIsRestarting(false);
            setDisplayCards(cards);
            setCurrentCardIndex(0);
            setHasStarted(false);
        }, 200);
    }

    function handleToggleFavorite(){
        const currentCard = displayCards[currentCardIndex];

        if(!currentCard) return;

        setFavoriteCardIds((prevFavorites) => {
            const updatedFavorites = new Set(prevFavorites);

            if(updatedFavorites.has(currentCard.id)){
                updatedFavorites.delete(currentCard.id);
            } else {
                updatedFavorites.add(currentCard.id);
            }
            return updatedFavorites;
        });
    }

    const canGoPrevious = Boolean(
        hasStarted && currentCardIndex > 0
    );
    const canGoNext = Boolean(
        !hasStarted || currentCardIndex < displayCards.length - 1
    );
    const remainingCards = displayCards.length - currentCardIndex - 1;
    const currentCard = displayCards[currentCardIndex];
    const isCurrentCardFavorite =
        currentCard
            ? favoriteCardIds.has(currentCard.id)
            : false;

    return (
        <>
            <section className="mx-auto max-w-5xl card-decks mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {hasStarted ? (
                    <>
                        {remainingCards > 0 ? (
                            <CardBack 
                                coverImage={coverImage} 
                                onClick={handleNextCard}
                            />
                        ) : (
                                <div className="card-deck relative mt-6 flex min-h-[400px] w-full items-center justify-center rounded-lg border-2 border-dashed border-stone-300 text-center text-stone-400">
                                No cards remaining
                                <button
                                    type="button"
                                    onClick={handleRestart}
                                    aria-label="Restart deck"
                                    className="absolute bottom-4 right-4 flex flex-col items-center rounded-lg p-1 text-stone-400 transition border border-transparent hover:border-rose-300 hover:text-rose-500 cursor-pointer"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="text-3xl leading-none"
                                    >
                                        ↻
                                    </span>

                                    <span className="mt-1 text-sm font-medium">
                                        Restart
                                    </span>
                                </button>
                            </div>
                        )}

                        <div className={`relative mt-6 min-h-[400px] w-full ${isRestarting ? "deck-exit" : ""
                            }`}>
                            {displayCards
                                .slice(0, currentCardIndex + 1)
                                .map((card, index) => {
                                    const rotation =
                                        index % 2 === 0 ? -2 + index * 0.5 : 2 - index * 0.5;

                                    return (
                                        <article
                                            key={card.id}
                                            className={`card-deck card-enter absolute inset-0 flex min-h-[400px] w-full flex-col justify-between overflow-hidden rounded-lg border border-stone-200 bg-white text-left shadow-sm ${card.image ? "p-0" : "p-12"}`}
                                            style={{
                                                transform: `rotate(${rotation}deg)`,
                                                zIndex: index,
                                            }}
                                        >
                                            {card.image ? (
                                                <>
                                                    <div className="absolute inset-0">
                                                        <Image
                                                            src={card.image}
                                                            alt={card.caption}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>

                                                    {/* <p className="mt-6 text-center text-lg font-semibold text-stone-700">
                                                        {card.caption}
                                                    </p> */}
                                                </>
                                            ) : (
                                                <>
                                                    <span className="text-lg font-bold italic font-serif">
                                                        {card.text}
                                                    </span>

                                                    {card.author && (
                                                        <span className="text-sm text-stone-500">
                                                            — {card.author}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </article>
                                    );
                                })}
                        </div>
                    </>
                ) : (
                    <button 
                        type="button" 
                        onClick={() => setHasStarted(true)} 
                        className="card-deck rounded-lg border border-rose-300 shadow-sm transition hover:shadow-md hover:scale-102 min-h-[400px] cursor-pointer mt-6 flex flex-col justify-center" 
                        style={{ 
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("${coverImage}")`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center' 
                        }}
                    >
                        <span className="p-6 text-xl font-semibold text-white text-shadow-lg">
                            Click to reveal your first card
                        </span>
                    </button>
                )}
            </section>
            <DeckControls
                onPrevious={handlePreviousCard}
                onNext={handleNextCard}
                onShuffle={handleShuffle}
                canGoPrevious={canGoPrevious}
                canGoNext={canGoNext}
                onRestart={handleRestart}
                isCurrentCardFavorite={isCurrentCardFavorite}
                onToggleFavorite={handleToggleFavorite}
            />
        </>
    );
}
