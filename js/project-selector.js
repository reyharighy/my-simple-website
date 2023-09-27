const allLinks = document.querySelectorAll(".card a");
const allTabs = document.querySelectorAll(".tab-content");
const caseProjects = document.querySelectorAll(".case-project");
const caseArticles = document.querySelectorAll(".article-entry-thumbnail");

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

const shiftTabs = (linkId) => {
  allTabs.forEach((tab, i) => {

    if (tab.id.includes(linkId)) {
      allTabs.forEach((tabItem) => {
        if (window.innerWidth <= 765) {
          tabItem.style = `transform: translateY(-${i*410}px);`;
        } else if (window.innerWidth > 765 && window.innerWidth <= 865) {
          tabItem.style = `transform: translateY(-${i*280}px);`;
        } else if (window.innerWidth > 866 && window.innerWidth <= 965) {
          tabItem.style = `transform: translateY(-${i*310}px);`;
        } else {
          tabItem.style = `transform: translateY(-${i*360}px);`;
        }
      });
    }
  });
};

let isWrapperVisible = false;
let timer;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const tabContentWrapper = document.querySelector(".tab-content-wrapper");

    if (entry.isIntersecting) {
      clearTimeout(timer);
      shiftTabs(linkId);

      if (window.innerWidth <= 765) {
        tabContentWrapper.style = `height: 410px;`;
        tabContentWrapper.style.maxHeight = '410px';
      } else if (window.innerWidth > 765 && window.innerWidth <= 865) {
        tabContentWrapper.style = `height: 280px;`;
        tabContentWrapper.style.maxHeight = '280px';
      } else if (window.innerWidth > 865 && window.innerWidth <= 965) {
        tabContentWrapper.style = `height: 310px;`;
        tabContentWrapper.style.maxHeight = '310px';
      } else {
        tabContentWrapper.style = `height: 360px;`;
        tabContentWrapper.style.maxHeight = '360px';
      }

      tabContentWrapper.classList.remove('hide');
      tabContentWrapper.style.visibility = 'visible';
      isWrapperVisible = true;
    } else {
      tabContentWrapper.style = `height: 0px;`;
      tabContentWrapper.style.maxHeight = '0px';
      tabContentWrapper.classList.add('hide');
      tabContentWrapper.style.visibility = 'hidden';
      isWrapperVisible = false;
    }
  });
}, options);

allLinks.forEach((elem) => {
  observer.observe(elem);
  const linkId = elem.id;
  const tabContentWrapper = document.querySelector(".tab-content-wrapper");
  
  elem.addEventListener('mouseover', () => {
    clearTimeout(timer);
    shiftTabs(linkId);

    if (window.innerWidth <= 765) {
      tabContentWrapper.style = `height: 410px;`;
      tabContentWrapper.style.maxHeight = '410px';
    } else if (window.innerWidth > 765 && window.innerWidth <= 865) {
      tabContentWrapper.style = `height: 280px;`;
      tabContentWrapper.style.maxHeight = '280px';
    } else if (window.innerWidth > 865 && window.innerWidth <= 965) {
      tabContentWrapper.style = `height: 310px;`;
      tabContentWrapper.style.maxHeight = '310px';
    } else {
      tabContentWrapper.style = `height: 360px;`;
      tabContentWrapper.style.maxHeight = '360px';
    }
    
    tabContentWrapper.classList.remove('hide');
    tabContentWrapper.style.visibility = 'visible';
    isWrapperVisible = true;
  });
});

if (!isTouchDevice()) {
  caseProjects.forEach((project) => {
    const imageHolder = project.querySelector(".image-holder");
    const projectWrapper = project.querySelector(".case-project-wrapper");
    let timer;
  
    imageHolder.addEventListener('mouseover', () => {
      clearTimeout(timer);
      
      projectWrapper.style.maxHeight = projectWrapper.scrollHeight + 'px';
    });
  
    imageHolder.addEventListener('mouseout', () => {
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        projectWrapper.style.maxHeight = '0px';
      }, 300);
    });
  });
} else {
  caseProjects.forEach((project) => {
    const projectWrapper = project.querySelector(".case-project-wrapper");

    projectWrapper.style.maxHeight = '0px';
  });
}

if (!isTouchDevice()) {
  caseArticles.forEach((article) => {
    const imageHolder = article.querySelector(".image-hover");
    const articleWrapper = article.querySelector(".case-article-wrapper");
    let timer;
  
    imageHolder.addEventListener('mouseover', () => {
      clearTimeout(timer);
      
      articleWrapper.style.maxHeight = articleWrapper.scrollHeight + 'px';
    });
  
    imageHolder.addEventListener('mouseout', () => {
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        articleWrapper.style.maxHeight = '0px';
      }, 300);
    });
  });
} else {
  caseArticles.forEach((article) => {
    const articleWrapper = article.querySelector('.case-article-wrapper');

    articleWrapper.style.maxHeight = articleWrapper.scrollHeight + 'px';
  });  
}
