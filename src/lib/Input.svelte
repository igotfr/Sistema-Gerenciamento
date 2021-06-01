<!-- Input Customizado -->
<script>
  // Estilos
	export let borderRadius = 'rounded-lg';
	export let borderColor = 'border-transparent';
	export let borderWidth = 'border-2';
	export let customInput = '';
	export let hPadding = 'px-2';
	export let vPadding = 'py-2';
	export let inputWidth = 'w-full';
	export let bgColor = 'bg-white';
	export let customStyles = '';
	export let textColor = 'text-blue-dark';
	export let labelColor = 'text-blue-light';
	export let labelWeight = 'font-regular';
	export let labelSize = 'text-lg';
	export let labelMargin = 'ml-7 md:ml-20 lg:ml-4/12'

	// Atributos do Input
	export let labelText = '';
	export let type = '';
	export let value = null;
	export let placeholder = '';
	export let error = false;
	export let maxDate = '';
	export let minDate = '';
</script>

<!-- Input -->
<div class="input__wrap">
  <!-- Label -->
	<label for="input" class="font-body flex flex-col justify-center items-center h-full w-full {labelWeight} {labelSize} {customStyles}">
		<span class="lg:mr-5 mt-4 self-start  {labelColor} {labelMargin}">{labelText}</span>
		<!-- Número -->
		{#if type === 'number'}
			<input
				class="{borderWidth} {borderRadius} {borderColor} {customInput} {hPadding} {vPadding} {inputWidth} {bgColor} {customStyles} {textColor}"
				class:border-red={error}
				{placeholder}
				type="number"
				id="input"
				bind:value
			/>
      <!-- Texto -->
		{:else if type === 'text'}
			<input
				class="{borderWidth} {borderRadius} {borderColor} {customInput} {hPadding} {vPadding} {inputWidth} {bgColor} {customStyles} {textColor}"
				{placeholder}
				class:border-red={error}
				type="text"
				id="input"
				bind:value
			/>
      <!-- E-mail -->
		{:else if type === 'email'}
			<input
				class="{borderWidth} {borderRadius} {borderColor} {customInput} {hPadding} {vPadding} {inputWidth} {bgColor} {customStyles} {textColor}"
				{placeholder}
				class:border-red={error}
				type="email"
				id="input"
				bind:value
			/>
      <!-- Senha -->
		{:else if type === 'password'}
			<input
				class="{borderWidth} {borderRadius} {borderColor} {customInput} {hPadding} {vPadding} {inputWidth} {bgColor} {customStyles} {textColor}"
				{placeholder}
				class:border-red={error}
				type="password"
				id="input"
				bind:value
			/>
		<!-- Data -->
		{:else if type === 'date'}
			<input
				class="{borderWidth} {borderRadius} {borderColor} {customInput} {hPadding} {vPadding} {inputWidth} {bgColor} {customStyles} {textColor}"
				{placeholder}
				class:border-red={error}
				type="date"
				id="input"
				max={maxDate}
				min={minDate}
				bind:value
			/>
		{/if}
	</label>
	</div>

<!-- Postcss -->
<style lang="postcss">
	.input__wrap {
		@apply flex flex-col justify-items-center;
		@apply text-left;
		@apply mt-2;
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>