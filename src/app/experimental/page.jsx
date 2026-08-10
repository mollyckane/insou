import AuroraWrapper from "@/app/experimental/AuroraWrapper";
import NeuralGlow from "@/app/experimental/NeuralGlow";
import MagneticBlobCursor from "@/app/experimental/MagneticButton";

export default function HomePage() {
    return (
        <AuroraWrapper>
            <NeuralGlow />
            <MagneticBlobCursor />

            <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 py-16 text-slate-100">
                <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 py-16 text-slate-100">
                    <section className="space-y-6">
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                            Gentle dots for
                            <span className="block bg-gradient-to-r from-emerald-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                                better habits
                            </span>
                        </h1>

                        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                            See your year as a calm grid of dots. No streak panic, no guilt — just an honest picture of how things actually feel over time.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="group relative overflow-hidden rounded-full bg-rose-200 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-rose-500/30 transition-transform duration-150 hover:-translate-y-0.5">
                                <span className="relative z-10">Open habits</span>
                                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                            </button>

                            <button className="rounded-full border border-slate-300/60 bg-white/20 px-4 py-2.5 text-sm text-slate-200 transition hover:border-rose-200 hover:text-rose-200">
                                Learn more
                            </button>
                        </div>
                    </section>
                </main>
            </main>
        </AuroraWrapper>
    );
}