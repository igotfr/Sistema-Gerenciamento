<script>
	import { fly } from 'svelte/transition';

	export let positive = true;
	export let dismissible;
	export let showAlert;

	function dismiss() {
		if (showAlert) {
			showAlert = false;
		}
	}
	if (dismissible) {
		setTimeout(dismiss, 3000);
	}
</script>

{#if showAlert}
	<main
		transition:fly={{ y: 200, duration: 1000 }}
		class="alert-wrap"
		class:bg-green={positive}
		class:bg-red={!positive}
	>
		<i
			class="far fa-window-close hover:text-green-light mr-5 cursor-pointer"
			on:click={() => dismiss()} class:hover:text-green-light={positive} class:hover:text-red-light={!positive}
		/>
		<slot />
		<i class="far fa-check-square ml-3" class:hidden={!positive} />
	</main>
{/if}

<style lang="postcss">
	.alert-wrap {
		@apply text-white;
		@apply text-lg;
		@apply font-semibold;
		@apply py-5;
		@apply px-5;
		@apply rounded-md;
		@apply absolute;

		top: 2%;
	}
</style>
