"use client";

import { useRef } from "react";
import type { KeyboardEvent } from "react";

interface TeamTabsProps<T extends string> {
  categories: readonly T[];
  active: T;
  onChange: (category: T) => void;
  idPrefix: string;
}

/**
 * Horizontally scrollable pill tablist. Implements the WAI-ARIA tabs
 * pattern with roving tabindex and arrow-key navigation; activation is
 * automatic (moving focus selects the tab), matching how the rest of the
 * site treats hover/click state as immediate feedback.
 */
export function TeamTabs<T extends string>({ categories, active, onChange, idPrefix }: TeamTabsProps<T>) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusAndSelect = (category: T) => {
    onChange(category);
    tabRefs.current[category]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = categories.length - 1;
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = index === lastIndex ? 0 : index + 1;
        break;
      case "ArrowLeft":
        nextIndex = index === 0 ? lastIndex : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }

    event.preventDefault();
    focusAndSelect(categories[nextIndex]);
  };

  return (
    <div
      role="tablist"
      aria-label="Team categories"
      className="no-scrollbar -mx-6 mb-10 flex gap-2 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:px-0"
    >
      {categories.map((category, index) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            ref={(el) => {
              tabRefs.current[category] = el;
            }}
            role="tab"
            id={`${idPrefix}-tab-${category}`}
            aria-selected={isActive}
            aria-controls={`${idPrefix}-panel-${category}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(category)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`shrink-0 whitespace-nowrap rounded-lg border px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
