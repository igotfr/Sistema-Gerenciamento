<!-- Script -->
<script>
  // imports
  import Card from '$lib/card/Card.svelte';

  // variables
  let todaysDate = new Date();
  let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  let month = () => {
    let thisMonth = todaysDate.getMonth();
    return months[thisMonth];
  }

</script>

<Card cardWidth="lg:w-7/12 md:w-11/12 w-full" cardHeight="lg:h-96 h-80" customClasses="lg:mr-auto lg:ml-auto">
  <!-- Data -->
  <section class="bg-blue px-9 py-2 lg:py-7 rounded-md text-white font-title flex flex-col">
    <p class="font-title text-xl text-center">{todaysDate.getDate()}</p>
    <p class="font-title text-xl text-center">{month()}</p>
  </section>
  <!-- Lista -->
  <section class="self-start overflow-y-auto mt-5 w-full h-52">
    <ul>
      <li class="font-body mt-2 text-blue-dark hover:bg-blue-light py-2 px-3">Cliente 1</li>
      <li class="font-body mt-2 text-blue-dark hover:bg-blue-light py-2 px-3">Cliente 2</li>
      <li class="font-body mt-2 text-blue-dark hover:bg-blue-light py-2 px-3">Cliente 3</li>
      <li class="font-body mt-2 text-blue-dark hover:bg-blue-light py-2 px-3">Cliente 4</li>
      <li class="font-body mt-2 text-blue-dark hover:bg-blue-light py-2 px-3">Cliente 5</li>

    </ul>
  </section>
</Card>

<style lang="postcss">
  /* width */
  ::-webkit-scrollbar {
    @apply w-3;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    @apply bg-red;
    @apply rounded-md;
  }
</style>