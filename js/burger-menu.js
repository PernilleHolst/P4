$(document).ready(function () {
    console.log("jQuery is working!");
    let $burgerMenu = $('.burger-menu');
    let $menuItems = $('.burger-menu-items');

    // Toggle menu når der klikkes på burger-menuen
    $burgerMenu.on('click', function (event) {
        console.log("Burger menu clicked!");
        event.stopPropagation(); // Forhindrer event bubbling
        $menuItems.toggleClass('active');
    });

    // Luk menu når der klikkes udenfor
    $(document).on('click', function (event) {
        if (!$menuItems.is(event.target) && $menuItems.has(event.target).length === 0) {
            console.log("Clicked outside menu. Closing it.");
            $menuItems.removeClass('active');
        }
    });
});