<!-- Script -->
<script>
	// Imports
	import { onMount } from 'svelte';
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/navigation/Nav.svelte';
	import List from '$lib/list/List.svelte';
	import { leadsStore } from '../../stores/leads-store';

	let leadsObj = [];
	onMount(async () => {
		leadsObj = await $leadsStore;
	});
</script>

<!-- Página de lista de Leads/Clientes -->

<!-- HTML -->
<main class="page--container">
	<Header pageTitle="Lista de Leads/Clientes" />
	<article class="py-5">
		<List
			bind:listItems={leadsObj}
			hasSearch={true}
			canAdd={true}
			inputPlaceholder="Exemplo: Cliente 1"
			btnText="Adicionar Lead"
			btnUrl="/lead/add"
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
