import { cn } from "@/lib/utils";

type VeriflowMarkProps = {
  /** Pixel width/height (square). */
  size?: number;
  className?: string;
  /** `solid` = blue tile + white shield + blue check (nav, footer). `mono` = single-color for dark backgrounds. */
  variant?: "solid" | "mono";
  title?: string;
};

/**
 * Veriflow wordmark: verification (shield + check) + line flow (arc under shield).
 */
export function VeriflowMark({
  size = 36,
  className,
  variant = "solid",
  title = "Veriflow",
}: VeriflowMarkProps) {
  const mono = variant === "mono";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {mono ? (
        <>
          <path
            d="M16 6.5 23.5 10.4V18.2C23.5 22.6 20.4 26.4 16 27.5 11.6 26.4 8.5 22.6 8.5 18.2V10.4L16 6.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.85"
            strokeLinejoin="round"
          />
          <path
            d="M12.2 15.8 15.1 18.7 20.5 12.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 24.5c2.3 1.1 5 1.7 7 1.7s4.7-.6 7-1.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={0.85}
          />
        </>
      ) : (
        <>
          <rect width="32" height="32" rx="9" fill="#2563eb" />
          <path
            d="M16 7.2 23.2 11v7.1c0 4.1-3 7.7-7.2 8.8-4.2-1.1-7.2-4.7-7.2-8.8V11L16 7.2Z"
            fill="#ffffff"
          />
          <path
            d="M12.4 15.9 15.2 18.6 20.2 12.8"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 24.2c2.1 1 4.5 1.6 6.8 1.6s4.7-.6 6.8-1.6"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.45"
            strokeLinecap="round"
            opacity={0.92}
          />
        </>
      )}
    </svg>
  );
}

type VeriflowLockupProps = {
  className?: string;
  /** Larger wordmark in header */
  size?: "sm" | "md";
};

export function VeriflowLockup({ className, size = "md" }: VeriflowLockupProps) {
  const markPx = size === "md" ? 36 : 32;
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <VeriflowMark size={markPx} />
      <span
        className={cn(
          "font-semibold tracking-tight text-slate-800",
          size === "md" ? "text-[15px] sm:text-base" : "text-sm"
        )}
      >
        Veriflow
      </span>
    </div>
  );
}
