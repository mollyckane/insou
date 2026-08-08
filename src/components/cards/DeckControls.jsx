"use client";

const controlButtonClasses =
    "rounded-lg border border-stone-300 bg-white/40 px-4 py-2 text-sm text-stone-700 transition hover:bg-rose-100 hover:border-rose-300 disabled:cursor-default disabled:opacity-40 backdrop-blur-sm backdrop-filter cursor-pointer";

export default function DeckControls({
    onPrevious,
    onNext,
    onRestart,
    onShuffle,
    onToggleFavorite,
    onToggleView,
    onToggleFavoritesOnly,
    canGoPrevious = false,
    canGoNext = false,
    canToggleFavorite = false,
    viewMode = "deck",
    showFavoritesOnly = false,
    isCurrentCardFavorite = false,
}) {
    const previousDisabled = !Boolean(canGoPrevious);
    const nextDisabled = !Boolean(canGoNext);

    return (
        <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
                type="button"
                onClick={onRestart}
                className={controlButtonClasses}
            >
                <span className="flex items-center p-0 m-0">
                    ↻
                </span>
            </button>
            <button
                type="button"
                onClick={onPrevious}
                disabled={previousDisabled}
                className={controlButtonClasses}
            >
                Previous
            </button>

            <button
                type="button"
                onClick={onNext}
                disabled={nextDisabled}
                className={controlButtonClasses}
            >
                Next
            </button>

            <button
                type="button"
                onClick={onShuffle}
                className={controlButtonClasses}
            >
                Shuffle
            </button>

            <button
                type="button"
                onClick={onToggleFavorite}
                disabled={!canToggleFavorite}
                aria-pressed={isCurrentCardFavorite}
                aria-label={isCurrentCardFavorite ? "Unfavourite this card" : "Favourite this card"}
                className={`${controlButtonClasses} ${isCurrentCardFavorite ? "group bg-yellow-500 border-yellow-600 hover:bg-stone-300 hover:border-stone-400 hover:text-stone-700 text-white font-bold" : ""}`}
            >
                {isCurrentCardFavorite ? (
                    <>
                        <span className="group-hover:hidden">
                            ★ Favourited
                        </span>
                        <span className="hidden group-hover:inline">
                            x Unfavourite
                        </span>
                    </>
                ) : (
                    " ☆ Favourite"
                )}
            </button>

            <button
                type="button"
                onClick={onToggleView}
                className={controlButtonClasses}
            >
                {viewMode === "deck" ? "Show all cards" : "Show as deck"}
            </button>

            <button
                type="button"
                onClick={onToggleFavoritesOnly}
                className={controlButtonClasses}
            >
                {showFavoritesOnly ? "Show all cards" : "Show favourites"}
            </button>
        </div>
    );
}