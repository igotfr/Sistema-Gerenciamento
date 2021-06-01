<!-- Script -->
<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/navigation/Nav.svelte';
	import List from '$lib/list/ListProducts.svelte';
	import { productsStore } from '../../stores/products-store';

	let namesArr = [];

	onMount(async () => {
		namesArr = await $productsStore;
	});
</script>

<!-- Página de Produtos -->


<!-- HTML -->
<main class="page--container">
	<Header pageTitle="Lista de Produtos" />
	<article class="py-5">
		<List
			bind:listItems={namesArr}
			hasSearch={true}
			canAdd={true}
			inputPlaceholder="Exemplo: Produto 1"
			btnText="Adicionar Produto"
			btnUrl="/products/add"
			on:handleClick={() => goto('/products/edit')}
		/>
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
