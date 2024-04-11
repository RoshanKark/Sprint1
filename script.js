document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.card-link');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('More details coming soon!');
        });
    });
});
