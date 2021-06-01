<!-- Página de Registro/Edição de Lead -->
<!-- Script -->
<script>
  // imports
  import Header from '$lib/Header.svelte';
  import Nav from '$lib/navigation/Nav.svelte';
  import AgenteEditForm from '$lib/forms/AgentEditForm.svelte';
  import { getStorageData } from '../../../utils/sessionStorage';
  import { onMount } from 'svelte';

  // Variáveis
  const user = getStorageData('user', false);
  let userId = null;

  // Quando o componente entrar na págian fazer...
  onMount(() => {
    userId = user.id;
  })
</script>

<!-- HTML -->
<main class="page--container">
  <Header pageTitle="Edição de Agente" hasBtn={true} url={`/agent/${userId}`} />
  <article class="py-5">
    <AgenteEditForm />
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