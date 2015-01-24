

function highlightOn() {
  $(this).addClass('highlight');
}

function highlightOff() {
  $(this).removeClass('highlight');
}

function openSubMenu() {
  $('.contact-list').css('visibility', 'visible');
}
    
function closeSubMenu() {
  $('.contact-list').css('visibility', 'hidden');
}

function personInfo() {
  console.log($(this));
  $(this).html('');

}

$(document).ready(function() {
  $('.nav a').hover(highlightOn, highlightOff);
  $('.index-main-find').hover(highlightOn, highlightOff);
  $('.contact').on('mouseover', openSubMenu);
  $('.contact-list').on('mouseout', closeSubMenu);
  $('.about-people').on('mouseover','img', personInfo);
});

