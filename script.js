const row = document.getElementsByClassName('row')
const answer = document.querySelector('.answer')
const faq = document.querySelector('faq')

for (let i = 0; i < row.length; i++){
    
    row[i].addEventListener('click', function (e) {
        e.preventDefault()
      this.classList.toggle('active')
    })
}