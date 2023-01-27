const smallImg = document.querySelectorAll('.gallery img',)
const fullImg = document.querySelector('.full-image',)
const modal = document.querySelector('.modal')
smallImg.forEach(img => {
    img.addEventListener('click', () => {
        const fullSize = img.getAttribute('alt')
        const path = `../ImageGallery/foods-images/foods-images/full/${fullSize}.jpg`
        fullImg.src = path
        modal.classList.add('open')
    })
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open')
    }
})