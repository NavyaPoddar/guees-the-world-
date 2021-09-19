var player1name= localStorage.getItem("player1namekey");
var player2name= localStorage.getItem("player2namekey");
var player1score=0;
var player2score=0;

document.getElementById("p1name").innerHTML=player1name+" : ";
document.getElementById("p2name").innerHTML=player2name+" : ";
document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;

var questionturn = player1name;
var answerturn = player2name;


document.getElementById("questionplayername").innerHTML= " Your turn to ask "+player1name;
document.getElementById("answerplayername").innerHTML= " Your turn to answer "+player2name;

function send(){
    var word = document.getElementById("questionword").value;
    var questionword = word.toLowerCase();
    console.log(questionword);




    var letter2 = questionword.charAt(1);
    var getmiddle = Math.floor(questionword.length/2);
    var middleletter = questionword.charAt(getmiddle);
    var getend = questionword.length;
    var lastletter = questionword.charAt(getend);



    var remove1 = questionword.replace(letter2,"_");
    var remove2 = remove1.replace(middleletter,"_");
    var remove3 = remove2.replace(lastletter,"_");
    console.log(remove3);



    var finalquestion = '<h4 id="finalquestion">question:'+remove3+'</h4>';
    var answerinput = ' <br> <br> <input type="text" id="answerinput" placeholder="enter answer here">';
    var checkbutton = '<br> <br> <br> <br> <button class="btn btn-success" onclick="check()"> Check </button>';

    var row = finalquestion+answerinput+checkbutton;


    document.getElementById("showquestionanswer").innerHTML = row;

    document.getElementById("questionword").innerHTML = "" ;

}

function check(){
    var answer = document.getElementById("answerinput").value;
    var finalanswer = answer.toLowerCase();
    console.log(finalanswer);

    if(questionword != finalanswer){


        if(answerturn == player2name){
            player2score = player2score+1;
            document.getElementById("p2score").innerHTML=player2score;
        }

        else{

            player1score = player1score+1;
            document.getElementById("p1score").innerHTML=player2score;
        }

        if(questionturn == player1name){
            questionturn = player2name;
            document.getElementById("questionplayername").innerHTML= " Your turn to ask "+player2name;    
        }

        else{
            questionturn = player1name;
            document.getElementById("questionplayername").innerHTML= " Your turn to ask "+player1name;
        }





        if(answerturn == player2name){
           answerturn = player1name;
            document.getElementById("answerplayername").innerHTML= " Your turn to answer "+player1name;    
        }

        else{
            answerturn = player2name;
            document.getElementById("answerplayername").innerHTML= " Your turn to answer "+player2name;
        }

        document.getElementById("answerinput").innerHTML = "" ;

        }
    }



