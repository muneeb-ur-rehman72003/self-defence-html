$("#Header").load("layout/header.html")

$("#Footer").load("layout/footer.html")




// testimonails Slider Start


$('.clientsslid').slick({
  dots: false,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



// Testimonails SLider End

// Counter start

$(document).ready(function () {
  function startCounter(counterElement) {
    var $this = $(counterElement),
      countTo = $this.attr("data-countto"),
      countDuration = parseInt($this.attr("data-duration"));

    $({ counter: 0 }).animate(
      { counter: countTo },
      {
        duration: countDuration,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.counter));
        },
        complete: function () {
          $this.text(this.counter);
        }
      }
    );
  }

  let observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target); // Stop observing once the animation starts
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  $(".counter").each(function () {
    observer.observe(this);
  });
});



// Counter Ends


window.onload = function () {
  const banner = document.getElementById('mainBanner');
  const bannerImage = banner.querySelector('.banner_img');

  if (!banner || !bannerImage) return;

  banner.addEventListener('mousemove', (e) => {
    const rect = banner.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the banner
    const y = e.clientY - rect.top;  // Y position within the banner

    // Translate range: -30px to 30px
    const moveX = (x / rect.width - 0.5) * 20;
    const moveY = (y / rect.height - 0.5) * 20;

    bannerImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  banner.addEventListener('mouseleave', () => {
    // Reset position when mouse leaves the banner
    bannerImage.style.transform = 'translate(0, 0)';
  });
}
// banner-follow.js

$(window).on('load', function () {
  var str = location.href.toLowerCase();
  var isActiveSet = false;

  $("#menu>li>a").each(function () {
    var thisHref = this.href.toLowerCase();
    if (str.indexOf(thisHref) > -1) {
      $("#menu li a.active").removeClass("active");
      $(this).parent().addClass("active");
      isActiveSet = true;
    }
  });

  if (!isActiveSet) {
    $("#menu li a.home").parent().addClass("active");
  }
});

// banner-follow.js

// GSAP

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);


  const tm = gsap.timeline({
    scrollTrigger: {
      trigger: ".main_slider",
      start: "top",
      end: "50%",
      pin: true,
      scrub: 1,
      markers: false,
    }
  });

  tm.to(".wrper-top", {
    y: "-100vh",
  })

  const tm1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".location-heading-sec",
      start: "-10%",
      end: "30%",
      scrub: 2,
      markers: false,
    }
  });

  tm1.to(".location-heading-sec", {
    backgroundSize: "100% 100%",
  })

  tm1.to(".wrper-bottom", {
    y: "-67vh",
  })
});









// GSAP

// Scroll




// Scroll



// testimonials_sldier start
$('.testimonials_sldier').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// testimonials_sldier end









// blogslider start
$('.blogslid').slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// blogslider end

// product slider jas start

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
// product slider jas end

// simple slick slider start
$(".regular").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

// simple slick slider end

// wow animation js 

$(function () {
  new WOW().init();
});


// responsive menu js 

$(function () {
  $('#menu').slicknav();
});



// slick slider in tabs js start

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
}


// slick slider in tabs js end



// search button js

(function ($) {

  $.fn.searchBox = function (ev) {

    var $searchEl = $('.search-elem');
    var $placeHolder = $('.placeholder');
    var $sField = $('#search-field');

    if (ev === "open") {
      $searchEl.addClass('search-open')
    };

    if (ev === 'close') {
      $searchEl.removeClass('search-open'),
        $placeHolder.removeClass('move-up'),
        $sField.val('');
    };

    var moveText = function () {
      $placeHolder.addClass('move-up');
    }

    $sField.focus(moveText);
    $placeHolder.on('click', moveText);

    $('.submit').prop('disabled', true);
    $('#search-field').keyup(function () {
      if ($(this).val() != '') {
        $('.submit').prop('disabled', false);
      }
    });
  }

}(jQuery));

$('.search-btn').on('click', function (e) {
  $(this).searchBox('open');
  e.preventDefault();
});

$('.close').on('click', function () {
  $(this).searchBox('close');
});


