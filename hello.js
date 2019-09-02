function fizzBuzz(){
    var input = document.getElementById("myInput").value;    
    var text = "";
    var i ;
    for (i=1;i<=input;i++){
        if (((i%3)==0) && ((i%5)==0)){
            text+="fizzbuzz" + "<br>";
            }
        else if ((i%3)==0){
            text+="fizz" + "<br>";
        }else if ((i%5)==0){
            text+="buzz" + "<br>"
        }else {
            text+=i + "<Br>";
        }
    }
     document.getElementById("fizzbuzz").innerHTML=text;
     console.log(text);
}