<script>
	export let textColor = 'text-black';
	export let textSize = 'text-lg';
	export let fontWeight = 'font-semibold';
	export let textPositon = 'text-start';

	export let borderWidth = 'border-b-2';
	export let borderColor = 'border-black';
	export let borderPadding = 'pb-1';
</script>

<div class="{borderWidth} {borderColor} {borderPadding}">
	<h1 class="{textPositon} {textSize} {textColor} {fontWeight}">
		<slot />
	</h1>
</div>
