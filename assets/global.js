function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function getFocusableElements(container) {
  return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"));
}
var SectionId = /*#__PURE__*/function () {
  "use strict";

  function SectionId() {
    _classCallCheck(this, SectionId);
  }
  return _createClass(SectionId, null, [{
    key: "parseId",
    value:
    // for a qualified section id (e.g. 'template--22224696705326__main'), return just the section id (e.g. 'template--22224696705326')
    function parseId(qualifiedSectionId) {
      return qualifiedSectionId.split(_separator._)[0];
    }

    // for a qualified section id (e.g. 'template--22224696705326__main'), return just the section name (e.g. 'main')
  }, {
    key: "parseSectionName",
    value: function parseSectionName(qualifiedSectionId) {
      return qualifiedSectionId.split(_separator._)[1];
    }

    // for a section id (e.g. 'template--22224696705326') and a section name (e.g. 'recommended-products'), return a qualified section id (e.g. 'template--22224696705326__recommended-products')
  }, {
    key: "getIdForSection",
    value: function getIdForSection(sectionId, sectionName) {
      return "".concat(sectionId).concat(_separator._).concat(sectionName);
    }
  }]);
}();
var _separator = {
  _: "__"
};
var HTMLUpdateUtility = /*#__PURE__*/function () {
  "use strict";

  function HTMLUpdateUtility() {
    _classCallCheck(this, HTMLUpdateUtility);
  }
  return _createClass(HTMLUpdateUtility, null, [{
    key: "viewTransition",
    value:
    /**
     * Used to swap an HTML node with a new node.
     * The new node is inserted as a previous sibling to the old node, the old node is hidden, and then the old node is removed.
     *
     * The function currently uses a double buffer approach, but this should be replaced by a view transition once it is more widely supported https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
     */
    function viewTransition(oldNode, newContent) {
      var preProcessCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var postProcessCallbacks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      preProcessCallbacks === null || preProcessCallbacks === void 0 || preProcessCallbacks.forEach(function (callback) {
        return callback(newContent);
      });
      var newNodeWrapper = document.createElement("div");
      HTMLUpdateUtility.setInnerHTML(newNodeWrapper, newContent.outerHTML);
      var newNode = newNodeWrapper.firstChild;

      // dedupe IDs
      var uniqueKey = Date.now();
      oldNode.querySelectorAll("[id], [form]").forEach(function (element) {
        element.id && (element.id = "".concat(element.id, "-").concat(uniqueKey));
        element.form && element.setAttribute("form", "".concat(element.form.getAttribute("id"), "-").concat(uniqueKey));
      });
      oldNode.parentNode.insertBefore(newNode, oldNode);
      oldNode.style.display = "none";
      postProcessCallbacks === null || postProcessCallbacks === void 0 || postProcessCallbacks.forEach(function (callback) {
        return callback(newNode);
      });
      setTimeout(function () {
        return oldNode.remove();
      }, 500);
    }

    // Sets inner HTML and reinjects the script tags to allow execution. By default, scripts are disabled when using element.innerHTML.
  }, {
    key: "setInnerHTML",
    value: function setInnerHTML(element, html) {
      element.innerHTML = html;
      element.querySelectorAll("script").forEach(function (oldScriptTag) {
        var newScriptTag = document.createElement("script");
        Array.from(oldScriptTag.attributes).forEach(function (attribute) {
          newScriptTag.setAttribute(attribute.name, attribute.value);
        });
        newScriptTag.appendChild(document.createTextNode(oldScriptTag.innerHTML));
        oldScriptTag.parentNode.replaceChild(newScriptTag, oldScriptTag);
      });
    }
  }]);
}();
document.querySelectorAll('[id^="Details-"] summary').forEach(function (summary) {
  summary.setAttribute("role", "button");
  summary.setAttribute("aria-expanded", summary.parentNode.hasAttribute("open"));
  if (summary.nextElementSibling.getAttribute("id")) {
    summary.setAttribute("aria-controls", summary.nextElementSibling.id);
  }
  summary.addEventListener("click", function (event) {
    document.querySelectorAll('[id^="Details-"] summary').forEach(function (sum) {
      sum.setAttribute("aria-expanded", false);
    });
    // document.querySelectorAll('[id^="Details-"]').forEach((sum) => {
    //   sum.removeAttribute("open");
    // });
    event.currentTarget.setAttribute("aria-expanded", !event.currentTarget.closest("details").hasAttribute("open"));
  });
  if (summary.closest("header-drawer, menu-drawer")) return;
  summary.parentElement.addEventListener("keyup", onKeyUpEscape);
});
var trapFocusHandlers = {};
function trapFocus(container) {
  var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : container;
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];
  removeTrapFocus();
  trapFocusHandlers.focusin = function (event) {
    if (event.target !== container && event.target !== last && event.target !== first) return;
    document.addEventListener("keydown", trapFocusHandlers.keydown);
  };
  trapFocusHandlers.focusout = function () {
    document.removeEventListener("keydown", trapFocusHandlers.keydown);
  };
  trapFocusHandlers.keydown = function (event) {
    if (event.code.toUpperCase() !== "TAB") return; // If not TAB key
    // On the last focusable element and tab forward, focus the first element.
    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    }

    //  On the first focusable element and tab backward, focus the last element.
    if ((event.target === container || event.target === first) && event.shiftKey) {
      event.preventDefault();
      last.focus();
    }
  };
  document.addEventListener("focusout", trapFocusHandlers.focusout);
  document.addEventListener("focusin", trapFocusHandlers.focusin);
  elementToFocus.focus();
  if (elementToFocus.tagName === "INPUT" && ["search", "text", "email", "url"].includes(elementToFocus.type) && elementToFocus.value) {
    elementToFocus.setSelectionRange(0, elementToFocus.value.length);
  }
}

