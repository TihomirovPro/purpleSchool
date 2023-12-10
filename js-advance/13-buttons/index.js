'use strict'

const count = document.querySelector('.count')
const buttonsWrap = document.querySelector('.buttons')

buttonsWrap.addEventListener('click', (e) => {
  const el = e.target

  if (el.tagName === 'BUTTON' && !el.classList.contains('active')) {
    const prevBtn = document.querySelector('button.active')
    if (prevBtn) {
      prevBtn.classList.remove('active')
      prevBtn.textContent = 'Нажми меня'
  }

    el.textContent = 'Нажата!'
    el.classList.add('active')
    +count.textContent++
  }
})