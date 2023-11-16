window.addEventListener('click', function(event) {
    var clickPosition = event.clientY; // get current click position
    var click = document.getElementById('scrollbar');
    var windowHeight = window.innerHeight; // get window height
    var scrollbarHeight = click.offsetHeight; // get scrollbar height
    var maxClickPosition = document.documentElement.scrollHeight - windowHeight; // calculate max click position
    var newTop = (clickPosition / maxClickPosition) * (windowHeight - scrollbarHeight); // calculate new "top" value
    click.style.top = newTop + click.offsetTop + 'px'; // set new position relative to current position
});