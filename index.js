const option = document.querySelectorAll(".option")
const options = document.querySelector(".options")
const boxes = document.querySelector(".boxes")
const box =document.querySelectorAll('.box')
const turn = document.querySelector(".turn")

option.forEach(item =>{
    item.addEventListener('click',function(){
        turn.classList.add("hidden")
        boxes.classList.remove('hidden')
        takeTurn(item.id)
    })
})

function takeTurn(selection){
  box.forEach(selected => {
      selected.addEventListener('click' , function(){
          if(selection === "x"){
              selected.innerHTML = "<span>X</span>"
          }else{
              selected.innerHTML = "<span>O</span>"
          }
      })
  })
}
