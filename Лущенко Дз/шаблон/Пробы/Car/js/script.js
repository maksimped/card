

let text = document.querySelector('.header-logo').textContent
for(let i = 4; i <= text.length - 1; i++){
            
    text[i].color = 'red'
          
}

console.log(text.length)