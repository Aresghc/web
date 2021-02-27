function updatePage()
{
var d = new Date();
var e = document.getElementById("infor");
var day = d.getDay();
var hour = d.getHours();
var minites = d.getMinutes();
if (minites<30){
hour = hour-1;
}
var block = "time" + day + ":" + hour;
var c = document.getElementById(block);

if ((lastime != null)||(lastime!=c))
{
c.style.background = "white";
if (c!=null)
{
c.style.background = "red";

}
lastime = c;
}
}
function startUpdate()
{
updatePage();
window.setInterval(updatePage, 10*1000);
}
var lastime = null;
window.onload = startUpdate;
