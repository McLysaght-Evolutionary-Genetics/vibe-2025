<script>
  import Map from "@/components/Map.svelte";
  import ScheduleConference from "@/components/ScheduleConference.svelte";
  import ScheduleEcr from "@/components/ScheduleEcr.svelte";
  import Speakers from "@/components/Speakers.svelte";
  import Button from "@/components/ui/button/button.svelte";
  import * as Card from "@/components/ui/card";
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
          disabled
          class="shadow-sm transition-shadow hover:shadow"
          href="https://app.oxfordabstracts.com/register/event/76071"
          target="_blank">Register Now</Button
        >
        <Button
          disabled
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

<Speakers />

<Map />

<ScheduleConference />

<br />

<ScheduleEcr />
