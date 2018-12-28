window.onload = function setstore() {
    stylePreference("css/styleDark.min.css");
};

function changecss() {
  var attriname = document.getElementById("original").getAttribute("href");
  if(attriname == "css/styleDark.min.css")
  {
    document.getElementById('original').setAttribute('href', "css/style.min.css");
    stylePreference("css/style.min.css");
  }
  else {
    document.getElementById('original').setAttribute('href', "css/styleDark.min.css");
    stylePreference("css/styleDark.min.css");
  }
}
