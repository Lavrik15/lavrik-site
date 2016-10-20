$(document).ready(function(){
  $('a').on('click', clickLinklistener);
});
window.addEventListener("popstate", function(e) {
  getContent(location.pathname, false);
  console.log("1231231231231231231232132131212312312");
});
function getContent(url, addEntry) {
  console.log(url);
  $(".page").load(url + " #page-load", function(){
    console.log('курлык');
    if(addEntry == true) {
       history.pushState(null, null, url); 
    }
  });
}
// html5 api history
function clickLinklistener() {
  console.log("клик");
  var href = $(this).attr("href");
  getContent(href, true);
  console.log(href);
  return false;
}