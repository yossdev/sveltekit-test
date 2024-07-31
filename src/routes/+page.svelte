<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  //   console.log(data);
</script>

{#each data.pokemonsWithDetails as d}
  <p>{d.value.name}</p>
{/each}
