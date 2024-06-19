shenanigansRemasteredButton = document.getElementById('shenanigans-remastered-button')
shenanigansOriginalButton = document.getElementById('shenanigans-original-button')
ciLogsButton = document.getElementById('ci-logs-button')

shenanigansRemasteredButton.onclick = function(e) {
    e.preventDefault();
    location.href = 'https://hazeshade.github.io/shenanigans/shenanigans-remastered/';
}

shenanigansOriginalButton.onclick = function(e) {
    e.preventDefault();
    location.href = 'https://hazeshade.github.io/shenanigans/shenanigans-original/';
}

ciLogsButton.onclick = function(e) {
    e.preventDefault();
    location.href = 'https://hazeshade.github.io/shenanigans/ci-logs/';
}
