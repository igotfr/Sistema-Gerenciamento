<script>
	import Button from '$lib/buttons/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let message;
	export let showConfirmation;

	const btnAction = createEventDispatcher();
</script>

{#if showConfirmation}
	<section
		class="bg-black bg-opacity-80 min-h-screen w-screen absolute z-10 flex flex-col items-center justify-center"
	>
		<article class="bg-white w-5/6 p-5 rounded-lg shadow">
			<div class="mb-10">
				<p class="text-center">{message}</p>
			</div>
			<div class="flex">
				<!-- BtnOne -->
				<Button
					bgHoverColor="hover:bg-green"
					textColor="text-gray-lighter"
					textHoverColor="hover:text-white"
					borderColor="border-green"
					borderHoverColor="border-green-light"
					borderBtn={true}
					bgColor="bg-green-light"
					customStyles="h-12 w-full mr-auto ml-auto mb-5"
					textSize="md:text-lg text-sm"
					on:click={() => btnAction('btnClick', { confirm: true })}>Yes</Button
				>
				<!-- BtnTwo -->
				<Button
					bgHoverColor="hover:bg-red"
					textColor="text-gray-lighter"
					textHoverColor="hover:text-white"
					borderColor="border-red"
					borderHoverColor="border-red-light"
					borderBtn={true}
					bgColor="bg-red-light"
					customStyles="h-12 w-full mr-auto ml-5 mb-5"
					textSize="md:text-lg text-sm"
					on:click={() => btnAction('btnClick', { confirm: false })}>No</Button
				>
			</div>
		</article>
	</section>
{/if}
