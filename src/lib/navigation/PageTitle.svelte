<script>
	export let hasBtn = null;
	export let url = '';
</script>

<h1 class="h-auto lg:w-3/12 w-full text-3xl lg:text-4xl lg:mr-96 mr-9/12 lg:mb-10 mb-5"
class:flex={hasBtn}
class:justify-around={hasBtn}
class:items-center={hasBtn}
>
	<a
		href={url}
		class="flex items-center justify-center bg-white w-10 h-10 rounded-md"
		class:hidden={!hasBtn}>
			<i class="fas fa-chevron-left text-green hover:text-green-light" />
	</a>
	<span class="font-title" class:lg:mr-10={hasBtn}><slot /></span>
</h1>