import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { services } from "~/config/constants";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import {
  Clipboard,
  ClipboardCheck,
  Contact,
  Document,
  Laptop,
  MailOpen,
  MapPin,
  Rocket,
  Verified,
} from "~/components/icons";

import Avatar from "~/public/images/avatar.png?jsx";

const buttonClasses =
  "ring-offset-background focus-visible:ring-ring border-input bg-background hover:text-accent-foreground inline-flex items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export default component$(() => {
  const isCopied = useSignal(false);

  const handleEmailClick = $((email: string) => {
    navigator.clipboard.writeText(email);
    isCopied.value = true;
  });

  return (
    <div class="mx-auto mb-2 space-y-6 px-6 font-sans duration-500 animate-in slide-in-from-top-1/2">
      {/* hero */}
      <header class="flex flex-col items-center justify-center gap-6 duration-1000 animate-in slide-in-from-bottom-full">
        <div class="w-28 overflow-hidden rounded-full border-2 bg-background shadow-inner animate-in zoom-in-0 [animation-duration:1000ms] md:w-36">
          <Avatar
            alt={siteConfig.author.name}
            class="scale-105 lg:hover:scale-110"
          />
        </div>

        <div class="flex flex-col items-center justify-center space-y-3">
          <h1 class="text-2xl font-medium">
            {siteConfig.author.name}
            <Verified size={20} class="ml-2 inline-flex" />
          </h1>

          <p class="text-sm text-muted-foreground brightness-110">
            <MapPin size={14} class="mb-1 mr-1 inline-flex" />
            {siteConfig.author.location}{" "}
            <span class="text-muted-foreground/50">•</span>{" "}
            {siteConfig.author.pronouns}
          </p>

          <p class="mx-1 text-center leading-relaxed text-muted-foreground">
            {siteConfig.author.description}
          </p>
        </div>

        {/* socials */}
        <div class="flex justify-center gap-x-3">
          {Object.values(siteConfig.links).map(
            ({ title, href, icon: Icon }) => {
              return (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  class={cn(
                    buttonClasses,
                    "h-10 px-4 py-2",
                    "h-12 w-12 rounded-full p-3 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  )}
                >
                  <Icon />
                </a>
              );
            }
          )}
        </div>

        {/* portfolio website link */}
        <div class="flex flex-col items-center justify-center gap-3 py-3 md:flex-row">
          <a
            title="Website & Portfolio"
            href={siteConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            class={cn(
              buttonClasses,
              "h-11 px-8 md:w-1/2",
              "group gap-x-1 rounded-xl transition-all duration-300 hover:gap-x-2 hover:shadow-md"
            )}
          >
            <Rocket class="h-5 transition-transform duration-700 group-hover:translate-x-36 group-hover:rotate-45" />

            <span class="transition-transform duration-700 group-hover:-translate-x-7">
              Website & Portfolio
            </span>
          </a>

          <a
            title="Resume & Cirriculum Vitae"
            href={siteConfig.author.resume}
            target="_blank"
            rel="noopener noreferrer"
            class={cn(
              buttonClasses,
              "h-11 px-4 md:w-1/2",
              "group gap-x-1 rounded-xl transition-all duration-300 hover:gap-x-2 hover:shadow-md"
            )}
          >
            <Document class="h-5 transition-transform duration-700 group-hover:translate-x-[11.5rem]" />

            <span class="truncate transition-transform duration-700 group-hover:-translate-x-7">
              Resume & Cirriculum Vitae
            </span>
          </a>
        </div>
      </header>

      <div class="h-px w-full bg-border" />

      {/* services */}
      <div class="space-y-5">
        <div class="flex items-center gap-2 px-3">
          <Laptop size={24} />
          <h2 class="text-lg font-medium md:text-xl">Services</h2>
        </div>

        <div class="space-y-3 duration-1000 animate-in slide-in-from-bottom-full">
          {services.map(({ title, description, icon }, i) => (
            <div
              key={i}
              style={{ backgroundImage: "url('/images/bg-gradient-1.svg')" }}
              class="overflow-hidden rounded-xl border bg-background bg-contain bg-right bg-no-repeat shadow-sm transition-shadow duration-300 hover:shadow dark:bg-secondary"
            >
              <div class="grid grid-flow-col items-center justify-between gap-x-6 px-3 py-5 dark:backdrop-blur-[2px] md:px-6">
                <img
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  class="dark:invert"
                />

                <div class="space-y-1 duration-1000 animate-in slide-in-from-bottom-full">
                  <h3 class="font-medium md:text-lg">{title}</h3>

                  <p class="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="h-px w-full bg-border" />

      {/* contact */}
      <div class="space-y-4">
        <div class="flex items-center gap-2 px-3">
          <Contact size={24} />

          <h2 class="text-lg font-medium md:text-xl">Get in Touch</h2>
        </div>

        <div
          class="group cursor-pointer rounded-2xl border bg-emerald-200 bg-right bg-no-repeat p-2 text-black shadow-sm transition-shadow animate-in slide-in-from-bottom-full [animation-duration:1000ms] [transition-duration:300ms] hover:shadow-md"
          style={{ backgroundImage: "url('/images/bg-gradient-2.svg')" }}
          onClick$={() => handleEmailClick(siteConfig.author.mail)}
        >
          <div class="flex flex-col space-y-3 p-3 md:p-6">
            <div class="flex justify-between">
              <MailOpen />

              {isCopied.value ?
                <ClipboardCheck class="-my-3 -mr-2 size-6" />
              : <Clipboard class="-my-3 -mr-2 size-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              }
            </div>

            <div class="text-lg font-medium md:text-xl">Drop Me an Email</div>
          </div>

          <div class="space-y-3 p-3 pt-0 md:p-6">
            <div class="flex flex-col text-lg md:flex-row md:items-center md:gap-2">
              <span class="underline-offset-8 group-hover:underline">
                {siteConfig.author.mail}
              </span>

              {isCopied.value && (
                <span class="duration-500 animate-in slide-in-from-right-full">
                  (Copied!)
                </span>
              )}
            </div>

            <p class="text-sm leading-relaxed md:text-base">
              Expect my rapid and eager reply - your message won&apos;t be kept
              waiting!
            </p>
          </div>
        </div>
      </div>

      <div class="h-px w-full bg-border" />
    </div>
  );
});

export const head: DocumentHead = {
  title: siteConfig.name,
  meta: [
    {
      name: "description",
      content: siteConfig.description,
    },
  ],
};
