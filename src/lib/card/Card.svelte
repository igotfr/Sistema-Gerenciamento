<script>
	// Styles
	export let cardWidth = 'w-3/5';
	export let cardRadius = 'rounded-lg';
	export let cardHeight = 'h-60';
	export let cardShadow = 'shadow-sm';
	export let cardPaddingY = 'py-4';
	export let cardPaddingX = 'px-4';
	export let customClasses = '';
	export let cardBg = 'bg-white';
	// Elements
	let showDetails = false;
</script>

<main
	class="{cardBg} {cardWidth} {cardRadius} {cardHeight} {cardShadow} {cardPaddingY} {cardPaddingX} {customClasses}"
>
	<slot />

</main>