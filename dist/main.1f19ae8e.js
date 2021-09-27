// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Design.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Design = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Design =
/*#__PURE__*/
function () {
  function Design() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$position = _ref.position,
        position = _ref$position === void 0 ? 'bottom-right' : _ref$position;

    _classCallCheck(this, Design);

    this.position = this.getPosition(position);
    this.open = false;
    this.initalise();
    this.createStyles();
    this.activeLi();
  }

  _createClass(Design, [{
    key: "getPosition",
    value: function getPosition(position) {
      var _ref2;

      var _position$split = position.split('-'),
          _position$split2 = _slicedToArray(_position$split, 2),
          vertical = _position$split2[0],
          horizontal = _position$split2[1];

      return _ref2 = {}, _defineProperty(_ref2, vertical, '30px'), _defineProperty(_ref2, horizontal, '30px'), _ref2;
    }
  }, {
    key: "initalise",
    value: function initalise() {
      var _this = this;

      var container = document.createElement('div');
      container.style.position = "fixed";
      Object.keys(this.position).forEach(function (key) {
        return container.style[key] = _this.position[key];
      });
      document.body.appendChild(container);
      var buttonContainer = document.createElement('div');
      buttonContainer.classList.add('wrapper');
      container.appendChild(buttonContainer);
      var chatIcon = document.createElement('div');
      chatIcon.classList.add('widget-menu');
      this.chatIcon = chatIcon; // const closeIcon = document.createElement('img');
      // closeIcon.src = '';
      // closeIcon.classList.add('icon','hidden');
      // this.closeIcon = closeIcon;

      var widgetUL = document.createElement('ul');
      widgetUL.classList.add('Widget-menu-ul'); // Monday

      var MonLI = document.createElement('li');
      MonLI.classList.add('Widget-menu-li');
      var MonA = document.createElement('a');
      MonA.classList.add('Widget-menu-a'); // var  LI = widgetUL.appendChild(widgetLI);

      MonA.href = '#Mon';
      MonA.innerText = "Mon";
      var LiInA = MonLI.appendChild(MonA); // Tuesday

      var TueLI = document.createElement('li');
      TueLI.classList.add('Widget-menu-li');
      var TueA = document.createElement('a');
      TueA.classList.add('Widget-menu-a'); // var  LI = widgetUL.appendChild(widgetLI);

      TueA.href = '#Tue';
      TueA.innerText = "Tue";
      var TueLiInA = TueLI.appendChild(TueA); // wednesday

      var WedLI = document.createElement('li');
      WedLI.classList.add('Widget-menu-li');
      var WedA = document.createElement('a');
      WedA.classList.add('Widget-menu-a'); // var  LI = widgetUL.appendChild(widgetLI);

      WedA.href = '#Wed';
      WedA.innerText = "Wed";
      var WedLiInA = WedLI.appendChild(WedA); // Thursday

      var ThuLI = document.createElement('li');
      ThuLI.classList.add('Widget-menu-li');
      var ThuA = document.createElement('a');
      ThuA.classList.add('Widget-menu-a'); // var  LI = widgetUL.appendChild(widgetLI);

      ThuA.href = '#Thu';
      ThuA.innerText = "Thu";
      var ThuLiInA = ThuLI.appendChild(ThuA); // Friday

      var FriLI = document.createElement('li');
      FriLI.classList.add('Widget-menu-li');
      var FriA = document.createElement('a');
      FriA.classList.add('Widget-menu-a'); // var  LI = widgetUL.appendChild(widgetLI);

      FriA.href = '#Fri';
      FriA.innerText = "Fri";
      var FriLiInA = FriLI.appendChild(FriA); // Saturday

      var SatLI = document.createElement('li');
      SatLI.classList.add('Widget-menu-li');
      var SatA = document.createElement('a');
      SatA.classList.add('Widget-menu-a'); // var  LI = widgetUL.appendChild(widgetLI);

      SatA.href = '#Sat';
      SatA.innerText = "Sat";
      var SatLiInA = SatLI.appendChild(SatA); //sunday

      var SunLI = document.createElement('li');
      SunLI.classList.add('Widget-menu-li');
      var SunA = document.createElement('a');
      SunA.classList.add('Widget-menu-a'); // var  LI = widgetUL.appendChild(widgetLI);

      SunA.href = '#Sun';
      SunA.innerText = "Sun";
      var SunLiInA = SunLI.appendChild(SunA); // widget Section

      var widgetSectionDiv = document.createElement("div");
      widgetSectionDiv.classList.add("widget-section");
      var WidgetSectionUl = document.createElement("ul");
      WidgetSectionUl.classList.add('widget-section-ul'); //create all the of the content message container

      buttonContainer.appendChild(this.chatIcon);
      this.chatIcon.appendChild(widgetUL);
      widgetUL.appendChild(MonLI);
      widgetUL.appendChild(TueLI);
      widgetUL.appendChild(WedLI);
      widgetUL.appendChild(ThuLI);
      widgetUL.appendChild(FriLI);
      widgetUL.appendChild(SatLI);
      widgetUL.appendChild(SunLI);
      buttonContainer.appendChild(widgetSectionDiv);
      widgetSectionDiv.appendChild(WidgetSectionUl); //
      // var request = new XMLHttpRequest();
      // request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
      // request.send();
      // request.onreadystatechange = function handleRequest(){
      //
      //     if (request.readyState === 4 && request.status === 200){
      //         var data = JSON.parse(request.responseText);
      //         data.forEach(function (singleData){
      //             const widgetContentLi = document.createElement('li');
      //             widgetContentLi.classList.add('widget-content');
      //             const widgetContentImage = document.createElement('div');
      //             widgetContentImage.classList.add('widget-content-image');
      //             const widgetContentImgTag = document.createElement('img');
      //             widgetContentImgTag.src = 'assets/chat.svg';
      //             // widgetContentImgTag.alt = "#";
      //             const widgetArticle = document.createElement('div');
      //             widgetArticle.classList.add('widget-article');
      //             const widgetArticleHeading = document.createElement('div');
      //             widgetArticleHeading.classList.add('widget-article-heading');
      //             widgetArticleHeading.innerText = singleData.title;
      //             const widgetTime = document.createElement('div');
      //             widgetTime.classList.add('widget-time');
      //             widgetTime.innerText = '10:00 PM - 12.00 AM';
      //             const widgetDescription = document.createElement('div');
      //             widgetDescription.classList.add('widget-description');
      //             widgetDescription.innerText = singleData.title;
      //
      //             WidgetSectionUl.appendChild(widgetContentLi);
      //             widgetContentLi.appendChild(widgetContentImage);
      //             widgetContentImage.appendChild(widgetContentImgTag);
      //             widgetContentLi.appendChild(widgetArticle);
      //             widgetArticle.appendChild(widgetArticleHeading);
      //             widgetArticle.appendChild(widgetTime);
      //             widgetArticle.appendChild(widgetDescription);
      //         })
      //
      //
      //         // console.log(JSON.parse(request.responseText));
      //     }
      // }
      //

      var request = new XMLHttpRequest();
      request.open('GET', 'https://shadypinesradio.herokuapp.com/api/widget/', true);
      request.send();

      request.onreadystatechange = function handleRequest() {
        if (request.readyState === 4 && request.status === 200) {
          var date = new Date();
          var day = date.getDay();
          var data = JSON.parse(request.response); // var fri = JSON.parse(data.Fri)

          console.log(JSON.parse(request.responseText));
          var dayData = null; // console.log(dayData)

          switch (day) {
            case 1:
              dayData = data.data.Monday;
              console.log("Monday");
              console.log(dayData);
              break;

            case 2:
              dayData = data.data.Tuesday;
              console.log("Tuesday");
              break;

            case 3:
              dayData = data.data.Wednesday;
              console.log("Wednesday");
              break;

            case 4:
              dayData = data.data.Thursday;
              console.log("Thursday");
              break;

            case 5:
              dayData = data.data.Friday;
              console.log("Friday");
              break;

            case 6:
              dayData = data.data.Saturday;
              console.log("Saturday");
              break;

            case 0:
              dayData = data.data.Sunday;
              console.log("Sunday");
              break;

            default:
          }

          dayData.forEach(function (singleData) {
            var showImg = singleData.shows[0].image;
            var widgetContentLi = document.createElement('li');
            widgetContentLi.classList.add('widget-content');
            var widgetContentImage = document.createElement('div');
            widgetContentImage.classList.add('widget-content-image');
            var widgetContentImgTag = document.createElement('img');
            widgetContentImgTag.src = showImg; // widgetContentImgTag.alt = "#";

            var widgetArticle = document.createElement('div');
            widgetArticle.classList.add('widget-article');
            var start_Time = singleData.startTime; // var H = +start_Time.substr(0, 2);
            // var h = H % 12 || 12;
            // var ampm = (H < 12 || H === 24) ? "AM" : "PM";
            // start_Time = h + start_Time.substr(2, 3) + ampm;

            var end_Time = singleData.endTime; // var H1 = +start_Time.substr(0, 2);
            // var h1 = H1 % 12 || 12;
            // var ampm1 = (H1 < 12 || H1 === 24) ? "AM" : "PM";
            // end_Time = h1 + end_Time.substr(2, 3) + ampm1;
            // console.log(end_Time)

            var myDate = new Date(start_Time);
            var strDate = myDate.toLocaleString("en-US", {
              timeZone: "America/Los_Angeles"
            });
            var myDate2 = new Date(end_Time);
            var endDate = myDate2.toLocaleString("en-US", {
              timeZone: "America/Los_Angeles"
            });
            console.log(strDate.split(',')[1]);
            widgetArticle.innerText = strDate.split(',')[1] + '-' + endDate.split(',')[1] + ' (PT)';
            var widgetArticleHeading = document.createElement('div');
            widgetArticleHeading.classList.add('widget-article-heading');
            widgetArticleHeading.innerText = singleData.shows[0].showName;
            var widgetTime = document.createElement('div');
            widgetTime.classList.add('widget-time');
            widgetTime.innerText = singleData.shows[0].djName;
            var widgetDescription = document.createElement('div');
            widgetDescription.classList.add('widget-description');
            widgetDescription.innerText = singleData.shows[0].showDescription;
            WidgetSectionUl.appendChild(widgetContentLi);
            widgetContentLi.appendChild(widgetContentImage);
            widgetContentImage.appendChild(widgetContentImgTag);
            widgetContentLi.appendChild(widgetArticle);
            widgetArticle.appendChild(widgetArticleHeading);
            widgetArticle.appendChild(widgetTime);
            widgetArticle.appendChild(widgetDescription);
          });
          var navbar = document.querySelectorAll('.Widget-menu-a');
          console.log(navbar);
          var clickDayData = null;
          console.log(clickDayData);
          navbar.forEach(function (element) {
            // console.log(element)
            element.addEventListener("click", function () {
              var activeDay = document.querySelector('.Widget-active'); // console.log(activeDay.innerText);

              console.log(JSON.parse(request.responseText));

              switch (activeDay.innerText) {
                case 'Mon':
                  clickDayData = data.data.Monday;
                  console.log("Monday");
                  console.log();
                  break;

                case 'Tue':
                  clickDayData = data.data.Tuesday;
                  console.log("Tuesday");
                  break;

                case 'Wed':
                  clickDayData = data.data.Wednesday;
                  console.log("Wednesday");
                  break;

                case 'Thu':
                  clickDayData = data.data.Thursday;
                  console.log("Thursday");
                  break;

                case 'Fri':
                  clickDayData = data.data.Friday;
                  console.log("Friday");
                  break;

                case 'Sat':
                  clickDayData = data.data.Saturday;
                  console.log("Saturday");
                  break;

                case 'Sun':
                  clickDayData = data.data.Sunday;
                  console.log("Sunday");
                  break;

                default:
              } // this.classList.add("Widget-active");


              clickDayData.forEach(function (singleData) {
                var showImg = singleData.shows[0].image;
                var widgetContentLi = document.createElement('li');
                widgetContentLi.classList.add('widget-content');
                var widgetContentImage = document.createElement('div');
                widgetContentImage.classList.add('widget-content-image');
                var widgetContentImgTag = document.createElement('img');
                widgetContentImgTag.src = showImg; // widgetContentImgTag.alt = "#";

                var widgetArticle = document.createElement('div');
                widgetArticle.classList.add('widget-article');
                var start_Time = singleData.startTime; // var H = +start_Time.substr(0, 2);
                // var h = H % 12 || 12;
                // var ampm = (H < 12 || H === 24) ? "AM" : "PM";
                // start_Time = h + start_Time.substr(2, 3) + ampm;

                var end_Time = singleData.endTime; // var H1 = +start_Time.substr(0, 2);
                // var h1 = H1 % 12 || 12;
                // var ampm1 = (H1 < 12 || H1 === 24) ? "AM" : "PM";
                // end_Time = h1 + end_Time.substr(2, 3) + ampm1;
                // console.log(end_Time)

                var myDate = new Date(start_Time);
                var strDate = myDate.toLocaleString("en-US", {
                  timeZone: "America/Los_Angeles"
                });
                var myDate2 = new Date(end_Time);
                var endDate = myDate2.toLocaleString("en-US", {
                  timeZone: "America/Los_Angeles"
                });
                console.log(strDate.split(',')[1]);
                widgetArticle.innerText = strDate.split(',')[1] + '-' + endDate.split(',')[1] + ' (PT)';
                var widgetArticleHeading = document.createElement('div');
                widgetArticleHeading.classList.add('widget-article-heading');
                widgetArticleHeading.innerText = singleData.shows[0].showName;
                var widgetTime = document.createElement('div');
                widgetTime.classList.add('widget-time');
                widgetTime.innerText = singleData.shows[0].djName;
                var widgetDescription = document.createElement('div');
                widgetDescription.classList.add('widget-description');
                widgetDescription.innerText = singleData.shows[0].showDescription;
                WidgetSectionUl.appendChild(widgetContentLi);
                widgetContentLi.appendChild(widgetContentImage);
                widgetContentImage.appendChild(widgetContentImgTag);
                widgetContentLi.appendChild(widgetArticle);
                widgetArticle.appendChild(widgetArticleHeading);
                widgetArticle.appendChild(widgetTime);
                widgetArticle.appendChild(widgetDescription);
              });
            });
          });
        }
      };
    }
  }, {
    key: "activeLi",
    value: function activeLi() {
      // ACTIVE MENU
      var selectMenuClass = document.querySelectorAll('.Widget-menu-a');
      var selectAPI = Array.prototype.slice.call(selectMenuClass);
      var date = new Date();
      var day = date.getDay(); // var apiDay = null;

      console.log(day);

      switch (day) {
        case 1:
          break;

        case 2:
          selectMenuClass[1].classList.add('Widget-active');
          break;

        case 3:
          selectMenuClass[2].classList.add('Widget-active');
          break;

        case 4:
          selectMenuClass[3].classList.add('Widget-active');
          break;

        case 5:
          selectMenuClass[4].classList.add('Widget-active');
          console.log("Friday");
          break;

        case 6:
          selectMenuClass[5].classList.add('Widget-active');
          break;

        case 0:
          selectMenuClass[6].classList.add('Widget-active');
          break;

        default:
          selectMenuClass[1].classList.add('Widget-active');
      }

      var navbar = document.querySelector('.widget-menu').querySelectorAll('a');
      console.log(navbar);
      navbar.forEach(function (element) {
        // console.log(element)
        element.addEventListener("click", function () {
          navbar.forEach(function (nav) {
            nav.classList.remove("Widget-active");
          });
          this.classList.add("Widget-active");
        });
      });
    }
  }, {
    key: "createStyles",
    value: function createStyles() {
      var styleTag = document.createElement('style');
      document.head.appendChild(styleTag);
      styleTag.innerHTML = "\n            body{\n    font-family:  Arial, Helvetica, sans-serif;\n\n}\n\n/*---------------------------------------------------------menu-bar---------------------------------*/\n.wrapper{\n    width: 300px;   \n    float: right;\n    background: #121f5f;\n    max-height: 400px;  \n    min-height: 400px;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n    right: -25px;\n    bottom: 75px;\n    position: absolute;\n    transition: max-height .2s ease;\n    font-family: Helvetica, Arial ,sans-serif;\n}\n.widget-menu{\n    width: 300px;\n    margin: 0 auto;\n}\n\n.Widget-menu-ul{\n   \n    padding-left: 6px;\n\n}\n\n.Widget-menu-li{\n    float: left;\n    list-style: none;\n    margin: 0.5px;\n}\n\n.Widget-menu-a{\n    text-decoration: none;\n    display: block;\n    padding: 7px 7px;\n    font-size:15px;\n    \n    border-radius: 6px;\n    color: #ffffff;\n    margin-top: 20px;\n}\n.Widget-menu-a:hover{\n    background: black;\n    color: #ffffff;\n}\n\n.Widget-active{\n    background: black;\n    color: #ffffff;\n}\n.widget-section{\n    padding-top: 50px;\n\n}\n::-webkit-scrollbar{\n    display: none;\n}\n.widget-section-ul{\n    width: 297px;\n    height: 316px;\n    background: #212848;\n    padding: 1px;\n    overflow: hidden;\n    overflow-y: scroll;\n\n}\n.widget-content{\n    width: 300px;\n    margin: 0 auto;\n    border-bottom: 1px solid #ffffff;\n    overflow: hidden;\n}\n\n.widget-content:last-child{\n    border-bottom: none;\n}\n\n.widget-content-image{\n    width: 90px;   \n    float: left;\n    /*margin-right: 10px;*/\n    margin-top: 2px;\n    height:100px\n\n}\n.widget-content-image img{\n    border: 1px  solid black;\n    border-radius: 10px;\n    width: 80px;\n    // height: 100px;\n\n}\n.widget-article{\n    width: 300px;    \n    color: #ffffff;\n    margin-top: 8px;\n    font-size: 12px\n}\n.widget-article-heading{\n    font-size: 15px;\n}\n.widget-time{\n    margin: 3px;\n    font-size: 12px;\n}\n.widget-description{\n    font-size: 10px;\n} ";
    }
  }]);

  return Design;
}();

exports.Design = Design;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _Design = require("./Design");

var design = new _Design.Design();
},{"./Design":"Design.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35387" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map