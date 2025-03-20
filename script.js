// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll('.navlist li a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove("active");
        navlist.classList.remove("active");
    });
});

// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");


// About section tab switching
document.addEventListener('DOMContentLoaded', function() {
    const aboutBtns = document.querySelectorAll('.about-btn button');
    const contents = document.querySelectorAll('.content-btn .content');

    // Hide all content initially except first one
    contents.forEach((content, index) => {
        if (index === 0) {
            content.style.display = 'block';
            content.classList.add('active');
        } else {
            content.style.display = 'none';
            content.classList.remove('active');
        }
    });

    // Add active class to first button
    aboutBtns[0].classList.add('active');

    aboutBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and hide all content
            aboutBtns.forEach(b => b.classList.remove('active'));
            contents.forEach(c => {
                c.style.display = 'none';
                c.classList.remove('active');
            });
            
            // Add active class to clicked button and show corresponding content
            btn.classList.add('active');
            contents[index].style.display = 'block';
            contents[index].classList.add('active');
        });
    });

    // Portfolio filter buttons
    const filterBtns = document.querySelectorAll('.filter-buttons button');
    const portfolioItems = document.querySelectorAll('.portfolio-box');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});



// portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


// Initialize swiperjs 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });



//   skill Progress bar 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// active menu 

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// scroll reveal

ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    // reset: true ,
});



ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });




// const themeSwitch = document.getElementById('theme-switch');
// const body = document.body;

// // Check the user's preference from local storage
// const isDarkMode = localStorage.getItem('dark-mode') === 'true';

// // Set the initial theme based on user preference
// if (isDarkMode) {
//     body.classList.add('dark-mode');
//     themeSwitch.checked = true;
// }

// // Function to toggle the theme
// function toggleTheme() {
//     if (body.classList.contains('dark-mode')) {
//         body.classList.remove('dark-mode');
//         localStorage.setItem('dark-mode', 'false');
//     } else {
//         body.classList.add('dark-mode');
//         localStorage.setItem('dark-mode', 'true');
//     }
// }

// // Listen for the switcher change event
// themeSwitch.addEventListener('change', toggleTheme);






















// Initialize EmailJS with your public key
(function() {
    try {
        emailjs.init("Hz0j5Lshiapx8cJyM");
        console.log("EmailJS initialized successfully");
    } catch (error) {
        console.error("Failed to initialize EmailJS:", error);
    }
})();

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Get form data
    const formData = {
        to_name: "Peter Nduchi",
        from_name: this.querySelector('input[name="name"]').value,
        from_email: this.querySelector('input[name="email"]').value,
        subject: this.querySelector('input[name="subject"]').value,
        message: this.querySelector('textarea[name="message"]').value,
        reply_to: this.querySelector('input[name="email"]').value
    };

    console.log("Sending email with data:", formData);

    // Send email using EmailJS
    emailjs.send(
        'service_qqxvxwh',
        'template_qqxvxwh',
        formData
    )
    .then(function(response) {
        console.log("Email sent successfully:", response);
        // Show success message with more details
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Message sent successfully! I'll get back to you soon.
        `;
        document.getElementById('contact-form').prepend(successMessage);
        
        // Reset form
        document.getElementById('contact-form').reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => successMessage.remove(), 5000);
    })
    .catch(function(error) {
        console.error("Failed to send email:", error);
        // Show detailed error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-error';
        errorMessage.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            Failed to send message. Please try again or contact me directly via WhatsApp.
        `;
        document.getElementById('contact-form').prepend(errorMessage);
        
        // Remove error message after 5 seconds
        setTimeout(() => errorMessage.remove(), 5000);
    })
    .finally(function() {
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
});





















// About section tab switching
document.addEventListener('DOMContentLoaded', function() {
    // About section buttons
    const aboutBtns = document.querySelectorAll('.about-btn button');
    const contents = document.querySelectorAll('.content-btn .content');

    aboutBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            aboutBtns.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            contents[index].classList.add('active');
        });
    });

    // Portfolio filter buttons
    const filterBtns = document.querySelectorAll('.filter-buttons button');
    const portfolioItems = document.querySelectorAll('.portfolio-box');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Show first content by default
    contents[0].classList.add('active');
    aboutBtns[0].classList.add('active');
});





















// Android Mascot Color Change
const androidMascot = document.querySelector('.android-mascot');
const body = document.body;
const themes = ['theme-red', 'theme-blue', 'theme-purple', 'theme-orange'];
let currentTheme = -1;

// Function to change theme
function changeTheme() {
    // Remove current theme
    themes.forEach(theme => body.classList.remove(theme));
    
    // Set new theme
    currentTheme = (currentTheme + 1) % themes.length;
    body.classList.add(themes[currentTheme]);
    
    // Update Android mascot color
    const computedStyle = getComputedStyle(document.documentElement);
    const newColor = computedStyle.getPropertyValue('--primary-color');
    androidMascot.style.background = newColor;
    androidMascot.style.setProperty('--android-color', newColor);
}

// Track mascot position and detect wall hits
let lastPosition = { x: 0, y: 0 };
let hasHitWall = false;

function checkWallCollision() {
    const rect = androidMascot.getBoundingClientRect();
    const currentPosition = {
        x: rect.left,
        y: rect.top
    };
    
    // Detect if position has changed significantly (wall hit)
    const threshold = 5;
    const hasChangedX = Math.abs(currentPosition.x - lastPosition.x) > threshold;
    const hasChangedY = Math.abs(currentPosition.y - lastPosition.y) > threshold;
    
    if ((hasChangedX || hasChangedY) && !hasHitWall) {
        hasHitWall = true;
        changeTheme();
        // Reset after a short delay
        setTimeout(() => {
            hasHitWall = false;
        }, 100);
    }
    
    lastPosition = currentPosition;
    requestAnimationFrame(checkWallCollision);
}

// Start tracking wall collisions
checkWallCollision();

// Allow manual theme change on click
androidMascot.addEventListener('click', changeTheme);





















// Mouse tracking for radial gradient
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
});




















