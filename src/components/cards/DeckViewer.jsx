'use client';

import { useState } from 'react';

export default function DeckViewer({ cards }) {
    const [hasStarted, setHasStarted ] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    function handleNextCard(){
        if(currentCardIndex < cards.length - 1){
            setCurrentCardIndex(currentCardIndex + 1);
        }
    }

    const isLastCard = currentCardIndex === cards.length - 1;

    return (
        <section className="mx-auto max-w-5xl card-decks mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hasStarted ? (
                <button
                    type="button"
                    onClick={handleNextCard}
                    disabled={isLastCard}
                    className="card-deck mt-6 flex min-h-[400px] w-full cursor-pointer flex-col justify-between rounded-lg border border-stone-200 bg-white p-12 text-left shadow-sm transition hover:shadow-md disabled:cursor-default"
                >
                    <span className="text-lg font-bold italic font-serif">
                        {cards[currentCardIndex].text}
                    </span>

                    <span className="text-sm text-stone-500">
                        — {cards[currentCardIndex].author}
                    </span>
                </button>
            ) : (
                <button 
                    type="button" 
                    onClick={() => setHasStarted(true)} 
                    className="card-deck rounded-lg border border-rose-300 shadow-sm transition hover:shadow-md hover:scale-102 min-h-[400px] cursor-pointer mt-6 flex flex-col justify-center" 
                    style={{ 
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/images/quotes-card-cover.webp")', 
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
