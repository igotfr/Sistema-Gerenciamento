<script>
	export let brandLink = '#';
	export let links = [
		{
			url: '/',
			title: 'Home',
			isActive: false
		},
		{
			url: '/blog',
			title: 'Blog',
			isActive: false
		},
		{
			url: '/register',
			title: 'Register',
			isActive: false
		}
	];
</script>

<nav class="navbar navbar-expand-lg navbar-light">
	<div class="container-fluid">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<i class="fas fa-bars" />
		</button>
		<a class="navbar-brand" href={brandLink}>Tailwind Bootstrap Navbar</a>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				{#each links as link}
					<li class="nav-item">
						<a
							class="nav-link"
							class:active={link.isActive}
							aria-current="page"
							href={link.url}
							on:click={() => (isActive = true)}>{link.title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style lang="scss">
	.navbar {
		@apply bg-orange;
		@apply text-gray-lighter;
		@apply font-menu;
	}
	.navbar-brand {
		@apply text-gray-lighter;
		@apply font-semibold;
	}
	.navbar-toggler {
		@apply border-none;
	}
	.nav-link:visited,
	.nav-link:link,
	.navbar-toggler {
		@apply text-gray-lighter;
	}
	.nav-link:hover {
		@apply text-orange-light;
	}
</style>
