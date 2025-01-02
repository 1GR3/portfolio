<script>
	import { onMount } from 'svelte';
	import { initCanvasAnimation } from '../js/canvas.js';

	onMount(() => {
		const { init } = initCanvasAnimation();
		init(); // Call the init function directly
	});
</script>

<header class="container-fluid px-0">
	<div class="container pt-5">
		<div class="row">
			<div class="col">
				<p class="lead">Hi, my name is</p>
				<h1 class="display-1">Ivo<br /><small>Gregurec</small></h1>
				<p class="fs-5 mb-0">and I'm producing interfaces.</p>
			</div>
			<div class="col-12 col-md-auto d-flex align-items-end">
				<a href="/Ivo_Gregurec-CV.pdf" class="btn btn-primary mt-3 w-100 w-md-auto">Download CV</a>
			</div>
			<div class="col-12 col-md-auto d-flex align-items-end">
				<a href="/IvoGregurec.vcf" class="btn btn-secondary mt-3 w-100 w-md-auto">Add to contacts</a
				>
			</div>
		</div>
	</div>
</header>
<canvas id="canvas" class="w-100" />

<style lang="scss">
	header {
		background-image: linear-gradient(180deg, #88d5de, #caeaee);
		color: #077b8a;
	}

	header h1 {
		line-height: 0.69 !important;
		letter-spacing: -1.5px;
		font-weight: 900 !important;
		font-size: 5rem;
		margin-bottom: 1.5rem;
		color: white;
		text-shadow: 0 2px 2px rgba(7, 123, 138, 0.25);
	}

	header h1 small {
		font-size: 80%;
	}
</style>
