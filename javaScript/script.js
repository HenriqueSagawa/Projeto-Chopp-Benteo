const text = document.querySelector('.text');

function view() {
    if (text.style.display === 'block') {
        text.style.display = 'none';
    } else {
        text.style.display = 'block';
    }
}

document.onkeydown = function(event) {
    if (event.key === 'Escape') {
        text.style.display = 'none';
    }
}
