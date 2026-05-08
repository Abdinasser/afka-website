type SignalFieldProps = {
  tone?: "light" | "dark";
  label?: string;
  caption?: string;
};

const points = [
  { left: "18%", top: "28%", size: "h-2 w-2" },
  { left: "36%", top: "46%", size: "h-1.5 w-1.5" },
  { left: "57%", top: "34%", size: "h-2.5 w-2.5" },
  { left: "71%", top: "58%", size: "h-1.5 w-1.5" },
  { left: "44%", top: "72%", size: "h-2 w-2" }
];

export function SignalField({
  tone = "light",
  label = "Signal field",
  caption = "A layered view of incidents, platform surfaces, language context, and rights questions."
}: SignalFieldProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`signal-field min-h-[23rem] border p-5 ${
        isDark
          ? "border-[rgba(244,248,249,0.12)] bg-[rgba(244,248,249,0.045)] text-[var(--cloud-white)]"
          : "border-[var(--line)] bg-[rgba(244,248,249,0.78)] text-[var(--deep-ink)] shadow-[0_20px_62px_rgba(13,31,34,0.08)] backdrop-blur-xl"
      }`}
    >
      <div className="relative h-full min-h-[19rem]">
        <div
          className={`absolute left-[10%] top-[16%] h-28 w-28 rounded-full border ${
            isDark ? "border-[rgba(244,248,249,0.12)]" : "border-[var(--line)]"
          }`}
        />
        <div
          className={`absolute right-[8%] top-[24%] h-40 w-40 rounded-full border ${
            isDark ? "border-[rgba(244,248,249,0.1)]" : "border-[var(--line)]"
          }`}
        />
        <div
          className={`absolute bottom-[16%] left-[22%] h-px w-[62%] origin-left rotate-[-9deg] ${
            isDark ? "bg-[rgba(244,248,249,0.18)]" : "bg-[rgba(13,31,34,0.12)]"
          }`}
        />
        <div
          className={`absolute left-[32%] top-[24%] h-[58%] w-px rotate-[18deg] ${
            isDark ? "bg-[rgba(244,248,249,0.14)]" : "bg-[rgba(13,31,34,0.1)]"
          }`}
        />

        {points.map((point, index) => (
          <span
            key={`${point.left}-${point.top}`}
            className={`absolute rounded-full ${
              point.size
            } ${
              index === 2
                ? "bg-[var(--deep-teal)] shadow-[0_0_0_9px_rgba(10,92,107,0.11)]"
                : isDark
                  ? "bg-[rgba(244,248,249,0.58)]"
                  : "bg-[rgba(13,31,34,0.44)]"
            }`}
            style={{ left: point.left, top: point.top }}
            aria-hidden="true"
          />
        ))}

        <div
          className={`absolute inset-x-0 bottom-0 border-t pt-4 ${
            isDark ? "border-[rgba(244,248,249,0.12)] text-[rgba(244,248,249,0.62)]" : "border-[var(--line)] text-[var(--muted)]"
          }`}
        >
          <p className="text-xs font-semibold uppercase text-[var(--deep-teal)]">
            {label}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6">{caption}</p>
        </div>
      </div>
    </div>
  );
}
