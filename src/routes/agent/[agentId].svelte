<!-- Página de Agente -->
<!-- Script -->
<script>
  import Header from '$lib/Header.svelte';
  import Nav from '$lib/navigation/Nav.svelte';
  import UserCard from '$lib/card/UserCard.svelte';
  import LeadListCard from '$lib/card/LeadListCard.svelte';
</script>

<!-- HTML -->
<main class="page--container">
  <Header pageTitle="Agente" />
  <article class="grid grid-cols-1 gap-y-4 md:grid-cols-2 py-5 w-full px-10 lg:mt-1/12 md:mt-3/12">
    <UserCard />
    <LeadListCard />
  </article>
  <Nav />
</main>

<!-- Postcss -->
<style lang="postcss">
  .page--container {
    @apply flex flex-col items-center;
    @apply w-screen;
    @apply min-h-screen;
    @apply bg-blue-dark;
    @apply pt-10;
  }
</style>