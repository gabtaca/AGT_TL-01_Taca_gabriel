document.addEventListener("DOMContentLoaded", function() {
    // Ensure the page starts completely at the top on load
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);

    const headers = document.querySelectorAll("header");
    headers.forEach(header => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        header.style.backgroundColor = randomColor;
        header.style.border = `1px solid ${randomColor}`;
    });

    const header = document.querySelector('.header_page');
    const btnSections = document.querySelectorAll(".btn_section");

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            const offsetTop = section.offsetTop - header.offsetHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Smooth scrolling to sections based on button clicks
    btnSections.forEach(btnSection => {
        const divHidden = btnSection.parentElement.nextElementSibling;

        btnSection.addEventListener("click", function() {
            if (divHidden.style.display === "none" || divHidden.style.display === "") {
                divHidden.style.display = "flex";
                btnSection.querySelector(".open_icon").style.display = "none";
                btnSection.querySelector(".close_icon").style.display = "block";
            } else {
                divHidden.style.display = "none";
                btnSection.querySelector(".open_icon").style.display = "block";
                btnSection.querySelector(".close_icon").style.display = "none";
            }
        });
    });

    const links = document.querySelectorAll('.ul_header a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const id = link.getAttribute('href').substring(1); // Get section ID from href
            scrollToSection(id);
        });
    });

    let mybutton = document.querySelector(".div_back-to-top");
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    });

    mybutton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    let minimized = false;

    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY >= 50 && !minimized) {
            header.classList.add('header_page_minimize');
            minimized = true;
        } else if (scrollY < 50 && minimized) {
            header.classList.remove('header_page_minimize');
            minimized = false;
        }
    }

    window.addEventListener('scroll', function() {
        updateHeader();
    });
});