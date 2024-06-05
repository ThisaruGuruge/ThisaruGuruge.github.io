document.addEventListener('DOMContentLoaded', function () {
    $('.gallery--images').magnificPopup({
        delegate: '.gallery-image',
        type: 'image',
        closeBtnInside: false,
        closeOnContentClick: true,
        tLoading: '',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // Empty buttons for custom controls
            tPrev: 'Previous',
            tNext: 'Next',
            buildControls: function () {
                // Remove default buttons if they exist
                this.arrowLeft.remove();
                this.arrowRight.remove();

                // Add custom buttons with Ionicons
                this.arrowLeft = $('<button title="Previous" type="button" class="mfp-arrow mfp-arrow-left"><ion-icon name="arrow-back-outline"></ion-icon></button>').appendTo(this.container);
                this.arrowRight = $('<button title="Next" type="button" class="mfp-arrow mfp-arrow-right"><ion-icon name="arrow-forward-outline"></ion-icon></button>').appendTo(this.container);
            }
        },
        mainClass: 'mfp-with-zoom',
        removalDelay: 300,
        closeBtnInside: false,
        closeOnContentClick: true,
        midClick: true,
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        },
        callbacks: {
            beforeChange: function () {
                this.items[0].src = this.items[0].src + '?=' + Math.random();
            }
        }
    });
});


$('.image-gallery').on('touchstart', function (e) {
    e.preventDefault();
});
