function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function deepestChild() {
  let div = document.querySelector('#grand-node').querySelectorAll('div')
  for(let i = 0; i < div.length; i++) {
    if (div[i]['childElementCount'] === 0 ) {
      return div[i]
    }
  }
}

function increaseRankBy(n) {
let li = document.querySelectorAll('.ranked-list li')
for (let i = 0; i < li.length; i++) {
//debugger
  li[i].innerHTML = parseInt(li[i].innerHTML, 10) + n
}
}
