<!-- Formulário de Login -->
<script>
	// Arquivos importados
	import Input from '$lib/Input.svelte';
	import Button from '$lib/Button.svelte';
	import Alert from '$lib/Alert.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { validationSchema, addProduct, editProduct } from '../../stores/products-store';

	// Props
	export let isEdit;
	export let productsObj = {};

	// Variáveis
	let showAlert = false;
	let alertMessage = '';
	let isPositveAlert = true;

	let initialValues = isEdit ? productsObj.name : '';

	// Criando formulário usando yup e svelte-forms-lib
	const { form, errors, handleChange, handleSubmit } = createForm({
		// Valroes iniciais
		initialValues,
		// Validação
		validationSchema: yup.object().shape(validationSchema),
		// Função de envio de formulário
		onSubmit: async (values) => {
			let res;
			if (isEdit) {
				res = await editProduct(values, productsObj._id);
			} else {
				// Adicionar produto
				res = await addProduct(values);
			}
			if (res.status === 200 && res.statusText === 'OK') {
				let showAlert = showAlert;
				alertMessage = 'Seus dados foram salvos com sucesso';
				return updateRes;
			} else {
				isPositveAlert = false;
				showAlert = true;
				alertMessage = 'Algo falhou, por favor verifique seus dados e autorização.';
			}
			return res;
		}
	});
</script>

<!-- Alerta -->
<Alert bind:showAlert positive={isPositveAlert}>{alertMessage}</Alert>

<!-- Formulário -->
<form class="form--wrapper" on:submit|preventDefault={handleSubmit}>
	<!-- Input de E-mail -->
	<Input
		inputWidth="w-10/12 lg:w-4/12"
		type="text"
		labelText="Nome:"
		placeholder={productsObj.name}
		error={$errors.name}
		bind:value={$form}
		on:change={handleChange}
	/>
	{#if $errors.name}
		<small class="font-body md:text-lg text-red ml-7 md:ml-20 lg:ml-5/12">{$errors.name}</small>
	{/if}
	<!-- Botão -->
	<div class="flex flex-col items-center lg:ml-40">
		<Button type="submit" customClasses="p-2 mt-5 w-10/12 lg:mr-1/12 lg:w-4/12">Salvar</Button>
	</div>
</form>

<style lang="postcss">
	.form--wrapper {
		@apply w-full;
	}
</style>
