document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll("header");
    headers.forEach(header => {
        // Generate a random color
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // Set the background color of the section
        header.style.backgroundColor = randomColor;
        // Set a solid 1px border with the random color
        header.style.border = `1px solid ${randomColor}`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnSections = document.querySelectorAll(".btn_section");

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
});
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const headerPage = document.querySelector('.header_page, .header_page_minimize');
        
        if (window.scrollY > 150) {
            if (!headerPage.classList.contains('header_page_minimize')) {
                headerPage.classList.replace('header_page', 'header_page_minimize');
            }
        } else if (window.scrollY > 1) {
            if (headerPage.classList.contains('header_page')) {
                headerPage.classList.add('sticky');
            } else {
                headerPage.classList.replace('header_page_minimize', 'header_page');
                headerPage.classList.add('sticky');
            }
        } else {
            headerPage.classList.replace('header_page_minimize', 'header_page');
            headerPage.classList.remove('sticky');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the height of the header
    const header = document.querySelector('.header_page');
    const headerHeight = header.offsetHeight;

    // Smooth scroll to section
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            const offsetTop = section.offsetTop - headerHeight; // Account for the header height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Add click event listeners to each <a> in the ul_header
    const links = document.querySelectorAll('.ul_header a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const sectionId = link.getAttribute('href').substring(1); // Get the section ID from the href attribute
            scrollToSection(sectionId); // Scroll to the section
        });
    });
});