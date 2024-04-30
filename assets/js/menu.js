
var hamburger = $(".hamburger-init"),
    menu_wrapper = $(".menu-wrapper"),
    menu = $(".menu"),
    item_with_children = $(".menu-item-has-children");

// logic
hamburger.on("click", function () {
    $(".hamburgercontainer").toggleClass("hamburger-guide");
    $(this).toggleClass("active");
    menu_wrapper.toggleClass("visible");
    menu.toggleClass("menu-active");

    if ($('.menu-wrapper').hasClass('visible')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    }
});

item_with_children.on("click", function () {
    $(this).toggleClass("sub-menu-active");
    $(this).children(".menu").slideToggle();
});

