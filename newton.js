

!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-W5787SL');

  // Mixpanel SDK
  (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
                                                                                          for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
                                                                                            MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);
  mixpanel.init("a0575958bb78e8e7ebf5d813fa3c70e6");


  // Mixpanel Page Views
  mixpanel.track('page viewed', {
    'page name' : document.title,
    'url' : window.location.pathname
  });


{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Newton",
  "description": "Newton is Canada's first no-fee cryptocurrency platform.",
  "alternateName": "Newton",
  "url": "https://newton.co",
  "logo": "https://cdn.prod.website-files.com/5a7df80a1735290001389a96/5ace36b4f953e754692cc629_Newton%20Icon%20256px.png",
	"image": "https://cdn.prod.website-files.com/5a7df80a1735290001389a96/5e834d5d7a3b98906125db9a_NEW_OG_Image_1200x1200.png",
  "telephone" : "1-833-639-8661",
  "email" : "support@newton.co",
  "address" : {
    "@type" : "PostalAddress",
    "streetAddress" : "370 King St W, Suite 701",
    "addressLocality" : "Toronto",
    "addressRegion" : "Ontario",
    "addressCountry" : "CA",
    "postalCode" : "M5V 1J9"
  },
  "contactPoint" : {
    "@type" : "ContactPoint",
    "telephone" : "1-833-639-8661",
    "contactType" : "Customer Service",
    "contactOption" : "http://schema.org/TollFree",
    "areaServed" : "CA",
    "availableLanguage" : "English"
  },
   "owns" : {
    "@type" : "OwnershipInfo",
    "name" : "Newton",
    "description": "Newton is Canada's first no-fee cryptocurrency brokerage.",
    "image": "https://cdn.prod.website-files.com/5a7df80a1735290001389a96/5e834d5d7a3b98906125db9a_NEW_OG_Image_1200x1200.png",
    "url": "https://newton.co"
  }
}






  window.addEventListener('load', function() {
    var timer = setInterval(function() {
      if (jQuery(".body__20:contains('Groovy')").is(':visible')) {
        gtag('event', 'conversion', {'send_to': 'AW-10934575839/MQieCNqWyMcDEN_Fgd4o'});
        clearInterval(timer);
      }
    }, 1000);
  });



  function IsEmail(email) {
    var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  $("input[type=email]").on("input", function () {
    IsEmail($(this).val());
  });


  var Webflow = Webflow || [];
  Webflow.push(function () {
    var $body = $(document.body);
    var scrollPosition = 0;

    $('[scroll="disable"]').on("click", function () {
      var oldWidth = $body.innerWidth();
      scrollPosition = window.pageYOffset;
      $body.css("overflow", "hidden");
      $body.css("position", "fixed");
      $body.css("top", `-${scrollPosition}px`);
      $body.width(oldWidth);
    });
    $('[scroll="enable"]').on("click", function () {
      if ($body.css("overflow") != "hidden") {
        scrollPosition = window.pageYOffset;
      }
      $body.css("overflow", "");
      $body.css("position", "");
      $body.css("top", "");
      $body.width("");
      $(window).scrollTop(scrollPosition);
    });
    $('[scroll="both"]').on("click", function () {
      if ($body.css("overflow") !== "hidden") {
        var oldWidth = $body.innerWidth();
        scrollPosition = window.pageYOffset;
        $body.css("overflow", "hidden");
        $body.css("position", "fixed");
        $body.css("top", `-${scrollPosition}px`);
        $body.width(oldWidth);
      } else {
        $body.css("overflow", "");
        $body.css("position", "");
        $body.css("top", "");
        $body.width("");
        $(window).scrollTop(scrollPosition);
      }
    });
  });


  $(function (e) {
    $(".cta__newton, #cta__newton").click(function () {
      $(".primary__modal").fadeIn();
      $(".modal__bg").fadeIn();
      e.stopPropagation();
    });
    $(".modal__close").click(function () {
      $(".primary__modal").fadeOut();
      $(".modal__bg").fadeOut();
    });
    $(".modal__bg").click(function () {
      $(".primary__modal").fadeOut();
      $(".modal__bg").fadeOut();
    });
    $(document).keydown(function (event) {
      if (event.keyCode == 27) {
        //$(".primary__modal").fadeOut();
        $(".modal__bg").click();
      }
    });
  });


	$(function (e) {
		// Close via Button
		$(".geo__close").click(function () {
			$(".geo__modal").fadeOut();
			$(".geo__bg").fadeOut();
		});
	});


  $(".mobilenav__toggle").on("click", function () {
    // Close other accordions when opening new one
    if (!$(this).hasClass("open")) {
      $(".mobilenav__toggle.open").click();
    }
    // Save the sibling of the toggle we clicked on
    let sibling = $(this).siblings(".mobilenav__list");
    let animationDuration = 400;

    if ($(this).hasClass("open")) {
      // Close the content div if already open
      sibling.animate({ height: "0px" }, animationDuration);
    } else {
      // Open the content div if already closed
      sibling.css("height", "auto");
      let autoHeight = sibling.height();
      sibling.css("height", "0px");
      sibling.animate({ height: autoHeight }, animationDuration, function () {
        sibling.css("height", "auto");
      });
    }
    // Open and close the toggle div
    $(this).toggleClass("open");
  });


  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }
  window.addEventListener('resize', appHeight);
  appHeight();
  window.addEventListener('DOMContentLoaded', (event) => {
    appHeight();
  });


  $('.mobilenav__link').on('click', function() {
    $('.navbutton.is--hover').click();
  });


  // when the DOM is ready
  document.addEventListener("DOMContentLoaded", function() { 
    // get the the span element
    const yrSpan = document.querySelector('.copyright');
    // get the current year
    const currentYr = new Date().getFullYear();
    // set the year span element's text to the current year
    yrSpan.textContent = currentYr;
  });


