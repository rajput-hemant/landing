/* eslint-disable qwik/no-use-visible-task */
import { useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import type { Theme } from "~/components/theme";
import { ThemeContext } from "~/components/theme";

export function useTheme() {
  const theme = useContext(ThemeContext);
  const prev = useSignal<Theme>(null);

  useVisibleTask$(
    ({ track }) => {
      track(theme);
      const html = document.documentElement;

      if (!theme.value) return;

      const media = window.matchMedia("(prefers-color-scheme: dark)");

      if (prev.value) html.classList.remove(prev.value);
      if (prev.value === "system" && media.matches)
        html.classList.remove("dark");

      html.classList.add(theme.value);
      html.dataset.theme = theme.value;

      if (theme.value === "system") {
        media.matches
          ? html.classList.add("dark")
          : html.classList.remove("dark");
      }

      const colorSchemeListener = () => {
        if (theme.value !== "system") return;
        media.matches
          ? html.classList.add("dark")
          : html.classList.remove("dark");
      };
      media.addEventListener("change", colorSchemeListener);

      prev.value = theme.value;

      return () => media.removeEventListener("change", colorSchemeListener);
    },
    { strategy: "document-ready" }
  );

  useVisibleTask$(({ track }) => {
    track(theme);
    if (theme.value) localStorage.setItem("theme", theme.value);
  });

  useVisibleTask$(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    theme.value = storedTheme ?? "system";
  });

  return theme;
}
