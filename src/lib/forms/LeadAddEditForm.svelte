<!-- Formulário de Login -->
<script>
	// Arquivos importados
	import Input from '$lib/Input.svelte';
	import Button from '$lib/Button.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import Alert from '$lib/Alert.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	import { validationSchema, addLead, editLead } from '../../stores/leads-store';

	// Props
	export let isEdit;
	export let leadObj = {};

	// Variáveis do alerta
	let showAlert = false;
	let alertMessage = '';
	let isPositveAlert = true;

	// Variáveis do formulário
	let message = '';
	let initialValues = isEdit
		? leadObj
		: {
				full_name: '',
				birthdate: '',
				email: '',
				instagram: '',
				cpf: '',
				rg: '',
				cellphone: '',
				phone: '',
				isServed: false,
				isConverted: false
		  };

	// Criando formulário usando yup e svelte-forms-lib
	const { form, errors, state, handleChange, handleSubmit } = createForm({
		// Valroes iniciais
		initialValues,
		// Validação
		validationSchema: yup.object().shape(validationSchema),
		// Função de envio de formulário
		onSubmit: async (values) => {
			alert(JSON.stringify(values));
			let res;
			if (edit) {
				res = await editLead(values, leadObj._id);
			} else {
				res = await addLead(vales);
			}
			if (res.status === 200 && res.statusText === 'OK') {
				showAlert = true;
				alertMessage = 'Seus dados foram salvos com sucesso';
				return updateRes;
			} else {
				isPositveAlert = false;
				showAlert = true;
				alertMessage = 'Algo falhou, por favor verifique seus dados e autorização.';
			}

		}
	});
</script>

<!-- Alerta -->
<Alert bind:showAlert positive={isPositveAlert}>{alertMessage}</Alert>

<!-- Formulário -->
<small class="font-body md:text-lg text-red ml-7 md:ml-1/12 lg:ml-5/12">{message}</small>
<form class="w-full lg:w-8/12 mr-auto ml-auto" on:submit|preventDefault={handleSubmit}>
	<section class="w-full md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
		<!-- Coluna 1 -->
		<div>
			<!-- Input de Nome Completo -->
			<Input
				labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
				inputWidth="w-10/12 lg:w-6/12"
				type="text"
				labelText="Nome completo:"
				placeholder={leadObj.full_name}
				error={$errors.full_name}
				bind:value={$form.full_name}
				on:change={handleChange}
			/>
			{#if $errors.full_name}
				<small class="font-body lg:text-sm text-red ml-7 md:ml-1/12 lg:ml-3/12"
					>{$errors.full_name}</small
				>
			{/if}
			<!-- Input de Data de Nascimento -->
			<Input
				labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
				inputWidth="w-10/12 lg:w-6/12"
				type="text"
				labelText="Data de nascimento:"
				placeholder={leadObj.birthdate}
				error={$errors.birthdate}
				bind:value={$form.birthdate}
				on:change={handleChange}
			/>
			<!-- Input de Email -->
			<Input
				labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
				inputWidth="w-10/12 lg:w-6/12"
				type="email"
				labelText="E-mail:"
				placeholder={leadObj.email}
				error={$errors.email}
				bind:value={$form.email}
				on:change={handleChange}
			/>
			{#if $errors.email}
				<small class="font-body text-red ml-7 md:ml-1/12 lg:ml-3/12">{$errors.email}</small>
			{/if}
			<!-- Input de Instagram -->
			<Input
				labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
				inputWidth="w-10/12 lg:w-6/12"
				type="text"
				labelText="Instagram:"
				placeholder={leadObj.instagram}
				error={$errors.instagram}
				bind:value={$form.instagram}
				on:change={handleChange}
			/>
			{#if $errors.instagram}
				<small class="font-body text-red ml-7 md:ml-1/12 lg:ml-3/12">{$errors.instagram}</small>
			{/if}
		</div>
		<!-- Coluna 2 -->
		<div>
			<!-- Input de CPF -->
			<Input
				labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
				inputWidth="w-10/12 lg:w-6/12"
				type="text"
				labelText="Cpf:"
				placeholder={leadObj.cpf}
				error={$errors.cpf}
				bind:value={$form.cpf}
				on:change={handleChange}
			/>
			{#if $errors.cpf}
				<small class="font-body text-red ml-7 md:ml-1/12 lg:ml-3/12">{$errors.cpf}</small>
			{/if}
			<!-- Input de RG -->
			<Input
				labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
				inputWidth="w-10/12 lg:w-6/12"
				type="text"
				labelText="Rg:"
				placeholder={leadObj.rg}
				error={$errors.rg}
				bind:value={$form.rg}
				on:change={handleChange}
			/>
			{#if $errors.rg}
				<small class="font-body text-red ml-7 md:ml-1/12 lg:ml-3/12">{$errors.rg}</small>
			{/if}
			<!-- Input de Celular -->
			<Input
				labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
				inputWidth="w-10/12 lg:w-6/12"
				type="text"
				labelText="Celular:"
				placeholder={leadObj.cellphone}
				error={$errors.cellphone}
				bind:value={$form.cellphone}
				on:change={handleChange}
			/>
			{#if $errors.cellphone}
				<small class="font-body text-red ml-7 md:ml-1/12 lg:ml-3/12">{$errors.cellphone}</small>
			{/if}
			<!-- Input de Telefone -->
			<Input
				labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
				inputWidth="w-10/12 lg:w-6/12"
				type="text"
				labelText="Telefone:"
				placeholder={leadObj.phone}
				error={$errors.phone}
				bind:value={$form.phone}
				on:change={handleChange}
			/>
			{#if $errors.phone}
				<small class="font-body text-red ml-7 md:ml-1/12 lg:ml-3/12">{$errors.phone}</small>
			{/if}
			<div class="ml-10 lg:ml-3/12 mt-5">
				<!-- Input Atendido -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="flex"
					><Checkbox animationType="bounce" bind:checked={leadObj.isServed} />
					<span class="ml-3 cursor-pointer font-body text-blue-light text-lg">Atendido</span></label
				>
				<!-- Input Convertido -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="flex"
					><Checkbox animationType="bounce" bind:checked={leadObj.isConverted} />
					<span class="ml-3 cursor-pointer font-body text-blue-light text-lg">Convertido</span
					></label
				>
			</div>
		</div>
	</section>
	<!-- Botão -->
	<div class="flex flex-col items-center">
		<Button type="submit" customClasses="p-2 mt-5 w-10/12 md:w-11/12 lg:w-9/12">Salvar</Button>
	</div>
</form>
