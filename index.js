let titleBotton = document.querySelector('.about-text');
let textDescriptionAboutMe = document.querySelector('.text-description__about-me');
let textSoftSkills  = document.querySelector('.text-soft-skills');
let textDescriptionEducation = document.querySelector('.text-description__education');
let titleShortDescription = document.querySelector('.title__short-description');
let titleSoftSkills = document.querySelector('.title__soft-skills');
let titlEducation = document.querySelector('.title__education');

titleBotton.addEventListener('click', () => {
if(titleBotton.clicked = true){
    textDescriptionAboutMe.classList.add('no-active');
    textSoftSkills.classList.add('no-active');
    textDescriptionEducation.classList.add('no-active');
    titleShortDescription.classList.add('no-active');
    titleSoftSkills.classList.add('no-active');
    titlEducation.classList.add('no-active');
}
}
);