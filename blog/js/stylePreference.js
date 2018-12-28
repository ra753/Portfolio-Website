function stylePreference(stylename) {
  localStorage.setItem('textMain', stylename);
  localStorage.setItem('textSide', stylename);
}

window.onload = function setPrefferedStyleSheet() {
   var styleSheet = localStorage.getItem('textSide');
       if(styleSheet=='css/styleDark.min.css' || styleSheet=='../css/styleDark.min.css') {
         document.getElementById('original').setAttribute('href', "css/styleDark.min.css");
       }
       else{
         document.getElementById('original').setAttribute('href', "css/style.min.css");
       }
   };
