document.addEventListener("DOMContentLoaded", () => { // inside here you will add everything that you want to work as soon as the page loads
  
   let interval = setInterval(incrementCounter, 1000)
   const plus = document.querySelector('#plus')
    plus.addEventListener('click',incrementCounter)
   const minus = document.querySelector('#minus')
    minus.addEventListener('click',decreaseCounter)
    likesObj = {}
   const hearts = document.getElementById('heart')
   hearts.addEventListener('click',() => {
    let counterValue = document.getElementById('counter').textContent
    if(likesObj[counterValue]) {
        likesObj[counterValue] += 1 
    }else {
        likesObj[counterValue] = 1
    }
    let li = document.createElement('li')
    li.setAttribute('id', counterValue)
    let likesUL = document.querySelector('.likes')
    if(likesObj[counterValue] >1){
       li = document.getElementById(counterValue)
    }else {
        likesUL.appendChild(li)
    }
    li.innerText = `${counterValue} has been liked ${likesObj[counterValue]} times`
    
   })
   const submit = document.getElementById('submit')
   const pause = document.querySelector('#pause')
   pause.addEventListener('click',() => {
    if( pause.innerText === "resume"){
        pause.innerText = "pause"
        interval = setInterval(incrementCounter, 1000)
    }else {
        pause.innerText = 'resume'
        clearInterval(interval)
    }
        plus.disabled = !plus.disabled
        minus.disabled = !minus.disabled
        hearts.disabled = !hearts.disabled
        submit.disabled = !submit.disabled
        
       
   })
  let form =  document.querySelector('#comment-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const list = document.getElementById('list')
        let li = document.createElement('li')
        li.innerText = e.target[0].value
        list.appendChild(li)
    form.reset()
        
  })
})


function incrementCounter(){
    let count = document.getElementById('counter')
    count.textContent = parseInt(count.textContent,10)+1
}

function decreaseCounter(){
    let count = document.getElementById('counter')
    count.textContent = parseInt(count.textContent,10)-1
}

