let frameNumber = 0, // frame inicial do vídeo
	playbackConst = 500, // controla a velocidade do vídeo. Números menores, vídeo mais rápido.
	height = document.getElementById("page-height"), // altura da página
	video = document.getElementById('video')

video.addEventListener('loadedmetadata', function () {
	// Calcula a altura da página de acordo com a duração do vídeo
	height.style.height = Math.floor(video.duration) * playbackConst + "px"
})

// Usa requestAnimationFrame para avanço suave do vídeo
function scrollPlay() {
	const frameNumber = window.pageYOffset / playbackConst
	video.currentTime = frameNumber
	window.requestAnimationFrame(scrollPlay)
}

window.requestAnimationFrame(scrollPlay)