<!-- Página de Login/Index do App -->
<!-- Script -->
<script>
  import LoginForm from '$lib/forms/LoginForm.svelte';
</script>

<!-- HTML -->
<main class="page--container">
  <h1 class="text-3xl lg:text-4xl lg:mr-96 mr-9/12 lg:mb-10">Login</h1>
  <!-- Formulário de Login -->
  <LoginForm />
</main>

<!-- Postcss -->
<style lang="postcss">
  .page--container {
    @apply w-screen;
    @apply min-h-screen;
    @apply bg-blue-dark;
    @apply pt-10;
    @apply flex flex-col items-center justify-center;
  }
</style>