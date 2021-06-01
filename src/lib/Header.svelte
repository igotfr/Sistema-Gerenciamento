<!-- Script -->
<script>
  // Imports
  import UserOptions from '$lib/navigation/UserOptions.svelte';
  import PageTitle from '$lib/navigation/PageTitle.svelte';

  // Propos
  export let pageTitle = '';
  export let hasBtn = null;
  export let url = '';
</script>

<article class="flex flex-col lg:flex-row w-full justify-between px-10">
  <PageTitle {hasBtn} {url}>{pageTitle}</PageTitle>
  <UserOptions />
</article>