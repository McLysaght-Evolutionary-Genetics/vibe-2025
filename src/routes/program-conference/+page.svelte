<script lang="ts">
  import ScheduleConference from "@/components/ScheduleConference.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let currentPath = "";
  if (typeof window !== "undefined") {
    currentPath = window.location.pathname;
  }

  const isActive = (href: string) => (href === currentPath ? "text-purple-700 font-bold" : "");
</script>

<ScheduleConference />