// On Back Button Tap
window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};


$(document).ready(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.newton.co/markets/v1.1/rates",
      data: {},
      success: function(data, status) {
        if (status === "success") {
          for (let i = 0; i < data.length; i++) {
            const coin = data[i];
            const splitSymbol = coin.symbol.split('_');
            const from = splitSymbol[1]; //Extracting 'from' currency
            const to = splitSymbol[0]; //Extracting 'to' currency
            const dashboardCoins = ['BTC', 'ETH', 'LTC'];
                      if(from === 'CAD' && dashboardCoins.includes(to)) parseData(to, coin["ask"], coin["bid"]);
          }
        }
      }
    }).done();
    setInterval(function() {
      $.ajax({
        dataType: "json",
        url: "https://api.newton.co/markets/v1.1/rates",
        data: {},
        success: function(data, status) {
          if (status === "success") {
            for (let i = 0; i < data.length; i++) {
                const coin = data[i];
              const splitSymbol = coin.symbol.split('_');
              const from = splitSymbol[1]; //Extracting 'from' currency
              const to = splitSymbol[0]; //Extracting 'to' currency
                const dashboardCoins = ['BTC', 'ETH', 'LTC'];
                          if(from === 'CAD' && dashboardCoins.includes(to)) parseData(to, coin["ask"], coin["bid"]);
              }
          }
        }
      }).done();
    }, 10000);
  });
  
  function parseData(coin, buy, sell) {
    switch (coin) {
      case "BTC": {
        $(".buy.btc").html(floorSymbol(buy, 2, "$"));
        $(".sell.btc").html(floorSymbol(sell, 2, "$"));
        break;
      }
      case "ETH": {
        $(".buy.eth").html(floorSymbol(buy, 2, "$"));
        $(".sell.eth").html(floorSymbol(sell, 2, "$"));
        break;
      }
      case "LTC": {
        $(".buy.ltc").html(floorSymbol(buy, 2, "$"));
        $(".sell.ltc").html(floorSymbol(sell, 2, "$"));
        break;
      }
    }
  }
  
  function floorSymbol(number, maxDecimals = 2, symbol = "") {
    if (!number) return 0;

    // Used for adding commas in thousands and dollar sign in front of number
    const splitNumber = String(parseFloat(number)).split(".");
    const commaNumber = splitNumber[0]
      ? splitNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : splitNumber[0];
  
    const decimal = parseFloat(
      splitNumber[1] ? "." + splitNumber[1] : ".00"
    ).toFixed(maxDecimals);
  
    return `${symbol}${commaNumber}.${decimal.split(".")[1]}`;
  }




  function reviewSlider() {
    let splides = $(".is--reviews");
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 3,
        perMove: 1,
        focus: 0, // 0 = left and 'center' = center
        type: "slide", // 'loop' or 'slide'
        gap: "16px", // space between slides
        arrows: "slider", // 'slider' or false
        pagination: "slider", // 'slider' or false
        dragAngleThreshold: 80, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 400,
        waitForTransition: false,
        trimSpace: true, // true removes empty space from end of list
        breakpoints: {
          1099: {
            // Tablet
            perPage: 2,
            gap: "16px"
          },
          767: {
            perPage: 2,
            gap: "16px"
          },
          479: {
            perPage: 1,
            gap: "16px"
          },
          250: {
            perPage: 1,
            gap: "16px"
          }
        }
      }).mount();

      // Custom Splide Buttons
      $('.next-splide').click(function() {
        $('.splide__arrow.splide__arrow--next').click();
      });

      $('.prev-splide').click(function() {
        $('.splide__arrow.splide__arrow--prev').click();
      });
    }
  }

  reviewSlider();

  function dashboardMiniSlider() {
    let splides = $(".is--dashboard-mini");
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 1,
        perMove: 1,
        type: "loop", // 'loop' or 'slide'
        gap: "24px",
        focus: 'center',
        autoHeight: true,
        arrows: true, // 'slider' or false
        pagination: "slider", // 'slider' or false
        autoWidth: false, // for cards with differing widths
        waitForTransition: false,
        updateOnMove: true,
        dragAngleThreshold: 80, // default is 30
        speed: 600, // transition speed in miliseconds
        trimSpace: true,
        breakpoints: {
          991: {
            // Tablet
          },
          767: {
            // Mobile Landscape
            gap: "16px",
            perPage: 1,
            perMove: 1
          },
          479: {
            // Mobile Portrait
            gap: "16px",
            perPage: 1,
            perMove: 1
          }
        }
      }).mount();
      // Custom Splide Buttons
      $('.next-splide.is--chevron').click(function() {
        $('.splide__arrow.splide__arrow--next').click();
      });

      $('.prev-splide.is--chevron.alt').click(function() {
        $('.splide__arrow.splide__arrow--prev').click();
      });
    }
  }
  dashboardMiniSlider();

  function dashboardMaxSlider() {
    let splides = $(".is--dashboard-max");
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
      new Splide(splides[i], {
        // Desktop on down
        perPage: 4,
        perMove: 1,
        focus: 0, // 0 = left and 'center' = center
        type: "slide", // 'loop' or 'slide'
        gap: "24px", // space between slides
        arrows: false, // 'slider' or false
        pagination: false, // 'slider' or false
        speed: 600, // transition speed in miliseconds
        dragAngleThreshold: 85, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        rewindSpeed: 800,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: true
      }).mount();
    }
  }
  dashboardMaxSlider();



// GSAP on PageLoad
function pageLoad() {
  let tl = gsap.timeline({ delay: 0.7 });
  tl.from(".review__element__absolute", {
    opacity: 0,
    y: "12px",
    stagger: { each: 0.4},
    ease: "power1.out",
    duration: 0.47
  });
}
pageLoad();
