const scrollBtn = document.querySelector('.top-btn')
const rootEl = document.documentElement
document.addEventListener('scroll', showBtn)

function showBtn() {
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if (rootEl.scrollTop / scrollTotal > 0.2) {
        scrollBtn.classList.add('show-btn')
    } else {
        scrollBtn.classList.remove('show-btn')
    }
}

scrollBtn.addEventListener('click', () => {
    rootEl.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})