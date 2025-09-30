$(document).ready(function () {
    $(document).scrollTop(0)
    AOS.init();
    $('.portfolio_slider #owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText: ["<img src='images/slide_arrow.svg'>","<img src='images/slide_arrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.testimonial_slider #owl-carousel1').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText: ["<img src='images/slide_arrow.svg'>","<img src='images/slide_arrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
    $('.blog_section_content #owl-carousel2').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText: ["<img src='images/slide_arrow.svg'>","<img src='images/slide_arrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    const texts = [
        "I AM WEB DESIGNER...!",
        "I AM WEB DEVELOPER...!",
        "Thank you for visiting!"
    ];
    const typingSpeed = 100;       // Speed of typing in milliseconds
    const backspaceSpeed = 50;    // Speed of backspacing in milliseconds
    const pauseAfterTyping = 1000; // Pause before backspacing
    let currentTextIndex = 0;

    function typeText() {
        const text = texts[currentTextIndex];
        let charIndex = 0;

        function typeCharacter() {
            if (charIndex < text.length) {
                $('.hb_typing_text').append(text[charIndex]);
                charIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                // Pause, then start backspacing
                setTimeout(backspaceText, pauseAfterTyping);
            }
        }
        typeCharacter();
    }

    function backspaceText() {
        const text = texts[currentTextIndex];
        let charIndex = text.length;

        function removeCharacter() {
            if (charIndex > 0) {
                const currentText = text.substring(0, charIndex - 1);
                $('.hb_typing_text').text(currentText);
                charIndex--;
                setTimeout(removeCharacter, backspaceSpeed);
            } else {
                // Move to the next text
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                typeText();
            }
        }
        removeCharacter();
    }
    
    typeText(); // Start the typing and backspacing animation

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_to_top').fadeIn();
        } else {
            $('.scroll_to_top').fadeOut();
        }
    });

    // Scroll to top on button click
    $('.stt_btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
});