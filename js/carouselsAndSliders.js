//-------------------------------- SKILLSET CAROUSEL --------------------------------
let carouselSkillset = document.querySelector('.skillset-carousel');
let slidesSkillset = carouselSkillset.querySelectorAll('.slide');
let currentSlideSkillset = 0;

window.addEventListener('load', (event) => {
    // Add event listeners to buttons
    document.querySelector('.arrow-right').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesSkillset[currentSlideSkillset].className = 'slide';
        currentSlideSkillset = (currentSlideSkillset+1)%slidesSkillset.length;
        slidesSkillset[currentSlideSkillset].className = 'slide active';
        // Adjust carousel height based on active slide
        setupSkillsetCarouselHeight();
    }
    
    function prevSlide() {
        slidesSkillset[currentSlideSkillset].className = 'slide';
        currentSlideSkillset = (currentSlideSkillset-1+slidesSkillset.length)%slidesSkillset.length;
        slidesSkillset[currentSlideSkillset].className = 'slide active';
        // Adjust carousel height based on active slide
        setupSkillsetCarouselHeight();
    }
});

function setupSkillsetCarouselHeight() {
    slidesSkillset[currentSlideSkillset].className = 'slide active';
    carouselSkillset.style.height = `${slidesSkillset[currentSlideSkillset].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupSkillsetCarouselHeight();
}, true);
//-------------------------------- END SKILLSET CAROUSEL --------------------------------

//-------------------------------- CRUD FEATURE CAROUSEL --------------------------------
let carouselFeature = document.querySelector('.feature-carousel');
let slidesFeature = carouselFeature.querySelectorAll('.slide');
let currentSlideFeature = 0;

window.addEventListener('load', (event) => {
    // Add event listeners to buttons
    document.querySelector('.arrow-right').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesFeature[currentSlideFeature].className = 'slide';
        currentSlideFeature = (currentSlideFeature+1)%slidesFeature.length;
        slidesFeature[currentSlideFeature].className = 'slide active';
        // Adjust carousel height based on active slide
        setupFeatureCarouselHeight();
    }
    
    function prevSlide() {
        slidesFeature[currentSlideFeature].className = 'slide';
        currentSlideFeature = (currentSlideFeature-1+slidesFeature.length)%slidesFeature.length;
        slidesFeature[currentSlideFeature].className = 'slide active';
        // Adjust carousel height based on active slide
        setupFeatureCarouselHeight();
    }

});

function setupFeatureCarouselHeight() {
    slidesFeature[currentSlideFeature].className = 'slide active';
    carouselFeature.style.height = `${slidesFeature[currentSlideFeature].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupFeatureCarouselHeight();
}, true);
//-------------------------------- END FEATURE CAROUSEL --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART1 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP1 = document.querySelector('.insight-carousel-part1');
    let carouselPromptP1 = document.querySelector('.insight-prompt-carousel-part1');
    if (carouselP1 == null) return;
    if (carouselPromptP1 == null) return;
    
    let slidesP1 = carouselP1.querySelectorAll('.slide');
    let slidesPromptP1 = carouselPromptP1.querySelectorAll('.slide');
    let currentSlideP1 = 0;

    // Initial setup
    slidesP1[currentSlideP1].className = 'slide active';
    slidesPromptP1[currentSlideP1].className = 'slide active';
    setupInsightCarouselHeightP1();
    setupInsightPromptCarouselHeightP1();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part1').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part1').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP1[currentSlideP1].className = 'slide';
        slidesPromptP1[currentSlideP1].className = 'slide';
        currentSlideP1 = (currentSlideP1+1)%slidesP1.length;
        slidesP1[currentSlideP1].className = 'slide active';
        slidesPromptP1[currentSlideP1].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP1.style.height = `${slidesP1[currentSlideP1].offsetHeight}px`;
        carouselPromptP1.style.height = `${slidesPromptP1[currentSlideP1].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP1[currentSlideP1].className = 'slide';
        slidesPromptP1[currentSlideP1].className = 'slide';
        currentSlideP1 = (currentSlideP1-1+slidesP1.length)%slidesP1.length;
        slidesP1[currentSlideP1].className = 'slide active';
        slidesPromptP1[currentSlideP1].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP1.style.height = `${slidesP1[currentSlideP1].offsetHeight}px`;
        carouselPromptP1.style.height = `${slidesPromptP1[currentSlideP1].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP1() {
    let carouselP1 = document.querySelector('.insight-carousel-part1');
    if (carouselP1 == null) return;
    
    let slidesP1 = carouselP1.querySelectorAll('.slide');
    let currentSlideP1 = 0;

    slidesP1[currentSlideP1].className = 'slide active';
    carouselP1.style.height = `${slidesP1[currentSlideP1].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP1() {
    let carouselPromptP1 = document.querySelector('.insight-prompt-carousel-part1');
    if (carouselPromptP1 == null) return;
    
    let slidesPromptP1 = carouselPromptP1.querySelectorAll('.slide');
    let currentSlideP1 = 0;

    slidesPromptP1[currentSlideP1].className = 'slide active';
    carouselPromptP1.style.height = `${slidesPromptP1[currentSlideP1].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP1();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP1();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART1 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART2 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP2 = document.querySelector('.insight-carousel-part2');
    let carouselPromptP2 = document.querySelector('.insight-prompt-carousel-part2');
    if(carouselP2 == null) return;
    if(carouselPromptP2 == null) return;
    
    let slidesP2 = carouselP2.querySelectorAll('.slide');
    let slidesPromptP2 = carouselPromptP2.querySelectorAll('.slide');
    let currentSlideP2 = 0;

    // Initial setup
    slidesP2[currentSlideP2].className = 'slide active';
    slidesPromptP2[currentSlideP2].className = 'slide active';
    setupInsightCarouselHeightP2();
    setupInsightPromptCarouselHeightP2();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part2').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part2').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP2[currentSlideP2].className = 'slide';
        slidesPromptP2[currentSlideP2].className = 'slide';
        currentSlideP2 = (currentSlideP2+1)%slidesP2.length;
        slidesP2[currentSlideP2].className = 'slide active';
        slidesPromptP2[currentSlideP2].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP2.style.height = `${slidesP2[currentSlideP2].offsetHeight}px`;
        carouselPromptP2.style.height = `${slidesPromptP2[currentSlideP2].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP2[currentSlideP2].className = 'slide';
        slidesPromptP2[currentSlideP2].className = 'slide';
        currentSlideP2 = (currentSlideP2-1+slidesP2.length)%slidesP2.length;
        slidesP2[currentSlideP2].className = 'slide active';
        slidesPromptP2[currentSlideP2].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP2.style.height = `${slidesP2[currentSlideP2].offsetHeight}px`;
        carouselPromptP2.style.height = `${slidesPromptP2[currentSlideP2].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP2() {
    let carouselP2 = document.querySelector('.insight-carousel-part2');
    if(carouselP2 == null) return;
    
    let slidesP2 = carouselP2.querySelectorAll('.slide');
    let currentSlideP2 = 0;

    slidesP2[currentSlideP2].className = 'slide active';
    carouselP2.style.height = `${slidesP2[currentSlideP2].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP2() {
    let carouselPromptP2 = document.querySelector('.insight-prompt-carousel-part2');
    if(carouselPromptP2 == null) return;
    
    let slidesPromptP2 = carouselPromptP2.querySelectorAll('.slide');
    let currentSlideP2 = 0;

    slidesPromptP2[currentSlideP2].className = 'slide active';
    carouselPromptP2.style.height = `${slidesPromptP2[currentSlideP2].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP2();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP2();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART2 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART3 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP3 = document.querySelector('.insight-carousel-part3');
    let carouselPromptP3 = document.querySelector('.insight-prompt-carousel-part3');
    if(carouselP3 == null) return;
    if(carouselPromptP3 == null) return;
    
    let slidesP3 = carouselP3.querySelectorAll('.slide');
    let slidesPromptP3 = carouselPromptP3.querySelectorAll('.slide');
    let currentSlideP3 = 0;

    // Initial setup
    slidesP3[currentSlideP3].className = 'slide active';
    slidesPromptP3[currentSlideP3].className = 'slide active';
    setupInsightCarouselHeightP3();
    setupInsightPromptCarouselHeightP3();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part3').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part3').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP3[currentSlideP3].className = 'slide';
        slidesPromptP3[currentSlideP3].className = 'slide';
        currentSlideP3 = (currentSlideP3+1)%slidesP3.length;
        slidesP3[currentSlideP3].className = 'slide active';
        slidesPromptP3[currentSlideP3].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP3.style.height = `${slidesP3[currentSlideP3].offsetHeight}px`;
        carouselPromptP3.style.height = `${slidesPromptP3[currentSlideP3].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP3[currentSlideP3].className = 'slide';
        slidesPromptP3[currentSlideP3].className = 'slide';
        currentSlideP3 = (currentSlideP3-1+slidesP3.length)%slidesP3.length;
        slidesP3[currentSlideP3].className = 'slide active';
        slidesPromptP3[currentSlideP3].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP3.style.height = `${slidesP3[currentSlideP3].offsetHeight}px`;
        carouselPromptP3.style.height = `${slidesPromptP3[currentSlideP3].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP3() {
    let carouselP3 = document.querySelector('.insight-carousel-part3');
    if(carouselP3 == null) return;
    
    let slidesP3 = carouselP3.querySelectorAll('.slide');
    let currentSlideP3 = 0;

    slidesP3[currentSlideP3].className = 'slide active';
    carouselP3.style.height = `${slidesP3[currentSlideP3].offsetHeight}px`;
}

function setupInsightCarouselWidthP3() {
    let carouselP1 = document.querySelector('.insight-carousel-part1');
    if (carouselP1 == null) return;
    
    let slidesP1 = carouselP1.querySelectorAll('.slide');
    let currentSlideP1 = 0;

    slidesP1[currentSlideP1].className = 'slide active';
    carouselP1.style.width = `${slidesP1[currentSlideP1].offsetWidth}px`;
}

function setupInsightPromptCarouselHeightP3() {
    let carouselPromptP3 = document.querySelector('.insight-prompt-carousel-part3');
    if(carouselPromptP3 == null) return;
    
    let slidesPromptP3 = carouselPromptP3.querySelectorAll('.slide');
    let currentSlideP3 = 0;

    slidesPromptP3[currentSlideP3].className = 'slide active';
    carouselPromptP3.style.height = `${slidesPromptP3[currentSlideP3].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP3();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP3();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART3 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART4 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP4 = document.querySelector('.insight-carousel-part4');
    let carouselPromptP4 = document.querySelector('.insight-prompt-carousel-part4');
    if(carouselP4 == null) return;
    if(carouselPromptP4 == null) return;
    
    let slidesP4 = carouselP4.querySelectorAll('.slide');
    let slidesPromptP4 = carouselPromptP4.querySelectorAll('.slide');
    let currentSlideP4 = 0;

    // Initial setup
    slidesP4[currentSlideP4].className = 'slide active';
    slidesPromptP4[currentSlideP4].className = 'slide active';
    setupInsightCarouselHeightP4();
    setupInsightPromptCarouselHeightP4();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part4').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part4').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP4[currentSlideP4].className = 'slide';
        slidesPromptP4[currentSlideP4].className = 'slide';
        currentSlideP4 = (currentSlideP4+1)%slidesP4.length;
        slidesP4[currentSlideP4].className = 'slide active';
        slidesPromptP4[currentSlideP4].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP4.style.height = `${slidesP4[currentSlideP4].offsetHeight}px`;
        carouselPromptP4.style.height = `${slidesPromptP4[currentSlideP4].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP4[currentSlideP4].className = 'slide';
        slidesPromptP4[currentSlideP4].className = 'slide';
        currentSlideP4 = (currentSlideP4-1+slidesP4.length)%slidesP4.length;
        slidesP4[currentSlideP4].className = 'slide active';
        slidesPromptP4[currentSlideP4].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP4.style.height = `${slidesP4[currentSlideP4].offsetHeight}px`;
        carouselPromptP4.style.height = `${slidesPromptP4[currentSlideP4].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP4() {
    let carouselP4 = document.querySelector('.insight-carousel-part4');
    if(carouselP4 == null) return;
    
    let slidesP4 = carouselP4.querySelectorAll('.slide');
    let currentSlideP4 = 0;

    slidesP4[currentSlideP4].className = 'slide active';
    carouselP4.style.height = `${slidesP4[currentSlideP4].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP4() {
    let carouselPromptP4 = document.querySelector('.insight-prompt-carousel-part4');
    if(carouselPromptP4 == null) return;
    
    let slidesPromptP4 = carouselPromptP4.querySelectorAll('.slide');
    let currentSlideP4 = 0;

    slidesPromptP4[currentSlideP4].className = 'slide active';
    carouselPromptP4.style.height = `${slidesPromptP4[currentSlideP4].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP4();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP4();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART4 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART5 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP5 = document.querySelector('.insight-carousel-part5');
    let carouselPromptP5 = document.querySelector('.insight-prompt-carousel-part5');
    if(carouselP5 == null) return;
    if(carouselPromptP5 == null) return;
    
    let slidesP5 = carouselP5.querySelectorAll('.slide');
    let slidesPromptP5 = carouselPromptP5.querySelectorAll('.slide');
    let currentSlideP5 = 0;

    // Initial setup
    slidesP5[currentSlideP5].className = 'slide active';
    slidesPromptP5[currentSlideP5].className = 'slide active';
    setupInsightCarouselHeightP5();
    setupInsightPromptCarouselHeightP5();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part5').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part5').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP5[currentSlideP5].className = 'slide';
        slidesPromptP5[currentSlideP5].className = 'slide';
        currentSlideP5 = (currentSlideP5+1)%slidesP5.length;
        slidesP5[currentSlideP5].className = 'slide active';
        slidesPromptP5[currentSlideP5].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP5.style.height = `${slidesP5[currentSlideP5].offsetHeight}px`;
        carouselPromptP5.style.height = `${slidesPromptP5[currentSlideP5].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP5[currentSlideP5].className = 'slide';
        slidesPromptP5[currentSlideP5].className = 'slide';
        currentSlideP5 = (currentSlideP5-1+slidesP5.length)%slidesP5.length;
        slidesP5[currentSlideP5].className = 'slide active';
        slidesPromptP5[currentSlideP5].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP5.style.height = `${slidesP5[currentSlideP5].offsetHeight}px`;
        carouselPromptP5.style.height = `${slidesPromptP5[currentSlideP5].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP5() {
    let carouselP5 = document.querySelector('.insight-carousel-part5');
    if(carouselP5 == null) return;
    
    let slidesP5 = carouselP5.querySelectorAll('.slide');
    let currentSlideP5 = 0;

    slidesP5[currentSlideP5].className = 'slide active';
    carouselP5.style.height = `${slidesP5[currentSlideP5].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP5() {
    let carouselPromptP5 = document.querySelector('.insight-prompt-carousel-part5');
    if(carouselPromptP5 == null) return;
    
    let slidesPromptP5 = carouselPromptP5.querySelectorAll('.slide');
    let currentSlideP5 = 0;

    slidesPromptP5[currentSlideP5].className = 'slide active';
    carouselPromptP5.style.height = `${slidesPromptP5[currentSlideP5].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP5();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP5();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART5 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART6 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP6 = document.querySelector('.insight-carousel-part6');
    let carouselPromptP6 = document.querySelector('.insight-prompt-carousel-part6');
    if(carouselP6 == null) return;
    if(carouselPromptP6 == null) return;
    
    let slidesP6 = carouselP6.querySelectorAll('.slide');
    let slidesPromptP6 = carouselPromptP6.querySelectorAll('.slide');
    let currentSlideP6 = 0;

    // Initial setup
    slidesP6[currentSlideP6].className = 'slide active';
    slidesPromptP6[currentSlideP6].className = 'slide active';
    setupInsightCarouselHeightP6();
    setupInsightPromptCarouselHeightP6();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part6').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part6').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP6[currentSlideP6].className = 'slide';
        slidesPromptP6[currentSlideP6].className = 'slide';
        currentSlideP6 = (currentSlideP6+1)%slidesP6.length;
        slidesP6[currentSlideP6].className = 'slide active';
        slidesPromptP6[currentSlideP6].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP6.style.height = `${slidesP6[currentSlideP6].offsetHeight}px`;
        carouselPromptP6.style.height = `${slidesPromptP6[currentSlideP6].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP6[currentSlideP6].className = 'slide';
        slidesPromptP6[currentSlideP6].className = 'slide';
        currentSlideP6 = (currentSlideP6-1+slidesP6.length)%slidesP6.length;
        slidesP6[currentSlideP6].className = 'slide active';
        slidesPromptP6[currentSlideP6].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP6.style.height = `${slidesP6[currentSlideP6].offsetHeight}px`;
        carouselPromptP6.style.height = `${slidesPromptP6[currentSlideP6].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP6() {
    let carouselP6 = document.querySelector('.insight-carousel-part6');
    if(carouselP6 == null) return;
    
    let slidesP6 = carouselP6.querySelectorAll('.slide');
    let currentSlideP6 = 0;

    slidesP6[currentSlideP6].className = 'slide active';
    carouselP6.style.height = `${slidesP6[currentSlideP6].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP6() {
    let carouselPromptP6 = document.querySelector('.insight-prompt-carousel-part6');
    if(carouselPromptP6 == null) return;
    
    let slidesPromptP6 = carouselPromptP6.querySelectorAll('.slide');
    let currentSlideP6 = 0;

    slidesPromptP6[currentSlideP6].className = 'slide active';
    carouselPromptP6.style.height = `${slidesPromptP6[currentSlideP6].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP6();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP6();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART6 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART7 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP7 = document.querySelector('.insight-carousel-part7');
    let carouselPromptP7 = document.querySelector('.insight-prompt-carousel-part7');
    if(carouselP7 == null) return;
    if(carouselPromptP7 == null) return;
    
    let slidesP7 = carouselP7.querySelectorAll('.slide');
    let slidesPromptP7 = carouselPromptP7.querySelectorAll('.slide');
    let currentSlideP7 = 0;

    // Initial setup
    slidesP7[currentSlideP7].className = 'slide active';
    slidesPromptP7[currentSlideP7].className = 'slide active';
    setupInsightCarouselHeightP7();
    setupInsightPromptCarouselHeightP7();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part7').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part7').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP7[currentSlideP7].className = 'slide';
        slidesPromptP7[currentSlideP7].className = 'slide';
        currentSlideP7 = (currentSlideP7+1)%slidesP7.length;
        slidesP7[currentSlideP7].className = 'slide active';
        slidesPromptP7[currentSlideP7].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP7.style.height = `${slidesP7[currentSlideP7].offsetHeight}px`;
        carouselPromptP7.style.height = `${slidesPromptP7[currentSlideP7].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP7[currentSlideP7].className = 'slide';
        slidesPromptP7[currentSlideP7].className = 'slide';
        currentSlideP7 = (currentSlideP7-1+slidesP7.length)%slidesP7.length;
        slidesP7[currentSlideP7].className = 'slide active';
        slidesPromptP7[currentSlideP7].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP7.style.height = `${slidesP7[currentSlideP7].offsetHeight}px`;
        carouselPromptP7.style.height = `${slidesPromptP7[currentSlideP7].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP7() {
    let carouselP7 = document.querySelector('.insight-carousel-part7');
    if(carouselP7 == null) return;
    
    let slidesP7 = carouselP7.querySelectorAll('.slide');
    let currentSlideP7 = 0;

    slidesP7[currentSlideP7].className = 'slide active';
    carouselP7.style.height = `${slidesP7[currentSlideP7].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP7() {
    let carouselPromptP7 = document.querySelector('.insight-prompt-carousel-part7');
    if(carouselPromptP7 == null) return;
    
    let slidesPromptP7 = carouselPromptP7.querySelectorAll('.slide');
    let currentSlideP7 = 0;

    slidesPromptP7[currentSlideP7].className = 'slide active';
    carouselPromptP7.style.height = `${slidesPromptP7[currentSlideP7].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP7();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP7();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART7 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART8 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP8 = document.querySelector('.insight-carousel-part8');
    let carouselPromptP8 = document.querySelector('.insight-prompt-carousel-part8');
    if(carouselP8 == null) return;
    if(carouselPromptP8 == null) return;
    
    let slidesP8 = carouselP8.querySelectorAll('.slide');
    let slidesPromptP8 = carouselPromptP8.querySelectorAll('.slide');
    let currentSlideP8 = 0;

    // Initial setup
    slidesP8[currentSlideP8].className = 'slide active';
    slidesPromptP8[currentSlideP8].className = 'slide active';
    setupInsightCarouselHeightP8();
    setupInsightPromptCarouselHeightP8();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part8').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part8').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP8[currentSlideP8].className = 'slide';
        slidesPromptP8[currentSlideP8].className = 'slide';
        currentSlideP8 = (currentSlideP8+1)%slidesP8.length;
        slidesP8[currentSlideP8].className = 'slide active';
        slidesPromptP8[currentSlideP8].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP8.style.height = `${slidesP8[currentSlideP8].offsetHeight}px`;
        carouselPromptP8.style.height = `${slidesPromptP8[currentSlideP8].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP8[currentSlideP8].className = 'slide';
        slidesPromptP8[currentSlideP8].className = 'slide';
        currentSlideP8 = (currentSlideP8-1+slidesP8.length)%slidesP8.length;
        slidesP8[currentSlideP8].className = 'slide active';
        slidesPromptP8[currentSlideP8].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP8.style.height = `${slidesP8[currentSlideP8].offsetHeight}px`;
        carouselPromptP8.style.height = `${slidesPromptP8[currentSlideP8].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP8() {
    let carouselP8 = document.querySelector('.insight-carousel-part8');
    if(carouselP8 == null) return;
    
    let slidesP8 = carouselP8.querySelectorAll('.slide');
    let currentSlideP8 = 0;

    slidesP8[currentSlideP8].className = 'slide active';
    carouselP8.style.height = `${slidesP8[currentSlideP8].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP8() {
    let carouselPromptP8 = document.querySelector('.insight-prompt-carousel-part8');
    if(carouselPromptP8 == null) return;
    
    let slidesPromptP8 = carouselPromptP8.querySelectorAll('.slide');
    let currentSlideP8 = 0;

    slidesPromptP8[currentSlideP8].className = 'slide active';
    carouselPromptP8.style.height = `${slidesPromptP8[currentSlideP8].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP8();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP8();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART8 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART9 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP9 = document.querySelector('.insight-carousel-part9');
    let carouselPromptP9 = document.querySelector('.insight-prompt-carousel-part9');
    if(carouselP9 == null) return;
    if(carouselPromptP9 == null) return;
    
    let slidesP9 = carouselP9.querySelectorAll('.slide');
    let slidesPromptP9 = carouselPromptP9.querySelectorAll('.slide');
    let currentSlideP9 = 0;

    // Initial setup
    slidesP9[currentSlideP9].className = 'slide active';
    slidesPromptP9[currentSlideP9].className = 'slide active';
    setupInsightCarouselHeightP9();
    setupInsightPromptCarouselHeightP9();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part9').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part9').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP9[currentSlideP9].className = 'slide';
        slidesPromptP9[currentSlideP9].className = 'slide';
        currentSlideP9 = (currentSlideP9+1)%slidesP9.length;
        slidesP9[currentSlideP9].className = 'slide active';
        slidesPromptP9[currentSlideP9].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP9.style.height = `${slidesP9[currentSlideP9].offsetHeight}px`;
        carouselPromptP9.style.height = `${slidesPromptP9[currentSlideP9].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP9[currentSlideP9].className = 'slide';
        slidesPromptP9[currentSlideP9].className = 'slide';
        currentSlideP9 = (currentSlideP9-1+slidesP9.length)%slidesP9.length;
        slidesP9[currentSlideP9].className = 'slide active';
        slidesPromptP9[currentSlideP9].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP9.style.height = `${slidesP9[currentSlideP9].offsetHeight}px`;
        carouselPromptP9.style.height = `${slidesPromptP9[currentSlideP9].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP9() {
    let carouselP9 = document.querySelector('.insight-carousel-part9');
    if(carouselP9 == null) return;
    
    let slidesP9 = carouselP9.querySelectorAll('.slide');
    let currentSlideP9 = 0;

    slidesP9[currentSlideP9].className = 'slide active';
    carouselP9.style.height = `${slidesP9[currentSlideP9].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP9() {
    let carouselPromptP9 = document.querySelector('.insight-prompt-carousel-part9');
    if(carouselPromptP9 == null) return;
    
    let slidesPromptP9 = carouselPromptP9.querySelectorAll('.slide');
    let currentSlideP9 = 0;

    slidesPromptP9[currentSlideP9].className = 'slide active';
    carouselPromptP9.style.height = `${slidesPromptP9[currentSlideP9].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP9();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP9();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART9 --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART10 --------------------------------
window.addEventListener('load', (event) => {
    let carouselP10 = document.querySelector('.insight-carousel-part10');
    let carouselPromptP10 = document.querySelector('.insight-prompt-carousel-part10');
    if(carouselP10 == null) return;
    if(carouselPromptP10 == null) return;
    
    let slidesP10 = carouselP10.querySelectorAll('.slide');
    let slidesPromptP10 = carouselPromptP10.querySelectorAll('.slide');
    let currentSlideP10 = 0;

    // Initial setup
    slidesP10[currentSlideP10].className = 'slide active';
    slidesPromptP10[currentSlideP10].className = 'slide active';
    setupInsightCarouselHeightP10();
    setupInsightPromptCarouselHeightP10();

    // Add event listeners to buttons
    document.querySelector('.arrow-right-part10').addEventListener('click', nextSlide);
    document.querySelector('.arrow-left-part10').addEventListener('click', prevSlide);

    function nextSlide() {
        slidesP10[currentSlideP10].className = 'slide';
        slidesPromptP10[currentSlideP10].className = 'slide';
        currentSlideP10 = (currentSlideP10+1)%slidesP10.length;
        slidesP10[currentSlideP10].className = 'slide active';
        slidesPromptP10[currentSlideP10].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP10.style.height = `${slidesP10[currentSlideP10].offsetHeight}px`;
        carouselPromptP10.style.height = `${slidesPromptP10[currentSlideP10].offsetHeight}px`;
    }
    
    function prevSlide() {
        slidesP10[currentSlideP10].className = 'slide';
        slidesPromptP10[currentSlideP10].className = 'slide';
        currentSlideP10 = (currentSlideP10-1+slidesP10.length)%slidesP10.length;
        slidesP10[currentSlideP10].className = 'slide active';
        slidesPromptP10[currentSlideP10].className = 'slide active';
        // Adjust carousel height based on active slide
        carouselP10.style.height = `${slidesP10[currentSlideP10].offsetHeight}px`;
        carouselPromptP10.style.height = `${slidesPromptP10[currentSlideP10].offsetHeight}px`;
    }

});

function setupInsightCarouselHeightP10() {
    let carouselP10 = document.querySelector('.insight-carousel-part10');
    if(carouselP10 == null) return;
    
    let slidesP10 = carouselP10.querySelectorAll('.slide');
    let currentSlideP10 = 0;

    slidesP10[currentSlideP10].className = 'slide active';
    carouselP10.style.height = `${slidesP10[currentSlideP10].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP10() {
    let carouselPromptP10 = document.querySelector('.insight-prompt-carousel-part10');
    if(carouselPromptP10 == null) return;
    
    let slidesPromptP10 = carouselPromptP10.querySelectorAll('.slide');
    let currentSlideP10 = 0;

    slidesPromptP10[currentSlideP10].className = 'slide active';
    carouselPromptP10.style.height = `${slidesPromptP10[currentSlideP10].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupInsightCarouselHeightP10();
}, true);

window.addEventListener('resize', function(event) {
    setupInsightPromptCarouselHeightP10();
}, true);
//-------------------------------- END INSIGHTS CAROUSEL PART10 --------------------------------

//******** CAROUSEL ************/
// window.addEventListener('load', (event) => {
//     var carousels = document.querySelectorAll('.carousel');

//     carousels.forEach(function(carousel) {
//         var isDown = false;
//         var startX, scrollLeft;
//         var velX = 0;
//         var momentumID;

//         carousel.addEventListener('mousedown', (e) => {
//             isDown = true;
//             carousel.classList.add('active');
//             startX = e.pageX - carousel.offsetLeft;
//             scrollLeft = carousel.scrollLeft;
//             cancelMomentumTracking();
//         });

//         carousel.addEventListener('mouseleave', () => {
//             isDown = false;
//             carousel.classList.remove('active');
//         });

//         carousel.addEventListener('mouseup', () => {
//             isDown = false;
//             carousel.classList.remove('active');
//             carousel.style.transition = 'all 0.25s';
//             beginMomentumTracking();
//         });

//         carousel.addEventListener('mousemove', (e) => {
//             if(!isDown){
//                 carousel.classList.remove('moving');
//                 return
//             }
//             e.preventDefault();

//             carousel.classList.add('moving');
//             const x = e.pageX - carousel.offsetLeft;
//             const walk = (x - startX) * 1; //scroll-fast
//             carousel.scrollLeft = scrollLeft - walk;
//         });
//         carousel.addEventListener('wheel', (e) => {
//           cancelMomentumTracking();
//         }, { passive: true });

//         function beginMomentumTracking() {
//             cancelMomentumTracking();
//             momentumID = requestAnimationFrame(momentumLoop);
//         }

//         function cancelMomentumTracking() {
//             cancelAnimationFrame(momentumID);
//         }

//         function momentumLoop() {
//             carousel.scrollLeft += velX;
//             velX *= 0.95;
//             if (Math.abs(velX) > 0.5) {
//                 momentumID = requestAnimationFrame(momentumLoop);
//             }
//         }
//     });

//     var carousels = document.querySelectorAll('.carousel');

//     carousels.forEach(function(carousel) {
//         let isDown = false;
//         let startX;
//         let scrollLeft;
//         let velX = 0;
//         let momentumID;
    
//         carousel.addEventListener('mousedown', (e) => {
//             isDown = true;
//             carousel.classList.add('active');
//             startX = e.pageX - carousel.offsetLeft;
//             scrollLeft = carousel.scrollLeft;
//             cancelMomentumTracking();
//         });
    
//         carousel.addEventListener('mouseleave', () => {
//             isDown = false;
//             carousel.classList.remove('active');
//         });
    
//         carousel.addEventListener('mouseup', () => {
//             isDown = false;
//             carousel.classList.remove('active');
//             beginMomentumTracking();
//         });
    
//         carousel.addEventListener('mousemove', (e) => {
//             if (!isDown) {
//                 carousel.classList.remove('moving');
//                 return
//             }
//             e.preventDefault();
//             carousel.classList.add('moving');
//             const x = e.pageX - carousel.offsetLeft;
//             const walk = (x - startX) * 1.2; //scroll-fast
//             var prevScrollLeft = carousel.scrollLeft;
//             carousel.scrollLeft = scrollLeft - walk;
//             velX = carousel.scrollLeft - prevScrollLeft;
//         });
    
//         carousel.addEventListener('wheel', (e) => {
//             cancelMomentumTracking();
//         }, { passive: true });
    
//         function beginMomentumTracking() {
//             cancelMomentumTracking();
//             momentumID = requestAnimationFrame(momentumLoop);
//         }
    
//         function cancelMomentumTracking() {
//             cancelAnimationFrame(momentumID);
//         }
    
//         function momentumLoop() {
//             carousel.scrollLeft += velX;
//             velX *= 0.8;
//             if (Math.abs(velX) > 0.25) {
//                 momentumID = requestAnimationFrame(momentumLoop);
//             }
//         }
//     });
// });