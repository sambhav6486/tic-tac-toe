var options = $(".option")
var option = $(".option")
var boxes = $(".boxes")
var box = $('.box')
var selectSides = $('.select-sides')
var count = 0;
var playerInput =["" , "" , "" , "" , "" , "", "", "",""]

const b0 = $('#0')
const b1 = $('#1')
const b2 = $('#2')
const b3 = $('#3')
const b4 = $('#4')
const b5 = $('#5')
const b6 = $('#6')
const b7 = $('#7')
const b8 = $('#8')


const win = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],
]

option.click(function(){
    selectSides.addClass('hidden')
    boxes.removeClass('hidden')
    const optionId = this.id
    removeClick(option)
    playTurn(optionId)
})

function playTurn(xOrO){
    box.click(function(){
        $(this).html(`<span>${xOrO}</span>`)
        playerInput[this.id] = xOrO
        removeClick(this)
        if(xOrO === "X"){
            xOrO = "O"
        }else{
            xOrO = "X"
        }
        count++
        if(count > 4){
            checkResult(win , playerInput)
            }
    })
    
}

function checkResult(winCondition ,receivedInput){
    for(let i=0; i<winCondition.length; i++){
        let winner = winCondition[i]
        let x = receivedInput[winner[0]]
        let y = receivedInput[winner[1]]
        let z = receivedInput[winner[2]]
        console.log([x,y,z])
        if(x === y && y === z){
            console.log("winner")
        }
    }
}


function removeClick(value){
    $(value).off('click')
}