// Here run the querySelector to figure out if the browser supports :focus-visible or not and run code based on it.
try {
  document.querySelector(":focus-visible");
} catch (e) {
  focusVisiblePolyfill();
}
function focusVisiblePolyfill() {
  var navKeys = ["ARROWUP", "ARROWDOWN", "ARROWLEFT", "ARROWRIGHT", "TAB", "ENTER", "SPACE", "ESCAPE", "HOME", "END", "PAGEUP", "PAGEDOWN"];
  var currentFocusedElement = null;
  var mouseClick = null;
  window.addEventListener("keydown", function (event) {
    if (navKeys.includes(event.code.toUpperCase())) {
      mouseClick = false;
    }
  });
  window.addEventListener("mousedown", function (event) {
    mouseClick = true;
  });
  window.addEventListener("focus", function () {
    if (currentFocusedElement) currentFocusedElement.classList.remove("focused");
    if (mouseClick) return;
    currentFocusedElement = document.activeElement;
    currentFocusedElement.classList.add("focused");
  }, true);
}
function pauseAllMedia() {
  document.querySelectorAll(".js-youtube").forEach(function (video) {
    video.contentWindow.postMessage('{"event":"command","func":"' + "pauseVideo" + '","args":""}', "*");
  });
  document.querySelectorAll(".js-vimeo").forEach(function (video) {
    video.contentWindow.postMessage('{"method":"pause"}', "*");
  });
  document.querySelectorAll("video").forEach(function (video) {
    return video.pause();
  });
  document.querySelectorAll("product-model").forEach(function (model) {
    if (model.modelViewerUI) model.modelViewerUI.pause();
  });
}
function removeTrapFocus() {
  var elementToFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  document.removeEventListener("focusin", trapFocusHandlers.focusin);
  document.removeEventListener("focusout", trapFocusHandlers.focusout);
  document.removeEventListener("keydown", trapFocusHandlers.keydown);
  if (elementToFocus) elementToFocus.focus();
}
function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== "ESCAPE") return;
  var openDetailsElement = event.target.closest("details[open]");
  if (!openDetailsElement) return;
  var summaryElement = openDetailsElement.querySelector("summary");
  openDetailsElement.removeAttribute("open");
  summaryElement.setAttribute("aria-expanded", false);
  summaryElement.focus();
}
var QuantityInput = /*#__PURE__*/function (_HTMLElement) {
  "use strict";

  function QuantityInput() {
    var _this;
    _classCallCheck(this, QuantityInput);
    _this = _callSuper(this, QuantityInput);
    _defineProperty(_this, "quantityUpdateUnsubscriber", undefined);
    _this.input = _this.querySelector("input");
    _this.changeEvent = new Event("change", {
      bubbles: true
    });
    _this.input.addEventListener("change", _this.onInputChange.bind(_this));
    _this.querySelectorAll("button").forEach(function (button) {
      return button.addEventListener("click", _this.onButtonClick.bind(_this));
    });
    return _this;
  }
  _inherits(QuantityInput, _HTMLElement);
  return _createClass(QuantityInput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.validateQtyRules();
      this.quantityUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.quantityUpdate, this.validateQtyRules.bind(this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.quantityUpdateUnsubscriber) {
        this.quantityUpdateUnsubscriber();
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      this.validateQtyRules();
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(event) {
      event.preventDefault();
      var previousValue = this.input.value;
      if (event.target.name === "plus") {
        if (parseInt(this.input.dataset.min) > parseInt(this.input.step) && this.input.value == 0) {
          this.input.value = this.input.dataset.min;
        } else {
          this.input.stepUp();
        }
      } else {
        this.input.stepDown();
      }
      if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
      if (this.input.dataset.min === previousValue && event.target.name === "minus") {
        this.input.value = parseInt(this.input.min);
      }
    }
  }, {
    key: "validateQtyRules",
    value: function validateQtyRules() {
      var value = parseInt(this.input.value);
      if (this.input.min) {
        var buttonMinus = this.querySelector(".quantity__button[name='minus']");
        buttonMinus.classList.toggle("disabled", parseInt(value) <= parseInt(this.input.min));
      }
      if (this.input.max) {
        var max = parseInt(this.input.max);
        var buttonPlus = this.querySelector(".quantity__button[name='plus']");
        buttonPlus.classList.toggle("disabled", value >= max);
      }
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("quantity-input", QuantityInput);
function debounce(fn, wait) {
  var _this2 = this;
  var t;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this2, args);
    }, wait);
  };
}
function throttle(fn, delay) {
  var lastCall = 0;
  return function () {
    var now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn.apply(void 0, arguments);
  };
}
function fetchConfig() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "json";
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/".concat(type)
    }
  };
}

/*
 * Shopify Common JS
 *
 */
if (typeof window.Shopify == "undefined") {
  window.Shopify = {};
}
Shopify.bind = function (fn, scope) {
  return function () {
    return fn.apply(scope, arguments);
  };
};
Shopify.setSelectorByValue = function (selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];
    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};
Shopify.addListener = function (target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent("on" + eventName, callback);
};
Shopify.postLink = function (path, options) {
  options = options || {};
  var method = options["method"] || "post";
  var params = options["parameters"] || {};
  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);
  for (var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};
