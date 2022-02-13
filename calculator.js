function myFunction() {
    var initial = document.getElementById("Amount").value;
    var final = document.getElementById("finalamount").value;
    var time = document.getElementById("years").value;

    var x = (final/initial);
    var y = Math.pow(x,1/time);
    var z = (y-1)*100;
    

    document.getElementById("answerRate").innerHTML = z;
}

function myFunction2(){
    var initial = document.getElementById("Amount").value = 0;
    var final = document.getElementById("finalamount").value = 0;
    var time = document.getElementById("years").value = 0;

    document.getElementById("answerRate").innerHTML = "Value are reset . Plaese enter value again"
}