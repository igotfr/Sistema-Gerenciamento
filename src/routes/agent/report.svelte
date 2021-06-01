<!-- Script -->
<script>
import Header from '$lib/Header.svelte';
import Nav from '$lib/navigation/Nav.svelte';
import { getStorageData } from '../../../utils/sessionStorage';
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import AgenteGraph from '$lib/AgentGraph.svelte';
import { agentsStore } from '../../stores/agents-store';

// Variáveis
const user = getStorageData('user', false);
let userId = null;
let namesArr = [];

// Quando o componente entrar na págian fazer...
onMount(async () => {
	userId = user.id;
	namesArr = await $agentsStore;
});
</script>

<!-- Página de Relatório de Agente -->

<!-- HTML -->
<main class="page--container">
	<Header pageTitle="Relatório de Agente" hasBtn={true} url={`/agent/${userId}`} />
	
	<article class="py-5 posicao3">
		<div class="posicao2">
			<div class="caixaMaior">
				<div class="posicao">
					{#each namesArr as usuario}
						<input type="text" value={usuario.full_name} name="" id="" class="caixa" disabled />
					{:else}
						<p>loading...</p>
					{/each}
				</div>
			</div>
			<AgenteGraph />
		</div>
		
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

	.posicao3 {
		width: 100%;
	}

	.posicao2 {
		width: 75%;
		margin: 0 auto;
	}

	.posicao {
		width: 23.5%;
		float: left;
		margin: 60px;
	}

	.caixa {
		width: 350px;
		height: 60px;
		margin-bottom: 5px;
		background-color: #fff;
		border-radius: 10px;
	}

	input.caixa {
		padding-left: 25px;
	}

	@media (max-width: 767px){
		.posicao {
			width: 23.5%;
			float: left;
			margin-left: -25px;
			margin-bottom: 40px;
		}
	}
</style>
