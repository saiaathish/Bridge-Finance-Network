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
    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setIsReady(true);
      resizeObserver.disconnect();
      window.clearTimeout(fallbackTimer);
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
    const fallbackTimer = window.setTimeout(reveal, 2500);

    return () => {
      resizeObserver.disconnect();
      window.clearTimeout(fallbackTimer);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={formRef}
      className={isReady ? styles.enterRight : styles.enterRightPending}
    >
      <div
        aria-label="Givebutter donation form for Bridge Finance Network"
        dangerouslySetInnerHTML={{
          __html: '<givebutter-widget id="pEZRrA" align="center"></givebutter-widget>',
        }}
      />
      <Script
        id="givebutter-widget-library"
        src="https://widgets.givebutter.com/latest.umd.cjs?acct=oqqzGtUZxCPk9GXa&p=other"
        strategy="afterInteractive"
      />
    </div>
  );
}
