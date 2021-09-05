window.setTimeout(function(){
    var p1Button = document.querySelector("#p1");
    var p2Button = document.querySelector("#p2");
    var resetButton = document.querySelector("#reset");
    var p1ScoreDisplay = document.querySelector("#p1Display");
    var p2ScoreDisplay = document.querySelector("#p2Display");
    var input = document.querySelector("input");
    var winningScoreDisplay = document.querySelector("#winningScoreDisplay");

    var p1Score = 0;
    var p2Score = 0;
    var score = 5;
    var gameOver = false;


    p1Button.addEventListener("click",function(){
      player1();   
    });
    p2Button.addEventListener("click",function(){
        player2();
    })
    input.addEventListener("change", function(){
        input1();   
   })
    resetButton.addEventListener("click", function(){
        reset();
    });

    function reset(){
        p1Score = 0;
        p2Score = 0;
        gameOver = false;
        p1ScoreDisplay.textContent = 0;
        p2ScoreDisplay.textContent = 0;
        p1ScoreDisplay.classList.remove("winner");
        p2ScoreDisplay.classList.remove("winner");
    }

    function player1(){
        if(!gameOver){
            p1Score++;
            p1ScoreDisplay.textContent = p1Score;
            if(score === p1Score){
                p1ScoreDisplay.classList.add("winner");
                gameOver =true;
            }
            }

    }

    function player2(){
        if(!gameOver){
            p2Score++;
            p2ScoreDisplay.textContent = p2Score;
            if(score === p2Score){
                p2ScoreDisplay.classList.add("winner");
                gameOver = true;
            }
           }
    }
    function input1(){
        winningScoreDisplay.textContent = input.value;
        score = Number(input.value);
        reset();
    }
    



},100);