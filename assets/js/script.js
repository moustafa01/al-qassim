if (Webflow.env('editor') != undefined) {
} else {
    document.addEventListener("DOMContentLoaded", function () {
        gsap.registerPlugin(ScrollTrigger);
        var locoScroll
        const mediaQuery = window.matchMedia('(min-width: 992px)')
        var animation
        var offsetHeight = document.querySelector('.page-wrapper').offsetHeight;
        var intViewportHeight = window.innerHeight;
        document.getElementById("locomotive-scroll").setAttribute('data-scroll-container', '');
        document.getElementById("nav").setAttribute('data-scroll-sticky', '');
        document.getElementById("cookie-banner").setAttribute('data-scroll-sticky', '');
        if (mediaQuery.matches) {
            (function () {
                locoScroll = new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true,
                    lerp: 0.1,
                    getDirection: true,
                });
                setTimeout(function () {
                    locoScroll.update();
                }, 4000);
                setTimeout(function () {
                    locoScroll.update();
                }, 8000);
            })();
        }
        $(".submit-form").click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 2000);
        });
        $('.insights-news-button').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 510);
        });
        setInterval(function () {
            locoScroll.update()
        }, 8000);
        document.addEventListener('lazyloaded', function () {
            locoScroll.update()
        });
        $('.load-more-button-wrap').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 600);
        });
        $('.job-top-wrap').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 360);
        });
        $('.practices-sectors-btn').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 510);
        });
        $('.practices-btn').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 2000);
        });
        $('.insights-news-button').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 1000);
        });
        $('.link-to-form').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 510);
        });
        $('.sort-button').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 2000);
        });
        $('#search').click(function () {
            setTimeout(function () {
                locoScroll.update();
            }, 210);
        });
        $("#search").on("keyup", function () {
            setTimeout(function () {
                locoScroll.update();
            }, 210);
        });
        //scroll to the top of the page
        $('.link-to-top').on('click', function () {
            locoScroll.scrollTo(hero)
        })
        locoScroll.on("scroll", ScrollTrigger.update);
        locoScroll.on('scroll', (instance) => {
            document.documentElement.setAttribute('data-direction', instance.direction)
        });
        ScrollTrigger.scrollerProxy(".locomotive-scroll", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
        });

        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
    });
}
// On Back Button Tap
window.onpageshow = function (event) { if (event.persisted) { window.location.reload() } };
// Hide Transition on Window Width Resize
setTimeout(() => {
    $(window).on("resize", function () {
        setTimeout(() => {
            $(".transition").css("display", "none");
        }, 50);
    });
}, introDurationMS);

//blog slider
new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
}).mount();

//testimonial slider
new Splide('.testimonial-splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 10000
}).mount();


//number of articles 
$(document).ready(function () {
    const articlenumbers = $('.articles-count').length;
    $('.articles-amount').text(articlenumbers);
});

//slider arrow
$(".slider-left-arrow").click(function () {
    $(".splide__arrow--prev").click();
});
(function () {
    // create a new Library instance and store it in a variable called "fsSlider"
    var fsSlider = new FsLibrary(".slider-data-feed")
    // run Slider on our instance
    fsSlider.slider({
        sliderComponent: ".slider-component",
        resetIx: true
    })
})();


const dateVersion2 = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
}

// Update the text content of our text elements with the formatted date 
document.querySelector('.date-text').textContent = new Date().toLocaleDateString('en-US', dateVersion2); 