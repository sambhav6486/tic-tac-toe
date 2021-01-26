var options = $(".option");
var option = $(".option");
var boxes = $(".boxes");
var box = $(".box");
var selectSides = $(".select-sides");
var resultText = $(".result-text");
var resultBox = $('.result')
var replay = $(".refresh");
var count = 0;
var inputValue = "";
var playerInput = ["", "", "", "", "", "", "", "", ""];

// const b0 = $("#0");
// const b1 = $("#1");
// const b2 = $("#2");
// const b3 = $("#3");
// const b4 = $("#4");
// const b5 = $("#5");
// const b6 = $("#6");
// const b7 = $("#7");
// const b8 = $("#8");

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

option.click(function () {
  selectSides.addClass("hidden");
  boxes.removeClass("hidden");
  const optionId = this.id;
  removeClick(option);
  playTurn(optionId);
});

function playTurn(xOrO) {
  box.click(function () {
    $(this).html(`<span>${xOrO}</span>`);
    playerInput[this.id] = xOrO;
    inputValue = xOrO;
    removeClick(this);
    if (xOrO === "X") {
      xOrO = "O";
    } else {
      xOrO = "X";
    }
    count++;
    if (count > 4) {
      checkResult(win, playerInput);
    }
  });
}

function checkResult(winCondition, receivedInput) {
  for (let i = 0; i < winCondition.length; i++) {
    let winner = winCondition[i];
    let x = receivedInput[winner[0]];
    let y = receivedInput[winner[1]];
    let z = receivedInput[winner[2]];
    if (count < 9) {
      if (x === y && y === z && x !== "" && y !== "" && z !== "")  {
        removeClick(box);
        var b1 = $('#' + winner[0])
        var b3 = $('#' + winner[1])
        var b2 = $('#' + winner[2])
        highlight(b1,b2,b3)
        setTimeout(function(){showResult("winner")},500);
        
      }
    }
  }
  if (count === 9) {
    removeClick(box);
    setTimeout(function(){showResult("draw")},500);
  }
}

function showResult(result) {
  boxes.addClass('hidden');
  resultBox.removeClass("hidden");
  replay.click(function(){
    location.reload()
  })
  if (result === "winner") {
    $(resultText).html(`Winner is ${inputValue}`);
  }else{
    $(resultText).html("Draw")
  }
}

function highlight(box1,box2,box3){
  box1.addClass('highlighted')
  box2.addClass('highlighted')
  box3.addClass('highlighted')
}

function removeClick(value) {
  $(value).off("click");
}
