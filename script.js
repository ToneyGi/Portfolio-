document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const form = document.querySelector('form');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === '' || email === '' || message === '') {
            e.preventDefault();
            alert('Please fill in all fields');
        } else if (!email.match(emailPattern)) {
            e.preventDefault();
            alert('Please enter a valid email address');
        }
    });
});
