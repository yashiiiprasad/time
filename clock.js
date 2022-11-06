const d = new Date();
let count=1;

function counter()
{
    count++;
    updateCount();
    updateColor();
}
function updateCount()
{
    document.getElementById("count").innerHTML = count;
}
function updateColor()
{
    if(count%2===0)
        document.getElementById("time").style.color = "green";
    else
        document.getElementById("time").style.color = "red";

}
document.getElementById("time").innerHTML = d;
document.getElementById("time").style.color = "red";