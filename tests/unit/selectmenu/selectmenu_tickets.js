/*
 * selectmenu_tickets.js
 */
(function($) {

module("selectmenu: tickets");

test('#241 - "focus" doesn\'t bubble', function() {
	// https://github.com/fnagel/jquery-ui/issues/241
	expect(4);

	el = $('#selectmenu').selectmenu();
	
	$('.ui-selectmenu').mousedown();
	ok($('.ui-selectmenu-menu').hasClass('ui-selectmenu-open'), 'selectmenu menu element should be visible');
	ok($('.ui-selectmenu-menu li:eq(0)').hasClass('ui-selectmenu-item-focus'), 'first item should have focus');
	
    $('.ui-selectmenu-menu-dropdown').simulate('keydown', { keyCode: $.ui.keyCode.DOWN });
	ok($('.ui-selectmenu-menu li:eq(1)').hasClass('ui-selectmenu-item-focus'), 'after down arrow press, second item should have focus');
	
    $('.ui-selectmenu-menu-dropdown').simulate('keypress', { keyCode: 'a'.charCodeAt(0) });
	ok($('.ui-selectmenu-menu li:eq(2)').hasClass('ui-selectmenu-item-focus'), 'after "a" key press, third item should have focus');
});

})(jQuery);
