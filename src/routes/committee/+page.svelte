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
        <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">VIBE 2025 Organising Committee</h2>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Dr Máire Ní Leathlobhair</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Chair</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Róisín Long</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Deputy Chair</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Dr Elle Loughran</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Scientific Program Chair</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Sadbh Carrick</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Logistics & Venue Coordinator</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Corey Alwell, Catherine Butt</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          Registration & Delegate Support, Abstract Coordinators
        </p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Lukasz Niezabitowski</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">Tech & AV Coordinator</p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Dr Donia Arafa, Thomas Gomes</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          EDI & Accessibility Leads, Social & Networking Coordinators
        </p>
        <p class="mx-auto mb-1 max-w-5xl text-justify lg:text-xl"><b>Dr Laetitia Chauve, Alex Siekmann</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">OCMs</p>
      </div>
    </div>
  </div>
</section>
