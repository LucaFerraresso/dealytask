import Link from "next/link";

const metrics = [
  { label: "Pipeline visibility", value: "98%" },
  { label: "Team follow-up", value: "3x" },
  { label: "Revenue clarity", value: "24/7" },
];

const steps = [
  "Create and stage every deal",
  "Assign follow-up tasks to the right people",
  "Track the next action before revenue leaks away",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-8">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 ring-1 ring-cyan-400/70">
              <span className="text-lg font-black text-cyan-300">D</span>
            </div>
            <div>
              <p className="text-lg font-semibold">DealyTask</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#product" className="transition hover:text-white">Product</a>
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <Link href="/dashboard" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-400 hover:text-cyan-300">
              Open dashboard
            </Link>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
              Mobile-first SaaS for commercial teams
            </div>

            <h1 className="max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
              Turn scattered deals into a repeatable revenue machine.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              DealyTask centralizes pipeline, task management, and follow-up workflows so your team knows what to do next and when to do it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Launch product
              </Link>
              <Link
                href="#features"
                className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                See features
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Pipeline overview</p>
                  <h2 className="text-2xl font-bold">$1.2M</h2>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  +18.4%
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Discovery", value: "42%", color: "bg-cyan-400" },
                  { name: "Proposal", value: "31%", color: "bg-violet-400" },
                  { name: "Negotiation", value: "18%", color: "bg-amber-400" },
                  { name: "Won", value: "9%", color: "bg-emerald-400" },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                      <span>{item.name}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-800">
                      <div
                        className={`h-2.5 rounded-full ${item.color}`}
                        style={{ width: item.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-3xl font-black text-cyan-300">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="border-t border-slate-800 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why teams switch</p>
            <h2 className="text-3xl font-black text-white md:text-4xl">One operating system for deal flow and execution</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-bold text-cyan-300">
                  0{index + 1}
                </div>
                <p className="text-lg font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Pricing</p>
              <h2 className="mt-3 text-3xl font-black text-white">Simple pricing that scales with revenue</h2>
            </div>
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-cyan-200">
              Starter $29 / seat
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
