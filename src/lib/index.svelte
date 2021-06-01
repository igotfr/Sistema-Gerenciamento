<script>
</script>

<svelte:head>
	<title>Index | SvelteKit Tailwind</title>
</svelte:head>

<article>
	<h1>Tailwind Bootstrap</h1>
	<p>
		This is a Sveltekit template that uses Bootstrap 5 and Tailwind 2. This can be used and is
		laydout as a Blog starter.
	</p>
</article>

<style lang="scss">
	article {
		@apply pt-10;
		@apply font-body;
		@apply flex;
		@apply flex-col;
		@apply items-center;
	}
	h1 {
		@apply font-bold;
		@apply text-2xl;
		@apply mb-5;
		@apply self-start;
	}
	p {
		@apply text-lg;
	}
</style>
