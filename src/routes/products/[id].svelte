<!-- Script -->
<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/navigation/Nav.svelte';
	import Form from '$lib/forms/ProductAddEditForm.svelte';
	import { productsStore } from '../../stores/products-store';

	// Variáveis
	let products;
	let selectedProduct;

	onMount(async () => {
		products = await $productsStore;
		selectedProduct = products.filter((product) => {
			if (product.id === $page.params.id) {
				return product;
			}
		});
	});
</script>

<!-- Página de Registro Edição de Leads -->

<!-- HTML -->
<main class="page--container">
	<Header pageTitle="Editar Produto" hasBtn={true} url="/products" />
	<article class="py-5">
		{#if products}
			<Form isEdit={true} productsObj={selectedProduct[0]} />
		{/if}
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
