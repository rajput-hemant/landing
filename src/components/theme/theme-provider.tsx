import type { Signal } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";

export type Theme = "light" | "dark" | "system" | null;

export const ThemeContext = createContextId<Signal<Theme>>("theme");

/**
 * @see https://github.com/BuilderIO/qwik/issues/1480
 */
export const ThemeProvider = component$(() => {
  const theme = useSignal<Theme>(null);

  useContextProvider(ThemeContext, theme);

  return <Slot />;
});
