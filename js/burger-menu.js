$(document).ready(function () {
    let $burgerMenu = $('.burger-menu');
    let $menuItems = $('.burger-menu-items');

    function toggleMenu() {
        $burgerMenu.toggleClass('active');
        $menuItems.toggleClass('active');
    }

    function closeMenu(event) {
        if (!$burgerMenu.is(event.target) && !$menuItems.is(event.target) && !$menuItems.has(event.target).length) {
            $burgerMenu.removeClass('active');
            $menuItems.removeClass('active');
        }
    }

    $burgerMenu.on('click', toggleMenu);
    $(document).on('click', closeMenu);
});