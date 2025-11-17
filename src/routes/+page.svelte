<script>
  import Button from "@/components/ui/button/button.svelte";
  import * as Card from "@/components/ui/card";
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
  import { links } from "@/utils";
  import { LinkedinIcon, Mail, MenuIcon } from "@lucide/svelte";

  const schedule = [
    {
      kind: "single",
      start: "9:00",
      end: "10:00",
      title: "Sign in and coffee/pastries",
    },
    {
      kind: "single",
      start: "10:00",
      end: "10:15",
      title: "Welcome and opening remarks",
    },
    {
      kind: "single",
      start: "10:15",
      end: "11:00",
      title: "Keynote 1: Dr Nikolaos Vakirlis - Chair TBD",
    },
    {
      kind: "session",
      start: "11:00",
      end: "12:00",
      title: "Session 1: Evolutionary genetics - Chair Dr Elle Loughran",
      talks: [
        {
          start: "11:00",
          end: "11:12",
          title: "Talk 1",
        },
        {
          start: "11:12",
          end: "11:24",
          title: "Talk 2",
        },
        {
          start: "11:24",
          end: "11:36",
          title: "Talk 3",
        },
        {
          start: "11:36",
          end: "11:42",
          title: "Flash talk 1",
        },
        {
          start: "11:42",
          end: "11:48",
          title: "Flash talk 2",
        },
        {
          start: "11:48",
          end: "11:54",
          title: "Flash talk 3",
        },
        {
          start: "11:54",
          end: "12:00",
          title: "CloudCIX talk",
        },
      ],
    },
    {
      kind: "single",
      start: "12:00",
      end: "12:50",
      title: "Lunch",
    },
    {
      kind: "session",
      start: "12:50",
      end: "13:50",
      title: "Session 2: Medical genetics - Chair Corey Alwell",
      talks: [
        {
          start: "12:50",
          end: "13:02",
          title: "Talk 1",
        },
        {
          start: "13:02",
          end: "13:14",
          title: "Talk 2",
        },
        {
          start: "13:14",
          end: "13:26",
          title: "Talk 3",
        },
        {
          start: "13:26",
          end: "13:32",
          title: "Flash talk 1",
        },
        {
          start: "13:32",
          end: "13:38",
          title: "Flash talk 2",
        },
        {
          start: "13:38",
          end: "13:44",
          title: "Flash talk 3",
        },
        {
          start: "13:44",
          end: "13:50",
          title: "Flash talk 4",
        },
      ],
    },
    {
      kind: "single",
      start: "13:50",
      end: "14:35",
      title: "Keynote 2: Dr. María Ávila-Arcos - Chair TBD",
    },
    {
      kind: "single",
      start: "14:35",
      end: "15:25",
      title: "Posters and coffee",
    },
    {
      kind: "session",
      start: "15:25",
      end: "16:20",
      title: "Session 3: Population genetics - Chair Tomas Gomes",
      talks: [
        {
          start: "15:25",
          end: "15:37",
          title: "Talk 1",
        },
        {
          start: "15:37",
          end: "15:49",
          title: "Talk 2",
        },
        {
          start: "15:49",
          end: "16:01",
          title: "Talk 3",
        },
        {
          start: "16:01",
          end: "16:06",
          title: "Flash talk 1",
        },
        {
          start: "16:06",
          end: "16:12",
          title: "Flash talk 2",
        },
        {
          start: "16:12",
          end: "16:18",
          title: "Flash talk 3",
        },
      ],
    },
    {
      kind: "session",
      start: "16:20",
      end: "17:20",
      title: "Session 4: Methods and Tools - Chair Róisín Long",
      talks: [
        {
          start: "16:20",
          end: "16:32",
          title: "Talk 1",
        },
        {
          start: "16:32",
          end: "16:44",
          title: "Talk 2",
        },
        {
          start: "16:44",
          end: "16:56",
          title: "Talk 3",
        },
        {
          start: "16:56",
          end: "17:02",
          title: "Flash talk 1",
        },
        {
          start: "17:02",
          end: "17:08",
          title: "Flash talk 2",
        },
        {
          start: "17:08",
          end: "17:14",
          title: "Flash talk 3",
        },
        {
          start: "17:14",
          end: "17:20",
          title: "Flash talk 4",
        },
      ],
    },
    {
      kind: "single",
      start: "17:20",
      end: "17:30",
      title: "Closing remarks and prizes",
    },
    {
      kind: "single",
      start: "Evening",
      end: "",
      title: "Social event in the Pav",
    },
  ];
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
              <NavigationMenuLink href={link.href} class={navigationMenuTriggerStyle()}>
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
        <div class="flex justify-center">
          <img src="./vibe25logo.png" alt="VIBE 2025 logo" class="mb-4" />
        </div>
        <p class="mx-auto mb-4 max-w-3xl text-center lg:text-xl">VIBE 2025 - 25th Anniversary</p>
        <p class="mx-auto max-w-3xl text-center text-muted-foreground lg:text-xl">
          Conference Monday 8th December, ECR Panels Tuesday 9th December 2025
        </p>
        <p class="mx-auto mb-2 max-w-3xl text-center text-muted-foreground lg:text-xl">Trinity College Dublin</p>
      </div>
      <div class="mt-6 flex justify-center gap-3">
        <Button
          class="shadow-sm transition-shadow hover:shadow"
          href="https://app.oxfordabstracts.com/register/event/76071"
          target="_blank">Register Now</Button
        >
        <Button
          variant="outline"
          class="group"
          href="https://app.oxfordabstracts.com/stages/79798/submitter"
          target="_blank">Submit an Abstract</Button
        >
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto mt-10">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Our sponsors</h2>
    <div class="flex flex-col items-center justify-around space-y-10 lg:flex-row lg:space-y-0 lg:space-x-5">
      <Card.Root class="w-full max-w-sm">
        <Card.Content class="my-auto">
          <div class="flex items-center justify-center">
            <img class="h-40 object-contain" src="novogene.png" alt="Novogene logo" />
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root class="w-full max-w-sm">
        <Card.Content class="my-auto">
          <div class="flex items-center justify-center">
            <img class="h-40 object-contain" src="cloudcix.jpg" alt="CloudCIX logo" />
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root class="w-full max-w-sm">
        <Card.Content class="my-auto">
          <div class="flex items-center justify-center">
            <img class="h-40 object-contain" src="avantor.png" alt="Avantor logo" />
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto mt-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Provisional schedule</h2>
    {#each schedule as item}
      {#if item.kind === "single"}
        <div class="mt-2 flex flex-col-reverse justify-between bg-fuchsia-50 lg:flex-row xl:mx-40">
          <div class="ml-2 w-full lg:w-100">
            <h3>{item.start}{item.end == null || item.end.length === 0 ? "" : "-"}{item.end}</h3>
          </div>
          <div class="ml-2 w-100 w-full lg:w-100">
            <p class="font-bold">{item.title}</p>
          </div>
        </div>
      {/if}
      {#if item.kind === "session"}
        <div class="mt-2 flex flex-col-reverse justify-between lg:flex-row xl:mx-40">
          <div class="ml-2 hidden w-100 lg:block">
            <h3>{item.start}-{item.end}</h3>
          </div>
          <div class="ml-2 w-100 rounded-md">
            <p class="mb-1 font-bold">{item.title}</p>
            <div class="mb-2 h-1 w-8/10 bg-fuchsia-400"></div>
            {#each item.talks as talk}
              <div class="flex w-100 justify-start">
                <div class="w-40">
                  <p>{talk.start}{talk.end == null || talk.end.length === 0 ? "" : "-"}{talk.end}</p>
                </div>
                <div>
                  <p>{talk.title}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
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
