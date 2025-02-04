const Name = document.querySelector('.name-tag')
const main_Box = document.querySelector('.box')
const inputTag = document.querySelector('.praveen')

// Name.innerHTML = localStorage.MyName
Name.innerHTML = localStorage.getItem('MyName')

inputTag.addEventListener('input', (e) => {
    // localStorage.MyName = e.target.value
    // Name.innerHTML = e.target.value
    localStorage.setItem('MyName', e.target.value)
    Name.innerHTML = localStorage.getItem('MyName')

})
