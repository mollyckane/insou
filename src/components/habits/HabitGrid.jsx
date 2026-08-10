"use client";

import { useMemo, useState } from "react";
import { getHabitColors } from "@/lib/habitTheme";

const MONTH_LABELS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function getDaysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0).getDate();
}

function pad2(n) {
    return n.toString().padStart(2, "0");
}

function getDateKey(year, monthIndex, dayIndex) {
    const month = pad2(monthIndex + 1);
    const day = pad2(dayIndex + 1);
    return `${year}-${month}-${day}`;
}

export default function HabitGrid({ habitId, year = 2026 }) {
    const [scale, setScale] = useState(20);
    const minScale = 7;
    const maxScale = 36;

    const handleZoomIn = () => {
        setScale((prev) => Math.min(prev + 2, maxScale));
    };

    const handleZoomOut = () => {
        setScale((prev) => Math.max(prev - 2, minScale));
    };

    const cellSize = `${scale}px`;

    let gapPx;
    if (scale <= 10) {
        gapPx = 8;
    } else if (scale <= 36) {
        gapPx = 10;
    } else {
        gapPx = 1;
    }
    const cellGap = `${gapPx}px`;

    const months = useMemo(
        () =>
            Array.from({ length: 12 }, (_, monthIndex) => {
                const daysInMonth = getDaysInMonth(year, monthIndex);
                return Array.from({ length: daysInMonth }, (_, dayIndex) =>
                    getDateKey(year, monthIndex, dayIndex)
                );
            }),
        [year]
    );

    const [activeDates, setActiveDates] = useState(new Set());

    function toggleDate(dateKey) {
        setActiveDates((prev) => {
            const next = new Set(prev);
            if (next.has(dateKey)) {
                next.delete(dateKey);
            } else {
                next.add(dateKey);
            }
            return next;
        });
    }

    const { dot } = getHabitColors(habitId);
    // console.log("HabitGrid props:", { habitId, year });
    // console.log("HabitGrid theme:", { habitId, dot });

    return (
        <div className="space-y-4 flex gap-5 flex-wrap-reverse">
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
                        <span className="mb-2 text-xs font-medium text-stone-400">
                            {MONTH_LABELS[monthIndex]}
                        </span>

                        <div className="flex flex-col gap-[var(--cell-gap)]">
                            {days.map((dateKey, dayIndex) => {
                                const isActive = activeDates.has(dateKey);
                                const reactKey = `${monthIndex}-${dayIndex}-${dateKey}`;

                                return (
                                    <button
                                        key={reactKey}
                                        type="button"
                                        onClick={() => toggleDate(dateKey)}
                                        className={[
                                            "h-[var(--cell-size)] w-[var(--cell-size)] rounded-[3px]",
                                            "border transition-colors duration-100",
                                            isActive
                                                ? `${dot} border-transparent`
                                                : "bg-stone-200 border-stone-200/70",
                                        ].join(" ")}
                                        title={dateKey}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            {/* Stats */}
            <div className="flex flex-col justify-between text-sm text-stone-500">
                <div>
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
                        Stats
                    </div>
                    <div className="mt-2">
                        <span className="text-2xl font-semibold text-stone-900">
                            {activeDates.size}
                        </span>
                        <span className="ml-2 text-xs text-stone-500">days in {year}</span>
                    </div>
                </div>

                {/* You can add more later (e.g. percentage) */}
            </div>

            {/* Zoom controls */}
            <div className="flex h-fit flex-1 flex-wrap items-center justify-end gap-2 text-xs text-stone-500">
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