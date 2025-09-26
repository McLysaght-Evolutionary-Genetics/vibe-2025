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
  import { GraduationCap, Link, LinkedinIcon, Mail, MenuIcon } from "@lucide/svelte";

  const links = [
    {
      title: "About",
      href: "./about.html",
    },
    {
      title: "Speakers",
      href: "./speakers.html",
    },
    {
      title: "Program",
      href: "./program.html",
    },
    {
      title: "Important Dates",
      href: "./dates.html",
    },
    {
      title: "Venue",
      href: "./venue.html",
    },
    {
      title: "Organising Committee",
      href: "./committee.html",
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
        <p class="mx-auto mb-4 max-w-5xl text-center text-3xl"><b>Keynote Speakers</b></p>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <!-- Speaker 1 -->
        <div class="flex flex-col items-center text-center">
          <img
            src="./mariaavila.jpg"
            alt="Dr. María Ávila-Arco"
            class="h-60 w-60 rounded-full object-cover shadow-lg"
          />
          <h3 class="mt-6 mb-2 text-xl font-semibold">Dr. María Ávila-Arcos</h3>
          <p class="flex h-12 items-center justify-center text-gray-600">
            Group Leader, International Laboratory for Human Genome Research, National Autonomous University of Mexico
          </p>
          <p class="mt-4 mb-4 text-justify text-base text-gray-700">
            María Ávila-Arcos is an Associate Professor at the International Laboratory for Human Genome Research
            (LIIGH) at the National Autonomous University of Mexico (UNAM). She completed her undergraduate studies in
            Genomic Sciences at UNAM and earned her doctorate in Palaeogenomics from the University of Copenhagen. She
            subsequently held a postdoctoral fellowship in Population Genetics at Stanford University. Dr. Ávila-Arcos's
            research leverages ancient and modern DNA to investigate the evolutionary history of Mexican populations and
            the pathogens that have infected them. A central focus of her pioneering work involves characterizing the
            African genetic component of the Afro-Mexican population. Her research has been instrumental in
            reconstructing the demographic and adaptive processes that shaped Mexico's genetic diversity. Furthermore,
            her ancient pathogen work has traced the introduction routes of pathogenic bacteria and viruses into Mexico
            during the European colonization era. Currently, Dr. Ávila-Arcos is on a sabbatical (until August 2026) at
            The Smurfit Institute of Genetics at Trinity College Dublin, working with Professor Dan Bradley.
          </p>
          <p>
            <Button variant="outline" size="icon" href="https://liigh.unam.mx/mavila/" target="_blank">
              <Link class="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              href="https://scholar.google.com/citations?user=nQuXihQAAAAJ&hl=en/"
              target="_blank"
            >
              <GraduationCap class="h-4 w-4" />
            </Button>
          </p>
        </div>

        <!-- Speaker 2 -->
        <div class="flex flex-col items-center text-center">
          <img
            src="./VAKIRLIS_Nikolaos_HPI_photo.jpg"
            alt="Dr. Nikolaos Vakirlis"
            class="h-60 w-60 rounded-full object-cover shadow-lg"
          />
          <h3 class="mt-6 mb-2 text-xl font-semibold">Dr. Nikolaos Vakirlis</h3>
          <p class="flex h-12 items-center justify-center text-gray-600">
            G4 Group Leader, Evolutionary Genomics Group, Hellenic Pasteur Institute
          </p>
          <p class="mt-4 mb-4 text-justify text-base text-gray-700">
            I am a computational biologist specialized in evolutionary genomics. I have a PhD from Sorbonne University
            in Paris, France and I have worked as a postdoctoral researcher in Ireland, Germany and Greece. My main goal
            throughout my career has been to understand how and why novel genes originate during evolution and my
            research has helped elucidate the mechanism of de novo gene birth. Since October 2024, I have been a G4
            group leader at the Hellenic Pasteur Institute, at the head of a multidisciplinary team. Our group continues
            to investigate the processes generating genetic novelty across different lineages but we also focus on
            antimicrobial peptides, an important component of the natural defense of all organisms against pathogens. By
            detecting them and studying their evolutionary dynamics at the scale of all animals, we aim to ultimately be
            able to harness them as alternative antibiotics. We also study the origins and evolution of novel
            ‘microproteins’ in bacteria to understand how they may acquire functions related to antibiotic resistance
            and antimicrobial activity.
          </p>
          <p>
            <Button variant="outline" size="icon" href="https://vakirlislab.com/" target="_blank">
              <Link class="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              href="https://scholar.google.com/citations?user=72rh-ZsAAAAJ&hl=en"
              target="_blank"
            >
              <GraduationCap class="h-4 w-4" />
            </Button>
          </p>
        </div>
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
