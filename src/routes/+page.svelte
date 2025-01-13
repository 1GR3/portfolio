<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	import Hostelhop from '../portfolio/items/hostelhop.svelte';
	import Redocher from '../portfolio/items/redocher.svelte';
	import Vava from '../portfolio/items/vava.svelte';
	import Spectrackular from '../portfolio/items/spectrackular.svelte';
	import Kyba from '../portfolio/items/kyba.svelte';
	import Old from '../portfolio/items/old.svelte';
</script>

<Header />

<div class="container my-5 content-wrapper">
	<p class="lead">
		The vast majority of my work, from
		<span class="badge text-bg-light">UX &amp; UI design</span> to developing
		<span class="badge text-bg-light">responsive</span> interfaces in
		<span class="badge text-bg-light">React</span> or
		<span class="badge text-bg-light">Angular</span> using
		<span class="badge text-bg-light">Bootstrap</span> or pure
		<span class="badge text-bg-light">CSS</span>, is
		<strong>hidden behind the login screens and NDAs</strong>. More about it in
		<a href="/Ivo_Gregurec-CV.pdf">my CV</a>.<br />
	</p>
	<h6>Some recent public projects:</h6>

	<div class="row py-5">
		<Hostelhop />
		<Redocher />
		<Vava />
		<Spectrackular />
		<Kyba />
		<Old />
	</div>
</div>
<Footer />

<style global>
	.content-wrapper {
		flex: 1; /* Allows the content to grow and take up any available space */
	}

	a.card {
		text-decoration: none !important;
	}

	#connect .btn {
		color: white !important;
		border-radius: 0 !important;
	}

	.carousel-control-prev-icon,
	.carousel-control-next-icon {
		background-color: rgba(0, 0, 0, 0.5);
		background-size: 66%;
		box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
		border-radius: 12px;
		padding: 20px;
	}
</style>
