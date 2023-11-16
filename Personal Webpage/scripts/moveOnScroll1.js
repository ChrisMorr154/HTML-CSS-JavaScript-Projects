window.addEventListener('scroll', function() {
    var element = document.querySelector('.container2');
    var position = element.getBoundingClientRect().t;
  
    // Check if the element is in the viewport
    if (position < window.innerHeight) {
      element.classList.add('show');
    }
    else (position < window.outerHeight)
    {
        element.classList.add('noshow')
    }
  });
  