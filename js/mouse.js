const span = document.querySelector('.hover-btn2')
const overlay = document.querySelector('.overlay')

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(overlay, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    })
})

span.addEventListener('click', () => {
    overlay.classList.toggle('is-open')
})