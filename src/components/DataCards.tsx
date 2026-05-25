import { ResearchSurface } from "@/components/ResearchSurface";
import { heroStats } from "@/data/site";

export function DataCards() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {heroStats.map((stat) => (
        <ResearchSurface
          key={stat.value}
          tone="dark"
          className="p-5 text-[var(--cloud-white)]"
        >
          <p
            className="font-display font-medium text-[24px] leading-[1.12] tracking-[-0.022em] text-[var(--fg-inverse)]"
            style={{ fontVariationSettings: '"opsz" 36' }}
          >
            {stat.value}
          </p>
          <p className="mt-3 text-sm leading-6 text-[rgba(244,248,249,0.58)]">{stat.label}</p>
        </ResearchSurface>
      ))}
    </div>
  );
}
