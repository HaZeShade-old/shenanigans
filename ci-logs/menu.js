document.addEventListener('DOMContentLoaded', function() {
    const ch1Button = document.getElementById('button-ch1');

    ch1Button.onclick = function(e) {
        e.preventDefault();
        console.log(location.href);
        location.href = location.href + 'chapters/1.html';
    };
});