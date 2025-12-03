<script lang="ts">
  const schedule = [
    {
      kind: "single",
      start: "9:00",
      end: "10:00",
      title: "Sign in and coffee/pastries",
      location: "Smurfit institute of genetics - Atrium",
    },
    {
      kind: "single",
      start: "10:00",
      end: "10:15",
      title: "Welcome and opening remarks",
      location: "Hamilton building - MacNeill theatre",
    },
    {
      kind: "single",
      start: "10:15",
      end: "11:00",
      title: "Keynote 1: Dr Nikolaos Vakirlis - Chair Amy Ó Brolcháin",
      location: "Hamilton building - MacNeill theatre",
    },
    {
      kind: "session",
      start: "11:00",
      end: "12:00",
      title: "Session 1: Evolution and population genetics - Chair Dr Elle Loughran",
      location: "Hamilton building - MacNeill theatre",
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
      location: null,
    },
    {
      kind: "session",
      start: "12:10",
      end: "13:10",
      title: "Session 2: Medical genetics - Chair Corey Alwell",
      location: "Hamilton building - MacNeill theatre",
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
          end: "13:58",
          title:
            "Quantifying Haploinsufficiency in Tumour Suppressor Genes: a Cancer Hallmarks-Based Functional Screen",
          person: "Elle Loughran",
        },
        {
          start: "12:58",
          end: "13:04",
          title: "Transcriptomic Dysregulation of Bone Marrow Mesenchymal Stromal Cells in Type 2 Diabetes Mellitus",
          person: "Jingyan Wang",
        },
      ],
    },
    {
      kind: "heading",
      text: "Concurrent session: Posters",
    },
    {
      kind: "single",
      start: "13:05",
      end: "14:30",
      title: "Posters and coffee/lunch",
      location: "Smurfit institute of genetics - Atrium: Evolution and population genetics",
    },
    {
      kind: "single",
      start: "13:05",
      end: "14:30",
      title: "Posters and coffee/lunch",
      location: "Moyne institute: Medical genomics & Methods and tools",
    },
    {
      kind: "heading",
      text: "Concurrent session: ELIXIR",
    },
    {
      kind: "single",
      start: "13:30",
      end: "14:30",
      title: "VIBE & ELIXIR-IE breakout session",
      location: "Smurfit institute of genetics - Dawson room",
    },
    {
      kind: "spacing",
    },
    {
      kind: "single",
      start: "14:35",
      end: "15:20",
      title: "Keynote 2: Dr. María Ávila-Arcos - Chair Catherine Butt",
      location: "Hamilton building - MacNeill theatre",
    },
    {
      kind: "session",
      start: "15:20",
      end: "16:20",
      title: "Session 3: Evolution and population genetics - Chair Tomas Gomes",
      location: "Hamilton building - MacNeill theatre",
      talks: [
        {
          start: "15:20",
          end: "15:32",
          title:
            "Characterisation of diverse global ancestries among participants of the UK Biobank illustrates the immigration history of Great Britain in the 20th century",
          person: "Fiona Pantring",
        },
        {
          start: "15:32",
          end: "15:44",
          title: "Homology-Based miRNA Annotation and Evolution Across Mammals",
          person: "Sarahjane Power",
        },
        {
          start: "15:44",
          end: "16:56",
          title: "Building a Placenta: Roles for Syncytin-Like Retroviral Envelopes of Livebearing Fish",
          person: "Amy Ó Brolcháin",
        },
        {
          start: "15:56",
          end: "16:02",
          title: "Natural knock-outs of human genes are more frequently observed in genes with paralogs.",
          person: "Carlos Vivas Rodríguez",
        },
        {
          start: "16:02",
          end: "16:08",
          title:
            "A Duplicate-Resolved Paddlefish Genome Provides Insights into the Mechanisms of Rediploidization and Hox Cluster Evolution",
          person: "Dearbhaile Casey",
        },
        {
          start: "16:08",
          end: "16:14",
          title: "The Genomics of an Irish Hunter-Gatherer Community",
          person: "Corey Alwell",
        },
        {
          start: "16:14",
          end: "16:20",
          title: "Developing research infrastructure to empower Irish genetics and genomics innovation under EHDS",
          person: "Aedín Culhane",
        },
      ],
    },
    {
      kind: "single",
      start: "16:20",
      end: "16:30",
      title: "Break",
      location: null,
    },
    {
      kind: "session",
      start: "16:30",
      end: "17:30",
      title: "Session 4: Methods and Tools - Chair Róisín Long",
      location: "Hamilton building - MacNeill theatre",
      talks: [
        {
          start: "16:30",
          end: "16:42",
          title:
            "Development of a Nextflow Pipeline for Consensus MHC Class I Genotyping within a Cloud-Based Neoantigen Prediction Workflow",
          person: "Kevin Ryan",
        },
        {
          start: "16:42",
          end: "17:54",
          title: "AMRcast: A machine learning framework to predict AMR phenotypes from genomic functional annotations",
          person: "Lucy Dillon",
        },
        {
          start: "16:54",
          end: "17:06",
          title:
            "PyamilySeq: Transparent and interpretable gene (re)clustering and pangenomic inference highlights the fragility of conventional methods",
          person: "Nicholas Dimonaco",
        },
        {
          start: "17:06",
          end: "17:12",
          title:
            "CarbaSnake: a clinically orientated, open-source workflow for the genomic characterisation of Carbapenemase-producing Enterobacterales (CPE)",
          person: "Emily Cronin",
        },
        {
          start: "17:12",
          end: "17:18",
          title: "A predicted cancer dependency map for paralog pairs",
          person: "Narod Kebabci",
        },
        {
          start: "17:18",
          end: "17:24",
          title: "Predicting drug resistance to synthetic lethal therapies in cancer",
          person: "Metin Yazar",
        },
        {
          start: "17:24",
          end: "17:30",
          title:
            "Evaluation of partitioning algorithms for trustworthy out-of-distribution evaluation of machine learning models in biochemistry",
          person: "Raúl Fernández Díaz",
        },
      ],
    },
    {
      kind: "single",
      start: "17:30",
      end: "17:40",
      title: "Closing remarks and awards - Chair Dr Máire Ní Leathlobhair",
      location: "Hamilton building - MacNeill theatre",
    },
    {
      kind: "single",
      start: "18:00",
      end: "",
      title: "Social event with Roots in Tune",
      location: "The Pav",
    },
  ];
</script>

<section>
  <div class="container mx-auto mt-15">
    <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">
      Conference Program <span class="text-fuchsia-900/50">(8th December)</span>
    </h2>
    {#each schedule as item}
      {#if item.kind === "single"}
        <div class="mt-2 flex flex-col-reverse justify-between bg-fuchsia-50 lg:flex-row xl:mx-40">
          <div class="ml-2 w-full lg:w-120">
            <p>
              {item.start}{item.end == null || item.end.length === 0 ? "" : "-"}{item.end}
              {#if item.location}
                <span class="text-muted-foreground"> • {item.location}</span>
              {/if}
            </p>
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
            <p>
              {item.start}-{item.end}
              {#if item.location}
                <span class="text-muted-foreground"> • {item.location}</span>
              {/if}
            </p>
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
      {#if item.kind === "heading"}
        <br />
        <div class="mt-2 flex flex-col-reverse justify-between lg:flex-row xl:mx-40">
          <p class="margin-black border-l-5 border-l-fuchsia-400 pl-2">{item.text}</p>
        </div>
      {/if}
      {#if item.kind === "spacing"}
        <br />
      {/if}
    {/each}
  </div>
</section>
