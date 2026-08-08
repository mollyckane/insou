"use client";

export default function EmptyDeckState({
    message,
    onRestart,
    showRestart = false,
}) {
    return (
        <div className="card-deck relative mt-6 flex min-h-[400px] w-full items-center justify-center rounded-lg border-2 border-dashed border-stone-300 text-center text-stone-400">
            <span>{message}</span>

            {showRestart && (
                <button
                    type="button"
                    onClick={onRestart}
                    aria-label="Restart deck"
                    className="absolute bottom-4 right-4 flex cursor-pointer flex-col items-center rounded-lg border border-transparent p-1 text-stone-400 transition hover:border-rose-300 hover:text-rose-500"
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
            )}
        </div>
    );
}