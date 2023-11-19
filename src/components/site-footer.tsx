import { component$ } from "@builder.io/qwik";

import { siteConfig } from "~/config/site";

export const SiteFooter = component$(() => (
  <footer class="flex w-full justify-center py-6 text-sm text-foreground/60">
    &copy; {new Date().getFullYear()} by&nbsp;
    <a
      href={siteConfig.links.github.href}
      target="_blank"
      rel="noopener noreferrer"
      class="underline-offset-4 duration-300 hover:text-foreground hover:underline"
    >
      rajput-hemant@github
    </a>
  </footer>
));
