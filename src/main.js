//TOGGLE ICON


let menuIcon = document.querySelector('#menu-icon');
let headitems = document.querySelector('#nav');


menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    headitems.classList.toggle('active')
};









// scroll active
let sections= document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll= () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top>=offset && top<offset+height){

            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.
                querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
            });

        };

    });

    // stciky nav bar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    //remove toggle icon and nav bar when click navbarlink
    menuIcon.classList.remove('bx-x')
    headitems.classList.remove('active')

};


    // scroll reveal
    ScrollReveal({
         reset: true,
         distance: '80px',
         duration: 2000,
         delay: 200
         });

    ScrollReveal().reveal( '.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal( '.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal( '.home-content o, .about-content', { origin: 'right' });
    ScrollReveal().reveal( '.home-img, .services-container, .projects-box, .contacts form', { origin: 'bottom' });










