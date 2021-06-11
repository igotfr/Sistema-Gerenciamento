<!-- Formulário de Login -->
<script>
	// Arquivos importados
	import Input from '$lib/Input.svelte';
	import Button from '$lib/Button.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import axios from 'axios';
	import { browser } from '$app/env';
	import { getStorageData } from '../../../utils/sessionStorage';
	import { heroku } from '../../strapi/url';
	import Alert from '$lib/Alert.svelte';
	import { validationSchema } from '../../stores/agents-store';

	// Variáveis de usuário
	let user = browser ? getStorageData('user', false) : null;
	let full_name = user ? user.full_name : '';
	let birthdate = user ? user.birthdate : '';
	let email = user ? user.email : '';
	let instagram = user ? user.instagram : '';
	let cpf = user ? user.cpf : '';
	let rg = user ? user.rg : '';
	let cellphone = user ? user.cellphone : '';
	let phone = user ? user.phone : '';

	// Variáveis do alerta
	let showAlert = false;
	let alertMessage = '';
	let isPositveAlert = true;

	let message = '';

	// Criando formulário usando yup e svelte-forms-lib
	const { form, errors, handleChange, handleSubmit } = createForm({
		// Valores iniciais
		initialValues: {
			full_name,
			birthdate,
			email,
			instagram,
			cpf,
			rg,
			cellphone,
			phone
		},
		// Validação
		validationSchema: yup.object().shape(validationSchema),
		// Função de envio de formulário
		onSubmit: async (values) => {
			const res = await axios.put(`${heroku}/users/${user.id}`, values);
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
<small class="font-body md:text-lg text-red ml-7 md:ml-1/12 lg:ml-5/12">{message}</small>
{#if user}
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
					placeholder={user.full_name}
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
					type="date"
					labelText="Data de nascimento:"
					placeholder={user.birthdate}
					error={$errors.birthdate}
					bind:value={$form.birthdate}
					on:change={handleChange}
				/>
				{#if $errors.birthdate}
					<small class="font-body text-red ml-7 md:ml-1/12 lg:ml-3/12">{$errors.birthdate}</small>
				{/if}
				<!-- Input de Email -->
				<Input
					labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
					inputWidth="w-10/12 lg:w-6/12"
					type="email"
					labelText="E-mail:"
					placeholder={user.email}
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
					placeholder={user.instagram}
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
					placeholder={user.cpf}
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
					placeholder={user.rg}
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
					placeholder={user.cellphone}
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
					placeholder={user.phone}
					error={$errors.phone}
					bind:value={$form.phone}
					on:change={handleChange}
				/>
				{#if $errors.phone}
					<small class="font-body text-red ml-7 md:ml-1/12 lg:ml-3/12">{$errors.phone}</small>
				{/if}
			</div>
		</section>
		<!-- Botão -->
		<div class="flex flex-col items-center">
			<Button type="submit" customClasses="p-2 mt-5 w-10/12 md:w-11/12 lg:w-9/12">Editar</Button>
		</div>
	</form>
{/if}
