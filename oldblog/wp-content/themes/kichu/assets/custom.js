function kichu_init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
			menu = document.querySelector(".nav-menu h3");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
			classie.add(menu,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
            if (classie.has(menu,"smaller")) {
                classie.remove(menu,"smaller");
            }
        }
    });
}
window.onload = kichu_init();

var menuRight = document.getElementById( 'nav-menu-s2' ),
	showRightPush = document.getElementById( 'showRightPush' ),
    hideRightPush = document.getElementById( 'hideRightPush' ),
	body = document.body;

showRightPush.onclick = function() {
    classie.toggle( this, 'active' );
	classie.toggle( body, 'nav-menu-push-toleft' );
	classie.toggle( menuRight, 'nav-menu-open' );
	disableOther( 'showRightPush' );
};

hideRightPush.onclick = function() {
    classie.toggle( this, 'active' );
	classie.toggle( body, 'nav-menu-push-toleft' );
	classie.toggle( menuRight, 'nav-menu-open' );
	disableOther( 'hideightPush' );
};

function disableOther( button ) {
    if( button !== 'showRightPush' ) {
		classie.toggle( showRightPush, 'disabled' );
	}
    if( button !== 'hideRightPush' ) {
		classie.toggle( hideRightPush, 'disabled' );
	}
}