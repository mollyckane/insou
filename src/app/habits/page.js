"use client";

import { useState } from "react";
import Link from "next/link";
import { habits } from "@/lib/habits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    getHabitIcon,
    getHabitColors,
    getHabitKindLabel,
} from "@/lib/habitTheme";

export default function HabitsPage() {
    const [filter, setFilter] = useState("all"); // "all" | "positive" | "negative"

    const positiveHabits = habits.filter((h) => h.kind === "good");
    const negativeHabits = habits.filter((h) => h.kind === "bad");

    function renderHabitCard(habit) {
        const icon = getHabitIcon(habit.id);
        const { iconBg, iconText, dot } = getHabitColors(habit.id);
        const kindLabel = getHabitKindLabel(habit.kind);

        return (
            <Link
                href={`/habits/${habit.id}`}
                key={habit.id}
                className="group block"
            >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white/80 shadow-sm shadow-emerald-100/40 backdrop-blur-sm transition-transform transition-shadow duration-150 group-hover:-translate-y-0.5 group-hover:shadow-md">
                    <div className="flex flex-1 flex-col gap-3 p-5">
                        <div className="flex items-center justify-between gap-2">
                            <div className="inline-flex w-full items-center gap-2">
                                <span
                                    className={[
                                        "inline-flex h-9 w-9 items-center justify-center rounded-full shadow-sm",
                                        iconBg,
                                    ].join(" ")}
                                >
                                    <FontAwesomeIcon icon={icon} className={iconText} />
                                </span>
                                <div className="flex w-full flex-col">
                                    <h2 className="text-base font-semibold tracking-tight text-stone-900">
                                        {habit.title}
                                    </h2>
                                    <div className="mt-auto gap-4 flex items-center justify-between pt-1 text-xs text-stone-500">
                                        <p className="text-xs text-stone-500">
                                            {kindLabel || "Habit"}
                                        </p>
                                        <span className="inline-flex items-center gap-1">
                                            <span className={`h-2 w-2 rounded-full ${dot}`} />
                                            <span>Tap to see year dots</span>
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-emerald-700">
                                            View
                                            <span aria-hidden>↗</span>
                                        </span>
                                    
                                </div>
                            </div>
                        </div>
                       
                        </div>
                    </div>
                </article>
            </Link>
        );
    }

    return (
        <main className="min-h-screen bg-emerald-50 px-4 py-30 text-stone-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-8">
                {/* Header */}
                <header className="space-y-3">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">
                        Habits
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Gentle habit tracking
                    </h1>
                    <p className="max-w-2xl text-sm text-stone-600 sm:text-base">
                        Track positive and negative habits with a soft, yearly dot view.
                    </p>
                </header>

                {/* Filter toggle */}
                <section className="flex items-center gap-3 text-sm">
                    <span className="text-stone-600">Show:</span>
                    <button
                        type="button"
                        onClick={() => setFilter("all")}
                        className={[
                            "rounded-full px-3 py-1 cursor-pointer",
                            filter === "all"
                                ? "bg-emerald-600 text-white"
                                : "bg-white text-stone-700 border border-stone-200",
                        ].join(" ")}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        onClick={() => setFilter("positive")}
                        className={[
                            "rounded-full px-3 py-1 cursor-pointer",
                            filter === "positive"
                                ? "bg-emerald-600 text-white"
                                : "bg-white text-stone-700 border border-stone-200",
                        ].join(" ")}
                    >
                        Positive
                    </button>
                    <button
                        type="button"
                        onClick={() => setFilter("negative")}
                        className={[
                            "rounded-full px-3 py-1 cursor-pointer",
                            filter === "negative"
                                ? "bg-emerald-600 text-white"
                                : "bg-white text-stone-700 border border-stone-200",
                        ].join(" ")}
                    >
                        Negative
                    </button>
                </section>

                {/* Positive habits section */}
                {(filter === "all" || filter === "positive") && (
                    <section className="space-y-3">
                        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                            Positive habits
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {positiveHabits.map(renderHabitCard)}
                        </div>
                    </section>
                )}

                {/* Negative habits section */}
                {(filter === "all" || filter === "negative") && (
                    <section className="space-y-3">
                        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                            Negative habits
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {negativeHabits.map(renderHabitCard)}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}