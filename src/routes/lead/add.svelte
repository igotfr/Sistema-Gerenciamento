<!-- Página de Registro de Leads -->
<!-- Script -->
<script>
  import Header from '$lib/Header.svelte';
  import Nav from '$lib/navigation/Nav.svelte';
  import AddEditForm from '$lib/forms/LeadAddEditForm.svelte';
</script>

<!-- HTML -->
<main class="page--container">
  <Header pageTitle="Adicionar Lead" hasBtn={true} url="/lead" />
  <article class="py-5">
    <AddEditForm isEdit={false} />
  </article>
  <Nav />
</main>

<!-- Postcss -->
<style lang="postcss">
  .page--container {
    @apply flex flex-col;
    @apply w-screen;
    @apply min-h-screen;
    @apply bg-blue-dark;
    @apply pt-10;
  }
</style>