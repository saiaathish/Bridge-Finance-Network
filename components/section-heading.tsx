"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { fadeUp, textRise, useGsap } from "@/lib/motion"

interface SectionHeadingProps {
  /** Heading content; may include one <span className="accent-word">. */
  children: React.ReactNode
  /** Mono "/ eyebrow" line under the heading, as on the homepage. */
  eyebrow?: string
  description?: React.ReactNode
  align?: "left" | "center"
  as?: "h2" | "h3"
  className?: string
}

/**
 * Homepage section heading: type-h2 headline with a masked word rise on
 * scroll, then the mono eyebrow and description fade up.
 */
export function SectionHeading({
  children,
  eyebrow,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGsap(ref, (env, q) => {
    const root = ref.current!
    const [heading] = q("[data-rise]")
    if (heading) textRise(heading, env, { by: "words", trigger: root })
    fadeUp(q("[data-fade]"), env, { trigger: root, delay: 0.3 })
  })

  return (
    <div ref={ref} className={cn(align === "center" && "text-center", className)}>
      <Tag data-rise className="gsap-hidden type-h2 text-foreground">
        {children}
      </Tag>
      {eyebrow && (
        <p data-fade className="gsap-hidden type-eyebrow mt-3 text-muted-foreground">
          {eyebrow}
        </p>
      )}
      {description && (
        <p
          data-fade
          className={cn("gsap-hidden type-body mt-4 max-w-2xl text-muted-foreground", align === "center" && "mx-auto")}
        >
          {description}
        </p>
      )}
    </div>
  )
}
