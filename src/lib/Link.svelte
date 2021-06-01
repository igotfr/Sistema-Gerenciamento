<script>
	// Styles
	export let bgColor = 'bg-red';
	export let bgHoverColor = 'bg-red-light';
	export let textColor = 'text-white';
	export let textHoverColor = 'text-red';
	export let textSize = 'text-lg';
	export let borderColor = 'border-red';
	export let type = 'button';
	export let customClasses = '';
	// Boolean styles
	export let borderLink = false;
	export let textLink = false;
	// Link Data
	export let buttonText = 'Button';
	export let href = '';
	export let target = '';
</script>

<!-- BORDER LINK -->
{#if borderLink}
	<a
		class="flex flex-col justify-center font-normal rounded {bgColor} hover:{bgHoverColor} hover:{textHoverColor} {textSize} border-2 {borderColor} {textColor} {customClasses}"
		{type}
		{href}
		{target}
		on:click
	>
		<slot>
			{buttonText}
		</slot>
	</a>
{:else if textLink}
	<!-- TEXT LINK -->
	<a
		class="font-normal {textColor} rounded hover:{textHoverColor} {textSize} font-bold {customClasses}"
		{type}
		{href}
		{target}
		on:click
	>
		<slot>
			{buttonText.toUpperCase()}
		</slot>
	</a>
{:else}
	<!-- DEFAULT LINK -->
	<a
		class="flex flex-col justify-center font-normal {bgColor} {textColor} rounded hover:{bgHoverColor} hover:{textHoverColor} {textSize} {customClasses}"
		{type}
		{href}
		{target}
		on:click
	>
		<slot>
			{buttonText}
		</slot>
	</a>
{/if}
