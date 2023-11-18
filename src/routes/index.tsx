import {
  $,
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  LuClipboard,
  LuClipboardCheck,
  LuFlameKindling,
  LuGithub,
} from "@qwikest/icons/lucide";

import QwikLogo from "~/public/favicon.svg?jsx";

const packageManagers = {
  bun: "bunx",
  pnpm: "pnpx",
  npm: "npx",
  yarn: "yarn dlx",
};

type PackageManagers = keyof typeof packageManagers;

export default component$(() => {
  useStylesScoped$(`
  .layout {
    background-image: radial-gradient(hsla(0, 0%, 84%, 0.25) 1px, transparent 0),
      radial-gradient(hsla(0, 0%, 65%, 0.2) 1px, transparent 0);
    background-size: 50px 50px;
    background-position:
      0 0,
      25px 25px;
    -webkit-animation: slide 2s linear infinite;
    animation: slide 4s linear infinite;
  }

  @keyframes slide {
    100% {
      background-position:
        50px 0,
        125px 25px;
    }
  }

  .cards:hover > .card::after {
    opacity: 1;
  }

  .card::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  .card::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }
  `);

  const isCopied = useSignal(false);
  const showDropdown = useSignal(false);
  const dropdownButtonsRef = useStore<HTMLButtonElement[]>([]);

  const copyToClipboard = $((pm: PackageManagers) => {
    showDropdown.value = false;
    isCopied.value = true;

    const text = `${packageManagers[pm]} degit rajput-hemant/qwik-template <project-name>`;

    try {
      navigator.clipboard.writeText(text);
      isCopied.value = true;
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  });

  return (
    <main class="layout grid min-h-screen w-full place-items-center bg-[#141414] bg-fixed text-white selection:bg-zinc-300 selection:text-black">
      <section class="px-4">
        <QwikLogo
          alt="Next.js logo"
          class="w-2h-28 mx-auto mb-6 h-28 md:max-w-full"
        />

        <div class="grid items-center gap-6">
          <div class="flex flex-col justify-center space-y-4 text-center">
            <div class="mb-6 space-y-2">
              <h1 class="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl">
                Qwikcity Starter Template
              </h1>

              <p class="mx-auto max-w-3xl text-sm text-zinc-200 sm:text-base md:text-xl">
                A Qwik City template with TypeScript, TailwindCSS, Qwickest
                Icons and pre-configured with ESLint, Prettier and Husky git
                hooks.
              </p>
            </div>

            <div class="relative mx-auto max-w-xs rounded-xl border border-zinc-700 p-1 text-zinc-200 shadow-md duration-300 hover:shadow-black sm:max-w-full">
              <p class="flex w-full cursor-pointer items-center gap-2 rounded-md bg-white/5 px-2 py-3 font-mono hover:bg-white/10">
                <span class="text-orange-500">$</span>

                <span class="truncate">
                  pnpx degit rajput-hemant/qwik-template {"<project-name>"}
                </span>

                <button
                  onClick$={() => (showDropdown.value = !showDropdown.value)}
                  class="text-zinc-400 transition-colors hover:text-white"
                >
                  {isCopied.value ? (
                    <LuClipboardCheck class="h-5 w-5" />
                  ) : (
                    <LuClipboard class="h-5 w-5" />
                  )}
                </button>
              </p>

              {showDropdown.value && (
                <div class="absolute -right-20 top-8 z-10 rounded-xl border border-zinc-700 p-1 hover:border-zinc-600">
                  <ul class="sticky flex flex-col rounded-md bg-zinc-800">
                    {(Object.keys(packageManagers) as PackageManagers[]).map(
                      (pm, i) => (
                        <button
                          key={i}
                          ref={(el) => {
                            dropdownButtonsRef[i] = el! as HTMLButtonElement;
                          }}
                          onClick$={() => copyToClipboard(pm)}
                          class="m-0.5 w-20 cursor-pointer rounded-md px-3 py-0.5 outline-none ring-zinc-600 hover:bg-zinc-700/50 hover:text-sky-500 focus:ring-2"
                        >
                          {pm}
                        </button>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="https://github.com/new?template_name=qwik-template&template_owner=rajput-hemant"
                target="_blank"
                rel="noopener noreferrer"
                class="flex rounded-full border border-zinc-700 px-6 py-3 duration-300 hover:bg-white/10 hover:shadow-md hover:shadow-black"
              >
                <LuFlameKindling class="mr-2 h-5 w-5" />
                Use Template
              </a>

              <a
                href="https://github.com/rajput-hemant/qwik-template"
                target="_blank"
                rel="noopener noreferrer"
                class="flex rounded-full border border-zinc-700 px-6 py-3 duration-300 hover:bg-white/10 hover:shadow-md hover:shadow-black"
              >
                <LuGithub class="mr-2 h-5 w-5 " />
                View Repo
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer class="absolute inset-x-0 bottom-4 flex justify-center">
        <em class="text-zinc-500">
          &copy;{new Date().getFullYear()}{" "}
          <a
            href="https://github.com/rajput-hemant"
            target="_blank"
            rel="noopener noreferrer"
            class="underline-offset-4 duration-150 hover:text-zinc-400 hover:underline"
          >
            rajput-hemant@github
          </a>
        </em>
      </footer>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Qwik City Template",
  meta: [
    {
      name: "description",
      content:
        "A Minimal Qwik City Starter Template with TypeScript, Tailwind CSS, and pre-configured with ESLint, Prettier, and Husky.",
    },
  ],
};
