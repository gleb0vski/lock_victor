document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Swiper слайдеров
    new Swiper('.about-swiper', { 
        loop: true, 
        pagination: { el: '.swiper-pagination' }, 
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, 
        spaceBetween: 20 
    });
    
    new Swiper('.brands-slider', { 
        slidesPerView: 'auto', 
        spaceBetween: 20, 
        loop: true, 
        autoplay: { delay: 2000 }, 
        allowTouchMove: true 
    });
    
    new Swiper('.reviews-slider', { 
        slidesPerView: 1, 
        spaceBetween: 20, 
        pagination: { el: '.swiper-pagination', clickable: true }, 
        breakpoints: { 
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 } 
        } 
    });

    // Аккордеон FAQ
    document.querySelectorAll('.question-header').forEach(header => { 
        header.addEventListener('click', () => { 
            header.parentElement.classList.toggle('active'); 
        }); 
    });

    // Мобильное меню
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    
    const closeMobileMenu = () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    const openMobileMenu = () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    burger.addEventListener('click', openMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
    
    document.querySelectorAll('.mobile-menu .nav-menu a, .mobile-contacts a').forEach(link => { 
        link.addEventListener('click', closeMobileMenu); 
    });

    // Функция для подсветки активного пункта меню при скролле
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    function highlightActiveLink() {
        let scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.parentElement.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.parentElement.classList.add('active');
                    }
                });
            }
        });
        
        // Если в самом верху - убираем активные классы
        if (scrollPosition < 100) {
            navLinks.forEach(link => {
                link.parentElement.classList.remove('active');
            });
        }
    }
    
    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink();
});