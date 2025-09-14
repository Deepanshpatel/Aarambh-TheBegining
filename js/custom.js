
  (function ($) {
  
  "use strict";


    $('.navbar-collapse a').on('click', function () {
      $(".navbar-collapse").collapse('hide');
    });
    

    $('.smoothscroll').click(function () {
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


(function () {
  // --- IMPORTANT: Set your offer's expiration date here ---
  // The format is "Month Day, Year HH:MM:SS" e.g., "Jan 5, 2029 15:37:25"
  const countdownDate = new Date("Sep 20, 2025 14:00:00").getTime();

  const daysEl = document.getElementById("lto-days");
  const hoursEl = document.getElementById("lto-hours");
  const minutesEl = document.getElementById("lto-minutes");
  const secondsEl = document.getElementById("lto-seconds");
  const timerContainer = document.getElementById("lto-timer-container");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !timerContainer) {
    console.error("Countdown timer elements not found.");
    return;
  }

  const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      timerContainer.innerHTML = '<p id="lto-expired-message">This Offer Has Expired</p>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');

  }, 1000);
})();


