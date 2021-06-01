<!-- Script -->
<script>
  import Card from '$lib/card/Card.svelte';
  import Link from '$lib/Link.svelte';
  import { onMount } from 'svelte';
  import { getStorageData } from '../../../utils/sessionStorage';
  import { maskedCPF, maskedRG, maskedPhone, maskedCellPhone, maskedDate } from '../../../utils/masks';

  // Variáveis
  let user = {}
  let cpf;
  let rg;
  let phone;
  let cellphone;
  let birthdate;
  
  // Quando o componente entrar na págian fazer...
  onMount(() => {
    user = getStorageData('user', false);
    cpf = maskedCPF(user.cpf);
    rg = maskedRG(user.rg);
    phone = maskedPhone(user.phone);
    cellphone = maskedCellPhone(user.cellphone);
    birthdate = maskedDate(user.birthdate);
  })
</script>

<!-- HTML -->
<Card cardWidth="lg:w-7/12 md:w-11/12 w-full" cardHeight="lg:h-96 h-80" customClasses="lg:mr-auto lg:ml-auto">
  {#if user}
  <!-- Header -->
  <section class="grid grid-cols-2">
    <div>
      <h2 class="text-blue-dark text-lg w-20">{user.full_name}</h2>
      <small>{user.email}</small>
    </div>
  </section>
  <!-- Conteúdo -->
  <section class="grid grid-cols-2 gap-x-2 mt-2/12 lg:mt-2/12 md:mt-2/12">
    <!-- Coluna 1 - Direita -->
    <div class="mr-auto ml-auto">
      <p class="font-body text-lg">{birthdate}</p>
      <p class="font-body text-lg">{cpf}</p>
      <p class="font-body text-lg">{rg}</p>
    </div>
    <!-- Coluna 2 - Esquerda -->
    <div class="mr-auto ml-auto">
      <p class="font-body text-lg">{user.instagram}</p>
      <p class="font-body text-lg">{cellphone}</p>
      <p class="font-body text-lg">{phone}</p>
    </div>
  </section>
  <Link href="/agent/edit" customClasses="mt-5 py-2 px-3 w-9/12 mt-1/12 lg:mt-2/12 md:mt-1/12 ml-10 text-center">Editar</Link>
  {/if}
</Card>