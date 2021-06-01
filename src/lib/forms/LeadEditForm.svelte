<script>
import Input from "$lib/Input.svelte";
import Button from "$lib/Button.svelte";
import { page } from "$app/stores";

import { mensagens_de_erro, emailValidator, cellphoneValidator, cpfValidator, rgValidator, instagramValidator, validationSchema, addLead, editLead, leadsStore } from "../../stores/leads-store";

import { onMount } from "svelte";
import { createForm } from "svelte-forms-lib";
import * as yup from 'yup';

export let lead = {};
//let selectedLead;

/*onMount(async () => {
  leads = await $leadsStore;

  selectedLead = leads.find(lead => lead.id === $page.params.id && lead);
  console.log(selectedLead);
});*/

function handleSubmit() {
  editLead(lead, $page.params.id);
  alert("Seus dados foram salvos com sucesso!");
}

$: generalValidator = (
  lead.full_name === "" ||
  lead.email === "" || emailValidator(lead.email) ||
  lead.instagram === "" || instagramValidator(lead.instagram) ||
  lead.cpf === "" || cpfValidator(lead.cpf) ||
  lead.rg === "" || rgValidator(lead.rg) ||
  lead.cellphone === "" || cellphoneValidator(lead.cellphone) ||
  lead.phone === "" || cellphoneValidator(lead.phone));
</script>

<form class="w-full lg:w-8/12 mr-auto ml-auto" on:submit|preventDefault={handleSubmit}>
  <section class="w-full md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
    <!-- Coluna 1 -->
    <!--{#if selectedLead*/}-->
      <div>
        <!-- Input de Nome Completo -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Nome completo:"
          placeholder="Exemplo: Fulano Gastrundes"
          bind:value={lead.full_name}
        />

        {#if lead.full_name === ""}
				  <small class="font-body lg:text-sm text-red ml-7 md:ml-1/12 lg:ml-3/12">
            {mensagens_de_erro.fullName}
          </small>
			  {/if}

        <!-- Input de Data de Nascimento -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Data de nascimento:"
          placeholder="Exemplo: 06/08/2077"
          bind:value={lead.birthdate}
        />

        <!-- Input de Email -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="email"
          labelText="E-mail:"
          placeholder="gercino@roça.com"
          bind:value={lead.email}
        />

        {#if emailValidator(lead.email)}
				  <small class="font-body lg:text-sm text-red ml-7 md:ml-1/12 lg:ml-3/12">
            {lead.email === "" ? mensagens_de_erro.email : mensagens_de_erro.emailInvalid}
          </small>
			  {/if}

        <!-- Input de Instagram -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Instagram:"
          placeholder="@burquesinha_outofreality"
          bind:value={lead.instagram}
        />

        {#if instagramValidator(lead.instagram)}
				  <small class="font-body lg:text-sm text-red ml-7 md:ml-1/12 lg:ml-3/12">
            {lead.instagram === "" ? mensagens_de_erro.instagram : mensagens_de_erro.instagram}
          </small>
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
          placeholder="Exemplo: 000.000.000-00"
          bind:value={lead.cpf}
        />

        {#if cpfValidator(lead.cpf)}
				  <small class="font-body lg:text-sm text-red ml-7 md:ml-1/12 lg:ml-3/12">
            {lead.cpf === "" ? mensagens_de_erro.cpf : mensagens_de_erro.cpfInvalid}
          </small>
			  {/if}

        <!-- Input de RG -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Rg:"
          placeholder="Exemplo: 000.000-00"
          bind:value={lead.rg}
        />

        {#if rgValidator(lead.rg)}
				  <small class="font-body lg:text-sm text-red ml-7 md:ml-1/12 lg:ml-3/12">
            {lead.rg === "" ? mensagens_de_erro.rg : mensagens_de_erro.rgInvalid}
          </small>
			  {/if}

        <!-- Input de Celular -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Celular:"
          placeholder="Exemplo: (000) 90000-0000"
          bind:value={lead.cellphone}
        />

        {#if cellphoneValidator(lead.cellphone)}
				  <small class="font-body lg:text-sm text-red ml-7 md:ml-1/12 lg:ml-3/12">
            {lead.cellphone === "" ? mensagens_de_erro.cellphone : mensagens_de_erro.cellphoneInvalid}
          </small>
			  {/if}

        <!-- Input de Telefone -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Telefone:"
          placeholder="Exemplo: (000) 0000-0000"
          bind:value={lead.phone}
        />

        {#if cellphoneValidator(lead.phone)}
				  <small class="font-body lg:text-sm text-red ml-7 md:ml-1/12 lg:ml-3/12">
            {lead.phone === "" ? mensagens_de_erro.phone : mensagens_de_erro.phoneInvalid}
          </small>
			  {/if}
      </div>

    <!--{/if}-->

    <div class="ml-10 lg:ml-3/12 mt-5">
    </div>

    <div class="flex flex-col items-center">
      <Button
        type="submit"
        disabled={generalValidator}
        customClasses="p-2 mt-5 w-10/12 md:w-11/12 lg:w-9/12"
      >
        Salvar
      </Button>

    </div>
</form>