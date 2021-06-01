<script>
	// Styles
	export let bgColor = 'bg-red';
	export let bgHoverColor = 'bg-red-light';
	export let textColor = 'text-white';
	export let textHoverColor = 'text-red';
	export let textSize = 'text-lg';
	export let size = 'default';
	export let borderColor = 'border-red';
	export let type = 'button';
	export let customClasses = '';
	export let disabled;
	// Boolean styles
	export let borderButton = false;
	export let textButton = false;
	export let isElevated = true;
	// Button Data
	export let buttonText = 'Button';
</script>

<!-- BORDER BUTTON -->
{#if borderButton}
	<button
		class="font-body rounded-sm hover:{bgHoverColor} hover:{textHoverColor} {textSize} border-2 {borderColor} {textColor} {customClasses}"
		class:w-full={size === 'big'}
		class:border-gray={disabled}
		class:text-gray={disabled}
		class:cursor-not-allowed={disabled}
		{disabled}
		{type}
		on:click
	>
		<slot>
			{buttonText.toUpperCase()}
		</slot>
	</button>
{:else if textButton}
	<!-- TEXT BUTTON -->
	<button
		class={`font-body ${textColor} rounded hover:${textHoverColor} ${textSize} font-bold ${customClasses}`}
		class:text-gray={disabled}
		class:cursor-not-allowed={disabled}
		{disabled}
		{type}
		on:click
	>
		<slot>
			{buttonText.toUpperCase()}
		</slot>
	</button>
{:else}
	<!-- DEFAULT BUTTON -->
	<button
		class={`font-body ${bgColor} ${textColor} rounded hover:${bgHoverColor} hover:${textHoverColor} ${textSize} ${customClasses}`}
		class:shadow-sm={isElevated}
		class:w-full={size === 'big'}
		class:bg-text-dark={disabled}
		class:cursor-not-allowed={disabled}
		{disabled}
		{type}
		on:click
	>
		<slot>
			{buttonText.toUpperCase()}
		</slot>
	</button>
{/if}
