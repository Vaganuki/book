window.addEventListener('scroll', function(event) {
    const navigationBar = document.getElementById('nav');
    if (window.scrollY > 0) {
        navigationBar.classList.add('show');
    }
    else{
    navigationBar.classList.remove('show');
    }
});