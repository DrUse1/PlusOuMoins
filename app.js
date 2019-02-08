var ntf = Math.floor(Math.random() * 101);
console.log(ntf);

function submit() {
  var input_value = document.getElementById("input").value;
  document.getElementById("input").focus();

  if(input_value > ntf){
    document.getElementById("result").innerHTML = "-";
    document.getElementById("input").value = "";
  }

  if(input_value < ntf){
    document.getElementById("result").innerHTML = "+";
    document.getElementById("input").value = "";
  }

  if(input_value == ntf){
    document.getElementById("result").innerHTML = "=";
    document.getElementById("input").value = "";
  }
}

function clickLOL(){
  if((event.keyCode == 13) || (event.keyCode== 32)){
      submit();
    }
}
