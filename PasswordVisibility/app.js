const eyeIcon = document.querySelector('#eye')
const pwdEl = document.querySelector('#password')

eyeIcon.addEventListener('click', () => {
    // <i class="fa-solid fa-eye-slash"></i>
    if (eyeIcon.classList.contains('fa-eye')) {
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash')
        pwdEl.setAttribute('type','text')
    }else{
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye')
        pwdEl.setAttribute('type','password')
    }
})