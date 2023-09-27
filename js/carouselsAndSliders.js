//-------------------------------- SKILLSET CAROUSEL --------------------------------
let currentSlideSkillset = 0;

window.addEventListener('load', (event) => {
    let carouselSkillset = document.querySelector('.skillset-carousel');
    let slidesSkillset = carouselSkillset.querySelectorAll('.slide');

    // Initial
    slidesSkillset[currentSlideSkillset].className = 'slide active';
    setupSkillsetCarouselHeight();

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
    let carouselSkillset = document.querySelector('.skillset-carousel');
    let slidesSkillset = carouselSkillset.querySelectorAll('.slide');

    slidesSkillset[currentSlideSkillset].className = 'slide active';
    carouselSkillset.style.height = `${slidesSkillset[currentSlideSkillset].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupSkillsetCarouselHeight();
}, true);
//-------------------------------- END SKILLSET CAROUSEL --------------------------------

//-------------------------------- CRUD FEATURE CAROUSEL --------------------------------
let currentSlideFeature = 0;

window.addEventListener('load', (event) => {
    let carouselFeature = document.querySelector('.feature-carousel');
    let slidesFeature = carouselFeature.querySelectorAll('.slide');

    // Initial
    slidesFeature[currentSlideFeature].className = 'slide active';
    setupFeatureCarouselHeight();

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
    let carouselFeature = document.querySelector('.feature-carousel');
    let slidesFeature = carouselFeature.querySelectorAll('.slide');

    slidesFeature[currentSlideFeature].className = 'slide active';
    carouselFeature.style.height = `${slidesFeature[currentSlideFeature].offsetHeight}px`;
}

// Resize
window.addEventListener('resize', function(event) {
    setupFeatureCarouselHeight();
}, true);
//-------------------------------- END FEATURE CAROUSEL --------------------------------

//-------------------------------- INSIGHTS CAROUSEL PART1 --------------------------------
let currentSlideP1 = 0;

window.addEventListener('load', (event) => {
    let carouselP1 = document.querySelector('.insight-carousel-part1');
    let carouselPromptP1 = document.querySelector('.insight-prompt-carousel-part1');
    let slidesP1 = carouselP1.querySelectorAll('.slide');
    let slidesPromptP1 = carouselPromptP1.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP1();
        setupInsightPromptCarouselHeightP1();
    }
    
    function prevSlide() {
        slidesP1[currentSlideP1].className = 'slide';
        slidesPromptP1[currentSlideP1].className = 'slide';
        currentSlideP1 = (currentSlideP1-1+slidesP1.length)%slidesP1.length;
        slidesP1[currentSlideP1].className = 'slide active';
        slidesPromptP1[currentSlideP1].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP1();
        setupInsightPromptCarouselHeightP1();
    }

});

function setupInsightCarouselHeightP1() {
    let carouselP1 = document.querySelector('.insight-carousel-part1');
    let slidesP1 = carouselP1.querySelectorAll('.slide');

    slidesP1[currentSlideP1].className = 'slide active';
    carouselP1.style.height = `${slidesP1[currentSlideP1].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP1() {
    let carouselPromptP1 = document.querySelector('.insight-prompt-carousel-part1');
    let slidesPromptP1 = carouselPromptP1.querySelectorAll('.slide');

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
let currentSlideP2 = 0;

window.addEventListener('load', (event) => {
    let carouselP2 = document.querySelector('.insight-carousel-part2');
    let carouselPromptP2 = document.querySelector('.insight-prompt-carousel-part2');
    let slidesP2 = carouselP2.querySelectorAll('.slide');
    let slidesPromptP2 = carouselPromptP2.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP2();
        setupInsightPromptCarouselHeightP2();
    }
    
    function prevSlide() {
        slidesP2[currentSlideP2].className = 'slide';
        slidesPromptP2[currentSlideP2].className = 'slide';
        currentSlideP2 = (currentSlideP2-1+slidesP2.length)%slidesP2.length;
        slidesP2[currentSlideP2].className = 'slide active';
        slidesPromptP2[currentSlideP2].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP2();
        setupInsightPromptCarouselHeightP2();
    }

});

function setupInsightCarouselHeightP2() {
    let carouselP2 = document.querySelector('.insight-carousel-part2');
    let slidesP2 = carouselP2.querySelectorAll('.slide');

    slidesP2[currentSlideP2].className = 'slide active';
    carouselP2.style.height = `${slidesP2[currentSlideP2].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP2() {
    let carouselPromptP2 = document.querySelector('.insight-prompt-carousel-part2');
    let slidesPromptP2 = carouselPromptP2.querySelectorAll('.slide');

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
let currentSlideP3 = 0;

window.addEventListener('load', (event) => {
    let carouselP3 = document.querySelector('.insight-carousel-part3');
    let carouselPromptP3 = document.querySelector('.insight-prompt-carousel-part3');
    let slidesP3 = carouselP3.querySelectorAll('.slide');
    let slidesPromptP3 = carouselPromptP3.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP3();
        setupInsightPromptCarouselHeightP3();
    }
    
    function prevSlide() {
        slidesP3[currentSlideP3].className = 'slide';
        slidesPromptP3[currentSlideP3].className = 'slide';
        currentSlideP3 = (currentSlideP3-1+slidesP3.length)%slidesP3.length;
        slidesP3[currentSlideP3].className = 'slide active';
        slidesPromptP3[currentSlideP3].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP3();
        setupInsightPromptCarouselHeightP3();
    }

});

function setupInsightCarouselHeightP3() {
    let carouselP3 = document.querySelector('.insight-carousel-part3');
    let slidesP3 = carouselP3.querySelectorAll('.slide');

    slidesP3[currentSlideP3].className = 'slide active';
    carouselP3.style.height = `${slidesP3[currentSlideP3].offsetHeight}px`;
}

function setupInsightCarouselWidthP3() {
    let carouselP1 = document.querySelector('.insight-carousel-part1');
    let slidesP1 = carouselP1.querySelectorAll('.slide');

    slidesP1[currentSlideP1].className = 'slide active';
    carouselP1.style.width = `${slidesP1[currentSlideP1].offsetWidth}px`;
}

function setupInsightPromptCarouselHeightP3() {
    let carouselPromptP3 = document.querySelector('.insight-prompt-carousel-part3');
    let slidesPromptP3 = carouselPromptP3.querySelectorAll('.slide');

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
let currentSlideP4 = 0;

window.addEventListener('load', (event) => {
    let carouselP4 = document.querySelector('.insight-carousel-part4');
    let carouselPromptP4 = document.querySelector('.insight-prompt-carousel-part4');
    let slidesP4 = carouselP4.querySelectorAll('.slide');
    let slidesPromptP4 = carouselPromptP4.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP4();
        setupInsightPromptCarouselHeightP4();
    }
    
    function prevSlide() {
        slidesP4[currentSlideP4].className = 'slide';
        slidesPromptP4[currentSlideP4].className = 'slide';
        currentSlideP4 = (currentSlideP4-1+slidesP4.length)%slidesP4.length;
        slidesP4[currentSlideP4].className = 'slide active';
        slidesPromptP4[currentSlideP4].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP4();
        setupInsightPromptCarouselHeightP4();
    }

});

function setupInsightCarouselHeightP4() {
    let carouselP4 = document.querySelector('.insight-carousel-part4');
    let slidesP4 = carouselP4.querySelectorAll('.slide');

    slidesP4[currentSlideP4].className = 'slide active';
    carouselP4.style.height = `${slidesP4[currentSlideP4].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP4() {
    let carouselPromptP4 = document.querySelector('.insight-prompt-carousel-part4');
    let slidesPromptP4 = carouselPromptP4.querySelectorAll('.slide');

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
let currentSlideP5 = 0;

window.addEventListener('load', (event) => {
    let carouselP5 = document.querySelector('.insight-carousel-part5');
    let carouselPromptP5 = document.querySelector('.insight-prompt-carousel-part5');
    let slidesP5 = carouselP5.querySelectorAll('.slide');
    let slidesPromptP5 = carouselPromptP5.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP5();
        setupInsightPromptCarouselHeightP5();
    }
    
    function prevSlide() {
        slidesP5[currentSlideP5].className = 'slide';
        slidesPromptP5[currentSlideP5].className = 'slide';
        currentSlideP5 = (currentSlideP5-1+slidesP5.length)%slidesP5.length;
        slidesP5[currentSlideP5].className = 'slide active';
        slidesPromptP5[currentSlideP5].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP5();
        setupInsightPromptCarouselHeightP5();
    }

});

function setupInsightCarouselHeightP5() {
    let carouselP5 = document.querySelector('.insight-carousel-part5');
    let slidesP5 = carouselP5.querySelectorAll('.slide');

    slidesP5[currentSlideP5].className = 'slide active';
    carouselP5.style.height = `${slidesP5[currentSlideP5].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP5() {
    let carouselPromptP5 = document.querySelector('.insight-prompt-carousel-part5');
    let slidesPromptP5 = carouselPromptP5.querySelectorAll('.slide');

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
let currentSlideP6 = 0;

window.addEventListener('load', (event) => {
    let carouselP6 = document.querySelector('.insight-carousel-part6');
    let carouselPromptP6 = document.querySelector('.insight-prompt-carousel-part6');
    let slidesP6 = carouselP6.querySelectorAll('.slide');
    let slidesPromptP6 = carouselPromptP6.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP6();
        setupInsightPromptCarouselHeightP6();
    }
    
    function prevSlide() {
        slidesP6[currentSlideP6].className = 'slide';
        slidesPromptP6[currentSlideP6].className = 'slide';
        currentSlideP6 = (currentSlideP6-1+slidesP6.length)%slidesP6.length;
        slidesP6[currentSlideP6].className = 'slide active';
        slidesPromptP6[currentSlideP6].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP6();
        setupInsightPromptCarouselHeightP6();
    }

});

function setupInsightCarouselHeightP6() {
    let carouselP6 = document.querySelector('.insight-carousel-part6');
    let slidesP6 = carouselP6.querySelectorAll('.slide');

    slidesP6[currentSlideP6].className = 'slide active';
    carouselP6.style.height = `${slidesP6[currentSlideP6].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP6() {
    let carouselPromptP6 = document.querySelector('.insight-prompt-carousel-part6');
    let slidesPromptP6 = carouselPromptP6.querySelectorAll('.slide');

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
let currentSlideP7 = 0;

window.addEventListener('load', (event) => {
    let carouselP7 = document.querySelector('.insight-carousel-part7');
    let carouselPromptP7 = document.querySelector('.insight-prompt-carousel-part7');    
    let slidesP7 = carouselP7.querySelectorAll('.slide');
    let slidesPromptP7 = carouselPromptP7.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP7();
        setupInsightPromptCarouselHeightP7();
    }
    
    function prevSlide() {
        slidesP7[currentSlideP7].className = 'slide';
        slidesPromptP7[currentSlideP7].className = 'slide';
        currentSlideP7 = (currentSlideP7-1+slidesP7.length)%slidesP7.length;
        slidesP7[currentSlideP7].className = 'slide active';
        slidesPromptP7[currentSlideP7].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP7();
        setupInsightPromptCarouselHeightP7();
    }

});

function setupInsightCarouselHeightP7() {
    let carouselP7 = document.querySelector('.insight-carousel-part7');
    let slidesP7 = carouselP7.querySelectorAll('.slide');

    slidesP7[currentSlideP7].className = 'slide active';
    carouselP7.style.height = `${slidesP7[currentSlideP7].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP7() {
    let carouselPromptP7 = document.querySelector('.insight-prompt-carousel-part7');
    let slidesPromptP7 = carouselPromptP7.querySelectorAll('.slide');

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
let currentSlideP8 = 0;

window.addEventListener('load', (event) => {
    let carouselP8 = document.querySelector('.insight-carousel-part8');
    let carouselPromptP8 = document.querySelector('.insight-prompt-carousel-part8');
    let slidesP8 = carouselP8.querySelectorAll('.slide');
    let slidesPromptP8 = carouselPromptP8.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP8();
        setupInsightPromptCarouselHeightP8();
    }
    
    function prevSlide() {
        slidesP8[currentSlideP8].className = 'slide';
        slidesPromptP8[currentSlideP8].className = 'slide';
        currentSlideP8 = (currentSlideP8-1+slidesP8.length)%slidesP8.length;
        slidesP8[currentSlideP8].className = 'slide active';
        slidesPromptP8[currentSlideP8].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP8();
        setupInsightPromptCarouselHeightP8();
    }

});

function setupInsightCarouselHeightP8() {
    let carouselP8 = document.querySelector('.insight-carousel-part8');
    let slidesP8 = carouselP8.querySelectorAll('.slide');

    slidesP8[currentSlideP8].className = 'slide active';
    carouselP8.style.height = `${slidesP8[currentSlideP8].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP8() {
    let carouselPromptP8 = document.querySelector('.insight-prompt-carousel-part8');    
    let slidesPromptP8 = carouselPromptP8.querySelectorAll('.slide');

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
let currentSlideP9 = 0;

window.addEventListener('load', (event) => {
    let carouselP9 = document.querySelector('.insight-carousel-part9');
    let carouselPromptP9 = document.querySelector('.insight-prompt-carousel-part9');
    let slidesP9 = carouselP9.querySelectorAll('.slide');
    let slidesPromptP9 = carouselPromptP9.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP9();
        setupInsightPromptCarouselHeightP9();
    }
    
    function prevSlide() {
        slidesP9[currentSlideP9].className = 'slide';
        slidesPromptP9[currentSlideP9].className = 'slide';
        currentSlideP9 = (currentSlideP9-1+slidesP9.length)%slidesP9.length;
        slidesP9[currentSlideP9].className = 'slide active';
        slidesPromptP9[currentSlideP9].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP9();
        setupInsightPromptCarouselHeightP9();
    }

});

function setupInsightCarouselHeightP9() {
    let carouselP9 = document.querySelector('.insight-carousel-part9');
    let slidesP9 = carouselP9.querySelectorAll('.slide');

    slidesP9[currentSlideP9].className = 'slide active';
    carouselP9.style.height = `${slidesP9[currentSlideP9].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP9() {
    let carouselPromptP9 = document.querySelector('.insight-prompt-carousel-part9');
    let slidesPromptP9 = carouselPromptP9.querySelectorAll('.slide');

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
let currentSlideP10 = 0;

window.addEventListener('load', (event) => {
    let carouselP10 = document.querySelector('.insight-carousel-part10');
    let carouselPromptP10 = document.querySelector('.insight-prompt-carousel-part10');
    let slidesP10 = carouselP10.querySelectorAll('.slide');
    let slidesPromptP10 = carouselPromptP10.querySelectorAll('.slide');

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
        setupInsightCarouselHeightP10();
        setupInsightPromptCarouselHeightP10();
    }
    
    function prevSlide() {
        slidesP10[currentSlideP10].className = 'slide';
        slidesPromptP10[currentSlideP10].className = 'slide';
        currentSlideP10 = (currentSlideP10-1+slidesP10.length)%slidesP10.length;
        slidesP10[currentSlideP10].className = 'slide active';
        slidesPromptP10[currentSlideP10].className = 'slide active';
        // Adjust carousel height based on active slide
        setupInsightCarouselHeightP10();
        setupInsightPromptCarouselHeightP10();
    }

});

function setupInsightCarouselHeightP10() {
    let carouselP10 = document.querySelector('.insight-carousel-part10');
    let slidesP10 = carouselP10.querySelectorAll('.slide');

    slidesP10[currentSlideP10].className = 'slide active';
    carouselP10.style.height = `${slidesP10[currentSlideP10].offsetHeight}px`;
}

function setupInsightPromptCarouselHeightP10() {
    let carouselPromptP10 = document.querySelector('.insight-prompt-carousel-part10');
    let slidesPromptP10 = carouselPromptP10.querySelectorAll('.slide');

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
