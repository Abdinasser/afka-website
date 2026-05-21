import Image from "next/image";

type RegionalSignalMapProps = {
  tone?: "light" | "dark";
  label?: string;
};

export function RegionalSignalMap({
  tone = "dark",
  label = "Regional signal map"
}: RegionalSignalMapProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`regional-map-texture relative min-h-[23rem] overflow-hidden border ${
        isDark
          ? "border-[rgba(244,248,249,0.12)] bg-[rgba(244,248,249,0.045)]"
          : "border-[var(--line)] bg-[rgba(244,248,249,0.78)] shadow-[0_20px_62px_rgba(13,31,34,0.08)] backdrop-blur-xl"
      }`}
    >
      <Image
        src="/images/horn-of-africa-map-clean.png"
        alt="Abstract Horn of Africa regional texture for Somali digital context"
        fill
        sizes="(min-width: 1024px) 42vw, 100vw"
        className={`object-cover object-center ${
          isDark ? "opacity-[0.16] mix-blend-screen" : "opacity-[0.12] mix-blend-multiply"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[rgba(13,31,34,0.56)]"
            : "bg-[rgba(244,248,249,0.34)]"
        }`}
      />
      <div
        className={`absolute inset-x-5 bottom-5 border-t pt-4 ${
          isDark ? "border-[rgba(244,248,249,0.12)] text-[rgba(244,248,249,0.62)]" : "border-[var(--line)] text-[var(--muted)]"
        }`}
      >
        <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
          {label}
        </p>
        <p className="mt-2 max-w-sm text-sm leading-6">
          Language, platform, rights, and economic signals are read together
          rather than as separate incidents.
        </p>
      </div>
    </div>
  );
}
