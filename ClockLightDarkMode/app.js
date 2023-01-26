const timeEl = document.querySelector('.time')
const btnToggle = document.querySelector('.toggle')


function setTime() {
    const time = new Date()
    const h = time.getHours()
    const m = time.getMinutes()
    const s = time.getSeconds()
    timeEl.innerHTML = `${h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
}

btnToggle.addEventListener('click', (e) => {
    const html =document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML='โหมดกลางคืน'
    }else{
        html.classList.add('dark')
        e.target.innerHTML='โหมดกลางวัน'
    }
})

setTime()
setInterval(setTime, 1000)