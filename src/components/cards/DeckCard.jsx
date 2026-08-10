import Image from 'next/image';

export default function DeckCard({
    card,
    index,
    isRestartingDeck,
    disableRotation = false,
    className = "",
    variant = "grid",
}) {
    const rotation = disableRotation
        ? 0
        : index % 2 === 0
            ? -2
            : index % 2 === 1
                ? 2
                : 0;

    const basePadding = card.image ? "p-0" : variant === "stack" ? "p-8" : "p-5";
    const textSize =
        variant === "stack"
        ? "text-xl leading-relaxed"
        : "text-lg leading-relaxed";

      return (
    <article
      key={card.id}
      className={`card-deck card-enter absolute inset-0 flex h-full min-h-0 w-full flex-col justify-between overflow-hidden rounded-lg border border-stone-200 bg-white text-left shadow-sm ${basePadding} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex: index,
      }}
    >
      {card.number ? (
        <div className="flex h-full flex-col items-center justify-center gap-6 text-center font-serif">
          <span className="text-6xl font-semibold tracking-[0.2em] text-stone-700">
            {card.number}
          </span>

          <span className={`${textSize} text-stone-600`}>
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
          <span
            className={`whitespace-pre-line font-bold italic font-serif ${
              variant === "stack" ? "text-xl leading-relaxed" : "text-lg"
            }`}
          >
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
