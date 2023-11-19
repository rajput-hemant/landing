import type { HtmlHTMLAttributes } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";

import { useTheme } from "~/hooks/use-theme";

import { Moon, Sun } from "../icons";

type ThemeSwitcherProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  disableTransition?: boolean;
};

/**
 * @see https://github.com/pacocoursey/next-themes/blob/cd67bfa20ef6ea78a814d65625c530baae4075ef/packages/next-themes/src/index.tsx#L285
 */
const disableAnimation = () => {
  const css = document.createElement("style");

  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  );
  document.head.appendChild(css);

  return () => {
    // Force restyle
    (() => window.getComputedStyle(document.body))();

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css);
    }, 20);
  };
};

/**
 * @see https://github.com/BuilderIO/qwik/issues/1480
 */
export const ThemeSwitcher = component$<ThemeSwitcherProps>(
  ({ disableTransition = true, ...props }) => {
    const theme = useTheme();

    const toggleTheme = $(() => {
      const enable = disableTransition ? disableAnimation() : null;
      theme.value = theme.value === "dark" ? "light" : "dark";
      enable?.();
    });

    return (
      <button
        aria-label={`Switch to ${
          theme.value === "dark" ? "light" : "dark"
        } mode`}
        aria-pressed={theme.value === "dark"}
        onClick$={toggleTheme}
        {...props}
      >
        <Sun
          aria-hidden="true"
          class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          aria-hidden="true"
          class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </button>
    );
  }
);
