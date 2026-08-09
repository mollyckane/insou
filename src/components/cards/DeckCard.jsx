import Image from 'next/image';

export default function DeckCard({
    card,
    index,
    isRestartingDeck,
    disableRotation = false,
    className = "",
}) {
    const rotation = disableRotation
        ? 0
        : index % 2 === 0
            ? -2
            : index % 2 === 1
                ? 2
                : 0;

    return (
        <article
            key={card.id}
            className={`card-deck card-enter absolute inset-0 flex h-full min-h-0 w-full flex-col justify-between overflow-hidden rounded-lg border border-stone-200 bg-white text-left shadow-sm ${card.image ? "p-0" : "p-12"
                } ${className}`}
            style={{
                transform: `rotate(${rotation}deg)`,
                zIndex: index,
            }}
        >
            {card.number ? (
                <div className="flex h-full flex-col items-center justify-center gap-6 p-12 text-center font-serif">
                    <span className="text-6xl font-semibold tracking-[0.2em] text-stone-700">
                        {card.number}
                    </span>

                    <span className="text-lg leading-relaxed text-stone-600">
                        {card.meaning}
                    </span>
                </div>
            ) : card.image ? (
                <div className="absolute inset-0">
                    <Image
                        src={card.image}
                        alt={card.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
            ) : (
                <div className="flex h-full flex-col justify-between">
                    <span className="whitespace-pre-line text-lg font-bold italic font-serif">
                        {card.text}
                    </span>

                    {card.author && (
                        <span className="text-sm uppercase text-stone-500">
                            — {card.author}
                        </span>
                    )}
                </div>
            )}
        </article>
    );
}