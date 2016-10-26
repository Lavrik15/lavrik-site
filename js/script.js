$(document).ready(function(){
  $('.navbar__list-link').bind('click', clickLink);
});
function clickLink() {
  console.log($(this));
  $('.navbar__list-link').removeClass('active');
  $(this).addClass('active');
  if ($(this).hasClass('contacts-link')) {
    $('.about').slideUp(1000);
    $('.contacts-page').slideDown(1000);
  }
  if ($(this).hasClass('about-link')) {
    $('.contacts-page').slideUp(2000);
    $('.about').slideDown(2000);
  }
}
