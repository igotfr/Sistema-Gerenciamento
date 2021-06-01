<script>
	export let loaderBg = 'bg-blue-light';
</script>

<div class="loader {loaderBg}:before {loaderBg}:after"><slot /></div>

<style lang="postcss">
	:root {
		--loaderBg: #BFCED9;
		--loaderSize: 10px;
		--loaderMargin: 1rem auto;
	}
	.loader-color {
		@apply bg-blue-light;
	}
	.loader,
	.loader:before,
	.loader:after {
		background: var(--loaderBg);
		-webkit-animation: load1 1s infinite ease-in-out;
		animation: load1 1s infinite ease-in-out;
		width: 1em;
		height: 4em;
		color: var(--loaderBg);
	}
	.loader {
		color: var(--loaderBg);
		text-indent: -9999em;
		margin: var(--loaderMargin);
		position: relative;
		font-size: var(--loaderSize);
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}
	.loader:before,
	.loader:after {
		position: absolute;
		top: 0;
		content: '';
	}
	.loader:before {
		left: -1.5em;
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}
	.loader:after {
		left: 1.5em;
	}
	@-webkit-keyframes load1 {
		0%,
		80%,
		100% {
			box-shadow: 0 0;
			height: 4em;
		}
		40% {
			box-shadow: 0 -2em;
			height: 5em;
		}
	}
	@keyframes load1 {
		0%,
		80%,
		100% {
			box-shadow: 0 0;
			height: 4em;
		}
		40% {
			box-shadow: 0 -2em;
			height: 5em;
		}
	}
</style>
