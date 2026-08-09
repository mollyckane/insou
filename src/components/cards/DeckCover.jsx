"use client";

export default function DeckCover({
    coverImage,
    onStart,
}) {
    return (
        <button
            type="button"
            onClick={onStart}
            className="card-deck aspect-[3/4] flex min-h-[400px] cursor-pointer flex-col justify-center rounded-lg border border-rose-300 shadow-sm transition hover:scale-102 hover:shadow-md"
            style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.1),
                    rgba(0, 0, 0, 0.1)
                ), url("${coverImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <span className="p-6 text-xl font-semibold text-white text-shadow-lg">
                Click to reveal your first card
            </span>
        </button>
    );
}