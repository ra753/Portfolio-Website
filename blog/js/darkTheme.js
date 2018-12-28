window.onload = function setstore() {
    stylePreference("blog/css/styleDark.min.css");
};

function changecss() {
  var attriname = document.getElementById("original").getAttribute("href");
  if(attriname == "blog/css/styleDark.min.css")
  {
    document.getElementById('original').setAttribute('href', "blog/css/style.min.css");
    stylePreference("blog/css/style.min.css");
  }
  else {
    document.getElementById('original').setAttribute('href', "blog/css/styleDark.min.css");
    stylePreference("blog/css/styleDark.min.css");
  }
}
