import { component$ } from "@builder.io/qwik";

import { ThemeSwitcher } from "./theme";

export const SiteHeader = component$(() => (
  <header class="container flex justify-end pt-4">
    <ThemeSwitcher class="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background p-1 transition-transform duration-300 dark:text-green-300" />
  </header>
));
