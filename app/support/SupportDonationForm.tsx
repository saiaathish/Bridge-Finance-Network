"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import styles from "./support.module.css";

const GIVEBUTTER_READY_HEIGHT = 200;

export function SupportDonationForm() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const host = formRef.current?.querySelector<HTMLElement>("givebutter-widget");
    if (!host) return;

    let animationFrame: number | undefined;
    let cancelled = false;
    let revealed = false;
    const reveal = () => {
      if (cancelled || revealed) return;
      revealed = true;
      setIsReady(true);
      resizeObserver.disconnect();
    };

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect.height >= GIVEBUTTER_READY_HEIGHT) reveal();
    });
    resizeObserver.observe(host);

    const checkForMountedForm = () => {
      animationFrame = window.requestAnimationFrame(() => {
        if (host.getBoundingClientRect().height >= GIVEBUTTER_READY_HEIGHT) reveal();
      });
    };

    void window.customElements.whenDefined("givebutter-widget").then(checkForMountedForm);

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={formRef}
      className={`${styles.donationStage} ${styles.enterRight}`}
      aria-busy={!isReady}
    >
      <div className={`${styles.donationForm} ${isReady ? styles.donationFormReady : styles.donationFormPending}`}>
        <div
          aria-label="Givebutter donation form for Bridge Finance Network"
          dangerouslySetInnerHTML={{
            __html: '<givebutter-widget id="pEZRrA" align="center"></givebutter-widget>',
          }}
        />
      </div>
      <div
        className={`${styles.donationPlaceholder} ${isReady ? styles.donationPlaceholderHidden : ""}`}
        aria-hidden="true"
      >
        <span className={styles.placeholderHeading} />
        <span className={styles.placeholderToggle} />
        <div className={styles.placeholderAmounts}>
          {Array.from({ length: 6 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        <span className={styles.placeholderField} />
        <span className={styles.placeholderButton} />
      </div>
      <Script
        id="givebutter-widget-library"
        src="https://widgets.givebutter.com/latest.umd.cjs?acct=oqqzGtUZxCPk9GXa&p=other"
        strategy="afterInteractive"
      />
    </div>
  );
}
