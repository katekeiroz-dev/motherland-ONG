
function initTabNav() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');

    if(tabmenu.length && tabcontent.length) {
        tabcontent[0].classList.add('ative');

        function activeTab(index) {
            tabcontent.forEach((section) => {
                section.classList.remove('ative');

            });

            tabcontent[index].classList.add('ative');
        }

        tabmenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });

        }) ;

    }
}

initTabNav();

function initAccordion() {
    const accordionItem = document.querySelectorAll('.js-accordion dt');
    const ativeClass = 'active'

    if(accordionItem.length) {
        accordionItem[0].classList.add(ativeClass);
        accordionItem[0].nextElementSibling.classList.add(ativeClass);

        function activeAccordion() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active')
        }

        accordionItem.forEach((item) => {
            item.addEventListener('click', activeAccordion);

        });
}
}

initAccordion();



function initScrollSuave() {

    const linksInternos = document.querySelectorAll ('js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefaut();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

    // uma outra forma alternativa seria:
    //const topo = section.offsetTop;
    //window.scrollTo({
    //  top: topo,
    //  behavior: 'smooth',
    //});


    }


    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

}

initScrollSuave();


function animaOfScroll() {
    const section = document.querySelectorAll('js-scroll');
    if(section.length) {
        const windowHalf = window.innerHeight * 0.6;

        function animaScroll(){
            section.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHalf) < 0;
                if(isSectionVisible)
                    section.classList.add('ativo');
                else
                section.classList.remove('ativo');
            });
        }

    animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
    
}

animaOfScroll();