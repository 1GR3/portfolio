<script>
	// Import any shared components or styles here
</script>

<div>
	<!-- Shared layout elements -->
	<slot />
</div>

<style global>
	body {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.content-wrapper {
		flex: 1; /* Allows the content to grow and take up any available space */
	}
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
