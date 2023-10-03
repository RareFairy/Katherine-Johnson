var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("images/katherine_g._johnson-2.jpeg", "images/katherine_g._johnson-3.jpg", "images/night-sky-background.jpg", "images/logo-rocket.png");