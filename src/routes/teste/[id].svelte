<script>
import Input from "$lib/Input.svelte";
import Button from "$lib/Button.svelte";
import { page } from "$app/stores";

import { validacoes, addLead, editLead, leadsStore } from "../../stores/leads-store";

import { onMount } from "svelte";
import { createForm } from "svelte-forms-lib";
import * as yup from 'yup';

let leads = [];
let selectedLead;

onMount(async () => {
  leads = await $leadsStore;

  selectedLead = leads.find(lead => lead.id === $page.params.id && lead);
  console.log(selectedLead);
});

function handleSubmit() {
  editLead(selectedLead, $page.params.id);
}

</script>

<form class="w-full lg:w-8/12 mr-auto ml-auto" on:submit|preventDefault={handleSubmit}>
  <section class="w-full md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
		<!-- Coluna 1 -->
    {#if selectedLead}
		  <div>
			  <!-- Input de Nome Completo -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Nome completo:"
          placeholder="Exemplo: Fulano Gastrundes"
          bind:value={selectedLead.full_name}
        />

        <!-- Input de Data de Nascimento -->
			  <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Data de nascimento:"
          placeholder="Exemplo: 06/08/2077"
          bind:value={selectedLead.birthdate}
        />

        <!-- Input de Email -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="email"
          labelText="E-mail:"
          placeholder="gercino@roça.com"
          bind:value={selectedLead.email}
        />

        <!-- Input de Instagram -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Instagram:"
          placeholder="@burquesinha_outofreality"
          bind:value={selectedLead.instagram}
        />
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
          bind:value={selectedLead.cpf}
        />

        <!-- Input de RG -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Rg:"
          placeholder="Exemplo: 000.000-00"
          bind:value={selectedLead.rg}
        />

        <!-- Input de Celular -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Celular:"
          placeholder="Exemplo: (000) 90000-0000"
          bind:value={selectedLead.cellphone}
        />

        <!-- Input de Telefone -->
        <Input
          labelMargin="ml-7 md:ml-1/12 lg:ml-3/12"
          inputWidth="w-10/12 lg:w-6/12"
          type="text"
          labelText="Telefone:"
          placeholder="Exemplo: (000) 0000-0000"
          bind:value={selectedLead.phone}
        />
      </div>

    {/if}

    <div class="ml-10 lg:ml-3/12 mt-5">
    </div>

    <div class="flex flex-col items-center">
      <Button type="submit" customClasses="p-2 mt-5 w-10/12 md:w-11/12 lg:w-9/12">Salvar</Button>
    </div>
</form>