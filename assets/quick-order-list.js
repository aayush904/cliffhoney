function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
if (!customElements.get('quick-order-list')) {
  customElements.define('quick-order-list', /*#__PURE__*/function (_BulkAdd) {
    "use strict";

    function QuickOrderList() {
      var _this;
      _classCallCheck(this, QuickOrderList);
      _this = _callSuper(this, QuickOrderList);
      _defineProperty(_this, "cartUpdateUnsubscriber", undefined);
      _defineProperty(_this, "hasPendingQuantityUpdate", false);
      _this.isListInsideModal = _this.closest('bulk-modal');
      _this.stickyHeaderElement = document.querySelector('sticky-header');
      if (_this.stickyHeaderElement) {
        _this.stickyHeader = {
          height: _this.stickyHeaderElement.offsetHeight,
          type: "".concat(_this.stickyHeaderElement.getAttribute('data-sticky-type'))
        };
      }
      _this.totalBar = _this.getTotalBar();
      if (_this.totalBar) {
        _this.totalBarPosition = window.innerHeight - _this.totalBar.offsetHeight;
        _this.handleResize = _this.handleResize.bind(_this);
        window.addEventListener('resize', _this.handleResize);
      }
      _this.querySelector('form').addEventListener('submit', function (event) {
        return event.preventDefault();
      });
      return _this;
    }
    _inherits(QuickOrderList, _BulkAdd);
    return _createClass(QuickOrderList, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  if (!(event.source === _this2.id)) {
                    _context.n = 1;
                    break;
                  }
                  return _context.a(2);
                case 1:
                  _this2.toggleTableLoading(true);
                  _context.n = 2;
                  return _this2.refresh();
                case 2:
                  _this2.toggleTableLoading(false);
                case 3:
                  return _context.a(2);
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
        this.initEventListeners();
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this$cartUpdateUnsub;
        (_this$cartUpdateUnsub = this.cartUpdateUnsubscriber) === null || _this$cartUpdateUnsub === void 0 || _this$cartUpdateUnsub.call(this);
        window.removeEventListener('resize', this.handleResize);
      }
    }, {
      key: "handleResize",
      value: function handleResize() {
        this.totalBarPosition = window.innerHeight - this.totalBar.offsetHeight;
        this.stickyHeader.height = this.stickyHeaderElement ? this.stickyHeaderElement.offsetHeight : 0;
      }
    }, {
      key: "initEventListeners",
      value: function initEventListeners() {
        var _this3 = this;
        this.querySelectorAll('.pagination__item').forEach(function (link) {
          link.addEventListener('click', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(event) {
              var url;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    event.preventDefault();
                    event.stopPropagation();
                    url = new URL(event.currentTarget.href);
                    _this3.toggleTableLoading(true);
                    _context2.n = 1;
                    return _this3.refresh(url.searchParams.get('page') || '1');
                  case 1:
                    _this3.scrollTop();
                    _this3.toggleTableLoading(false);
                  case 2:
                    return _context2.a(2);
                }
              }, _callee2);
            }));
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        });
        this.querySelector('.quick-order-list__contents').addEventListener('keyup', this.handleScrollIntoView.bind(this));
        this.quickOrderListTable.addEventListener('keydown', this.handleSwitchVariantOnEnter.bind(this));
        this.initVariantEventListeners();
      }
    }, {
      key: "initVariantEventListeners",
      value: function initVariantEventListeners() {
        var _this4 = this;
        this.allInputsArray = Array.from(this.querySelectorAll('input[type="number"]'));
        this.querySelectorAll('quantity-input').forEach(function (qty) {
          var debouncedOnChange = debounce(_this4.onChange.bind(_this4), BulkAdd.ASYNC_REQUEST_DELAY, true);
          qty.addEventListener('change', function (event) {
            _this4.hasPendingQuantityUpdate = true;
            debouncedOnChange(event);
          });
        });
        this.querySelectorAll('.quick-order-list-remove-button').forEach(function (button) {
          button.addEventListener('click', function (event) {
            event.preventDefault();
            _this4.toggleLoading(true);
            _this4.startQueue(button.dataset.index, 0);
          });
        });
      }
    }, {
      key: "currentPage",
      get: function get() {
        var _this$querySelector$d, _this$querySelector;
        return (_this$querySelector$d = (_this$querySelector = this.querySelector('.pagination-wrapper')) === null || _this$querySelector === void 0 || (_this$querySelector = _this$querySelector.dataset) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.page) !== null && _this$querySelector$d !== void 0 ? _this$querySelector$d : '1';
      }
    }, {
      key: "cartVariantsForProduct",
      get: function get() {
        var _this$querySelector2;
        return JSON.parse(((_this$querySelector2 = this.querySelector('[data-cart-contents]')) === null || _this$querySelector2 === void 0 ? void 0 : _this$querySelector2.innerHTML) || '[]');
      }
    }, {
      key: "onChange",
      value: function onChange(event) {
        var inputValue = parseInt(event.target.value);
        this.cleanErrorMessageOnType(event);
        if (inputValue == 0) {
          event.target.setAttribute('value', inputValue);
          this.startQueue(event.target.dataset.index, inputValue);
        } else {
          this.validateQuantity(event);
        }
      }
    }, {
      key: "cleanErrorMessageOnType",
      value: function cleanErrorMessageOnType(event) {
        var _handleKeydown = function handleKeydown() {
          event.target.setCustomValidity(' ');
          event.target.reportValidity();
          event.target.removeEventListener('keydown', _handleKeydown);
        };
        event.target.addEventListener('keydown', _handleKeydown);
      }
    }, {
      key: "validateInput",
      value: function validateInput(target) {
        var targetValue = parseInt(target.value);
        var targetMin = parseInt(target.dataset.min);
        var targetStep = parseInt(target.step);
        if (target.max) {
          return targetValue == 0 || targetValue >= targetMin && targetValue <= parseInt(target.max) && targetValue % targetStep == 0;
        } else {
          return targetValue == 0 || targetValue >= targetMin && targetValue % targetStep == 0;
        }
      }
    }, {
      key: "quickOrderListTable",
      get: function get() {
        return this.querySelector('.quick-order-list__table');
      }
    }, {
      key: "getSectionsToRender",
      value: function getSectionsToRender() {
        return [{
          id: this.id,
          section: this.dataset.section,
          selector: "#".concat(this.id)
        }, {
          id: 'cart-icon-bubble',
          section: 'cart-icon-bubble',
          selector: '#shopify-section-cart-icon-bubble'
        }, {
          id: "quick-order-list-live-region-text-".concat(this.dataset.productId),
          section: 'cart-live-region-text',
          selector: '.shopify-section'
        }, {
          id: 'CartDrawer',
          selector: '.drawer__inner',
          section: 'cart-drawer'
        }];
      }
    }, {
      key: "toggleTableLoading",
      value: function toggleTableLoading(enable) {
        this.quickOrderListTable.classList.toggle('quick-order-list__container--disabled', enable);
        this.toggleLoading(enable);
      }
    }, {
      key: "refresh",
      value: function () {
        var _refresh = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
          var _this5 = this;
          var pageNumber,
            url,
            _args3 = arguments;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                pageNumber = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
                url = this.dataset.url || window.location.pathname;
                return _context3.a(2, fetch("".concat(url, "?section_id=").concat(this.dataset.section, "&page=").concat(pageNumber || this.currentPage)).then(function (response) {
                  return response.text();
                }).then(function (responseText) {
                  var html = new DOMParser().parseFromString(responseText, 'text/html');
                  var responseQuickOrderList = html.querySelector("#".concat(_this5.id));
                  if (!responseQuickOrderList) {
                    return;
                  }
                  _this5.innerHTML = responseQuickOrderList.innerHTML;
                  _this5.initEventListeners();
                }).catch(function (e) {
                  console.error(e);
                }));
            }
          }, _callee3, this);
        }));
        function refresh() {
          return _refresh.apply(this, arguments);
        }
        return refresh;
      }()
    }, {
      key: "renderSections",
      value: function renderSections(parsedState) {
        var _this6 = this;
        var items = parsedState.items,
          sections = parsedState.sections;
        this.getSectionsToRender().forEach(function (_ref3) {
          var id = _ref3.id,
            selector = _ref3.selector,
            section = _ref3.section;
          var sectionElement = document.getElementById(id);
          if (!sectionElement) return;
          var newSection = new DOMParser().parseFromString(sections[section], 'text/html').querySelector(selector);
          if (section === _this6.dataset.section) {
            var _focusedElement$datas, _focusTarget, _newSection$querySele, _newSection$querySele2;
            if (_this6.queue.length > 0 || _this6.hasPendingQuantityUpdate) return;
            var focusedElement = document.activeElement;
            var focusTarget = focusedElement === null || focusedElement === void 0 || (_focusedElement$datas = focusedElement.dataset) === null || _focusedElement$datas === void 0 ? void 0 : _focusedElement$datas.target;
            if ((_focusTarget = focusTarget) !== null && _focusTarget !== void 0 && _focusTarget.includes('remove')) {
              var _focusedElement$close;
              focusTarget = (_focusedElement$close = focusedElement.closest('quantity-popover')) === null || _focusedElement$close === void 0 || (_focusedElement$close = _focusedElement$close.querySelector('[data-target*="increment-"]')) === null || _focusedElement$close === void 0 ? void 0 : _focusedElement$close.dataset.target;
            }
            var total = _this6.getTotalBar();
            if (total) {
              total.innerHTML = newSection.querySelector('.quick-order-list__total').innerHTML;
            }
            var table = _this6.quickOrderListTable;
            var newTable = newSection.querySelector('.quick-order-list__table');

            // only update variants if they are from the active page
            var shouldUpdateVariants = _this6.currentPage === ((_newSection$querySele = (_newSection$querySele2 = newSection.querySelector('.pagination-wrapper')) === null || _newSection$querySele2 === void 0 ? void 0 : _newSection$querySele2.dataset.page) !== null && _newSection$querySele !== void 0 ? _newSection$querySele : '1');
            if (newTable && shouldUpdateVariants) {
              table.innerHTML = newTable.innerHTML;
              var newFocusTarget = _this6.querySelector("[data-target='".concat(focusTarget, "']"));
              if (newFocusTarget) {
                newFocusTarget === null || newFocusTarget === void 0 || newFocusTarget.focus({
                  preventScroll: true
                });
              }
              _this6.initVariantEventListeners();
            }
          } else if (section === 'cart-drawer') {
            var _sectionElement$close;
            (_sectionElement$close = sectionElement.closest('cart-drawer')) === null || _sectionElement$close === void 0 || _sectionElement$close.classList.toggle('is-empty', items.length === 0);
            sectionElement.querySelector(selector).innerHTML = newSection.innerHTML;
          } else {
            sectionElement.innerHTML = newSection.innerHTML;
          }
        });
      }
    }, {
      key: "getTotalBar",
      value: function getTotalBar() {
        return this.querySelector('.quick-order-list__total');
      }
    }, {
      key: "scrollTop",
      value: function scrollTop() {
        var _this$getBoundingClie = this.getBoundingClientRect(),
          top = _this$getBoundingClie.top;
        if (this.isListInsideModal) {
          this.scrollIntoView();
        } else {
          var _this$stickyHeader;
          window.scrollTo({
            top: top + window.scrollY - (((_this$stickyHeader = this.stickyHeader) === null || _this$stickyHeader === void 0 ? void 0 : _this$stickyHeader.height) || 0),
            behavior: 'instant'
          });
        }
      }
    }, {
      key: "scrollQuickOrderListTable",
      value: function scrollQuickOrderListTable(target) {
        var inputTopBorder = target.getBoundingClientRect().top;
        var inputBottomBorder = target.getBoundingClientRect().bottom;
        if (this.isListInsideModal) {
          var totalBarCrossesInput = inputBottomBorder > this.totalBar.getBoundingClientRect().top;
          var tableHeadCrossesInput = inputTopBorder < this.querySelector('.quick-order-list__table thead').getBoundingClientRect().bottom;
          if (totalBarCrossesInput || tableHeadCrossesInput) {
            this.scrollToCenter(target);
          }
        } else {
          var _this$stickyHeaderEle;
          var stickyHeaderBottomBorder = (_this$stickyHeaderEle = this.stickyHeaderElement) === null || _this$stickyHeaderEle === void 0 ? void 0 : _this$stickyHeaderEle.getBoundingClientRect().bottom;
          var _totalBarCrossesInput = inputBottomBorder > this.totalBarPosition;
          var inputOutsideOfViewPort = inputBottomBorder < this.querySelector('.variant-item__quantity-wrapper').offsetHeight;
          var stickyHeaderCrossesInput = this.stickyHeaderElement && this.stickyHeader.type !== 'on-scroll-up' && this.stickyHeader.height > inputTopBorder;
          var stickyHeaderScrollupCrossesInput = this.stickyHeaderElement && this.stickyHeader.type === 'on-scroll-up' && this.stickyHeader.height > inputTopBorder && stickyHeaderBottomBorder > 0;
          if (_totalBarCrossesInput || inputOutsideOfViewPort || stickyHeaderCrossesInput || stickyHeaderScrollupCrossesInput) {
            this.scrollToCenter(target);
          }
        }
      }
    }, {
      key: "scrollToCenter",
      value: function scrollToCenter(target) {
        target.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
      }
    }, {
      key: "handleScrollIntoView",
      value: function handleScrollIntoView(event) {
        if ((event.key === 'Tab' || event.key === 'Enter') && this.allInputsArray.length !== 1) {
          this.scrollQuickOrderListTable(event.target);
        }
      }
    }, {
      key: "handleSwitchVariantOnEnter",
      value: function handleSwitchVariantOnEnter(event) {
        var _this$allInputsArray$;
        if (event.key !== 'Enter' || event.target.tagName !== 'INPUT') return;
        event.preventDefault();
        event.target.blur();
        if (!this.validateInput(event.target) || this.allInputsArray.length <= 1) return;
        var currentIndex = this.allInputsArray.indexOf(event.target);
        var offset = event.shiftKey ? -1 : 1;
        var nextIndex = (currentIndex + offset + this.allInputsArray.length) % this.allInputsArray.length;
        (_this$allInputsArray$ = this.allInputsArray[nextIndex]) === null || _this$allInputsArray$ === void 0 || _this$allInputsArray$.select();
      }
    }, {
      key: "updateMultipleQty",
      value: function updateMultipleQty(items) {
        var _this7 = this;
        if (this.queue.length == 0) this.hasPendingQuantityUpdate = false;
        this.toggleLoading(true);
        var url = this.dataset.url || window.location.pathname;
        var body = JSON.stringify({
          updates: items,
          sections: this.getSectionsToRender().map(function (_ref4) {
            var section = _ref4.section;
            return section;
          }),
          sections_url: "".concat(url, "?page=").concat(this.currentPage)
        });
        this.updateMessage();
        this.setErrorMessage();
        fetch("".concat(routes.cart_update_url), _objectSpread(_objectSpread({}, fetchConfig()), {
          body: body
        })).then(function (response) {
          return response.text();
        }).then(/*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(state) {
            var parsedState;
            return _regenerator().w(function (_context4) {
              while (1) switch (_context4.n) {
                case 0:
                  parsedState = JSON.parse(state);
                  _this7.renderSections(parsedState);
                  publish(PUB_SUB_EVENTS.cartUpdate, {
                    source: _this7.id,
                    cartData: parsedState
                  });
                case 1:
                  return _context4.a(2);
              }
            }, _callee4);
          }));
          return function (_x3) {
            return _ref5.apply(this, arguments);
          };
        }()).catch(function (e) {
          console.error(e);
          _this7.setErrorMessage(window.cartStrings.error);
        }).finally(function () {
          _this7.queue.length === 0 && _this7.toggleLoading(false);
          _this7.setRequestStarted(false);
        });
      }
    }, {
      key: "setErrorMessage",
      value: function setErrorMessage() {
        var _this$errorMessageTem,
          _this8 = this;
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.errorMessageTemplate = (_this$errorMessageTem = this.errorMessageTemplate) !== null && _this$errorMessageTem !== void 0 ? _this$errorMessageTem : document.getElementById("QuickOrderListErrorTemplate-".concat(this.dataset.productId)).cloneNode(true);
        var errorElements = document.querySelectorAll('.quick-order-list-error');
        errorElements.forEach(function (errorElement) {
          errorElement.innerHTML = '';
          if (!message) return;
          var updatedMessageElement = _this8.errorMessageTemplate.cloneNode(true);
          updatedMessageElement.content.querySelector('.quick-order-list-error-message').innerText = message;
          errorElement.appendChild(updatedMessageElement.content);
        });
      }
    }, {
      key: "updateMessage",
      value: function updateMessage() {
        var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var messages = this.querySelectorAll('.quick-order-list__message-text');
        var icons = this.querySelectorAll('.quick-order-list__message-icon');
        if (quantity === null || isNaN(quantity)) {
          messages.forEach(function (message) {
            return message.innerHTML = '';
          });
          icons.forEach(function (icon) {
            return icon.classList.add('hidden');
          });
          return;
        }
        var isQuantityNegative = quantity < 0;
        var absQuantity = Math.abs(quantity);
        var textTemplate = isQuantityNegative ? absQuantity === 1 ? window.quickOrderListStrings.itemRemoved : window.quickOrderListStrings.itemsRemoved : quantity === 1 ? window.quickOrderListStrings.itemAdded : window.quickOrderListStrings.itemsAdded;
        messages.forEach(function (msg) {
          return msg.innerHTML = textTemplate.replace('[quantity]', absQuantity);
        });
        if (!isQuantityNegative) {
          icons.forEach(function (i) {
            return i.classList.remove('hidden');
          });
        }
      }
    }, {
      key: "updateError",
      value: function updateError(updatedValue, id) {
        var message = '';
        if (typeof updatedValue === 'undefined') {
          message = window.cartStrings.error;
        } else {
          message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
        }
        this.updateLiveRegions(id, message);
      }
    }, {
      key: "updateLiveRegions",
      value: function updateLiveRegions(id, message) {
        var variantItemErrorDesktop = document.getElementById("Quick-order-list-item-error-desktop-".concat(id));
        if (variantItemErrorDesktop) {
          variantItemErrorDesktop.querySelector('.variant-item__error-text').innerHTML = message;
          variantItemErrorDesktop.closest('tr').classList.remove('hidden');
        }
        if (variantItemErrorMobile) variantItemErrorMobile.querySelector('.variant-item__error-text').innerHTML = message;
        this.querySelector('#shopping-cart-variant-item-status').setAttribute('aria-hidden', true);
        var cartStatus = document.getElementById('quick-order-list-live-region-text');
        cartStatus.setAttribute('aria-hidden', false);
        setTimeout(function () {
          cartStatus.setAttribute('aria-hidden', true);
        }, 1000);
      }
    }, {
      key: "toggleLoading",
      value: function toggleLoading(loading) {
        var _target$querySelector;
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
        target.querySelector('#shopping-cart-variant-item-status').toggleAttribute('aria-hidden', !loading);
        (_target$querySelector = target.querySelectorAll('.variant-remove-total .loading__spinner')) === null || _target$querySelector === void 0 || _target$querySelector.forEach(function (spinner) {
          return spinner.classList.toggle('hidden', !loading);
        });
      }
    }]);
  }(BulkAdd));
}
if (!customElements.get('quick-order-list-remove-all-button')) {
  customElements.define('quick-order-list-remove-all-button', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function QuickOrderListRemoveAllButton() {
      var _this9;
      _classCallCheck(this, QuickOrderListRemoveAllButton);
      _this9 = _callSuper(this, QuickOrderListRemoveAllButton);
      _this9.quickOrderList = _this9.closest('quick-order-list');
      _this9.actions = {
        confirm: 'confirm',
        remove: 'remove',
        cancel: 'cancel'
      };
      _this9.addEventListener('click', function (event) {
        event.preventDefault();
        if (_this9.dataset.action === _this9.actions.confirm) {
          _this9.toggleConfirmation(false, true);
        } else if (_this9.dataset.action === _this9.actions.remove) {
          var items = _this9.quickOrderList.cartVariantsForProduct.reduce(function (acc, variantId) {
            return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, variantId, 0));
          }, {});
          _this9.quickOrderList.updateMultipleQty(items);
          _this9.toggleConfirmation(true, false);
        } else if (_this9.dataset.action === _this9.actions.cancel) {
          _this9.toggleConfirmation(true, false);
        }
      });
      return _this9;
    }
    _inherits(QuickOrderListRemoveAllButton, _HTMLElement);
    return _createClass(QuickOrderListRemoveAllButton, [{
      key: "toggleConfirmation",
      value: function toggleConfirmation(showConfirmation, showInfo) {
        this.quickOrderList.querySelector('.quick-order-list-total__confirmation').classList.toggle('hidden', showConfirmation);
        this.quickOrderList.querySelector('.quick-order-list-total__info').classList.toggle('hidden', showInfo);
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}