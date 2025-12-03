<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let currentPath = "";
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  const isActive = (href: string) => (href === currentPath ? "text-purple-700 font-bold" : "");
</script>

<section class="relative overflow-hidden py-32">
  <div class="relative z-10 container mx-auto">
    <div class="mx-auto flex max-w-5xl flex-col items-center">
      <div>
        <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">About VIBE</h2>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          The Virtual Institute of Bioinformatics & Evolution (<b>VIBE</b>) was founded in 2000, to consolidate
          bioinformatics research efforts in Ireland, provide a forum for emerging bioinformatics researchers, provide a
          platform for the development of an Irish commercial bioinformatics capability, and develop bioinformatics
          teaching within Irish Universities.
        </p>
        <p class="mx-auto mb-6 max-w-5xl text-justify lg:text-xl">
          VIBE holds conferences every year bringing together those working in the bioinformatics field in Ireland. The
          last meeting took place in <a
            href="https://genomicsdatascience.ie/hugely-successful-vibe-icbg-2024/"
            target="_blank">Galway</a
          > in 2024 hosted by Pilib Ó Broin.
        </p>
        <p class="mx-auto mb-6 max-w-5xl text-justify lg:text-xl">
          The <b>2025 conference</b> will take place in <b>Trinity College Dublin</b>, hosted by Máire Ní Leathlobhair.
          The main session will take place on <b>Monday, 8th December 2025</b> followed by a half-day ECR event on
          <b>Tuesday, 9th December 2025</b>.
        </p>
      </div>
    </div>
  </div>
</section>
