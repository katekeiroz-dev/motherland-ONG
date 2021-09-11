
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