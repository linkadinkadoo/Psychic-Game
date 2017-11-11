
    // Creates an array that lists out the letters of the alphabet
    var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var gameOver=0;
    var totalWins = 0;
    var totalLosses = 0;
    var guesses = 10;
    var guessedArray = [];
    var winVideos =["zoltar-A.mp4", "zoltar-B.mp4", "zoltar-C.mp4"];
    var letter="undefined";
    
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    function secretLetter(){
      letter=computerLetter[Math.floor(Math.random() * computerLetter.length)]
    }
    secretLetter();
    console.log("Zoltar's letter is: " + letter);

    // random video choice
    var vid = winVideos[Math.floor(Math.random() * winVideos.length)];


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
        // debugger
      // Determines which key was pressed.
      var userGuess = event.key;
      console.log("userGuess: " + userGuess);

      //checks to see if user has already guessed that letter
      //if userGuess equals one of the guessedArray elements, an alert tells him that he has already guessed that letter
      
    //   function checkGuess(element){
    //       return element===userGuess;
    //   }
    var checkGuess=guessedArray.indexOf(userGuess);
        console.log("checkGuess: "+checkGuess);
      if 
    //   (guessedArray.find(checkGuess)>1)
    //   (guessedArray[userGuess]>-1)
      (checkGuess!=-1)
      {
        window.alert("The Great Zoltar perceives that you have already guessed the letter " +userGuess+"\n\nTry again my friend.");
      }
      else{
        // adds user's letter into an array
        guessedArray.push("" + userGuess); 
        console.log("guessedArray: "+guessedArray)      
      }

    // user wins if they guess the right letter
    if ( userGuess === letter ) {
      guesses=10;
      guessedArray=[];
      userGuess="";
      totalWins=totalWins+1;

      secretLetter();
      console.log("Zoltar's letter is: " + letter);
      
      resultHtml02 = 
      "<p>Wins: " + totalWins + "</p>" +
      "<p>Losses: " + totalLosses + "</p>";
      document.getElementById("game2").innerHTML = resultHtml02;

      alert("You Win!!!\n\nEnjoy these words of wisdom from the Great Zoltar...\n\nThen play again!");
      
      //random 
      window.open("assets/video/"+vid);
    }

    // user loses a guess if they are wrong
    if ( userGuess != letter ) {
      guesses--;
    }
    if(guesses === 0){
        gameOver=1;
        guesses =10;
        guessedArray=[];
        userGuess="";
        totalLosses=totalLosses+1;
        secretLetter();
        console.log("Zoltar's letter is: " + letter);
        resultHtml02 = 
        "<p>Wins: " + totalWins + "</p>" +
        "<p>Losses: " + totalLosses + "</p>";
        document.getElementById("game2").innerHTML = resultHtml02;

        alert("You Lose!!!\n\nZoltar is very angry with you!\n\nPlay again?");
    }
        //puts spaces into the array to make it easier to read
        var processed = guessedArray.map(function(letter){
            letter=" "+letter;
            return letter;
        })

      // updates the html with the guesses results
      var resultHtml01 = 
        "<p>You chose: " + userGuess + "</p>" +
        "<p>Guessed letters: </p><p>" + processed.toString() + "</p>" +
        "<p>Guesses Left: " + guesses + "</p>";
      // select div with the id "game" and set html inside it
      document.getElementById("game1").innerHTML = resultHtml01;

      var resultHtml02 = 
      "<p>Wins: " + totalWins + "</p>" +
      "<p>Losses: " + totalLosses + "</p>";
      document.getElementById("game2").innerHTML = resultHtml02;
    };   

