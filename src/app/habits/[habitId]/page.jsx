// src/app/habits/[habitId]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { habits } from "@/lib/habits";
import HabitGrid from "@/components/habits/HabitGrid";

export default async function HabitDetailPage({ params }) {
    console.log("HabitDetailPage params:", params);

    const { habitId } = await params;

    const selectedHabit = habits.find((habit) => habit.id === habitId);

    console.log("HabitDetailPage selectedHabit:", selectedHabit);

    if (!selectedHabit) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-emerald-50 px-4 py-30 text-stone-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-8">
                <header className="space-y-3">
                    <Link
                        href="/habits"
                        className="text-xs text-emerald-700 hover:underline"
                    >
                        ← Back to habits
                    </Link>

                    <p className="text-s font-medium uppercase tracking-[0.2em] text-emerald-700">
                        Habit
                    </p>
                </header>

                <section className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/50 sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-700">
                                Year view
                            </p>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                                2026 in {selectedHabit.title}
                            </h2>
                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-500">
                                A calm yearly view of your progress. Each square is one day.
                            </p>
                        </div>

                        <div className="mt-4 flex items-center gap-2 sm:mt-0">
                            <button className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-stone-700 transition hover:bg-stone-100">
                                ←
                            </button>
                            <span className="min-w-20 text-center text-sm font-medium text-stone-700">
                                2026
                            </span>
                            <button className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-stone-700 transition hover:bg-stone-100">
                                →
                            </button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <HabitGrid habitId={selectedHabit.id} year={2026} />
                    </div>

                    <div className="mt-6 flex items-center justify-between text-sm text-stone-500">
                        <span className="inline-flex items-center gap-2 uppercase">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                {selectedHabit.kind} habit
                        </span>
                    </div>
                </section>
            </div>
        </main>
    );
}