Shopify.CountryProvinceSelector = function (country_domid, province_domid, options) {
  this.countryEl = document.getElementById(country_domid);
  this.provinceEl = document.getElementById(province_domid);
  this.provinceContainer = document.getElementById(options["hideElement"] || province_domid);
  Shopify.addListener(this.countryEl, "change", Shopify.bind(this.countryHandler, this));
  this.initCountry();
  this.initProvince();
};
Shopify.CountryProvinceSelector.prototype = {
  initCountry: function initCountry() {
    var value = this.countryEl.getAttribute("data-default");
    Shopify.setSelectorByValue(this.countryEl, value);
    this.countryHandler();
  },
  initProvince: function initProvince() {
    var value = this.provinceEl.getAttribute("data-default");
    if (value && this.provinceEl.options.length > 0) {
      Shopify.setSelectorByValue(this.provinceEl, value);
    }
  },
  countryHandler: function countryHandler(e) {
    var opt = this.countryEl.options[this.countryEl.selectedIndex];
    var raw = opt.getAttribute("data-provinces");
    var provinces = JSON.parse(raw);
    this.clearOptions(this.provinceEl);
    if (provinces && provinces.length == 0) {
      this.provinceContainer.style.display = "none";
    } else {
      for (var i = 0; i < provinces.length; i++) {
        var opt = document.createElement("option");
        opt.value = provinces[i][0];
        opt.innerHTML = provinces[i][1];
        this.provinceEl.appendChild(opt);
      }
      this.provinceContainer.style.display = "";
    }
  },
  clearOptions: function clearOptions(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  },
  setOptions: function setOptions(selector, values) {
    for (var i = 0, count = values.length; i < values.length; i++) {
      var opt = document.createElement("option");
      opt.value = values[i];
      opt.innerHTML = values[i];
      selector.appendChild(opt);
    }
  }
};
var MenuDrawer = /*#__PURE__*/function (_HTMLElement2) {
  "use strict";

  function MenuDrawer() {
    var _this3;
    _classCallCheck(this, MenuDrawer);
    _this3 = _callSuper(this, MenuDrawer);
    _this3.mainDetailsToggle = _this3.querySelector("details");
    _this3.addEventListener("keyup", _this3.onKeyUp.bind(_this3));
    _this3.addEventListener("focusout", _this3.onFocusOut.bind(_this3));
    _this3.bindEvents();
    return _this3;
  }
  _inherits(MenuDrawer, _HTMLElement2);
  return _createClass(MenuDrawer, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this4 = this;
      this.querySelectorAll("summary").forEach(function (summary) {
        return summary.addEventListener("click", _this4.onSummaryClick.bind(_this4));
      });
      this.querySelectorAll("button:not(.localization-selector):not(.country-selector__close-button):not(.country-filter__reset-button)").forEach(function (button) {
        return button.addEventListener("click", _this4.onCloseButtonClick.bind(_this4));
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      if (event.code.toUpperCase() !== "ESCAPE") return;
      var openDetailsElement = event.target.closest("details[open]");
      if (!openDetailsElement) return;
      openDetailsElement === this.mainDetailsToggle ? this.closeMenuDrawer(event, this.mainDetailsToggle.querySelector("summary")) : this.closeSubmenu(openDetailsElement);
    }
  }, {
    key: "onSummaryClick",
    value: function onSummaryClick(event) {
      var summaryElement = event.currentTarget;
      var detailsElement = summaryElement.parentNode;
      var parentMenuElement = detailsElement.closest(".has-submenu");
      var isOpen = detailsElement.classList.contains("menu-opening");
      var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      function addTrapFocus() {
        trapFocus(summaryElement.nextElementSibling, detailsElement.querySelector("button"));
        summaryElement.nextElementSibling.removeEventListener("transitionend", addTrapFocus);
      }
      if (detailsElement === this.mainDetailsToggle) {
        if (isOpen) event.preventDefault();
        isOpen ? this.closeMenuDrawer(event, summaryElement) : this.openMenuDrawer(summaryElement);
        if (window.matchMedia("(max-width: 990px)")) {
          document.documentElement.style.setProperty("--viewport-height", "".concat(window.innerHeight, "px"));
        }
      } else {
        setTimeout(function () {
          detailsElement.classList.add("menu-opening");
          summaryElement.setAttribute("aria-expanded", true);
          parentMenuElement && parentMenuElement.classList.add("submenu-open");
          !reducedMotion || reducedMotion.matches ? addTrapFocus() : summaryElement.nextElementSibling.addEventListener("transitionend", addTrapFocus);
        }, 100);
      }
    }
  }, {
    key: "openMenuDrawer",
    value: function openMenuDrawer(summaryElement) {
      var _this5 = this;
      setTimeout(function () {
        _this5.mainDetailsToggle.classList.add("menu-opening");
      });
      summaryElement.setAttribute("aria-expanded", true);
      trapFocus(this.mainDetailsToggle, summaryElement);
      document.body.classList.add("overflow-hidden-".concat(this.dataset.breakpoint));
    }
  }, {
    key: "closeMenuDrawer",
    value: function closeMenuDrawer(event) {
      var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (event === undefined) return;
      this.mainDetailsToggle.classList.remove("menu-opening");
      this.mainDetailsToggle.querySelectorAll("details").forEach(function (details) {
        details.removeAttribute("open");
        details.classList.remove("menu-opening");
      });
      this.mainDetailsToggle.querySelectorAll(".submenu-open").forEach(function (submenu) {
        submenu.classList.remove("submenu-open");
      });
      document.body.classList.remove("overflow-hidden-".concat(this.dataset.breakpoint));
      removeTrapFocus(elementToFocus);
      this.closeAnimation(this.mainDetailsToggle);
      elementToFocus === null || elementToFocus === void 0 || elementToFocus.setAttribute("aria-expanded", false);
    }
  }, {
    key: "onFocusOut",
    value: function onFocusOut() {
      var _this6 = this;
      setTimeout(function () {
        if (_this6.mainDetailsToggle.hasAttribute("open") && !_this6.mainDetailsToggle.contains(document.activeElement)) _this6.closeMenuDrawer();
      });
    }
  }, {
    key: "onCloseButtonClick",
    value: function onCloseButtonClick(event) {
      var detailsElement = event.currentTarget.closest("details");
      this.closeSubmenu(detailsElement);
    }
  }, {
    key: "closeSubmenu",
    value: function closeSubmenu(detailsElement) {
      var parentMenuElement = detailsElement.closest(".submenu-open");
      parentMenuElement && parentMenuElement.classList.remove("submenu-open");
      detailsElement.classList.remove("menu-opening");
      detailsElement.querySelector("summary").setAttribute("aria-expanded", false);
      removeTrapFocus(detailsElement.querySelector("summary"));
      this.closeAnimation(detailsElement);
    }
  }, {
    key: "closeAnimation",
    value: function closeAnimation(detailsElement) {
      var animationStart;
      var _handleAnimation = function handleAnimation(time) {
        if (animationStart === undefined) {
          animationStart = time;
        }
        var elapsedTime = time - animationStart;
        if (elapsedTime < 400) {
          window.requestAnimationFrame(_handleAnimation);
        } else {
          detailsElement.removeAttribute("open");
          if (detailsElement.closest("details[open]")) {
            trapFocus(detailsElement.closest("details[open]"), detailsElement.querySelector("summary"));
          }
        }
      };
      window.requestAnimationFrame(_handleAnimation);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("menu-drawer", MenuDrawer);
var HeaderDrawer = /*#__PURE__*/function (_MenuDrawer) {
  "use strict";

  function HeaderDrawer() {
    var _this7;
    _classCallCheck(this, HeaderDrawer);
    _this7 = _callSuper(this, HeaderDrawer);
    _defineProperty(_this7, "onResize", function () {
      _this7.header && document.documentElement.style.setProperty("--header-bottom-position", "".concat(parseInt(_this7.header.getBoundingClientRect().bottom - _this7.borderOffset), "px"));
      document.documentElement.style.setProperty("--viewport-height", "".concat(window.innerHeight, "px"));
    });
    return _this7;
  }
  _inherits(HeaderDrawer, _MenuDrawer);
  return _createClass(HeaderDrawer, [{
    key: "openMenuDrawer",
    value: function openMenuDrawer(summaryElement) {
      var _this8 = this;
      this.header = this.header || document.querySelector(".section-header");
      this.borderOffset = this.borderOffset || this.closest(".header-wrapper").classList.contains("header-wrapper--border-bottom") ? 1 : 0;
      document.documentElement.style.setProperty("--header-bottom-position", "".concat(parseInt(this.header.getBoundingClientRect().bottom - this.borderOffset), "px"));
      this.header.classList.add("menu-open");
      setTimeout(function () {
        _this8.mainDetailsToggle.classList.add("menu-opening");
      });
      summaryElement.setAttribute("aria-expanded", true);
      window.addEventListener("resize", this.onResize);
      trapFocus(this.mainDetailsToggle, summaryElement);
      document.body.classList.add("overflow-hidden-".concat(this.dataset.breakpoint));
    }
  }, {
    key: "closeMenuDrawer",
    value: function closeMenuDrawer(event, elementToFocus) {
      if (!elementToFocus) return;
      _superPropGet(HeaderDrawer, "closeMenuDrawer", this, 3)([event, elementToFocus]);
      this.header.classList.remove("menu-open");
      window.removeEventListener("resize", this.onResize);
    }
  }]);
}(MenuDrawer);
customElements.define("header-drawer", HeaderDrawer);
var ModalDialog = /*#__PURE__*/function (_HTMLElement3) {
  "use strict";

  function ModalDialog() {
    var _this9;
    _classCallCheck(this, ModalDialog);
    _this9 = _callSuper(this, ModalDialog);
    _this9.querySelector('[id^="ModalClose-"]').addEventListener("click", _this9.hide.bind(_this9, false));
    _this9.addEventListener("keyup", function (event) {
      if (event.code.toUpperCase() === "ESCAPE") _this9.hide();
    });
    if (_this9.classList.contains("media-modal")) {
      _this9.addEventListener("pointerup", function (event) {
        if (event.pointerType === "mouse" && !event.target.closest("deferred-media, product-model")) _this9.hide();
      });
    } else {
      _this9.addEventListener("click", function (event) {
        if (event.target === _this9) _this9.hide();
      });
    }
    return _this9;
  }
  _inherits(ModalDialog, _HTMLElement3);
  return _createClass(ModalDialog, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.moved) return;
      this.moved = true;
      this.dataset.section = this.closest(".shopify-section").id.replace("shopify-section-", "");
      document.body.appendChild(this);
    }
  }, {
    key: "show",
    value: function show(opener) {
      this.openedBy = opener;
      var popup = this.querySelector(".template-popup");
      document.body.classList.add("overflow-hidden");
      this.setAttribute("open", "");
      if (popup) popup.loadContent();
      trapFocus(this, this.querySelector('[role="dialog"]'));
      window.pauseAllMedia();

      // Close any open menu drawer when modal opens
      var menuDrawer = document.querySelector("menu-drawer[open]");
      if (menuDrawer && menuDrawer.mainDetailsToggle) {
        menuDrawer.mainDetailsToggle.removeAttribute("open");
        menuDrawer.mainDetailsToggle.classList.remove("menu-opening");
        menuDrawer.mainDetailsToggle.querySelectorAll("details").forEach(function (details) {
          details.removeAttribute("open");
          details.classList.remove("menu-opening");
        });
        menuDrawer.mainDetailsToggle.querySelectorAll(".submenu-open").forEach(function (submenu) {
          submenu.classList.remove("submenu-open");
        });
        document.body.classList.remove("overflow-hidden-".concat(menuDrawer.dataset.breakpoint));
        removeTrapFocus();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      document.body.classList.remove("overflow-hidden");
      document.body.dispatchEvent(new CustomEvent("modalClosed"));
      this.removeAttribute("open");
      removeTrapFocus(this.openedBy);
      window.pauseAllMedia();

      // Clean up any remaining overflow-hidden classes from menu drawers
      var overflowClasses = Array.from(document.body.classList).filter(function (className) {
        return className.startsWith("overflow-hidden-");
      });
      overflowClasses.forEach(function (className) {
        document.body.classList.remove(className);
      });
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("modal-dialog", ModalDialog);
var BulkModal = /*#__PURE__*/function (_HTMLElement4) {
  "use strict";

  function BulkModal() {
    _classCallCheck(this, BulkModal);
    return _callSuper(this, BulkModal);
  }
  _inherits(BulkModal, _HTMLElement4);
  return _createClass(BulkModal, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this0 = this;
      var handleIntersection = function handleIntersection(entries, observer) {
        if (!entries[0].isIntersecting) return;
        observer.unobserve(_this0);
        if (_this0.innerHTML.trim() === "") {
          var productUrl = _this0.dataset.url.split("?")[0];
          fetch("".concat(productUrl, "?section_id=bulk-quick-order-list")).then(function (response) {
            return response.text();
          }).then(function (responseText) {
            var html = new DOMParser().parseFromString(responseText, "text/html");
            var sourceQty = html.querySelector(".quick-order-list-container").parentNode;
            _this0.innerHTML = sourceQty.innerHTML;
          }).catch(function (e) {
            console.error(e);
          });
        }
      };
      new IntersectionObserver(handleIntersection.bind(this)).observe(document.querySelector("#QuickBulk-".concat(this.dataset.productId, "-").concat(this.dataset.sectionId)));
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("bulk-modal", BulkModal);
var ModalOpener = /*#__PURE__*/function (_HTMLElement5) {
  "use strict";

  function ModalOpener() {
    var _this1;
    _classCallCheck(this, ModalOpener);
    _this1 = _callSuper(this, ModalOpener);
    var button = _this1.querySelector("button");
    if (!button) return _possibleConstructorReturn(_this1);
    button.addEventListener("click", function () {
      var modal = document.querySelector(_this1.getAttribute("data-modal"));
      if (modal) modal.show(button);
    });
    return _this1;
  }
  _inherits(ModalOpener, _HTMLElement5);
  return _createClass(ModalOpener);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("modal-opener", ModalOpener);
var DeferredMedia = /*#__PURE__*/function (_HTMLElement6) {
  "use strict";

  function DeferredMedia() {
    var _this10;
    _classCallCheck(this, DeferredMedia);
    _this10 = _callSuper(this, DeferredMedia);
    var poster = _this10.querySelector('[id^="Deferred-Poster-"]');
    if (!poster) return _possibleConstructorReturn(_this10);
    poster.addEventListener("click", _this10.loadContent.bind(_this10));
    return _this10;
  }
  _inherits(DeferredMedia, _HTMLElement6);
  return _createClass(DeferredMedia, [{
    key: "loadContent",
    value: function loadContent() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      window.pauseAllMedia();
      if (!this.getAttribute("loaded")) {
        var content = document.createElement("div");
        content.appendChild(this.querySelector("template").content.firstElementChild.cloneNode(true));
        this.setAttribute("loaded", true);
        var deferredElement = this.appendChild(content.querySelector("video, model-viewer, iframe"));
        if (focus) deferredElement.focus();
        if (deferredElement.nodeName == "VIDEO" && deferredElement.getAttribute("autoplay")) {
          // force autoplay for safari
          deferredElement.play();
        }

        // Workaround for safari iframe bug
        var formerStyle = deferredElement.getAttribute("style");
        deferredElement.setAttribute("style", "display: block;");
        window.setTimeout(function () {
          deferredElement.setAttribute("style", formerStyle);
        }, 0);
      }
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("deferred-media", DeferredMedia);
var SliderComponent = /*#__PURE__*/function (_HTMLElement7) {
  "use strict";

  function SliderComponent() {
    var _this11;
    _classCallCheck(this, SliderComponent);
    _this11 = _callSuper(this, SliderComponent);
    _this11.slider = _this11.querySelector('[id^="Slider-"]');
    _this11.sliderItems = _this11.querySelectorAll('[id^="Slide-"]');
    _this11.dotsContainer = _this11.querySelector(".slider-dots");
    _this11.enableSliderLooping = false;
    _this11.currentPageElement = _this11.querySelector(".slider-counter--current");
    _this11.pageTotalElement = _this11.querySelector(".slider-counter--total");
    _this11.prevButton = _this11.querySelector('button[name="previous"]');
    _this11.nextButton = _this11.querySelector('button[name="next"]');
    if (!_this11.slider || !_this11.nextButton) return _possibleConstructorReturn(_this11);
    _this11.initPages();
    var resizeObserver = new ResizeObserver(function (entries) {
      return _this11.initPages();
    });
    resizeObserver.observe(_this11.slider);
    _this11.sliderItems.forEach(function (slide, index) {
      slide.addEventListener("click", function (e) {
        if (e.target.tagName === "A" || e.target.tagName === "BUTTON") return;
        _this11.slideTo(index);
      });
      slide.style.cursor = "pointer";
    });
    _this11.slider.addEventListener("scroll", _this11.update.bind(_this11));
    _this11.prevButton.addEventListener("click", _this11.onButtonClick.bind(_this11));
    _this11.nextButton.addEventListener("click", _this11.onButtonClick.bind(_this11));
    return _this11;
  }
  _inherits(SliderComponent, _HTMLElement7);
  return _createClass(SliderComponent, [{
    key: "slideTo",
    value: function slideTo(index) {
      var slideScrollPosition = index * this.sliderItemOffset;
      this.setSlidePosition(slideScrollPosition);
    }
  }, {
    key: "initPages",
    value: function initPages() {
      this.sliderItemsToShow = Array.from(this.sliderItems).filter(function (element) {
        return element.clientWidth > 0;
      });
      if (this.sliderItemsToShow.length < 2) return;
      this.sliderItemOffset = this.sliderItemsToShow[1].offsetLeft - this.sliderItemsToShow[0].offsetLeft;
      this.slidesPerPage = Math.floor((this.slider.clientWidth - this.sliderItemsToShow[0].offsetLeft) / this.sliderItemOffset);
      this.totalPages = this.sliderItemsToShow.length - this.slidesPerPage;
      this.renderDots();
      this.update();
    }
  }, {
    key: "resetPages",
    value: function resetPages() {
      this.sliderItems = this.querySelectorAll('[id^="Slide-"]');
      this.initPages();
    }
  }, {
    key: "renderDots",
    value: function renderDots() {
      var _this12 = this;
      if (!this.dotsContainer) return;
      this.dotsContainer.innerHTML = "";
      var _loop = function _loop(i) {
        var dot = document.createElement("button");
        dot.classList.add("slider-dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", function () {
          return _this12.slideTo(i);
        });
        _this12.dotsContainer.appendChild(dot);
      };
      for (var i = 0; i < this.totalPages; i++) {
        _loop(i);
      }
      this.dots = this.dotsContainer.querySelectorAll(".slider-dot");
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.slider || !this.nextButton) return;
      var previousPage = this.currentPage;
      this.currentPage = Math.round(this.slider.scrollLeft / this.sliderItemOffset) + 1;
      if (this.dots) {
        this.dots.forEach(function (dot) {
          return dot.classList.remove("active");
        });
        if (this.dots[this.currentPage - 1]) {
          this.dots[this.currentPage - 1].classList.add("active");
        }
      }
      if (this.currentPageElement && this.pageTotalElement) {
        this.currentPageElement.textContent = this.currentPage;
        this.pageTotalElement.textContent = this.totalPages;
      }
      this.sliderItemsToShow.forEach(function (item) {
        item.classList.remove("active");
      });
      if (this.sliderItemsToShow[this.currentPage - 1]) {
        this.sliderItemsToShow[this.currentPage - 1].classList.add("active");
      }
      if (this.currentPage != previousPage) {
        this.dispatchEvent(new CustomEvent("slideChanged", {
          detail: {
            currentPage: this.currentPage,
            currentElement: this.sliderItemsToShow[this.currentPage - 1]
          }
        }));
      }
      if (this.enableSliderLooping) return;
      if (this.isSlideVisible(this.sliderItemsToShow[0]) && this.slider.scrollLeft === 0) {
        this.prevButton.setAttribute("disabled", "disabled");
      } else {
        this.prevButton.removeAttribute("disabled");
      }
      if (this.isSlideVisible(this.sliderItemsToShow[this.sliderItemsToShow.length - 1])) {
        this.nextButton.setAttribute("disabled", "disabled");
      } else {
        this.nextButton.removeAttribute("disabled");
      }
    }
  }, {
    key: "isSlideVisible",
    value: function isSlideVisible(element) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var lastVisibleSlide = this.slider.clientWidth + this.slider.scrollLeft - offset;
      return element.offsetLeft + element.clientWidth <= lastVisibleSlide && element.offsetLeft >= this.slider.scrollLeft;
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(event) {
      event.preventDefault();
      var step = event.currentTarget.dataset.step || 1;
      this.slideScrollPosition = event.currentTarget.name === "next" ? this.slider.scrollLeft + step * this.sliderItemOffset : this.slider.scrollLeft - step * this.sliderItemOffset;
      this.setSlidePosition(this.slideScrollPosition);
    }
  }, {
    key: "setSlidePosition",
    value: function setSlidePosition(position) {
      this.slider.scrollTo({
        left: position
      });
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("slider-component", SliderComponent);
var SlideshowComponent = /*#__PURE__*/function (_SliderComponent) {
  "use strict";

  function SlideshowComponent() {
    var _this13;
    _classCallCheck(this, SlideshowComponent);
    _this13 = _callSuper(this, SlideshowComponent);
    _this13.sliderControlWrapper = _this13.querySelector(".slider-buttons");
    _this13.enableSliderLooping = true;
    if (!_this13.sliderControlWrapper) return _possibleConstructorReturn(_this13);
    _this13.sliderFirstItemNode = _this13.slider.querySelector(".slideshow__slide");
    if (_this13.sliderItemsToShow.length > 0) _this13.currentPage = 1;
    _this13.announcementBarSlider = _this13.querySelector(".announcement-bar-slider");
    // Value below should match --duration-announcement-bar CSS value
    _this13.announcerBarAnimationDelay = _this13.announcementBarSlider ? 250 : 0;
    _this13.sliderControlLinksArray = Array.from(_this13.sliderControlWrapper.querySelectorAll(".slider-counter__link"));
    _this13.sliderControlLinksArray.forEach(function (link) {
      return link.addEventListener("click", _this13.linkToSlide.bind(_this13));
    });
    _this13.slider.addEventListener("scroll", _this13.setSlideVisibility.bind(_this13));
    _this13.setSlideVisibility();
    if (_this13.announcementBarSlider) {
      _this13.announcementBarArrowButtonWasClicked = false;
      _this13.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      _this13.reducedMotion.addEventListener("change", function () {
        if (_this13.slider.getAttribute("data-autoplay") === "true") _this13.setAutoPlay();
      });
      [_this13.prevButton, _this13.nextButton].forEach(function (button) {
        button.addEventListener("click", function () {
          _this13.announcementBarArrowButtonWasClicked = true;
        }, {
          once: true
        });
      });
    }
    if (_this13.slider.getAttribute("data-autoplay") === "true") _this13.setAutoPlay();
    return _this13;
  }
  _inherits(SlideshowComponent, _SliderComponent);
  return _createClass(SlideshowComponent, [{
    key: "setAutoPlay",
    value: function setAutoPlay() {
      this.autoplaySpeed = this.slider.dataset.speed * 1000;
      this.addEventListener("mouseover", this.focusInHandling.bind(this));
      this.addEventListener("mouseleave", this.focusOutHandling.bind(this));
      this.addEventListener("focusin", this.focusInHandling.bind(this));
      this.addEventListener("focusout", this.focusOutHandling.bind(this));
      if (this.querySelector(".slideshow__autoplay")) {
        this.sliderAutoplayButton = this.querySelector(".slideshow__autoplay");
        this.sliderAutoplayButton.addEventListener("click", this.autoPlayToggle.bind(this));
        this.autoplayButtonIsSetToPlay = true;
        this.play();
      } else {
        this.reducedMotion.matches || this.announcementBarArrowButtonWasClicked ? this.pause() : this.play();
      }
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(event) {
      _superPropGet(SlideshowComponent, "onButtonClick", this, 3)([event]);
      this.wasClicked = true;
      var isFirstSlide = this.currentPage === 1;
      var isLastSlide = this.currentPage === this.sliderItemsToShow.length;
      if (!isFirstSlide && !isLastSlide) {
        this.applyAnimationToAnnouncementBar(event.currentTarget.name);
        return;
      }
      if (isFirstSlide && event.currentTarget.name === "previous") {
        this.slideScrollPosition = this.slider.scrollLeft + this.sliderFirstItemNode.clientWidth * this.sliderItemsToShow.length;
      } else if (isLastSlide && event.currentTarget.name === "next") {
        this.slideScrollPosition = 0;
      }
      this.setSlidePosition(this.slideScrollPosition);
      this.applyAnimationToAnnouncementBar(event.currentTarget.name);
    }
  }, {
    key: "setSlidePosition",
    value: function setSlidePosition(position) {
      var _this14 = this;
      if (this.setPositionTimeout) clearTimeout(this.setPositionTimeout);
      this.setPositionTimeout = setTimeout(function () {
        _this14.slider.scrollTo({
          left: position
        });
      }, this.announcerBarAnimationDelay);
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(SlideshowComponent, "update", this, 3)([]);
      this.sliderControlButtons = this.querySelectorAll(".slider-counter__link");
      this.prevButton.removeAttribute("disabled");
      if (!this.sliderControlButtons.length) return;
      this.sliderControlButtons.forEach(function (link) {
        link.classList.remove("slider-counter__link--active");
        link.removeAttribute("aria-current");
      });
      this.sliderControlButtons[this.currentPage - 1].classList.add("slider-counter__link--active");
      this.sliderControlButtons[this.currentPage - 1].setAttribute("aria-current", true);
    }
  }, {
    key: "autoPlayToggle",
    value: function autoPlayToggle() {
      this.togglePlayButtonState(this.autoplayButtonIsSetToPlay);
      this.autoplayButtonIsSetToPlay ? this.pause() : this.play();
      this.autoplayButtonIsSetToPlay = !this.autoplayButtonIsSetToPlay;
    }
  }, {
    key: "focusOutHandling",
    value: function focusOutHandling(event) {
      if (this.sliderAutoplayButton) {
        var focusedOnAutoplayButton = event.target === this.sliderAutoplayButton || this.sliderAutoplayButton.contains(event.target);
        if (!this.autoplayButtonIsSetToPlay || focusedOnAutoplayButton) return;
        this.play();
      } else if (!this.reducedMotion.matches && !this.announcementBarArrowButtonWasClicked) {
        this.play();
      }
    }
  }, {
    key: "focusInHandling",
    value: function focusInHandling(event) {
      if (this.sliderAutoplayButton) {
        var focusedOnAutoplayButton = event.target === this.sliderAutoplayButton || this.sliderAutoplayButton.contains(event.target);
        if (focusedOnAutoplayButton && this.autoplayButtonIsSetToPlay) {
          this.play();
        } else if (this.autoplayButtonIsSetToPlay) {
          this.pause();
        }
      } else if (this.announcementBarSlider.contains(event.target)) {
        this.pause();
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.slider.setAttribute("aria-live", "off");
      clearInterval(this.autoplay);
      this.autoplay = setInterval(this.autoRotateSlides.bind(this), this.autoplaySpeed);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.slider.setAttribute("aria-live", "polite");
      clearInterval(this.autoplay);
    }
  }, {
    key: "togglePlayButtonState",
    value: function togglePlayButtonState(pauseAutoplay) {
      if (pauseAutoplay) {
        this.sliderAutoplayButton.classList.add("slideshow__autoplay--paused");
        this.sliderAutoplayButton.setAttribute("aria-label", window.accessibilityStrings.playSlideshow);
      } else {
        this.sliderAutoplayButton.classList.remove("slideshow__autoplay--paused");
        this.sliderAutoplayButton.setAttribute("aria-label", window.accessibilityStrings.pauseSlideshow);
      }
    }
  }, {
    key: "autoRotateSlides",
    value: function autoRotateSlides() {
      var slideScrollPosition = this.currentPage === this.sliderItems.length ? 0 : this.slider.scrollLeft + this.sliderItemOffset;
      this.setSlidePosition(slideScrollPosition);
      this.applyAnimationToAnnouncementBar();
    }
  }, {
    key: "setSlideVisibility",
    value: function setSlideVisibility(event) {
      var _this15 = this;
      this.sliderItemsToShow.forEach(function (item, index) {
        var linkElements = item.querySelectorAll("a");
        if (index === _this15.currentPage - 1) {
          if (linkElements.length) linkElements.forEach(function (button) {
            button.removeAttribute("tabindex");
          });
          item.setAttribute("aria-hidden", "false");
          item.removeAttribute("tabindex");
        } else {
          if (linkElements.length) linkElements.forEach(function (button) {
            button.setAttribute("tabindex", "-1");
          });
          item.setAttribute("aria-hidden", "true");
          item.setAttribute("tabindex", "-1");
        }
      });
      this.wasClicked = false;
    }
  }, {
    key: "applyAnimationToAnnouncementBar",
    value: function applyAnimationToAnnouncementBar() {
      var button = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "next";
      if (!this.announcementBarSlider) return;
      var itemsCount = this.sliderItems.length;
      var increment = button === "next" ? 1 : -1;
      var currentIndex = this.currentPage - 1;
      var nextIndex = (currentIndex + increment) % itemsCount;
      nextIndex = nextIndex === -1 ? itemsCount - 1 : nextIndex;
      var nextSlide = this.sliderItems[nextIndex];
      var currentSlide = this.sliderItems[currentIndex];
      var animationClassIn = "announcement-bar-slider--fade-in";
      var animationClassOut = "announcement-bar-slider--fade-out";
      var isFirstSlide = currentIndex === 0;
      var isLastSlide = currentIndex === itemsCount - 1;
      var shouldMoveNext = button === "next" && !isLastSlide || button === "previous" && isFirstSlide;
      var direction = shouldMoveNext ? "next" : "previous";
      currentSlide.classList.add("".concat(animationClassOut, "-").concat(direction));
      nextSlide.classList.add("".concat(animationClassIn, "-").concat(direction));
      setTimeout(function () {
        currentSlide.classList.remove("".concat(animationClassOut, "-").concat(direction));
        nextSlide.classList.remove("".concat(animationClassIn, "-").concat(direction));
      }, this.announcerBarAnimationDelay * 2);
    }
  }, {
    key: "linkToSlide",
    value: function linkToSlide(event) {
      event.preventDefault();
      var slideScrollPosition = this.slider.scrollLeft + this.sliderFirstItemNode.clientWidth * (this.sliderControlLinksArray.indexOf(event.currentTarget) + 1 - this.currentPage);
      this.slider.scrollTo({
        left: slideScrollPosition
      });
    }
  }]);
}(SliderComponent);
customElements.define("slideshow-component", SlideshowComponent);
var VariantSelects = /*#__PURE__*/function (_HTMLElement8) {
  "use strict";

  function VariantSelects() {
    _classCallCheck(this, VariantSelects);
    return _callSuper(this, VariantSelects);
  }
  _inherits(VariantSelects, _HTMLElement8);
  return _createClass(VariantSelects, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this16 = this;
      this.addEventListener("change", function (event) {
        var target = _this16.getInputForEventTarget(event.target);
        _this16.updateSelectionMetadata(event);
        publish(PUB_SUB_EVENTS.optionValueSelectionChange, {
          data: {
            event: event,
            target: target,
            selectedOptionValues: _this16.selectedOptionValues
          }
        });
      });
    }
  }, {
    key: "updateSelectionMetadata",
    value: function updateSelectionMetadata(_ref) {
      var target = _ref.target;
      var value = target.value,
        tagName = target.tagName;
      if (tagName === "SELECT" && target.selectedOptions.length) {
        Array.from(target.options).find(function (option) {
          return option.getAttribute("selected");
        }).removeAttribute("selected");
        target.selectedOptions[0].setAttribute("selected", "selected");
        var swatchValue = target.selectedOptions[0].dataset.optionSwatchValue;
        var selectedDropdownSwatchValue = target.closest(".product-form__input").querySelector("[data-selected-value] > .swatch");
        if (!selectedDropdownSwatchValue) return;
        if (swatchValue) {
          selectedDropdownSwatchValue.style.setProperty("--swatch--background", swatchValue);
          selectedDropdownSwatchValue.classList.remove("swatch--unavailable");
        } else {
          selectedDropdownSwatchValue.style.setProperty("--swatch--background", "unset");
          selectedDropdownSwatchValue.classList.add("swatch--unavailable");
        }
        selectedDropdownSwatchValue.style.setProperty("--swatch-focal-point", target.selectedOptions[0].dataset.optionSwatchFocalPoint || "unset");
      } else if (tagName === "INPUT" && target.type === "radio") {
        var selectedSwatchValue = target.closest(".product-form__input").querySelector("[data-selected-value]");
        if (selectedSwatchValue) selectedSwatchValue.innerHTML = value;
      }
    }
  }, {
    key: "getInputForEventTarget",
    value: function getInputForEventTarget(target) {
      return target.tagName === "SELECT" ? target.selectedOptions[0] : target;
    }
  }, {
    key: "selectedOptionValues",
    get: function get() {
      return Array.from(this.querySelectorAll("select option[selected], fieldset input:checked")).map(function (_ref2) {
        var dataset = _ref2.dataset;
        return dataset.optionValueId;
      });
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("variant-selects", VariantSelects);
var ProductRecommendations = /*#__PURE__*/function (_HTMLElement9) {
  "use strict";

  function ProductRecommendations() {
    var _this17;
    _classCallCheck(this, ProductRecommendations);
    _this17 = _callSuper(this, ProductRecommendations);
    _defineProperty(_this17, "observer", undefined);
    return _this17;
  }
  _inherits(ProductRecommendations, _HTMLElement9);
  return _createClass(ProductRecommendations, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.initializeRecommendations(this.dataset.productId);
    }
  }, {
    key: "initializeRecommendations",
    value: function initializeRecommendations(productId) {
      var _this$observer,
        _this18 = this;
      (_this$observer = this.observer) === null || _this$observer === void 0 || _this$observer.unobserve(this);
      this.observer = new IntersectionObserver(function (entries, observer) {
        if (!entries[0].isIntersecting) return;
        observer.unobserve(_this18);
        _this18.loadRecommendations(productId);
      }, {
        rootMargin: "0px 0px 400px 0px"
      });
      this.observer.observe(this);
    }
  }, {
    key: "loadRecommendations",
    value: function loadRecommendations(productId) {
      var _this19 = this;
      fetch("".concat(this.dataset.url, "&product_id=").concat(productId, "&section_id=").concat(this.dataset.sectionId)).then(function (response) {
        return response.text();
      }).then(function (text) {
        var html = document.createElement("div");
        html.innerHTML = text;
        var recommendations = html.querySelector("product-recommendations");
        if (recommendations !== null && recommendations !== void 0 && recommendations.innerHTML.trim().length) {
          _this19.innerHTML = recommendations.innerHTML;
        }
        if (!_this19.querySelector("slideshow-component") && _this19.classList.contains("complementary-products")) {
          _this19.remove();
        }
        if (html.querySelector(".grid__item")) {
          _this19.classList.add("product-recommendations--loaded");
        }
      }).catch(function (e) {
        console.error(e);
      });
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("product-recommendations", ProductRecommendations);
var AccountIcon = /*#__PURE__*/function (_HTMLElement0) {
  "use strict";

  function AccountIcon() {
    var _this20;
    _classCallCheck(this, AccountIcon);
    _this20 = _callSuper(this, AccountIcon);
    _this20.icon = _this20.querySelector(".icon");
    return _this20;
  }
  _inherits(AccountIcon, _HTMLElement0);
  return _createClass(AccountIcon, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      document.addEventListener("storefront:signincompleted", this.handleStorefrontSignInCompleted.bind(this));
    }
  }, {
    key: "handleStorefrontSignInCompleted",
    value: function handleStorefrontSignInCompleted(event) {
      var _event$detail;
      if (event !== null && event !== void 0 && (_event$detail = event.detail) !== null && _event$detail !== void 0 && _event$detail.avatar) {
        var _this$icon;
        (_this$icon = this.icon) === null || _this$icon === void 0 || _this$icon.replaceWith(event.detail.avatar.cloneNode());
      }
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("account-icon", AccountIcon);
var BulkAdd = /*#__PURE__*/function (_HTMLElement1) {
  "use strict";

  function BulkAdd() {
    var _this21;
    _classCallCheck(this, BulkAdd);
    _this21 = _callSuper(this, BulkAdd);
    _this21.queue = [];
    _this21.setRequestStarted(false);
    _this21.ids = [];
    return _this21;
  }
  _inherits(BulkAdd, _HTMLElement1);
  return _createClass(BulkAdd, [{
    key: "startQueue",
    value: function startQueue(id, quantity) {
      var _this22 = this;
      this.queue.push({
        id: id,
        quantity: quantity
      });
      var interval = setInterval(function () {
        if (_this22.queue.length > 0) {
          if (!_this22.requestStarted) {
            _this22.sendRequest(_this22.queue);
          }
        } else {
          clearInterval(interval);
        }
      }, BulkAdd.ASYNC_REQUEST_DELAY);
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(queue) {
      this.setRequestStarted(true);
      var items = {};
      queue.forEach(function (queueItem) {
        items[parseInt(queueItem.id)] = queueItem.quantity;
      });
      this.queue = this.queue.filter(function (queueElement) {
        return !queue.includes(queueElement);
      });
      this.updateMultipleQty(items);
    }
  }, {
    key: "setRequestStarted",
    value: function setRequestStarted(requestStarted) {
      this._requestStarted = requestStarted;
    }
  }, {
    key: "requestStarted",
    get: function get() {
      return this._requestStarted;
    }
  }, {
    key: "resetQuantityInput",
    value: function resetQuantityInput(id) {
      var input = this.querySelector("#Quantity-".concat(id));
      input.value = input.getAttribute("value");
      this.isEnterPressed = false;
    }
  }, {
    key: "setValidity",
    value: function setValidity(event, index, message) {
      event.target.setCustomValidity(message);
      event.target.reportValidity();
      this.resetQuantityInput(index);
      event.target.select();
    }
  }, {
    key: "validateQuantity",
    value: function validateQuantity(event) {
      var inputValue = parseInt(event.target.value);
      var index = event.target.dataset.index;
      if (inputValue < event.target.dataset.min) {
        this.setValidity(event, index, window.quickOrderListStrings.min_error.replace("[min]", event.target.dataset.min));
      } else if (inputValue > parseInt(event.target.max)) {
        this.setValidity(event, index, window.quickOrderListStrings.max_error.replace("[max]", event.target.max));
      } else if (inputValue % parseInt(event.target.step) != 0) {
        this.setValidity(event, index, window.quickOrderListStrings.step_error.replace("[step]", event.target.step));
      } else {
        event.target.setCustomValidity("");
        event.target.reportValidity();
        event.target.setAttribute("value", inputValue);
        this.startQueue(index, inputValue);
      }
    }
  }, {
    key: "getSectionInnerHTML",
    value: function getSectionInnerHTML(html, selector) {
      return new DOMParser().parseFromString(html, "text/html").querySelector(selector).innerHTML;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
_defineProperty(BulkAdd, "ASYNC_REQUEST_DELAY", 250);
if (!customElements.get("bulk-add")) {
  customElements.define("bulk-add", BulkAdd);
}
var CartPerformance = /*#__PURE__*/function () {
  "use strict";

  function CartPerformance() {
    _classCallCheck(this, CartPerformance);
  }
  return _createClass(CartPerformance, null, [{
    key: "createStartingMarker",
    value: function createStartingMarker(benchmarkName) {
      var metricName = "".concat(_metric_prefix._, ":").concat(benchmarkName);
      return performance.mark("".concat(metricName, ":start"));
    }
  }, {
    key: "measureFromEvent",
    value: function measureFromEvent(benchmarkName, event) {
      var metricName = "".concat(_metric_prefix._, ":").concat(benchmarkName);
      var startMarker = performance.mark("".concat(metricName, ":start"), {
        startTime: event.timeStamp
      });
      var endMarker = performance.mark("".concat(metricName, ":end"));
      performance.measure(benchmarkName, "".concat(metricName, ":start"), "".concat(metricName, ":end"));
    }
  }, {
    key: "measureFromMarker",
    value: function measureFromMarker(benchmarkName, startMarker) {
      var metricName = "".concat(_metric_prefix._, ":").concat(benchmarkName);
      var endMarker = performance.mark("".concat(metricName, ":end"));
      performance.measure(benchmarkName, startMarker.name, "".concat(metricName, ":end"));
    }
  }, {
    key: "measure",
    value: function measure(benchmarkName, callback) {
      var metricName = "".concat(_metric_prefix._, ":").concat(benchmarkName);
      var startMarker = performance.mark("".concat(metricName, ":start"));
      callback();
      var endMarker = performance.mark("".concat(metricName, ":end"));
      performance.measure(benchmarkName, "".concat(metricName, ":start"), "".concat(metricName, ":end"));
    }
  }]);
}();
var _metric_prefix = {
  _: "cart-performance"
};