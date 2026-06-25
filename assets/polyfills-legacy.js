(function () {
  var ua = navigator.userAgent || "";
  var isIE = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

  var needs =
    typeof Promise === "undefined" ||
    typeof Symbol === "undefined" ||
    typeof Array.prototype.includes === "undefined" ||
    typeof Object.assign === "undefined" ||
    typeof window.fetch === "undefined";

  function add(src) {
    var s = document.createElement("script");
    s.src = src;
    s.defer = true;
    document.head.appendChild(s);
  }

  if (isIE) document.documentElement.className += " ie";

  if (needs) {
    add("https://cdnjs.cloudflare.com/ajax/libs/core-js-bundle/3.45.1/minified.js");
    add("https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.20/fetch.min.js");
  }
})();