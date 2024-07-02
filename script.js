document.addEventListener('DOMContentLoaded', function() {
    var zoomImage = document.getElementById('zoomImage');
    var eyeIcon = document.getElementById('eye');
    var eyeOffIcon = document.getElementById('eyeOff');
    var cardContent = document.getElementById('cardContent');

    // Inicialmente, o cardContent está visível
    cardContent.style.display = 'block';

    // Ao clicar na imagem img.png
    zoomImage.addEventListener('click', function() {
        if (cardContent.style.display === 'block') {
            $(cardContent).fadeOut('slow');
            $(eyeIcon).fadeOut('slow');
            $(eyeOffIcon).fadeOut('slow');
        } else {
            $(cardContent).fadeIn('slow');
            $(eyeIcon).fadeIn('slow');
        }
    });

    // Ao clicar na imagem eye.png
    eyeIcon.addEventListener('click', function() {
        $(zoomImage).fadeOut('slow', function() {
            $(cardContent).fadeIn('slow');
            $(eyeIcon).fadeOut('slow', function() {
                $(eyeOffIcon).fadeIn('slow');
            });
        });
    });

    // Ao clicar na imagem eye-off.png
    eyeOffIcon.addEventListener('click', function() {
        $(eyeOffIcon).fadeOut('slow', function() {
            $(eyeIcon).fadeIn('slow');
            $(cardContent).fadeOut('slow', function() {
                $(zoomImage).fadeIn('slow');
            });
        });
    });
});
