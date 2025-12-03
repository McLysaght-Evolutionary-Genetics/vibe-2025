<script lang="ts">
  let currentPath = "";
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  const isActive = (href: string) => (href === currentPath ? "text-purple-700 font-bold" : "");
</script>

<section class="relative overflow-hidden pt-20 pb-8">
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
        <h2 class="mb-8 text-center text-4xl font-bold text-muted-foreground">Venue</h2>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          VIBE 2025 will take place at <b>Trinity College Dublin</b>, in the
          <b>Smurfit Institute of Genetics</b> and <b>Hamilton Building</b>. Exact room locations will be included on
          the timetable. The evening social event will take place in the <b>Pavillion Bar</b>. These locations are
          circled on the map below. The closest gates to these locations are <b>Lincoln Place gate</b> and the
          <b>Science Gallery gate</b>. Front Gate and Nassau Street gate are a 5-10 minute walk from these buildings.
          These entrances are marked with stars on the map. A Google map with pinned locations is available
          <a href="https://maps.app.goo.gl/zqar3c1nZQPRhmHF7" target="_blank"><u>here</u></a>.
        </p>
        <div class="flex justify-center">
          <img src="./vibe_map.png" alt="VIBE 2025 logo" class="mb-4" />
        </div>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          College maps and directions to campus are available <a href="https://www.tcd.ie/Maps/" target="_blank"
            ><u>here</u></a
          >. The TCD Sense map, which provides information about the sensory environments of locations across Trinity,
          and information on physical access, is available
          <a href="https://tcdsensemap.ie/" target="_blank"><u>here</u></a>.
        </p>
        <p class="mx-auto mb-4 max-w-5xl text-justify lg:text-xl">
          A <b>private room</b> will be available in the Smurfit Institute of Genetics for those who need it, for example
          for breastfeeding or prayer.
        </p>
      </div>
    </div>
  </div>
</section>
