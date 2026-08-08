import Image from 'next/image';

export default function DeckCard({
    card,
    index,
    isRestartingDeck,
    disableRotation = false,
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
}