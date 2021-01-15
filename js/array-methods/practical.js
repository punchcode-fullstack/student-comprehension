const arr = [1,2,3]
const arr2 = [
  {label: 1},
  {label: 2},
  {label: 3}
]

const html = arr.map(function(item) {
  return `<li>${item * 2}</li>`
}).join('')

document.querySelector('#foo').innerHTML = html

const total = arr2.reduce(function (a, b) {
  return a + b.label
}, 0)

document.querySelector('#total').innerHTML = 'total: ' + total

const filtered = arr2.filter(function (x) {
  return x.label > 1
})

const newFil = filtered.map(function (item) {
  return `<li>${item.label}</li>`
}).join('')

document.querySelector('#bar').innerHTML = newFil
