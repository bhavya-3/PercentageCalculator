
document.getElementById("b1").addEventListener("click",f1)
function f1()
{
    var val1 = document.getElementById("t1").value;
    var val2 = document.getElementById("t2").value;
    var a = parseInt(val1)
    var b = parseInt(val2)
    var res = a/b*100
    document.getElementById("result").innerHTML="RESULT = "+res+"%";
}