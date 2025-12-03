<script lang="ts">
  import Button from "@/components/ui/button/button.svelte";
  import { GraduationCap, Link } from "@lucide/svelte";

  let currentPath = "";
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  const isActive = (href: string) => (href === currentPath ? "text-purple-700 font-bold" : "");
</script>

<section class="relative overflow-hidden px-2 pt-20 pb-4">
  <div class="relative z-10 container mx-auto">
    <div class="mx-auto flex max-w-5xl flex-col items-center">
      <div>
        <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Keynote Speakers</h2>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
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
            Nikolaos Vakirlis is a computational biologist specialized in evolutionary genomics. He has a PhD from
            Sorbonne University in Paris, France and has worked as a postdoctoral researcher in Ireland, Germany and
            Greece. His main goal throughout his career has been to understand how and why novel genes originate during
            evolution and his research has helped elucidate the mechanism of de novo gene birth. Since October 2024, Dr.
            Vakirlis has been a G4 group leader at the Hellenic Pasteur Institute, at the head of a multidisciplinary
            team. His group continues to investigate the processes generating genetic novelty across different lineages
            but they also focus on antimicrobial peptides, an important component of the natural defense of all
            organisms against pathogens. By detecting them and studying their evolutionary dynamics at the scale of all
            animals, Dr. Vakirlis's group aim to ultimately be able to harness them as alternative antibiotics. His
            group also studies the origins and evolution of novel ‘microproteins’ in bacteria to understand how they may
            acquire functions related to antibiotic resistance and antimicrobial activity.
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
