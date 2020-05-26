
function rpsplayGame(yourChoice) {
    humanChoice = yourChoice.id
    var botChoice = numtochoice(rpstoint());
    results = deicdeWinner(humanChoice, botChoice);
    message = Finalmessage (results);
    rpsfrontend (humanChoice, message, botChoice);
}
    
//Decides the Bot's Choice
function rpstoint() {
    return Math.floor(Math.random() * 3);
}

function numtochoice(number) {
    return['rock','paper', 'scissors'] [number];
}

function deicdeWinner(yourChoice, botChoice) {
    var rpsDatabase = {
        'rock' : {'scissors':1,'paper':0 ,'rock':0.5},
        'paper' : {'scissors':0,'paper':0.5,'rock':1},
        'scissors' : {'scissors':0.5,'paper':1,'rock':0}
   }  

        var yourScore = rpsDatabase[yourChoice][botChoice];
        var botScore = rpsDatabase[botChoice][yourChoice];

        return [ yourScore, botScore ] ;

        }  


function Finalmessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return {'message':'You lost', 'color':'red'}
    } else if (yourScore===0.5) {
        return {'message':"It's a tie", 'color':'brown'}
    } else {
        return {'message':'You won', 'color':'green'}
    }
}

function rpsfrontend(humanImg, Finalmessage, botImg) {
    var imagesdatabase = {
            'rock' :document.getElementById('rock').src ,
            'paper' :document.getElementById('paper').src ,
            'scissors' :document.getElementById('scissors').src

    }
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        var humandiv = document.createElement('div');
        var botdiv = document.createElement('div');
        var msgdiv = document.createElement('div');

        humandiv.innerHTML = "<img src='" + imagesdatabase[humanImg] + "'height=150 width=150 box-shadow: 0px 10px 50px rgb(9, 25, 245)>"
        msgdiv.innerHTML = "<h1 style='color: " + Finalmessage['color'] +"; font-size: 60px; padding:30px; '>"+Finalmessage['message'] +"</h1>" 
        botdiv.innerHTML = "<img src='" + imagesdatabase[botImg] + "'height=150 width=150 box-shadow: 0px 10px 50px rgb(9, 25, 245)>"


        document.getElementById('img-div').appendChild(humandiv); 
        document.getElementById('img-div').appendChild(msgdiv);
        document.getElementById('img-div').appendChild(botdiv);

    }













