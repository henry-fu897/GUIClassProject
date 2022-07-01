


function openTab(current, tabName) {
    /*remove the class active  */
    for(item of document.getElementsByClassName("tabbutton")) {
        item.className.replace("active", "");
    }
    /*hide all other tabcontent  */
    for(item of document.getElementsByClassName("tabcontent")) {
        item.style.display = "none"
    }

    /*show current tab and add active to the button */
    document.getElementById(tabName).style.display = "block";
    current.currentTarget.className += " active";
}


var req = new XMLHttpRequest();
req.open("GET", "https://api.nasa.gov/planetary/apod?api_key=2BPF84kfNb0NcmTkZjC0QzNY4Ktru7xt6qjiPBzP");
req.send();

req.onload = event => {
    var fileNASA = JSON.parse(req.responseText);
    document.getElementById("pic").src = fileNASA.hdurl;
}
