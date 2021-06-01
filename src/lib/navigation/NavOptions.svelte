<script>
  // imports
  import { fly } from 'svelte/transition';  

  // Props
  export let openOptions;
  export let options = [
    {
      name: 'Lead',
      url: '/lead/report'
    },
    {
      name: 'Agente',
      url: '/agent/report'
    }
  ];
</script>

{#if openOptions}
  <div transition:fly="{{ y: 200, duration: 2000 }}" class="absolute left-2/4 top-3/4 md:left-3/4 md:mt-8 flex flex-col items-center w-40 bg-white rounded-md px-4 py-3">
    <i class="fas fa-window-close text-red self-end cursor-pointer" on:click={() => openOptions = false} />
    <!-- Lista de Links -->
    <ul class="self-start">
      <!-- Iteração sob o array options -->
      {#each options as option}
      <li>
        <a class="font-body" href={option.url}>{option.name}</a>
      </li>
      {/each}
    </ul>
  </div>
{/if}