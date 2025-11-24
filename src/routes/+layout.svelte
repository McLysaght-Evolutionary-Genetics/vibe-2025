<script lang="ts">
  import favicon from "$lib/assets/favicon.png";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Virtual Institute of Bioinformatics and Evolution</title>
</svelte:head>

{@render children?.()}
