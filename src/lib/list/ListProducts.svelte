<script>
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import Input from '$lib/Input.svelte';
	import Link from '$lib/Link.svelte';
	import ListItem from '$lib/list/ListItem.svelte';
	import Spinner from '$lib/Spinner.svelte';

	// Props
	export let hasSearch = false;
	export let canAdd = false;
	export let inputPlaceholder = '';
	export let listItems = [];
	export let btnText = '';
	export let btnUrl = '';

	// Variáveis locais
	let filteredOptions = [];
	let shownArr = [];
	let searchedValue = '';

	// Lógica de busca
	$: filterOptions = listItems
		? listItems.filter((item) => {
				let filteredItem = item.name.toLowerCase().includes(searchedValue.toLowerCase());
				if (searchedValue.length !== 0 && filteredItem) {
					filterOptions = [...filterOptions, item];
					filteredOptions = filterOptions;
				}
		  })
		: [];

	$: searchedValue.length > 0 ? (shownArr = filteredOptions) : (shownArr = listItems);
</script>

<article class="w-full">
	<!-- Input de Busca -->
	{#if hasSearch}
		<Input
			inputWidth="w-10/12 lg:w-4/12"
			type="text"
			labelText="Busca:"
			placeholder={inputPlaceholder}
			bind:value={searchedValue}
		/>
	{/if}
	<section transition:fade>
		{#each shownArr as option}
			<ListItem
				bind:item={option.name}
				customClasses="mt-5"
				on:handleClick={() => goto(`/products/${option._id}`)}
			/>
		{:else}
			<Spinner>Carregando dados...</Spinner>
		{/each}
	</section>
	<!-- Botão para cadastrar Lead -->
	{#if canAdd}
		<Link
			href={btnUrl}
			customClasses="mt-5 py-2 px-3 w-10/12 lg:w-4/12 mt-1/12 lg:mt-1/12 md:mt-1/12 ml-10 md:ml-1/12 lg:mr-auto lg:ml-auto text-center"
			>{btnText}</Link
		>
	{/if}
</article>
