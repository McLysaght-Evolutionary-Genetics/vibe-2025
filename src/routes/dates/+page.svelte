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
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-2xl"><b>Important dates</b></p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          <b>31st October 2025</b> 23:59 (Irish Standard/Local Time) - Abstract Submission Closes
        </p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          <b>24th November 2025</b> 23:59 (Irish Standard/Local Time) - Registration Closes
        </p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl"><b>8th December 2025</b> - VIBE 2025 Conference</p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          <b>9th December 2025</b> - Early Career Researchers Panel Event
        </p>
      </div>
    </div>
  </div>
</section>
