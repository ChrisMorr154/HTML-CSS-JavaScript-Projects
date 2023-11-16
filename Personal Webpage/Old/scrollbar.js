window.addEventListener('scroll', function() 
{
    var scrollPosition = window.scrollY; // get current scroll position
    var scroll = document.getElementById('scrollbar');
    var windowHeight = window.innerHeight; // get window height
    var scrollBarHeight = scroll.offsetHeight; // get scroll bar height
    var maxScroll = document.documentElement.scrollHeight - windowHeight; // calculate max scroll position
    var newTop = (scrollPosition / maxScroll) * (windowHeight - scrollBarHeight); // calculate new "top" value
    scroll.style.top = newTop + 'px';
});