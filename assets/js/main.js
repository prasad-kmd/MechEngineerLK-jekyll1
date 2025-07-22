$(document).ready(function() {
  // Dark mode toggle
  $('#dark-mode-toggle').on('click', function() {
    $('body').toggleClass('dark');
  });

  // Scroll progress
  $(window).on('scroll', function() {
    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height() - $(window).height();
    const scrollPercent = (scrollTop / docHeight) * 100;
    $('#scroll-progress .bar').css('width', scrollPercent + '%');

    if (scrollTop > 200) {
      $('#scroll-to-top').fadeIn();
    } else {
      $('#scroll-to-top').fadeOut();
    }
  });

  // Scroll to top
  $('#scroll-to-top').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // Sidebar
  $('.ui.sidebar').sidebar('attach events', '.toc.item');
});
