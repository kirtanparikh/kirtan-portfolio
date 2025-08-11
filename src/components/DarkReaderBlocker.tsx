"use client";

import { useEffect } from "react";

export default function DarkReaderBlocker() {
  useEffect(() => {
    // Block Dark Reader and similar extensions
    const blockDarkReader = () => {
      // Add meta tag to indicate dark theme
      if (typeof document !== "undefined") {
        // Remove any Dark Reader attributes
        const elementsWithDarkReader = document.querySelectorAll(
          "[data-darkreader-inline-bgcolor], [data-darkreader-inline-color], [data-darkreader-inline-stroke], [data-darkreader-inline-fill]"
        );
        elementsWithDarkReader.forEach((element) => {
          element.removeAttribute("data-darkreader-inline-bgcolor");
          element.removeAttribute("data-darkreader-inline-color");
          element.removeAttribute("data-darkreader-inline-stroke");
          element.removeAttribute("data-darkreader-inline-fill");
          // Remove Dark Reader inline styles
          const style = element.getAttribute("style");
          if (style && style.includes("--darkreader-inline-")) {
            const cleanStyle = style.replace(
              /--darkreader-inline-[^;]*;?\s*/g,
              ""
            );
            element.setAttribute("style", cleanStyle);
          }
        });

        // Ensure consistent class name to prevent hydration mismatch
        const currentClass = document.documentElement.className;
        if (currentClass !== "dark") {
          // Reset to original server-rendered class
          document.documentElement.className = "dark";
        }

        // Force color scheme
        document.documentElement.style.colorScheme = "dark";
        document.body.style.colorScheme = "dark";

        // Add attributes to indicate native dark theme
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.setAttribute("data-color-scheme", "dark");
      }
    };

    // Run immediately and on DOM changes
    blockDarkReader();

    // Use MutationObserver to catch Dark Reader changes
    const observer = new MutationObserver((mutations) => {
      let shouldBlock = false;
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.target === document.documentElement &&
          mutation.attributeName === "class"
        ) {
          // Check if class was modified to something other than "dark"
          const currentClass = document.documentElement.className;
          if (currentClass !== "dark") {
            shouldBlock = true;
          }
        }
      });

      if (shouldBlock) {
        blockDarkReader();
      }
    });

    if (typeof document !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [
          "data-darkreader-mode",
          "data-darkreader-scheme",
          "class",
        ],
        subtree: true,
        childList: true,
      });
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
