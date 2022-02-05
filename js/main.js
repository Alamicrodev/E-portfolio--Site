// Languages 

const html5 = document.getElementById('html__icon');
const css3 = document.getElementById('css__icon');
const javaScript = document.getElementById('js__icon');
const react = document.getElementById('react__icon');
const python = document.getElementById('python__icon');
const django = document.getElementById('django__icon');
const pgsql = document.getElementById('pgsql__icon');

const viewPortHeight = document.documentElement.clientHeight;

document.addEventListener('scroll', onScroll);

const languages = [html5, css3, javaScript, react, python, django, pgsql]

// Projects 

 let projects = document.querySelector(".projects__list").childNodes;


  projects = [...projects]

  projects = projects.filter((project) => project.nodeType === 1)
  


function onScroll() {
  
  languages.forEach((language) => {
    if (language.getBoundingClientRect().top < viewPortHeight)  
     {
        language.style.animation = "hero 800ms ease-in-out backwards"
     }
  })

  projects.forEach((project) => {
    if(project.getBoundingClientRect().top < viewPortHeight)
    {
      project.style.animation = "hero 800ms ease-in-out backwards"
    }
  })
  
  
  
}