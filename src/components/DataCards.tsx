import { heroStats } from "@/data/site";

export function DataCards() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {heroStats.map((stat) => (
        <div
          key={stat.value}
          className="border border-white/14 bg-white/[0.08] p-5 text-white shadow-[0_18px_44px_rgba(0,0,0,0.14)] backdrop-blur-md"
        >
          <p className="font-serif-display text-4xl text-white">
            {stat.value}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-200">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
