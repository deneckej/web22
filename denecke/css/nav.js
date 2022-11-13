var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainHeader").style.top = "0";
  } else {
    document.getElementById("mainHeader").style.top = "-59px";
  }
  prevScrollpos = currentScrollPos;
}