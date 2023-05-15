let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)


function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    //보여지는 텍스트 값을 0으로
    count = 0
    //실제 저장되는 카운트 값을 0으로
}
