import type { HtmlHTMLAttributes } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { LuMoon, LuSun } from "@qwikest/icons/lucide";

import { useTheme } from "~/hooks/use-theme";

type ThemeSwitcherProps = HtmlHTMLAttributes<HTMLButtonElement>;

/**
 * @see https://github.com/BuilderIO/qwik/issues/1480
 */
export const ThemeSwitcher = component$<ThemeSwitcherProps>((props) => {
  const theme = useTheme();

  const toggleTheme = $(() => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  });

  return (
    <button onClick$={toggleTheme} {...props}>
      <LuSun
        aria-hidden="true"
        class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <LuMoon
        aria-hidden="true"
        class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </button>
  );
});
