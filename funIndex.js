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