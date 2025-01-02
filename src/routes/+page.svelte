<script>
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Header />

<h1>Hi</h1>
<p>testing</p>
<Footer />

<style global>
	body {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
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
