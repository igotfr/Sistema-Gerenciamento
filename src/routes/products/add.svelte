<!-- Script -->
<script>
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/navigation/Nav.svelte';
	import Form from '$lib/forms/ProductAddEditForm.svelte';
</script>

<!-- HTML -->
<main class="page--container">
	<Header pageTitle="Adicionar Produto" hasBtn={true} url="/products" />
	<article class="py-5">
		<Form isEdit={false} />
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
