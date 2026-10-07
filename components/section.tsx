import { cn } from "@/lib/utils"

type Tone = "canvas" | "band" | "tint"

const TONES: Record<Tone, string> = {
  // Transparent over the body canvas
  canvas: "",
  // The homepage's Haze band
  band: "bg-card",
  // Soft static sunrise tint
  tint: "bg-sunrise-tint",
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone
  /** Hairline above the section, like the homepage's band transitions. */
  divider?: boolean
  /** Classes for the inner max-width container. */
  innerClassName?: string
}

/**
 * Page section on the homepage grid: full-bleed tone, content held to
 * max-w-7xl with px-6 / md:px-12 gutters and the homepage's vertical rhythm.
 */
export function Section({
  tone = "canvas",
  divider = false,
  className,
  innerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full px-6 py-16 md:px-12 md:py-24",
        TONES[tone],
        divider && "border-t border-border",
        className,
      )}
      {...rest}
    >
      <div className={cn("mx-auto w-full max-w-7xl", innerClassName)}>{children}</div>
    </section>
  )
}
