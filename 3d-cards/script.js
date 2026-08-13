const cards = document.querySelectorAll('.card')

cards.forEach(card => {
	card.addEventListener('click', () => {
		if(card.classList.contains('right')) {
			card.classList.add('moving')
			
			setTimeout(() => {
				card.classList.remove('right', 'moving')
			}, 800)
		} else {
			card.classList.add('right')
		}
	})
})
