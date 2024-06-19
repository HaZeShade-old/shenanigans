shenanigansOriginalButton = document.getElementById('shenanigans-original-button')

shenanigansOriginalButton.onclick = function(e) {
    e.preventDefault();

    // Replace localhost and the folder name
    // based on your setup
    location.href = 'https://hazeshade.github.io/shenanigans/shenanigans-original/';
}
