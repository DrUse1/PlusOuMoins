var ntf = Math.floor(Math.random() * 101);

function submit() {
  if (document.getElementById("submit_button").innerHTML == "Valider") {
    var input_value = document.getElementById("input").value;
    document.getElementById("input").focus();

    if(input_value > ntf){
      document.getElementById("result").innerHTML = "-";
      document.getElementById("input").value = "";
      fail();
    }

    if(input_value < ntf){
      document.getElementById("result").innerHTML = "+";
      document.getElementById("input").value = "";
      fail();
    }

    if(input_value == ntf){
      document.getElementById("result").innerHTML = "";
      finishGame();
    }
  }else{
    reload();
  }
}

function enter(){
  if((event.keyCode == 13) || (event.keyCode== 32)){
      submit();
    }
}

function startGame(){
  setTimeout(function (){

    document.getElementById("game").style.opacity = 1;
    document.getElementById("game").style.top = "0px";
    document.getElementById("div-start_button").style.opacity = 0;

  }, 50);
  document.getElementById("game").style.display = "block";
}

function fail(){
    document.getElementById("input").style.borderColor = "red";
    document.getElementById("input").style.boxShadow = "0 0 10px red";

    setTimeout(function (){

      document.getElementById("input").style.boxShadow = "0 0 0 #222";
      document.getElementById("input").style.borderColor = "#222";
      document.getElementById("input").style.borderBottomColor = "#555";

    }, 400);
}

function finishGame(){
  document.getElementById("action-message").style.transitionDuration = "0.3s";
  document.getElementById("submit_button").innerHTML = "Recommencer";
  document.getElementById("input").style.borderColor = "green";
  document.getElementById("input").style.boxShadow = "0 0 10px green";
  document.getElementById("action-message").style.opacity = "0";

  setTimeout(function (){
    document.getElementById("action-message").innerHTML = "Bravo ! Le chiffre à trouver était :";
    document.getElementById("action-message").style.opacity = "1";

  }, 300);
}

function reload(){
  document.getElementById("submit_button").style.opacity = "0";
  document.getElementById("input").value = "";

  document.getElementById("action-message").style.opacity = "0";
  document.getElementById("div-result").style.opacity = "0";

  document.getElementById("input").style.boxShadow = "0 0 0 #222";
  document.getElementById("input").style.borderColor = "#222";
  document.getElementById("input").style.borderBottomColor = "#555";
  document.getElementById("div-result").style.transitionDuration = "0.3s";

  setTimeout(function (){
    document.getElementById("result").innerHTML = "+/-";
    document.getElementById("div-result").style.opacity = "1";

    document.getElementById("action-message").innerHTML = "Devinez le nombre compris entre 0 et 100";
    document.getElementById("action-message").style.opacity = "1";

    document.getElementById("submit_button").innerHTML = "Valider";
    document.getElementById("submit_button").style.opacity = "1";
  }, 300);

  ntf = Math.floor(Math.random() * 101);
  console.log(ntf);
}
