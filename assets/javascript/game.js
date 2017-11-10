
    // Creates an array that lists out the letters of the alphabet
    var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var gameOver=0;
    var totalWins = 0;
    var totalLosses = 0;
    var guesses = 10;
    var guessedArray = [];
    var winVideos =["zoltar-A.mp4", "zoltar-B.mp4", "zoltar-c.mp4"];
    var letter="undefined";
    

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    function secretLetter(){
      letter=computerLetter[Math.floor(Math.random() * computerLetter.length)]
    }
    secretLetter();
    console.log("Zoltar's letter is: " + letter);

    // random video choice
    var vid = winVideos[Math.floor(Math.random() * winVideos.length)];

    function openVideo(){
        document.getElementById("videoBox").style.visibility="visible";
        document.getElementById("X").style.visibility="visible";
    }

    function closeVideo(){
        document.getElementById("videoBox").style.visibility="hidden";
        document.getElementById("X").style.visibility="hidden";
    }

    // closeVideo();

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
        
      // Determines which key was pressed.
      var userGuess = event.key;
      console.log(userGuess);

      // adds user's letter into an array
      guessedArray.push(" " + userGuess);
      
    // user wins if they guess the right letter
    if ( userGuess === letter ) {
      guesses=10;
      guessedArray=[];
      totalWins=totalWins+1;
      secretLetter();
      console.log("Zoltar's letter is: " + letter);
      
      resultHtml02 = 
      "<p>Wins: " + totalWins + "</p>" +
      "<p>Losses: " + totalLosses + "</p>";
      document.getElementById("game2").innerHTML = resultHtml02;

      alert("You Win!!!\n\nEnjoy these words of wisdom from the Great Zoltar...\n\nThen play again!");
      
      openVideo();
      document.getElementById("zoltarA").play();

//LOOOK Try videojs.com

    }
  
    // user loses a guess if they are wrong
    if ( userGuess != letter ) {
      guesses--;
    }
    if(guesses === 0){
        gameOver=1;
        guesses =10;
        guessedArray=[];
        totalLosses=totalLosses+1;
        secretLetter();
        console.log("Zoltar's letter is: " + letter);
        resultHtml02 = 
        "<p>Wins: " + totalWins + "</p>" +
        "<p>Losses: " + totalLosses + "</p>";
        document.getElementById("game2").innerHTML = resultHtml02;

        alert("You Lose!!!\n\nZoltar is very angry with you!\n\nPlay again?");
    }

      // updates the html with the guesses results
      var resultHtml01 = 
        "<p>You chose: " + userGuess + "</p>" +
        "<p>Guessed letters: </p><p>" + guessedArray.toString() + "</p>" +
        "<p>Guesses Left: " + guesses + "</p>";
      // select div with the id "game" and set html inside it
      document.getElementById("game1").innerHTML = resultHtml01;

      var resultHtml02 = 
      "<p>Wins: " + totalWins + "</p>" +
      "<p>Losses: " + totalLosses + "</p>";
      document.getElementById("game2").innerHTML = resultHtml02;
    };   

function newFunction() {
    closeVideo();
}

