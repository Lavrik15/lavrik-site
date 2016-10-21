function clickLink(elem) {
  event.preventDefault();
  var href = '../pageload.json';

  console.log(href);
  console.log(typeof href);
  $.getJSON(href, 'limit=2', callBack);
  // $(".page").load(href + " #page-load", function(){
  //   console.log('курлык');
  // });
}
function callBack(data) {
  console.log(data)
  console.log('kjkm');
  // $('.page').html(dat);
}