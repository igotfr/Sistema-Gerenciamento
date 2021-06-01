<!-- Script -->
<script>
import Header from '$lib/Header.svelte';
import Nav from '$lib/navigation/Nav.svelte';
import { onMount } from 'svelte';
import { leadsStore } from '../../stores/leads-store';

	// Variáveis
	let leadList = [];
	let isServed;

	onMount(async () => {
		leadList = await $leadsStore;

		isServed = leadList.reduce((arr, lead) => {
			if (lead.isServed && lead.isConverted) {
				// Algumas retornar o array com o lead
			}
		}, []);
	});
</script>

<!-- Página: relatório de Leads/Clientes -->

<!-- HTML -->
<main class="page--container">
	<Header pageTitle="Relatórios de Cliente" hasBtn={true} url="/lead" />
	<!-- <article class="py-5">
		<div>Page Content</div>
	</article> -->

	<div class="posicao2">
		<div class="caixaMaior">
			<div class="leads"><h2>Lead</h2></div>
			<div class="posicao">
				{#each leadList as lead}
					<input type="text" value={lead.full_name} name="" id="" class="caixa" disabled />
				{:else}
					<p>loading...</p>
				{/each}
			</div>
		</div>

		<div class="caixaMaior">
			<div class="atendimento"><h2>Atendido sem sucesso</h2></div>
			<div class="posicao">
				<input type="text" value="Cliente 1" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 2" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 3" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 4" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 5" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 6" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 7" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 8" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 9" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 10" name="" id="" class="caixa" disabled />
			</div>
		</div>

		<div class="caixaMaior">
			<h2 class="cliente">Cliente</h2>
			<div class="posicao">
				<input type="text" value="Cliente 1" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 2" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 3" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 4" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 5" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 6" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 7" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 8" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 9" name="" id="" class="caixa" disabled />
				<input type="text" value="Cliente 10" name="" id="" class="caixa" disabled />
			</div>
		</div>
	</div>
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

	.posicao2 {
		margin: 40px;
	}

	.posicao {
		width: 23.5%;
		height: 325px;
		overflow: auto;
		overflow-x: hidden;
		float: left;
		margin: 60px;
	}

	.leads {
		width: 100px;
		margin-left: 60px;
		font-size: 35px;
		margin-bottom: -60px;
	}

	.atendimento {
		margin-left: 60px;
		font-size: 28px;
		margin-bottom: -60px;
		width: 370px;
		height: 50px;
		float: left;
	}

	.cliente {
		margin-left: 60px;
		font-size: 35px;
		margin-bottom: -60px;
		width: 370px;
		height: 50px;
		float: left;
	}

	.caixa {
		width: 285px;
		height: 60px;
		margin-bottom: 5px;
		background-color: #fff;
		border-radius: 10px;
	}

	input.caixa {
		padding-left: 25px;
	}

	.posicao::-webkit-scrollbar {
		width: 10px;
		border-radius: 15px;
	}

	/* Track */
	.posicao::-webkit-scrollbar-track {
		background: #38383800;
		border-radius: 15px;
	}

	/* Handle */
	.posicao::-webkit-scrollbar-thumb {
		background: #e61c2a;
		border-radius: 15px;
	}

	/* Handle on hover */
	.posicao::-webkit-scrollbar-thumb:hover {
		background: #e61c2a;
		border-radius: 15px;
	}


	@media (max-width: 767px){
		.posicao2 {
			margin-left: -45px;
    		margin-top: 25px;
		}
	
		.posicao {
			width: 365px;
			height: 325px;
			overflow: auto;
			overflow-x: hidden;
			float: left;
			margin: 60px;
		}
	
		.leads {
			width: 100px;
			margin-left: 60px;
			font-size: 35px;
			margin-bottom: -60px;
		}
	
		.atendimento {
			margin-left: 60px;
			font-size: 30px;
			margin-bottom: -60px;
			width: 370px;
			height: 50px;
			float: left;
		}
	
		.cliente {
			margin-left: 60px;
			font-size: 35px;
			margin-bottom: -60px;
			width: 370px;
			height: 50px;
			float: left;
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
	
		.posicao::-webkit-scrollbar {
			width: 10px;
			border-radius: 15px;
		}
	
		/* Track */
		.posicao::-webkit-scrollbar-track {
			background: #383838;
			border-radius: 15px;
		}
	
		/* Handle */
		.posicao::-webkit-scrollbar-thumb {
			background: #e61c2a;
			border-radius: 15px;
		}
	
		/* Handle on hover */
		.posicao::-webkit-scrollbar-thumb:hover {
			background: #e61c2a;
			border-radius: 15px;
		}
	}
</style>
