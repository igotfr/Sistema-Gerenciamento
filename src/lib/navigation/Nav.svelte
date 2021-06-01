<!-- Script -->
<script>
  import { navLinks } from '../../data/nav-links';
  import { getStorageData } from '../../../utils/sessionStorage';
  import { onMount } from 'svelte';
  import NavOptions from '$lib/navigation/NavOptions.svelte';

  // Variáveis
  const user = getStorageData('user', false);
  let userId = null;
  let openOptions = false;

  // Quando o componente entrar na págian fazer...
  onMount(() => {
    userId = user.id;
  })
</script>

<!-- HTML -->
<!-- Janela de Opções -->
<NavOptions bind:openOptions />
<!-- Barra de navegação -->
<article class="bg-white py-7 md:py-5 px-10 lg:px-72 mt-auto w-full">
  <ul class="font-body text-green flex w-full justify-between">
    <!-- Produtos -->
    <li class="flex flex-col items-center">
      <a href={navLinks[0].url}><i class={`fas ${navLinks[0].icon} text-xl`} /></a>
      <a class="hidden md:inline-block" href={navLinks[0].url}>{navLinks[0].name}</a>
    </li>
    <!-- Agente -->
    <li class="flex flex-col items-center">
      <a href={`${navLinks[1].url}/${userId}`}><i class={`fas ${navLinks[1].icon} text-xl`} /></a>
      <a class="hidden md:inline-block" href={`${navLinks[1].url}/${userId}`}>{navLinks[1].name}</a>
    </li>
    <!-- Lead -->
    <li class="flex flex-col items-center">
      <a href={navLinks[2].url}><i class={`fas ${navLinks[2].icon} text-xl`} /></a>
      <a class="hidden md:inline-block" href={navLinks[2].url}>{navLinks[2].name}</a>
    </li>
    <!-- Relatórios -->
    <li class="flex flex-col items-center">
      <a on:click={() => openOptions = true} href={navLinks[2].url}><i class={`fas ${navLinks[3].icon} text-xl`} /></a>
      <a on:click={() => openOptions = true} class="hidden md:inline-block" href={navLinks[3].url}>{navLinks[3].name}</a>
    </li>
  </ul>
</article>