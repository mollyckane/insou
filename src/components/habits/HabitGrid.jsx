"use client";

import { useState } from "react";

const MONTH_LABELS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function HabitGridStub() {
    // base scale in pixels
    const [scale, setScale] = useState(20);

    // clamp scale so it doesn't get ridiculous
    const minScale = 7;
    const maxScale = 40;

    const handleZoomIn = () => {
        setScale((prev) => Math.min(prev + 2, maxScale));
    };

    const handleZoomOut = () => {
        setScale((prev) => Math.max(prev - 2, minScale));
    };

    // derive size + gap from scale
    const cellSize = `${scale}px`;

    let gapPx;
     if (scale <= 10) {
        gapPx = 8;
    } else if (scale <= 40) {
        gapPx = 10;
    } else {
        gapPx = 1;
    }
    const cellGap = `${gapPx}px`;

    // 12 months, each with up to 31 days
    const months = Array.from({ length: 12 }, (_, monthIndex) => {
        const daysInMonth = getDaysInMonth(2026, monthIndex);
        return Array.from({ length: daysInMonth });
    });

    return (
        <div className="space-y-4 flex gap-5 justify-between">
            {/* Grid */}
            <div
                className="inline-flex gap-3"
                style={{
                    "--cell-size": cellSize,
                    "--cell-gap": cellGap,
                }}
            >
                {months.map((days, monthIndex) => (
                    <div key={monthIndex} className="flex flex-col items-center">
                        {/* month label */}
                        <span className="mb-2 text-xs font-medium text-stone-400">
                            {MONTH_LABELS[monthIndex]}
                        </span>

                        {/* vertical column of days */}
                        <div className="flex flex-col gap-[var(--cell-gap)]">
                            {days.map((_, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className="h-[var(--cell-size)] w-[var(--cell-size)] rounded-[3px] bg-stone-200"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* Zoom controls */}
            <div className="flex h-fit items-center justify-end gap-2 text-xs text-stone-500">
                <span className="mr-1">Dot size</span>
                <button
                    type="button"
                    onClick={handleZoomOut}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
                    aria-label="Decrease dot size"
                >
                    −
                </button>
                <button
                    type="button"
                    onClick={handleZoomIn}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
                    aria-label="Increase dot size"
                >
                    +
                </button>
            </div>
        </div>
    );
}

function getDaysInMonth(year, monthIndex) {
    // monthIndex: 0-11
    return new Date(year, monthIndex + 1, 0).getDate();
}