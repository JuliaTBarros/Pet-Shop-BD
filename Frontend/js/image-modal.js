document.addEventListener('DOMContentLoaded', () => {
	const imageModal = document.getElementById('image-modal');
	const modalImage = document.getElementById('modal-image');
	const closeButton = document.querySelector('.image-modal-close-button');
	const chartImages = document.querySelectorAll('.charts-container img');

	if (imageModal && modalImage && closeButton && chartImages.length > 0) {
		// Função para abrir o modal
		const openModal = (src) => {
			modalImage.src = src;
			imageModal.classList.add('active');
		};

		// Função para fechar o modal
		const closeModal = () => {
			imageModal.classList.remove('active');
		};

		// Adiciona evento de clique a cada imagem do gráfico
		chartImages.forEach((img) => {
			img.addEventListener('click', () => {
				openModal(img.src);
			});
		});

		// Fecha o modal ao clicar no botão 'X'
		closeButton.addEventListener('click', closeModal);

		// Fecha o modal ao clicar no overlay (fundo)
		imageModal.addEventListener('click', (event) => {
			if (event.target === imageModal) {
				closeModal();
			}
		});

		// Fecha o modal ao pressionar a tecla 'Escape'
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape' && imageModal.classList.contains('active')) {
				closeModal();
			}
		});
	}
});
