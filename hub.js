shenanigansOriginalButton = document.getElementById('shenanigans-original-button')

function onShenanigansOriginalClick() {
    window.location.href = "https://hazeshade.github.io/shenanigans/shenanigans-original/"
    comnsole.log("hello")
}



shenanigansOriginalButton.onclick = function(e) {
    e.preventDefault();

    // Replace localhost and the folder name
    // based on your setup
    location.href = 'http://localhost/jsredirect/home.html';
}
