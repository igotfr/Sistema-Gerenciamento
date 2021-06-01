<!-- Script -->
<script>
  import { logoutUser } from '../../stores/user';
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';
  import { onMount } from 'svelte';
  
  let showUserOptions = false;
	let user = null;

  onMount(() => {
    user = browser ? JSON.parse(sessionStorage.getItem('user')) : null;
  })
</script>

<!-- HTML -->
<div class="flex flex-col lg:w-2/12 text-green">
  <button
    class="bg-white w-56 shadow-md p-3 rounded-lg"
    on:click={() => (showUserOptions = !showUserOptions)}
    >{user ? user.username : 'User'}
    <i
      class="fas {showUserOptions ? 'fa-chevron-up' : 'fa-chevron-down'} ml-2 text-green"
    />
  </button>
  {#if showUserOptions}
    <div class="bg-white p-3 rounded-lg mt-2 w-56">
      <button
        class="text-green font-bold hover:text-green-light"
        on:click={() => {
          logoutUser();
          goto('/');
          showUserOptions = false;
        }}>Logout</button
      >
    </div>
  {/if}
</div>