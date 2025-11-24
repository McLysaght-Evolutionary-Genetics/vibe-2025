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
      title: "Keynote 1: Dr Nikolaos Vakirlis - Chair Amy Ó Brolcháin",
    },
    {
      kind: "session",
      start: "11:00",
      end: "12:00",
      title: "Session 1: Evolution and population genetics - Chair Dr Elle Loughran",
      talks: [
        {
          start: "11:00",
          end: "11:12",
          title: "From Similarity to Specificity: Dissecting Functional and Mutational Landscapes of Paralogous Genes",
          person: "Olivier Dennler",
        },
        {
          start: "11:12",
          end: "11:24",
          title: "Gene gain, sequence evolution, and synteny shape the diversification of Lepidoptera",
          person: "Peter Mulhair",
        },
        {
          start: "11:24",
          end: "11:36",
          title: "Genomic testing of hypotheses on the origins of the Grecìa Salentina population and language",
          person: "Martina Gulì",
        },
        {
          start: "11:36",
          end: "11:42",
          title:
            "Genomic characterisation of recurrent Mycobacterium avium isolates from chronically infected patients reveals patterns of within-host evolution",
          person: "Aaron Walsh",
        },
        {
          start: "11:42",
          end: "11:48",
          title:
            "What's in a Name? Tracing the Structural and Functional Evolution of the Ligand of Numb Protein X Family",
          person: "Leah Gabrielle Erwin",
        },
        {
          start: "11:48",
          end: "11:54",
          title: "Evolution of histone mRNA 3' end processing machinery in eukaryotes",
          person: "Bin Zhao",
        },
        {
          start: "11:54",
          end: "12:00",
          title: "CloudCIX talk",
          person: null,
        },
      ],
    },
    {
      kind: "single",
      start: "12:00",
      end: "12:10",
      title: "Break",
    },
    {
      kind: "session",
      start: "12:10",
      end: "13:10",
      title: "Session 2: Medical genetics - Chair Corey Alwell",
      talks: [
        {
          start: "12:10",
          end: "12:22",
          title:
            "The presence of a secondary species alters P. aeruginosa ciprofloxacinresistance evolution in the cystic fibrosis lung",
          person: "Sadhbh Dodd",
        },
        {
          start: "12:22",
          end: "12:34",
          title: "Blood DNA Methylation Modifications in Response to Opioid Exposure in a Rodent Model",
          person: "Nicole Glendinning",
        },
        {
          start: "12:34",
          end: "12:46",
          title:
            "Development of a blood-based transcriptional biosignature for the detection of cattle infected with Mycobacterium bovis, which causes bovine tuberculosis",
          person: "David MacHugh",
        },
        {
          start: "12:46",
          end: "12:52",
          title:
            "Single-Cell Transcriptomic Decoding of B Cell Diversity in IgA Vasculitis Reveals a Glycosylation-Dysregulated Naïve Subset.",
          person: "Joao Carlos Batista-Liz",
        },
        {
          start: "12:52",
          end: "12:58",
          title:
            "Single-nucleus RNA-seq of the mouse intra-amygdala kainic acid model reveals cell subtype-specific adaptations to chronic epilepsy",
          person: "Javi Villegas",
        },
        {
          start: "12:58",
          end: "13:04",
          title:
            "Quantifying Haploinsufficiency in Tumour Suppressor Genes: a Cancer Hallmarks-Based Functional Screen",
          person: "Elle Loughran",
        },
        {
          start: "13:04",
          end: "13:10",
          title: "Transcriptomic Dysregulation of Bone Marrow Mesenchymal Stromal Cells in Type 2 Diabetes Mellitus",
          person: "Jingyan Wang",
        },
      ],
    },
    {
      kind: "single",
      start: "13:10",
      end: "13:40",
      title: "Lunch",
    },
    {
      kind: "single",
      start: "13:40",
      end: "14:40",
      title: "Parallel poster sessions: Genetics atrium",
    },
    {
      kind: "single",
      start: "13:40",
      end: "14:40",
      title: "Parallel poster sessions: Moyne institute",
    },
    {
      kind: "single",
      start: "14:40",
      end: "15:25",
      title: "Keynote 2: Dr. María Ávila-Arcos - Chair Catherine Butt",
    },
    {
      kind: "session",
      start: "15:25",
      end: "16:25",
      title: "Session 3: Evolution and population genetics - Chair Tomas Gomes",
      talks: [
        {
          start: "15:25",
          end: "15:37",
          title:
            "Characterisation of diverse global ancestries among participants of the UK Biobank illustrates the immigration history of Great Britain in the 20th century",
          person: "Fiona Pantring",
        },
        {
          start: "15:37",
          end: "15:49",
          title: "Homology-Based miRNA Annotation and Evolution Across Mammals",
          person: "Sarahjane Power",
        },
        {
          start: "15:49",
          end: "16:01",
          title: "Building a Placenta: Roles for Syncytin-Like Retroviral Envelopes of Livebearing Fish",
          person: "Amy Ó Brolcháin",
        },
        {
          start: "16:01",
          end: "16:06",
          title: "Natural knock-outs of human genes are more frequently observed in genes with paralogs.",
          person: "Carlos Vivas Rodríguez",
        },
        {
          start: "16:06",
          end: "16:12",
          title:
            "A Duplicate-Resolved Paddlefish Genome Provides Insights into the Mechanisms of Rediploidization and Hox Cluster Evolution",
          person: "Dearbhaile Casey",
        },
        {
          start: "16:12",
          end: "16:18",
          title: "The Genomics of an Irish Hunter-Gatherer Community",
          person: "Corey Alwell",
        },
        {
          start: "16:18",
          end: "16:25",
          title: "Developing research infrastructure to empower Irish genetics and genomics innovation under EHDS",
          person: "Aedín Culhane",
        },
      ],
    },
    {
      kind: "single",
      start: "16:25",
      end: "16:35",
      title: "Break",
    },
    {
      kind: "session",
      start: "16:35",
      end: "17:35",
      title: "Session 4: Methods and Tools - Chair Róisín Long",
      talks: [
        {
          start: "16:35",
          end: "16:47",
          title:
            "Development of a Nextflow Pipeline for Consensus MHC Class I Genotyping within a Cloud-Based Neoantigen Prediction Workflow",
          person: "Kevin Ryan",
        },
        {
          start: "16:47",
          end: "16:59",
          title: "AMRcast: A machine learning framework to predict AMR phenotypes from genomic functional annotations",
          person: "Lucy Dillon",
        },
        {
          start: "16:59",
          end: "17:11",
          title:
            "PyamilySeq: Transparent and interpretable gene (re)clustering and pangenomic inference highlights the fragility of conventional methods",
          person: "Nicholas Dimonaco",
        },
        {
          start: "17:11",
          end: "17:17",
          title:
            "CarbaSnake: a clinically orientated, open-source workflow for the genomic characterisation of Carbapenemase-producing Enterobacterales (CPE)",
          person: "Emily Cronin",
        },
        {
          start: "17:17",
          end: "17:23",
          title: "A predicted cancer dependency map for paralog pairs",
          person: "Narod Kebabci",
        },
        {
          start: "17:23",
          end: "17:29",
          title: "Predicting drug resistance to synthetic lethal therapies in cancer",
          person: "Metin Yazar",
        },
        {
          start: "17:29",
          end: "17:35",
          title:
            "Evaluation of partitioning algorithms for trustworthy out-of-distribution evaluation of machine learning models in biochemistry",
          person: "Raúl Fernández Díaz",
        },
      ],
    },
    {
      kind: "single",
      start: "17:35",
      end: "17:45",
      title: "Closing remarks and awards - Chair Dr Máire Ní Leathlobhair",
    },
    {
      kind: "single",
      start: "Evening",
      end: "",
      title: "Social event in the Pav",
    },
  ];

  const ecrSchedule = [
    {
      kind: "single",
      start: "10:30",
      end: "11:00",
      title: "Sign in",
    },
    {
      kind: "session",
      start: "11:00",
      end: "12:30",
      title: "Careers in academia panel - Chair Dr Elle Loughran",
      person: "Dr Karen Siu Ting",
      position: null,
      affiliation: "Queen's University Belfast",
      time: "20-25 minutes",
      discussion: [
        {
          person: "Dr Karen Siu Ting",
          position: null,
          affiliation: "Queen's University Belfast",
          link: "https://www.linkedin.com/in/karen-siu-ting-815b341b7/",
        },
        {
          person: "Dr Kevin Daly",
          position: "Assistant Professor",
          affiliation: "UCD",
          link: "https://www.linkedin.com/in/kevin-daly-b5832076/",
        },
        {
          person: "Dr Anthony Redmond",
          position: "Assistant Professor",
          affiliation: "UCD",
          link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwutIIQD_MQ4VzcWmbX9xP4SALzxOVF8iUMA&s",
        },
        {
          person: "Dr Anahit Hovhannisyan",
          position: "Gerda Henkel Fellow",
          affiliation: "TCD",
          link: "https://www.linkedin.com/in/anahit-hovhannisyan-645097256/",
        },
      ],
    },
    {
      kind: "single",
      start: "12:30",
      end: "14:00",
      title: "Lunch and industry mixer",
    },
    {
      kind: "session",
      start: "14:00",
      end: "15:30",
      title: "Beyond academia panel - Chair Catherine Butt",
      person: "Dr Colm Ó Dushlaine",
      position: "Head of Statistical Genetics",
      affiliation: "insitro",
      time: "20-25 minutes",
      discussion: [
        {
          person: "Dr Colm Ó Dushlaine",
          position: "Head of Statistical Genetics",
          affiliation: "insitro",
          link: "https://www.linkedin.com/in/codushlaine/",
        },
        {
          person: "Dr Eppie Jones",
          position: "Interim National Bioinformatics Director",
          affiliation: "HSE",
          link: "https://www.linkedin.com/in/eppie-jones-239889133/",
        },
        {
          person: "Dr Alan Rice",
          position: "Bioinformatician",
          affiliation: "National Virus Reference Laboratory",
          link: "https://www.linkedin.com/in/alanmrice/",
        },
        {
          person: "Dr Hayley Furlong",
          position: "Expert Scientific Writer",
          affiliation: "Novartis",
          link: "https://www.linkedin.com/in/dr-hayley-c-furlong/",
        },
      ],
    },
    {
      kind: "single",
      start: "15:30",
      end: "15:40",
      title: "Closing",
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
      <Card.Root class="w-full max-w-sm border-1 border-slate-400">
        <Card.Content class="my-auto">
          <div class="flex items-center justify-center">
            <img class="h-40 object-contain" src="novogene.png" alt="Novogene logo" />
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root class="w-full max-w-sm border-1 border-yellow-400">
        <Card.Content class="my-auto">
          <div class="flex items-center justify-center">
            <img class="h-40 object-contain" src="cloudcix.jpg" alt="CloudCIX logo" />
          </div>
        </Card.Content>
      </Card.Root>
      <Card.Root class="w-full max-w-sm border-1 border-slate-400">
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
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">
      Conference Schedule <span class="text-fuchsia-900/50">(provisional)</span>
    </h2>
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
        <br />
        <div class="mt-2 flex flex-col-reverse justify-between lg:flex-row xl:mx-40">
          <div class="ml-2 hidden w-100 lg:block">
            <h3>{item.start}-{item.end}</h3>
          </div>
          <div class="ml-2 w-100 rounded-md">
            <p class="mb-1 font-bold">{item.title}</p>
            <div class="mb-2 h-1 w-8/10 bg-fuchsia-400"></div>
            {#each item.talks as talk}
              <div>
                <p>{talk.title}</p>
                <!-- <p class="text-muted-foreground">Dr Peter Mulhair</p> -->
                <p class="text-muted-foreground">
                  {talk.person == null ? "" : talk.person + " | "}{talk.start}{talk.end == null || talk.end.length === 0
                    ? ""
                    : "-"}{talk.end}
                </p>
                <br />
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<section>
  <div class="container mx-auto mt-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">
      ECR Meeting Schedule <span class="text-fuchsia-900/50">(provisional)</span>
    </h2>
    {#each ecrSchedule as item}
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
        <br />
        <div class="mt-2 flex flex-col-reverse justify-between lg:flex-row xl:mx-40">
          <div class="ml-2 hidden w-100 lg:block">
            <h3>{item.start}-{item.end}</h3>
          </div>
          <div class="ml-2 w-100 rounded-md">
            <p class="mb-1 font-bold">{item.title}</p>
            <div class="mb-2 h-1 w-8/10 bg-fuchsia-400"></div>
            <p>Opening talk</p>
            <p class="text-muted-foreground">{item.person} | {item.time}</p>
            <br />
            {#each item.discussion as panel}
              <div class="flex w-100 justify-start">
                <div>
                  <a
                    class="focus:outline-0"
                    class:underline={panel.link}
                    class:hover:text-fuchsia-800={panel.link}
                    class:hover:decoration-3={panel.link}
                    class:focus:bg-fuchsia-300={panel.link}
                    class:focus:decoration-3={panel.link}
                    class:focus:text-black={panel.link}
                    href={panel.link}>{panel.person}</a
                  >
                  <p class="text-muted-foreground">
                    {panel.position == null ? "" : panel.position + ", "}{panel.affiliation}
                  </p>
                </div>
              </div>
            {/each}
            <br />
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
