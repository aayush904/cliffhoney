function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
if (!customElements.get('product-info')) {
  customElements.define('product-info', /*#__PURE__*/function (_HTMLElement) {
    "use strict";

    function ProductInfo() {
      var _this;
      _classCallCheck(this, ProductInfo);
      _this = _callSuper(this, ProductInfo);
      _defineProperty(_this, "quantityInput", undefined);
      _defineProperty(_this, "quantityForm", undefined);
      _defineProperty(_this, "onVariantChangeUnsubscriber", undefined);
      _defineProperty(_this, "cartUpdateUnsubscriber", undefined);
      _defineProperty(_this, "abortController", undefined);
      _defineProperty(_this, "pendingRequestUrl", null);
      _defineProperty(_this, "preProcessHtmlCallbacks", []);
      _defineProperty(_this, "postProcessHtmlCallbacks", []);
      _this.quantityInput = _this.querySelector('.quantity__input');
      return _this;
    }
    _inherits(ProductInfo, _HTMLElement);
    return _createClass(ProductInfo, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.initializeProductSwapUtility();
        this.onVariantChangeUnsubscriber = subscribe(PUB_SUB_EVENTS.optionValueSelectionChange, this.handleOptionValueChange.bind(this));
        this.initQuantityHandlers();
        this.dispatchEvent(new CustomEvent('product-info:loaded', {
          bubbles: true
        }));
      }
    }, {
      key: "addPreProcessCallback",
      value: function addPreProcessCallback(callback) {
        this.preProcessHtmlCallbacks.push(callback);
      }
    }, {
      key: "initQuantityHandlers",
      value: function initQuantityHandlers() {
        if (!this.quantityInput) return;
        this.quantityForm = this.querySelector('.product-form__quantity');
        if (!this.quantityForm) return;
        this.setQuantityBoundries();
        if (!this.dataset.originalSection) {
          this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, this.fetchQuantityRules.bind(this));
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var _this$cartUpdateUnsub;
        this.onVariantChangeUnsubscriber();
        (_this$cartUpdateUnsub = this.cartUpdateUnsubscriber) === null || _this$cartUpdateUnsub === void 0 || _this$cartUpdateUnsub.call(this);
      }
    }, {
      key: "initializeProductSwapUtility",
      value: function initializeProductSwapUtility() {
        this.preProcessHtmlCallbacks.push(function (html) {
          return html.querySelectorAll('.scroll-trigger').forEach(function (element) {
            return element.classList.add('scroll-trigger--cancel');
          });
        });
        this.postProcessHtmlCallbacks.push(function (newNode) {
          var _window, _window2;
          (_window = window) === null || _window === void 0 || (_window = _window.Shopify) === null || _window === void 0 || (_window = _window.PaymentButton) === null || _window === void 0 || _window.init();
          (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.ProductModel) === null || _window2 === void 0 || _window2.loadShopifyXR();
        });
      }
    }, {
      key: "handleOptionValueChange",
      value: function handleOptionValueChange(_ref) {
        var _ref$data = _ref.data,
          event = _ref$data.event,
          target = _ref$data.target,
          selectedOptionValues = _ref$data.selectedOptionValues;
        if (!this.contains(event.target)) return;
        this.resetProductFormState();
        var productUrl = target.dataset.productUrl || this.pendingRequestUrl || this.dataset.url;
        this.pendingRequestUrl = productUrl;
        var shouldSwapProduct = this.dataset.url !== productUrl;
        var shouldFetchFullPage = this.dataset.updateUrl === 'true' && shouldSwapProduct;
        this.renderProductInfo({
          requestUrl: this.buildRequestUrlWithParams(productUrl, selectedOptionValues, shouldFetchFullPage),
          targetId: target.id,
          callback: shouldSwapProduct ? this.handleSwapProduct(productUrl, shouldFetchFullPage) : this.handleUpdateProductInfo(productUrl)
        });
      }
    }, {
      key: "resetProductFormState",
      value: function resetProductFormState() {
        var productForm = this.productForm;
        productForm === null || productForm === void 0 || productForm.toggleSubmitButton(true);
        productForm === null || productForm === void 0 || productForm.handleErrorMessage();
      }
    }, {
      key: "handleSwapProduct",
      value: function handleSwapProduct(productUrl, updateFullPage) {
        var _this2 = this;
        return function (html) {
          var _this2$productModal;
          (_this2$productModal = _this2.productModal) === null || _this2$productModal === void 0 || _this2$productModal.remove();
          var selector = updateFullPage ? "product-info[id^='MainProduct']" : 'product-info';
          var variant = _this2.getSelectedVariant(html.querySelector(selector));
          _this2.updateURL(productUrl, variant === null || variant === void 0 ? void 0 : variant.id);
          if (updateFullPage) {
            document.querySelector('head title').innerHTML = html.querySelector('head title').innerHTML;
            HTMLUpdateUtility.viewTransition(document.querySelector('main'), html.querySelector('main'), _this2.preProcessHtmlCallbacks, _this2.postProcessHtmlCallbacks);
          } else {
            HTMLUpdateUtility.viewTransition(_this2, html.querySelector('product-info'), _this2.preProcessHtmlCallbacks, _this2.postProcessHtmlCallbacks);
          }
        };
      }
    }, {
      key: "renderProductInfo",
      value: function renderProductInfo(_ref2) {
        var _this$abortController,
          _this3 = this;
        var requestUrl = _ref2.requestUrl,
          targetId = _ref2.targetId,
          callback = _ref2.callback;
        (_this$abortController = this.abortController) === null || _this$abortController === void 0 || _this$abortController.abort();
        this.abortController = new AbortController();
        fetch(requestUrl, {
          signal: this.abortController.signal
        }).then(function (response) {
          return response.text();
        }).then(function (responseText) {
          _this3.pendingRequestUrl = null;
          var html = new DOMParser().parseFromString(responseText, 'text/html');
          callback(html);
        }).then(function () {
          var _document$querySelect;
          // set focus to last clicked option value
          (_document$querySelect = document.querySelector("#".concat(targetId))) === null || _document$querySelect === void 0 || _document$querySelect.focus();
        }).catch(function (error) {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted by user');
          } else {
            console.error(error);
          }
        });
      }
    }, {
      key: "getSelectedVariant",
      value: function getSelectedVariant(productInfoNode) {
        var _productInfoNode$quer;
        var selectedVariant = (_productInfoNode$quer = productInfoNode.querySelector('variant-selects [data-selected-variant]')) === null || _productInfoNode$quer === void 0 ? void 0 : _productInfoNode$quer.innerHTML;
        return !!selectedVariant ? JSON.parse(selectedVariant) : null;
      }
    }, {
      key: "buildRequestUrlWithParams",
      value: function buildRequestUrlWithParams(url, optionValues) {
        var shouldFetchFullPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var params = [];
        !shouldFetchFullPage && params.push("section_id=".concat(this.sectionId));
        if (optionValues.length) {
          params.push("option_values=".concat(optionValues.join(',')));
        }
        return "".concat(url, "?").concat(params.join('&'));
      }
    }, {
      key: "updateOptionValues",
      value: function updateOptionValues(html) {
        var variantSelects = html.querySelector('variant-selects');
        if (variantSelects) {
          HTMLUpdateUtility.viewTransition(this.variantSelectors, variantSelects, this.preProcessHtmlCallbacks);
        }
      }
    }, {
      key: "handleUpdateProductInfo",
      value: function handleUpdateProductInfo(productUrl) {
        var _this4 = this;
        return function (html) {
          var _this4$pickupAvailabi, _variant$featured_med, _this4$querySelector, _this4$querySelector2, _this4$productForm, _html$getElementById$, _html$getElementById;
          var variant = _this4.getSelectedVariant(html);
          (_this4$pickupAvailabi = _this4.pickupAvailability) === null || _this4$pickupAvailabi === void 0 || _this4$pickupAvailabi.update(variant);
          _this4.updateOptionValues(html);
          _this4.updateURL(productUrl, variant === null || variant === void 0 ? void 0 : variant.id);
          _this4.updateVariantInputs(variant === null || variant === void 0 ? void 0 : variant.id);
          if (!variant) {
            _this4.setUnavailable();
            return;
          }
          _this4.updateMedia(html, variant === null || variant === void 0 || (_variant$featured_med = variant.featured_media) === null || _variant$featured_med === void 0 ? void 0 : _variant$featured_med.id);
          var updateSourceFromDestination = function updateSourceFromDestination(id) {
            var shouldHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (source) {
              return false;
            };
            var source = html.getElementById("".concat(id, "-").concat(_this4.sectionId));
            var destination = _this4.querySelector("#".concat(id, "-").concat(_this4.dataset.section));
            if (source && destination) {
              destination.innerHTML = source.innerHTML;
              destination.classList.toggle('hidden', shouldHide(source));
            }
          };
          updateSourceFromDestination('price');
          updateSourceFromDestination('Sku', function (_ref3) {
            var classList = _ref3.classList;
            return classList.contains('hidden');
          });
          updateSourceFromDestination('Inventory', function (_ref4) {
            var innerText = _ref4.innerText;
            return innerText === '';
          });
          updateSourceFromDestination('Volume');
          updateSourceFromDestination('Price-Per-Item', function (_ref5) {
            var classList = _ref5.classList;
            return classList.contains('hidden');
          });
          _this4.updateQuantityRules(_this4.sectionId, html);
          (_this4$querySelector = _this4.querySelector("#Quantity-Rules-".concat(_this4.dataset.section))) === null || _this4$querySelector === void 0 || _this4$querySelector.classList.remove('hidden');
          (_this4$querySelector2 = _this4.querySelector("#Volume-Note-".concat(_this4.dataset.section))) === null || _this4$querySelector2 === void 0 || _this4$querySelector2.classList.remove('hidden');
          (_this4$productForm = _this4.productForm) === null || _this4$productForm === void 0 || _this4$productForm.toggleSubmitButton((_html$getElementById$ = (_html$getElementById = html.getElementById("ProductSubmitButton-".concat(_this4.sectionId))) === null || _html$getElementById === void 0 ? void 0 : _html$getElementById.hasAttribute('disabled')) !== null && _html$getElementById$ !== void 0 ? _html$getElementById$ : true, window.variantStrings.soldOut);
          publish(PUB_SUB_EVENTS.variantChange, {
            data: {
              sectionId: _this4.sectionId,
              html: html,
              variant: variant
            }
          });
        };
      }
    }, {
      key: "updateVariantInputs",
      value: function updateVariantInputs(variantId) {
        this.querySelectorAll("#product-form-".concat(this.dataset.section, ", #product-form-installment-").concat(this.dataset.section)).forEach(function (productForm) {
          var input = productForm.querySelector('input[name="id"]');
          input.value = variantId !== null && variantId !== void 0 ? variantId : '';
          input.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        });
      }
    }, {
      key: "updateURL",
      value: function updateURL(url, variantId) {
        var _this$querySelector;
        (_this$querySelector = this.querySelector('share-button')) === null || _this$querySelector === void 0 || _this$querySelector.updateUrl("".concat(window.shopUrl).concat(url).concat(variantId ? "?variant=".concat(variantId) : ''));
        if (this.dataset.updateUrl === 'false') return;
        window.history.replaceState({}, '', "".concat(url).concat(variantId ? "?variant=".concat(variantId) : ''));
      }
    }, {
      key: "setUnavailable",
      value: function setUnavailable() {
        var _this$productForm,
          _this5 = this;
        (_this$productForm = this.productForm) === null || _this$productForm === void 0 || _this$productForm.toggleSubmitButton(true, window.variantStrings.unavailable);
        var selectors = ['price', 'Inventory', 'Sku', 'Price-Per-Item', 'Volume-Note', 'Volume', 'Quantity-Rules'].map(function (id) {
          return "#".concat(id, "-").concat(_this5.dataset.section);
        }).join(', ');
        document.querySelectorAll(selectors).forEach(function (_ref6) {
          var classList = _ref6.classList;
          return classList.add('hidden');
        });
      }
    }, {
      key: "updateMedia",
      value: function updateMedia(html, variantFeaturedMediaId) {
        var _this6 = this,
          _this$querySelector2,
          _this$querySelector2$,
          _this$productModal;
        if (!variantFeaturedMediaId) return;
        var mediaGallerySource = this.querySelector('media-gallery ul');
        var mediaGalleryDestination = html.querySelector("media-gallery ul");
        var refreshSourceData = function refreshSourceData() {
          if (_this6.hasAttribute('data-zoom-on-hover')) enableZoomOnHover(2);
          var mediaGallerySourceItems = Array.from(mediaGallerySource.querySelectorAll('li[data-media-id]'));
          var sourceSet = new Set(mediaGallerySourceItems.map(function (item) {
            return item.dataset.mediaId;
          }));
          var sourceMap = new Map(mediaGallerySourceItems.map(function (item, index) {
            return [item.dataset.mediaId, {
              item: item,
              index: index
            }];
          }));
          return [mediaGallerySourceItems, sourceSet, sourceMap];
        };
        if (mediaGallerySource && mediaGalleryDestination) {
          var _refreshSourceData = refreshSourceData(),
            _refreshSourceData2 = _slicedToArray(_refreshSourceData, 3),
            mediaGallerySourceItems = _refreshSourceData2[0],
            sourceSet = _refreshSourceData2[1],
            sourceMap = _refreshSourceData2[2];
          var mediaGalleryDestinationItems = Array.from(mediaGalleryDestination.querySelectorAll('li[data-media-id]'));
          var destinationSet = new Set(mediaGalleryDestinationItems.map(function (_ref7) {
            var dataset = _ref7.dataset;
            return dataset.mediaId;
          }));
          var shouldRefresh = false;

          // add items from new data not present in DOM
          for (var i = mediaGalleryDestinationItems.length - 1; i >= 0; i--) {
            if (!sourceSet.has(mediaGalleryDestinationItems[i].dataset.mediaId)) {
              mediaGallerySource.prepend(mediaGalleryDestinationItems[i]);
              shouldRefresh = true;
            }
          }

          // remove items from DOM not present in new data
          for (var _i = 0; _i < mediaGallerySourceItems.length; _i++) {
            if (!destinationSet.has(mediaGallerySourceItems[_i].dataset.mediaId)) {
              mediaGallerySourceItems[_i].remove();
              shouldRefresh = true;
            }
          }

          // refresh
          if (shouldRefresh) {
            var _refreshSourceData3 = refreshSourceData();
            var _refreshSourceData4 = _slicedToArray(_refreshSourceData3, 3);
            mediaGallerySourceItems = _refreshSourceData4[0];
            sourceSet = _refreshSourceData4[1];
            sourceMap = _refreshSourceData4[2];
          }

          // if media galleries don't match, sort to match new data order
          mediaGalleryDestinationItems.forEach(function (destinationItem, destinationIndex) {
            var sourceData = sourceMap.get(destinationItem.dataset.mediaId);
            if (sourceData && sourceData.index !== destinationIndex) {
              mediaGallerySource.insertBefore(sourceData.item, mediaGallerySource.querySelector("li:nth-of-type(".concat(destinationIndex + 1, ")")));

              // refresh source now that it has been modified
              var _refreshSourceData5 = refreshSourceData();
              var _refreshSourceData6 = _slicedToArray(_refreshSourceData5, 3);
              mediaGallerySourceItems = _refreshSourceData6[0];
              sourceSet = _refreshSourceData6[1];
              sourceMap = _refreshSourceData6[2];
            }
          });
        }

        // set featured media as active in the media gallery
        (_this$querySelector2 = this.querySelector("media-gallery")) === null || _this$querySelector2 === void 0 || (_this$querySelector2$ = _this$querySelector2.setActiveMedia) === null || _this$querySelector2$ === void 0 || _this$querySelector2$.call(_this$querySelector2, "".concat(this.dataset.section, "-").concat(variantFeaturedMediaId), true);

        // update media modal
        var modalContent = (_this$productModal = this.productModal) === null || _this$productModal === void 0 ? void 0 : _this$productModal.querySelector(".product-media-modal__content");
        var newModalContent = html.querySelector("product-modal .product-media-modal__content");
        if (modalContent && newModalContent) modalContent.innerHTML = newModalContent.innerHTML;
      }
    }, {
      key: "setQuantityBoundries",
      value: function setQuantityBoundries() {
        var data = {
          cartQuantity: this.quantityInput.dataset.cartQuantity ? parseInt(this.quantityInput.dataset.cartQuantity) : 0,
          min: this.quantityInput.dataset.min ? parseInt(this.quantityInput.dataset.min) : 1,
          max: this.quantityInput.dataset.max ? parseInt(this.quantityInput.dataset.max) : null,
          step: this.quantityInput.step ? parseInt(this.quantityInput.step) : 1
        };
        var min = data.min;
        var max = data.max === null ? data.max : data.max - data.cartQuantity;
        if (max !== null) min = Math.min(min, max);
        if (data.cartQuantity >= data.min) min = Math.min(min, data.step);
        this.quantityInput.min = min;
        if (max) {
          this.quantityInput.max = max;
        } else {
          this.quantityInput.removeAttribute('max');
        }
        this.quantityInput.value = min;
        publish(PUB_SUB_EVENTS.quantityUpdate, undefined);
      }
    }, {
      key: "fetchQuantityRules",
      value: function fetchQuantityRules() {
        var _this$productForm2,
          _this7 = this;
        var currentVariantId = (_this$productForm2 = this.productForm) === null || _this$productForm2 === void 0 || (_this$productForm2 = _this$productForm2.variantIdInput) === null || _this$productForm2 === void 0 ? void 0 : _this$productForm2.value;
        if (!currentVariantId) return;
        this.querySelector('.quantity__rules-cart .loading__spinner').classList.remove('hidden');
        return fetch("".concat(this.dataset.url, "?variant=").concat(currentVariantId, "&section_id=").concat(this.dataset.section)).then(function (response) {
          return response.text();
        }).then(function (responseText) {
          var html = new DOMParser().parseFromString(responseText, 'text/html');
          _this7.updateQuantityRules(_this7.dataset.section, html);
        }).catch(function (e) {
          return console.error(e);
        }).finally(function () {
          return _this7.querySelector('.quantity__rules-cart .loading__spinner').classList.add('hidden');
        });
      }
    }, {
      key: "updateQuantityRules",
      value: function updateQuantityRules(sectionId, html) {
        if (!this.quantityInput) return;
        this.setQuantityBoundries();
        var quantityFormUpdated = html.getElementById("Quantity-Form-".concat(sectionId));
        var selectors = ['.quantity__input', '.quantity__rules', '.quantity__label'];
        for (var _i2 = 0, _selectors = selectors; _i2 < _selectors.length; _i2++) {
          var selector = _selectors[_i2];
          var current = this.quantityForm.querySelector(selector);
          var updated = quantityFormUpdated.querySelector(selector);
          if (!current || !updated) continue;
          if (selector === '.quantity__input') {
            var attributes = ['data-cart-quantity', 'data-min', 'data-max', 'step'];
            for (var _i3 = 0, _attributes = attributes; _i3 < _attributes.length; _i3++) {
              var attribute = _attributes[_i3];
              var valueUpdated = updated.getAttribute(attribute);
              if (valueUpdated !== null) {
                current.setAttribute(attribute, valueUpdated);
              } else {
                current.removeAttribute(attribute);
              }
            }
          } else {
            current.innerHTML = updated.innerHTML;
          }
        }
      }
    }, {
      key: "productForm",
      get: function get() {
        return this.querySelector("product-form");
      }
    }, {
      key: "productModal",
      get: function get() {
        return document.querySelector("#ProductModal-".concat(this.dataset.section));
      }
    }, {
      key: "pickupAvailability",
      get: function get() {
        return this.querySelector("pickup-availability");
      }
    }, {
      key: "variantSelectors",
      get: function get() {
        return this.querySelector('variant-selects');
      }
    }, {
      key: "relatedProducts",
      get: function get() {
        var relatedProductsSectionId = SectionId.getIdForSection(SectionId.parseId(this.sectionId), 'related-products');
        return document.querySelector("product-recommendations[data-section-id^=\"".concat(relatedProductsSectionId, "\"]"));
      }
    }, {
      key: "quickOrderList",
      get: function get() {
        var quickOrderListSectionId = SectionId.getIdForSection(SectionId.parseId(this.sectionId), 'quick_order_list');
        return document.querySelector("quick-order-list[data-id^=\"".concat(quickOrderListSectionId, "\"]"));
      }
    }, {
      key: "sectionId",
      get: function get() {
        return this.dataset.originalSection || this.dataset.section;
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
}