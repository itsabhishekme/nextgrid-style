"use client";

import React, {
  useEffect,
  useState,
} from "react";

type ResponsiveLayoutProps = {
  children: React.ReactNode;
};

export default function ResponsiveLayout({
  children,
}: ResponsiveLayoutProps) {
  const [isMobile, setIsMobile] =
    useState(false);

  const [isTablet, setIsTablet] =
    useState(false);

  const [isDesktop, setIsDesktop] =
    useState(true);

  useEffect(() => {
    const detectDevice = () => {
      const width =
        window.innerWidth;

      /* DEVICE */

      setIsMobile(width < 768);

      setIsTablet(
        width >= 768 &&
          width < 1024
      );

      setIsDesktop(
        width >= 1024
      );

      /* ROOT CLASSES */

      document.documentElement.classList.remove(
        "mobile-layout",
        "tablet-layout",
        "desktop-layout"
      );

      if (width < 768) {
        document.documentElement.classList.add(
          "mobile-layout"
        );
      } else if (
        width >= 768 &&
        width < 1024
      ) {
        document.documentElement.classList.add(
          "tablet-layout"
        );
      } else {
        document.documentElement.classList.add(
          "desktop-layout"
        );
      }

      /* FIX VIEWPORT */

      const vh =
        window.innerHeight *
        0.01;

      document.documentElement.style.setProperty(
        "--vh",
        `${vh}px`
      );

      /* REMOVE EXTRA SCROLL */

      document.documentElement.style.margin =
        "0";

      document.documentElement.style.padding =
        "0";

      document.documentElement.style.overflowX =
        "hidden";

      document.body.style.margin =
        "0";

      document.body.style.padding =
        "0";

      document.body.style.overflowX =
        "hidden";

      document.body.style.minHeight =
        "100dvh";

      document.body.style.width =
        "100%";
    };

    detectDevice();

    window.addEventListener(
      "resize",
      detectDevice
    );

    window.addEventListener(
      "orientationchange",
      detectDevice
    );

    return () => {
      window.removeEventListener(
        "resize",
        detectDevice
      );

      window.removeEventListener(
        "orientationchange",
        detectDevice
      );
    };
  }, []);

  return (
    <div
      id="responsive-layout"
      data-mobile={isMobile}
      data-tablet={isTablet}
      data-desktop={isDesktop}
      className="
        relative
        w-full
        min-h-[100dvh]
        overflow-x-hidden
        overflow-y-hidden
        bg-transparent
      "
      style={{
        minHeight:
          "calc(var(--vh, 1vh) * 100)",
      }}
    >
      {/* MAIN CONTAINER */}

      <div
        className={`
          relative
          mx-auto
          w-full
          min-h-[100dvh]
          overflow-hidden

          ${
            isDesktop
              ? "max-w-[1920px]"
              : "max-w-full"
          }
        `}
      >
        {/* MOBILE LIGHT */}

        {isMobile && (
          <div
            className="
              pointer-events-none
              fixed
              inset-0
              z-[1]
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-[-120px]

                h-[220px]
                w-[220px]

                -translate-x-1/2

                rounded-full
                bg-pink-500/10

                blur-[100px]
              "
            />

            <div
              className="
                absolute
                bottom-[-120px]
                left-1/2

                h-[220px]
                w-[220px]

                -translate-x-1/2

                rounded-full
                bg-violet-500/10

                blur-[100px]
              "
            />
          </div>
        )}

        {/* TABLET LIGHT */}

        {isTablet && (
          <div
            className="
              pointer-events-none
              fixed
              inset-0
              z-[1]
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                right-[-100px]
                top-[15%]

                h-[280px]
                w-[280px]

                rounded-full
                bg-cyan-500/10

                blur-[120px]
              "
            />
          </div>
        )}

        {/* PAGE CONTENT */}

        <main
          className="
            relative
            z-[2]
            w-full
            min-h-[100dvh]
            overflow-hidden
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}