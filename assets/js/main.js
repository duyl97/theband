const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;
const menuItems = document.querySelectorAll('#nav li a[href*="#"');


function showBuyTickets() {
    modal.classList.add('open');
}
function hideBuyTickets() {
    modal.classList.remove('open');
}

for ( const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

modalClose.addEventListener('click', hideBuyTickets);

modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

// mobile nav 
mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// header menu items
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParent) {
            event.preventDefault();
        } else {
        header.style.height = null;
        }
    }
}
