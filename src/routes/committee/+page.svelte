<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  import Button from "@/components/ui/button/button.svelte";
  import NavigationMenuItem from "@/components/ui/navigation-menu/navigation-menu-item.svelte";
  import NavigationMenuLink from "@/components/ui/navigation-menu/navigation-menu-link.svelte";
  import NavigationMenuList from "@/components/ui/navigation-menu/navigation-menu-list.svelte";
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu/navigation-menu-trigger.svelte";
  import NavigationMenu from "@/components/ui/navigation-menu/navigation-menu.svelte";
  import { Sheet } from "@/components/ui/sheet";
  import SheetContent from "@/components/ui/sheet/sheet-content.svelte";
  import SheetHeader from "@/components/ui/sheet/sheet-header.svelte";
  import SheetTitle from "@/components/ui/sheet/sheet-title.svelte";
  import SheetTrigger from "@/components/ui/sheet/sheet-trigger.svelte";
  import { LinkedinIcon, Mail, MenuIcon } from "@lucide/svelte";

  const links = [
    {
      title: "About",
      href: "./about",
    },
    {
      title: "Speakers",
      href: "./speakers",
    },
    {
      title: "Program",
      href: "./program",
    },
    {
      title: "Important Dates",
      href: "./dates",
    },
    {
      title: "Venue",
      href: "./venue",
    },
    {
      title: "Organising Committee",
      href: "./committee",
    },
  ];

  let currentPath = "";
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  const isActive = (href: string) => (href === currentPath ? "text-purple-700 font-bold" : "");
</script>

<section class="py-4">
  <div class="container mx-auto">
    <nav class="flex items-center justify-between">
      <a href="./" class="flex items-center gap-2 font-bold"
        ><span>VIBE<span class="text-purple-700">2025</span> HOMEPAGE</span></a
      >
      <NavigationMenu class="hidden lg:block">
        <NavigationMenuList>
          {#each links as link}
            <NavigationMenuItem>
              <NavigationMenuLink href={link.href} class={`${navigationMenuTriggerStyle()} ${isActive(link.href)}`}>
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          {/each}
        </NavigationMenuList>
      </NavigationMenu>
      <div class="hidden items-center gap-4 lg:flex">
        <Button variant="default" href="https://app.oxfordabstracts.com/register/event/76071" target="_blank"
          >Register</Button
        >
      </div>
      <Sheet>
        <SheetTrigger class="lg:hidden">
          <Button variant="outline" size="icon">
            <MenuIcon class="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent class="max-h-screen overflow-auto">
          <SheetHeader>
            <SheetTitle>
              <a href="./" class="flex items-center gap-2"
                ><span>VIBE<span class="text-purple-700">2025</span> HOMEPAGE</span></a
              >
            </SheetTitle>
          </SheetHeader>
          <div class="flex flex-col p-4">
            <div class="flex flex-col gap-6">
              {#each links as link}
                <a href={link.href} class="font-medium">
                  {link.title}
                </a>
              {/each}
            </div>
            <div class="mt-6 flex flex-col gap-4">
              <Button variant="default" href="https://app.oxfordabstracts.com/register/event/76071" target="_blank"
                >Register</Button
              >
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
</section>

<section class="relative overflow-hidden py-32">
  <div class="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
    <img
      alt="background"
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
      class="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
    />
  </div>
  <div class="relative z-10 container mx-auto">
    <div class="mx-auto flex max-w-5xl flex-col items-center">
      <div>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-2xl"><b>VIBE 2025 Organising Committee</b></p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Dr Máire Ní Leathlobhair</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Chair</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Dr Elle Loughran</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Scientific Program Chair</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Sadbh Carrick</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Logistics & Venue Coordinator</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Róisín Long</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Communications & Publicity Officer</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Corey Alwell, Catherine Butt</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          Registration & Delegate Support, Abstract Coordinators
        </p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Lukasz Niezabitowski</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Tech & AV Coordinator</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Donia Arafa, Thomas Gomes</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          EDI & Accessibility Leads, Social & Networking Coordinators
        </p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Dr Laetitia Chauve, Alex Siekmann</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">OCMs</p>
      </div>
    </div>
  </div>
</section>

<section class="py-32">
  <div class="container mx-auto">
    <footer>
      <div
        class="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center"
      >
        <p><span class="mr-1 font-bold text-primary">VIBE 2025</span> © All rights reserved.</p>
        <p>
          <Button variant="outline" size="icon" href="https://www.linkedin.com/company/vibe-2025/" target="_blank">
            <LinkedinIcon class="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" href="mailto: vibe.eire@gmail.com">
            <Mail class="h-4 w-4" />
          </Button>
        </p>
        <p>Made with ❤️ by <a class="text-primary" href="https://github.com/Dragon1320">meee</a></p>
      </div>
    </footer>
  </div>
</section>
