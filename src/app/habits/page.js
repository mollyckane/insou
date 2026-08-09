import Link from "next/link";
import { habits } from "@/lib/habits";

export default function HabitsPage() {
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
                        Track helpful and unhelpful habits with a soft, yearly dot view.
                        No streak panic, no guilt — just an honest picture over time.
                    </p>
                </header>

                {/* Habit cards */}
                <section className="space-y-4">
                    <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                        Your habits
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {habits.map((habit) => (
                            <Link
                                href={`/habits/${habit.id}`}
                                key={habit.id}
                                className="group block"
                            >
                                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-emerald-100 bg-white/80 shadow-sm shadow-emerald-100/40 backdrop-blur-sm transition-transform transition-shadow duration-150 group-hover:-translate-y-0.5 group-hover:shadow-md">
                                    <div className="flex flex-1 flex-col gap-3 p-5">
                                        <div className="flex items-center justify-between gap-2">
                                            <h2 className="text-base font-semibold tracking-tight text-stone-900">
                                                {habit.title}
                                            </h2>

                                            {/* Small pill badge for kind (if present) */}
                                            {habit.kind && (
                                                <span
                                                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${habit.kind === "building"
                                                            ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100"
                                                            : "bg-rose-50 text-rose-800 ring-1 ring-rose-100"
                                                        }`}
                                                >
                                                    {habit.kind === "building"
                                                        ? "Building"
                                                        : "Reducing"}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm leading-relaxed text-stone-600">
                                            {habit.description}
                                        </p>

                                        {/* Subtle footer hint */}
                                        <div className="mt-auto flex items-center justify-between pt-2 text-xs text-stone-500">
                                            <span>Tap to open yearly dots</span>
                                            <span className="inline-flex items-center gap-1 text-emerald-700">
                                                View
                                                <span aria-hidden>↗</span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}