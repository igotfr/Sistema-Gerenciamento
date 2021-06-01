<!-- Script -->
<script>
import { page } from '$app/stores';
import Header from '$lib/Header.svelte';
import Nav from '$lib/navigation/Nav.svelte';
import AddEditForm from '$lib/forms/LeadAddEditForm.svelte';
import LeadEditForm from '$lib/forms/LeadEditForm.svelte';

import { leadsStore } from '../../stores/leads-store';

import { onMount } from 'svelte';

// Variáveis
let leads = [];
let selectedLead = {};

onMount(async () => {
	leads = await $leadsStore;
	// short-circuit
	selectedLead = leads.find(lead => lead.id === $page.params.id && lead);
});
</script>

<!-- Página de Registro Edição de Leads -->

<!-- HTML -->
<main class="page--container">
	<Header pageTitle="Editar Lead" hasBtn={true} url="/lead" />
	<article class="py-5">
		{#if selectedLead}
			<LeadEditForm lead={selectedLead} />
			<!--AddEditForm isEdit={true} leadObj={selectedLead} /-->
		{/if}
	</article>
	<Nav />
</main>

<!-- Postcss -->
<style lang="postcss">
	.page--container {
		@apply flex flex-col;
		@apply w-screen;
		@apply min-h-screen;
		@apply bg-blue-dark;
		@apply pt-10;
	}
</style>
