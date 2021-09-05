var numSquares = 6;
colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay =document.querySelector("#message")
var resetButton =document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
var h1 = document.querySelector("h1");


init();

function init(){
    for(i=0; i< modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
    for(i=0; i< squares.length; i++){
        //add initial colors to squares
        squares[i].style.background = colors[i];
        // add eventlisteners to each square
        squares[i].addEventListener("click",function(){
            //grab color
            clickedColor = this.style.background;
            //compare grabbed colour and picked colour
            if(pickedColor === clickedColor){
              messageDisplay.textContent = "Correct" ;
              changeColors(clickedColor); 
              resetButton.textContent = "Play Again?" 
              h1.style.background = pickedColor;
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
    reset();

}

function reset(){
     //generate all new colors
     colors =generateColors(numSquares);
     // pick new color
     pickedColor = pickColor();
     //change color display to match New color 
     colorDisplay.textContent = pickedColor;
     //change colors of squares
     for(i=0; i< squares.length; i++){
         if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";}
            else{
                squares[i].style.display = "none";}
            }
         // clear message display
         messageDisplay.textContent = "";
         //change h1 color 
         h1.style.background = "steelblue";
         //change button to New Colours
         resetButton.textContent = "New Colors"

};


resetButton.addEventListener("click",function(){
    reset();
});







    function changeColors(color){
    for(var i=0; i<colors.length; i++){
        squares[i].style.background = color
    };

    }


    function pickColor(){
      var random = Math.floor(Math.random()* colors.length);
      return colors[random];
    }


    function generateColors(num){
        var arr = [];
        for(i=0; i< num; i++){
            arr.push(randomColor());
        }
        return arr;
     }
    function randomColor(){
        var r= Math.floor(Math.random()*255+1);
        var g = Math.floor(Math.random()*255+1);
        var b= Math.floor(Math.random()*255+1);
        return "rgb(" + r + ", " + g + ", " + b +")";
     }


 