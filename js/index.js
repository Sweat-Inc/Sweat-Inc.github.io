let title = "Sweat, Inc";
let i = 0;
setInterval(function() {
    let cursor = (i%4==0 || i%3==0 ? "_" : "&nbsp;");
    let displayText = title.substring(0, i) + (title.length - i < 0 ? "<br>>>" : "");
    document.getElementById("companyName").innerHTML = displayText + cursor;
    i++;

}, 200);
