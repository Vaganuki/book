window.addEventListener('scroll', function(event) {
    const navigationBar = document.getElementById('nav');
    if (window.scrollY > 0) {
        navigationBar.classList.add('show');
        console.log('nav')
    }
    else{
    navigationBar.classList.remove('show');
    console.log('nav')
    }
});