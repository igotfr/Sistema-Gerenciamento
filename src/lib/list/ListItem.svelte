<!-- Script -->
<script>
  // Imports
  import { createEventDispatcher } from 'svelte';

  // Props
  export let customClasses = '';
  export let item = '';

  // Variávels
  const dispatch = createEventDispatcher();
</script>

<article class="px-10 py-5 rounded-md flex justify-between w-10/12 lg:w-4/12 mr-auto ml-auto bg-white hover:bg-blue-light {customClasses}">
  <p>{item}</p>
  <i class="fas fa-edit text-green hover:text-green-light cursor-pointer text-lg" on:click={() => dispatch('handleClick')}></i>
</article>
