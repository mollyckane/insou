'use client';

import CardBack from '@/components/cards/CardBack';
import { useState } from 'react';

export default function DeckViewer({ cards, coverImage }) {
    const [hasStarted, setHasStarted ] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    function handleNextCard(){
        if(currentCardIndex < cards.length - 1){
            setCurrentCardIndex(currentCardIndex + 1);
        }
    }

    const remainingCards = cards.length - currentCardIndex - 1;

    return (
        <section className="mx-auto max-w-5xl card-decks mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hasStarted ? (
                <>
                    {remainingCards > 0 ? (
                        <CardBack 
                            coverImage={coverImage} 
                            onClick={handleNextCard}
                        />
                    ) : (
                        <div className="card-deck mt-6 flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-stone-300 text-center text-stone-400">
                            No cards remaining
                        </div>
                    )}

                    <div className="relative mt-6 min-h-[400px] w-full">
                        {cards
                            .slice(0, currentCardIndex + 1)
                            .map((card, index) => {
                                const isTopCard = index === currentCardIndex;

                                const rotation =
                                    index % 2 === 0 ? -2 + index * 0.5 : 2 - index * 0.5;

                                return (
                                    <article
                                        key={card.id}
                                        className={`card-deck absolute inset-0 flex min-h-[400px] w-full flex-col justify-between rounded-lg border border-stone-200 bg-white p-12 text-left shadow-sm`}
                                        style={{
                                            transform: `rotate(${rotation}deg)`,
                                            zIndex: index,
                                        }}
                                    >
                                        <span className="text-lg font-bold italic font-serif">
                                            {card.text}
                                        </span>

                                        <span className="text-sm text-stone-500">
                                            — {card.author}
                                        </span>
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
    );
}
