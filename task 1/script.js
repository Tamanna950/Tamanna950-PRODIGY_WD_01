const navbar = document.getElementById('navbar');
  const navLinks = navbar.getElementsByTagName('a');
  const home = document.getElementById('home');
  const about = document.getElementById('about');
  const services = document.getElementById('services')
  const contact = document.getElementById('contact');
  const navItems = navbar.getElementsByTagName('a');

// Change section background colors on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Change home section color
    if (scrollPosition < windowHeight) {
        home.style.backgroundColor = scrollPosition > 50 ? 'lightskyblue' : '#ffffff';
    }

    // Change about section color
    if (scrollPosition < windowHeight) {
        about.style.backgroundColor = scrollPosition > 50 ? 'lightskyblue' : '#ffffff';
    }
    

    // Change services section color
    if (scrollPosition < windowHeight) {
        services.style.backgroundColor = scrollPosition > 50 ? 'lightskyblue' : '#ffffff';
    }
    

    // Change contact section color
    if (scrollPosition < windowHeight) {
        contact.style.backgroundColor = scrollPosition > 50 ? 'lightskyblue' : '#ffffff';
    }
    
});
  

        // Change navbar color on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'green';
            } else {
                navbar.style.backgroundColor = '#333';
            }
        });

        // Change link color on hover
        Array.from(navLinks).forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.color = '#ffd700';
            });
            link.addEventListener('mouseleave', () => {
                link.style.color = 'white';
            });
        });

        //Change background color on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                document.body.style.backgroundColor = 'lightskyblue'; 
            } else {
                navbar.classList.remove('scrolled');
                document.body.style.backgroundColor = 'white'; 
            }
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                main.style.backgroundColor = 'lightskyblue';
            } else {
                main.style.backgroundColor = '#333';
            }
        });