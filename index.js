let body = document.querySelector('body')
body.style.textAlign = 'center'
let box = document.createElement('div')
box.style.width = '30rem'
box.style.height = '20rem'
box.style.border = '10px dotted red'
box.style.margin = '0 auto'
box.style.marginTop = '15rem'
let heading1 = document.createElement('h1')
heading1.innerText = ' 👇🏽👇🏽 Counter App 👇🏽👇🏽'
heading1.style.fontSize = '2.5rem'
heading1.style.color = 'rgb(198,141,123)'
let counter = document.createElement('h2')
counter.innerText = '1'
counter.style.fontSize = '4rem'
let increment = document.createElement('button')
increment.innerText = 'increment'
let decrement = document.createElement('button')
decrement.innerText = 'decrement'
let reset = document.createElement('button')
reset.innerText = 'reset'
box.append(heading1, counter, increment, decrement, reset)
body.append(box)
increment.addEventListener('click', function () {
  counter.innerText = Number(counter.innerText) + 1
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  let rendom = `rgb(${red}, ${green}, ${blue})`
  //
  let a = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let c = Math.floor(Math.random() * 255)
  let abc = `rgb(${a}, ${b}, ${c})`
  heading1.style.color = rendom
  counter.style.color = rendom
  increment.style.background = rendom
  box.style.borderColor = abc
})
decrement.addEventListener('click', function () {
  counter.innerText = Number(counter.innerText) - 1
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  let color = `rgb(${red}, ${green}, ${blue})`

  //
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let rendom = `rgb(${r}, ${g}, ${b})`
  decrement.style.background = color
  counter.style.color = color
  heading1.style.color = color
  box.style.borderColor = rendom
})
reset.addEventListener('click', function () {
  counter.innerText = '0'
  heading1.style.color = 'orange'
  counter.style.color = 'orange'
  increment.style.background = 'orange'
  decrement.style.background = 'orange'
  reset.style.background = 'orange'
  box.style.borderColor = 'orange'
})
