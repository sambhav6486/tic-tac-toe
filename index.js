const option = document.querySelectorAll(".option")
const options = document.querySelector(".options")
const boxes = document.querySelector(".boxes")
const box =document.querySelectorAll('.box')
const turn = document.querySelector(".turn")

option.forEach(item =>{
    item.addEventListener('click',function(){
        turn.classList.add("hidden")
        boxes.classList.remove('hidden')
        removeClick()
        takeTurn(item.id)
        
    })
})

function takeTurn(selection){
  box.forEach(selected => {
      selected.addEventListener('click' , function(){
          console.log(selected)
          if(selection === "X"){
              selected.innerHTML = "<span>X</span>"
              nextTurn("O")
              
          }else{
              selected.innerHTML = "<span>O</span>"
              nextTurn("X")
             
          }
      })
  })
}

function nextTurn(value){
    if(value === "X"){
        takeTurn("X")
    }else{
        takeTurn("O")
    }
}

function removeClick(){
    option.forEach(opt => 
        opt.removeEventListener('click',function(){
            console.log("hi")
        }))
}
