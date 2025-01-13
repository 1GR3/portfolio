<script>
	import Modal from '../../components/modal.svelte';

	let showPopup = false;

	const onShowPopup = (ev) => {
		showPopup = true;
	};

	const onPopupClose = (data) => {
		showPopup = false;

		console.log(data);
	};
</script>

<div class="col-12 col-sm-6 col-md-4 mb-4">
	<div
		class="card shadow-sm"
		data-bs-toggle="modal"
		data-bs-target="#HostelHopModal"
		on:click={onShowPopup}
	>
		<img src="./tmb-animations.jpg" class="img-fluid" alt="..." />
		<div class="card-body">
			<h5>Spectrackular</h5>
			<p class="card-text">Clockface for fitbit</p>
		</div>
	</div>
</div>

<Modal open={showPopup} onClosed={(data) => onPopupClose(data)}>
	<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
		<div class="modal-content">
			<div class="modal-body">
				<div id="HostelHopCarousel" class="carousel slide">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="./HostelHop-1.jpg" class="d-block w-100" alt="..." />
						</div>
						<div class="carousel-item">
							<img src="./HostelHop-2.jpg" class="d-block w-100" alt="..." />
						</div>
						<div class="carousel-item">
							<img src="./HostelHop-3.jpg" class="d-block w-100" alt="..." />
						</div>
						<div class="carousel-item">
							<img src="./HostelHop-4.jpg" class="d-block w-100" alt="..." />
						</div>
					</div>
					<button
						class="carousel-control-prev"
						type="button"
						data-bs-target="#RedOcherCarousel"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true" />
						<span class="visually-hidden">Previous</span>
					</button>
					<button
						class="carousel-control-next"
						type="button"
						data-bs-target="#HostelHopCarousel"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true" />
						<span class="visually-hidden">Next</span>
					</button>
				</div>
				<p>
					This elastic, animation heavy, scroll based landing page is developed using React and
					React-Spring
				</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
					Close
				</button>
				<a href="https://gregurec.info/clients/hostelhop/" class="btn btn-outline-primary">
					Visit
				</a>
				<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
			</div>
		</div>
	</div>
</Modal>

<div
	class="modal fade"
	id="HostelHopModal"
	tabindex="-1"
	aria-labelledby="HostelHopModalLabel"
	aria-hidden="true"
/>

<style>
	div.card > img {
		border-radius: 5px 5px 0 0;
	}
</style>
