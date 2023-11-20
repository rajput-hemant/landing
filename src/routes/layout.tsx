import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { ThemeProvider } from "~/components/theme";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <ThemeProvider>
      <div
        class="mx-auto max-w-xl border bg-background text-foreground shadow-xl backdrop-blur-sm sm:my-6 sm:rounded-xl"
        style={{ backgroundImage: "url('/images/noise.png')" }}
      >
        <SiteHeader />
        <Slot />
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
});
