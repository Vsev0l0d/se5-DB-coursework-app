/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/configureStore */ "./entities/configureStore.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "../node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var materialize_css_dist_js_materialize_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! materialize-css/dist/js/materialize.min */ "../node_modules/materialize-css/dist/js/materialize.min.js");
/* harmony import */ var materialize_css_dist_js_materialize_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./style.scss");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/routes */ "./utils/routes.js");
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/history */ "./utils/history.js");
/* harmony import */ var _StartPage_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StartPage/index */ "./StartPage/index.js");
/* harmony import */ var _MainPage_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainPage/index */ "./MainPage/index.js");
/* harmony import */ var _ProfilePage_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfilePage/index */ "./ProfilePage/index.js");
/* harmony import */ var _EventPage_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EventPage/index */ "./EventPage/index.js");
/* harmony import */ var _entities_invitation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @entities/invitation */ "./entities/invitation/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
/* harmony import */ var _entities_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @entities/event */ "./entities/event/index.js");
/* harmony import */ var _entities_location__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @entities/location */ "./entities/location/index.js");
/* harmony import */ var _entities_block__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @entities/block */ "./entities/block/index.js");
/* harmony import */ var _entities_award__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @entities/award */ "./entities/award/index.js");



















var initialState = {
  invitations: _entities_invitation__WEBPACK_IMPORTED_MODULE_12__.invitationModel.initialState,
  profile: _entities_profile__WEBPACK_IMPORTED_MODULE_13__.personageModel.initialState,
  events: _entities_event__WEBPACK_IMPORTED_MODULE_14__.eventModel.initialState,
  locations: _entities_location__WEBPACK_IMPORTED_MODULE_15__.locationModel.initialState,
  blocking: _entities_block__WEBPACK_IMPORTED_MODULE_16__.blockModel.initialState,
  awards: _entities_award__WEBPACK_IMPORTED_MODULE_17__.awardModel.initialState
};
var store = (0,_entities_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState);
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(notistack__WEBPACK_IMPORTED_MODULE_3__.SnackbarProvider, {
    maxSnack: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.BrowserRouter, {
    history: _utils_history__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    exact: true,
    path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.ROOT,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StartPage_index__WEBPACK_IMPORTED_MODULE_8__.StartPage, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.MAIN,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MainPage_index__WEBPACK_IMPORTED_MODULE_9__.MainPage, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.PROFILE,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProfilePage_index__WEBPACK_IMPORTED_MODULE_10__.ProfilePage, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    path: _utils_routes__WEBPACK_IMPORTED_MODULE_6__.EVENT,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EventPage_index__WEBPACK_IMPORTED_MODULE_11__.EventPage, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StartPage_index__WEBPACK_IMPORTED_MODULE_8__.StartPage, null)
  })))));
};

/***/ }),

/***/ "./EventPage/components/Collection.js":
/*!********************************************!*\
  !*** ./EventPage/components/Collection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collection": () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Preloader */ "./components/Preloader.js");
/* harmony import */ var _entities_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entities/event */ "./entities/event/index.js");
/* harmony import */ var _entities_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @entities/location */ "./entities/location/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ "./EventPage/components/Item.js");






var Collection = function Collection() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch(_entities_event__WEBPACK_IMPORTED_MODULE_3__.eventModel.thunks.getEvents());
    dispatch(_entities_location__WEBPACK_IMPORTED_MODULE_4__.locationModel.thunks.getLocations());
  }, []);
  var events = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_event__WEBPACK_IMPORTED_MODULE_3__.eventModel.selectors.events);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (events.length !== 0) {
      M.AutoInit();
    }
  }, [events]);

  if (events.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_2__.Preloader, null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "collapsible"
  }, events.map(function (event, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Item__WEBPACK_IMPORTED_MODULE_5__.Item, {
      props: event
    }));
  }));
};

/***/ }),

/***/ "./EventPage/components/FloatingButton.js":
/*!************************************************!*\
  !*** ./EventPage/components/FloatingButton.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatingButton": () => (/* binding */ FloatingButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/event */ "./entities/event/index.js");
/* harmony import */ var _entities_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entities/location */ "./entities/location/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var FloatingButton = function FloatingButton() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var handleClick = function handleClick(event) {
    event.preventDefault();
    dispatch(_entities_event__WEBPACK_IMPORTED_MODULE_2__.eventModel.thunks.addEvent(name, description, location, dateStart, dateEnd, [], [], visibility));
  };

  var thingTypes = ["магическое оружие", "оружие", "обмундирование", "праздничный наряд", "пижама"];
  var personageTypes = [""];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      dateStart = _useState6[0],
      setDateStart = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      timeStart = _useState8[0],
      setTimeStart = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      dateEnd = _useState10[0],
      setDateEnd = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      timeEnd = _useState12[0],
      setTimeEnd = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      location = _useState14[0],
      setLocation = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState16 = _slicedToArray(_useState15, 2),
      thingControl = _useState16[0],
      setThingControl = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      visibility = _useState18[0],
      setVisibility = _useState18[1];

  var locations = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_location__WEBPACK_IMPORTED_MODULE_3__.locationModel.selectors.locations);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var selected = document.querySelectorAll("#weapon-select option:checked");
    var values = Array.from(selected).map(function (element) {
      return element.value;
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "fixed-action-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#addForm",
    className: "btn-floating btn-large red modal-trigger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "large material-icons"
  }, "add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "addForm",
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12"
  }, "\u041D\u043E\u0432\u043E\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "name",
    type: "text",
    onChange: function onChange(event) {
      return setName(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "name"
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    id: "description",
    className: "materialize-textarea",
    onChange: function onChange(event) {
      return setDescription(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "description"
  }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "datepicker",
    onChange: function onChange(event) {
      return setDateStart(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "date"
  }, "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "timepicker",
    onChange: function onChange(event) {
      return setTimeStart(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "date"
  }, "\u0412\u0440\u0435\u043C\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "datepicker",
    onChange: function onChange(event) {
      return setDateEnd(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "date"
  }, "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    className: "timepicker",
    onChange: function onChange(event) {
      return setTimeEnd(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "date"
  }, "\u0412\u0440\u0435\u043C\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    style: {
      bottom: 'initial'
    },
    onChange: function onChange(event) {
      return setLocation(event.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "",
    disabled: true
  }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"), locations.map(function (location, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: location["_links"].self.href
    }, location.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    id: "weapon-select",
    multiple: true,
    style: {
      bottom: 'initial'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: ""
  }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"), thingTypes.map(function (type, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: type
    }, type);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435/\u043E\u0434\u0435\u0436\u0434\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    multiple: true,
    style: {
      bottom: 'initial'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "",
    selected: true
  }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "1"
  }, "Option 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "2"
  }, "Option 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "3"
  }, "Option 3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u043D\u0430 \u0442\u0438\u043F \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u043D\u043D\u044B\u0445")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "switch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "\u0427\u0430\u0441\u0442\u043D\u043E\u0435", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    onChange: function onChange(event) {
      return setVisibility(event.target.value === "on");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "lever"
  }), "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0435"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "",
    className: "modal-close waves-effect waves-green btn-flat",
    onClick: handleClick
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))));
};

/***/ }),

/***/ "./EventPage/components/Item.js":
/*!**************************************!*\
  !*** ./EventPage/components/Item.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dateformat */ "../node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entities/event */ "./entities/event/index.js");




var Item = function Item(_ref) {
  var props = _ref.props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch(_entities_event__WEBPACK_IMPORTED_MODULE_3__.eventModel.thunks.deleteEvent(props["_links"].self.href));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grey lighten-4 collapsible-header row",
    style: {
      marginBottom: "0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col offset-s1 s4"
  }, (0,dateformat__WEBPACK_IMPORTED_MODULE_1__["default"])(props.dateStart, "dd.mm.yyyy HH:MM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col s7"
  }, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col s1 left-align helper-text container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#deleteEvent".concat(props.id),
    className: "btn-small modal-trigger white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons black-text"
  }, "delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "deleteEvent".concat(props.id),
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "",
    className: "modal-close waves-effect waves-green btn-flat",
    onClick: handleSubmit
  }, "\u0414\u0430"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collapsible-body row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12 text-accent-2"
  }, "\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col offset-s1 s11"
  }, props.location.name, " (", props.location.x, ";", props.location.y, ")"), eventControl(props)));
};

var eventControl = function eventControl(event) {
  var thingControls = event.thingControls;
  var personageTypes = event.personageTypes;

  if (thingControls.length !== 0 || personageTypes.length !== 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "col s12 text-accent-1"
    }, "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:"), thingControls.map(function (thing, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "col offset-s1 s11",
        key: index
      }, thing.id.type);
    }), personageTypes.map(function (type, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "col offset-s1 s11",
        key: index
      }, type.id.type);
    }));
  }
};

/***/ }),

/***/ "./EventPage/index.js":
/*!****************************!*\
  !*** ./EventPage/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventPage": () => (/* binding */ EventPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Collection */ "./EventPage/components/Collection.js");
/* harmony import */ var _components_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FloatingButton */ "./EventPage/components/FloatingButton.js");




var EventPage = function EventPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__.Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Collection__WEBPACK_IMPORTED_MODULE_2__.Collection, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_FloatingButton__WEBPACK_IMPORTED_MODULE_3__.FloatingButton, null));
};

/***/ }),

/***/ "./MainPage/components/Collection.js":
/*!*******************************************!*\
  !*** ./MainPage/components/Collection.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collection": () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_invitation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/invitation */ "./entities/invitation/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ "./MainPage/components/Item.js");



 //ToDo: Сортировка

var Collection = function Collection() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch(_entities_invitation__WEBPACK_IMPORTED_MODULE_2__.invitationModel.thunks.getInvitations());
  }, []);
  var invitations = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_invitation__WEBPACK_IMPORTED_MODULE_2__.invitationModel.selectors.invitations);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.Tabs.init(document.querySelectorAll('.tabs'));

    if (invitations.length !== 0) {
      M.Collapsible.init(document.querySelectorAll('.collapsible'));
    }
  }, [invitations]); // if (invitations.length === 0) {
  //     return <div className="center">
  //         <Preloader/>
  //     </div>
  // }
  //ToDo: как отнести приглашения в спам, если нет никаких способов сравнения, в черном списке есть только id, а в приглашении только ссылка на владельца не совпадающая с той

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "tab col s4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#future"
  }, "\u0411\u0443\u0434\u0443\u0449\u0438\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "tab col s4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "active",
    href: "#new"
  }, "\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "tab col s4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#spam",
    style: {
      color: "grey"
    }
  }, "\u0421\u043F\u0430\u043C")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "future",
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "collapsible"
  }, invitations.length ? invitations.filter(function (invitation) {
    return invitation.confirmation !== null && invitation["_embedded"].event.dateStart >= Date.now();
  }).map(function (invitation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__.Item, {
      props: invitation
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "new",
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "collapsible"
  }, invitations.length ? invitations.filter(function (invitation) {
    return invitation.confirmation === null && invitation["_embedded"].event.dateStart >= Date.now();
  }).map(function (invitation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__.Item, {
      props: invitation
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "spam",
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "collapsible"
  }, invitations.length ? invitations.filter(function (invitation) {
    return invitation.confirmation === null;
  }).map(function (invitation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Item__WEBPACK_IMPORTED_MODULE_3__.Item, {
      props: invitation
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null))));
};

/***/ }),

/***/ "./MainPage/components/Item.js":
/*!*************************************!*\
  !*** ./MainPage/components/Item.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dateformat */ "../node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_invitation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entities/invitation */ "./entities/invitation/index.js");
/* harmony import */ var _entities_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @entities/block */ "./entities/block/index.js");




 //ToDo: добавить действия кнопок блока

var Item = function Item(_ref) {
  var props = _ref.props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var types = ["отказ от рассылок", "отказ от всех пришлашений"];
  var link = props["_links"].invitation.href;

  var handleConfirmClick = function handleConfirmClick(event) {
    event.preventDefault();
    dispatch(_entities_invitation__WEBPACK_IMPORTED_MODULE_3__.invitationModel.thunks.changeInvitation(link, {
      "confirmation": !props.confirmation
    }));
  };

  var handleBlockingClick = function handleBlockingClick(event) {
    event.preventDefault(); //ToDo: как получить owner_id

    var owner_id = 1;
    dispatch(_entities_block__WEBPACK_IMPORTED_MODULE_4__.blockModel.thunks.addBlocking(owner_id, props["_embedded"].event.visibility ? types[0] : types[1]));
  };

  var renderLocation = function renderLocation() {
    var location = props["_embedded"].event.location;

    if (location.description) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "col s12 text-accent-2"
      }, "\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "col offset-s1 s11"
      }, location.name, " (", location.x, "; ", location.y, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "col offset-s1 s11 helper-text"
      }, location.description));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "col s12 text-accent-2"
    }, "\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col offset-s1 s11"
    }, location.name, " (", location.x, "; ", location.y, ")"));
  };

  var eventControl = function eventControl() {
    var thingControls = props["_embedded"].event.thingControls;
    var personageTypes = props["_embedded"].event.personageTypes;

    if (thingControls.length !== 0 || personageTypes.length !== 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "col s12 text-accent-1"
      }, "\u0414\u043B\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E:"), thingControls.map(function (thing, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          className: "col offset-s1 s11",
          key: index
        }, thing.id.type);
      }), personageTypes.map(function (type, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          className: "col offset-s1 s11",
          key: index
        }, type.id.type);
      }));
    }
  };

  var renderConfirmationColumn = function renderConfirmationColumn() {
    var value = props.confirmation;

    if (value === true) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "material-icons green-text"
      }, "done");
    }

    if (value === false) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "material-icons red-text"
      }, "close");
    }

    if (value === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        className: "material-icons"
      }, "help_outline");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  };

  var renderChangingConfirmationCommand = function renderChangingConfirmationCommand() {
    if (props.confirmation === true) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "col offset-s3 s3 waves-effect waves-teal btn-flat right-align",
        onClick: handleConfirmClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "red-text center-align"
      }, "\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F"));
    }

    if (props.confirmation === false) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "col offset-s3 s3 waves-effect waves-teal btn-flat right-align",
        onClick: handleConfirmClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "green-text center-align"
      }, "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u044C\u0441\u044F"));
    }

    if (props.confirmation === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "col s3 waves-effect waves-teal btn-flat right-align",
        onClick: handleConfirmClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "green-text center-align"
      }, "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u044C\u0441\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: "col s3 waves-effect waves-teal btn-flat right-align",
        onClick: handleConfirmClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "red-text center-align"
      }, "\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  };

  var renderSpamQuestion = function renderSpamQuestion() {
    if (props["_embedded"].event.visibility) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "col s6 red-text",
        onClick: handleBlockingClick
      }, "\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A \u043E\u0442 \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "col s6 red-text",
      onClick: handleBlockingClick
    }, "\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0439 \u043E\u0442 \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grey lighten-4 collapsible-header row",
    style: {
      marginBottom: "0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col s3"
  }, (0,dateformat__WEBPACK_IMPORTED_MODULE_1__["default"])(props["_embedded"].event["dateStart"], "dd.mm.yyyy HH:MM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col s5"
  }, props["_embedded"].event.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col s3"
  }, props["_embedded"].event.owner.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col s1"
  }, renderConfirmationColumn())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collapsible-body row"
  }, renderLocation(), eventControl(), renderSpamQuestion(), renderChangingConfirmationCommand()));
};

/***/ }),

/***/ "./MainPage/index.js":
/*!***************************!*\
  !*** ./MainPage/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
/* harmony import */ var _components_Collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Collection */ "./MainPage/components/Collection.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar */ "./components/Navbar.js");





var MainPage = function MainPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.thunks.getPersonage());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__.Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Collection__WEBPACK_IMPORTED_MODULE_3__.Collection, null));
};

/***/ }),

/***/ "./ProfilePage/components/AboutInfo.js":
/*!*********************************************!*\
  !*** ./ProfilePage/components/AboutInfo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutInfo": () => (/* binding */ AboutInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Preloader */ "./components/Preloader.js");




var AboutInfo = function AboutInfo() {
  var profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.selectors.profile);

  if (profile.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Preloader__WEBPACK_IMPORTED_MODULE_3__.Preloader, null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col s12 m6 offset-m2 l6 offset-l3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-panel grey lighten-5 z-depth-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row valign-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col s2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "large material-icons"
  }, "account_circle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col s10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "black-text title"
  }, profile[0].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "grey-text small"
  }, profile[0]["personageType"].name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row valign-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "grey-text light small helper-text"
  }, profile[0]["personageType"].description)))));
};

/***/ }),

/***/ "./ProfilePage/components/AwardCollection.js":
/*!***************************************************!*\
  !*** ./ProfilePage/components/AwardCollection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwardCollection": () => (/* binding */ AwardCollection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_award__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/award */ "./entities/award/index.js");



var AwardCollection = function AwardCollection() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var awards = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_award__WEBPACK_IMPORTED_MODULE_2__.awardModel.selectors.awards);

  var renderDeleteButton = function renderDeleteButton(index, link) {
    var handleSubmit = function handleSubmit(event) {
      event.preventDefault();
      dispatch(_entities_award__WEBPACK_IMPORTED_MODULE_2__.awardModel.thunks.deleteAward(link));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#deleteAward".concat(index),
      className: "btn-small modal-trigger white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "material-icons black-text"
    }, "delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "deleteAward".concat(index),
      className: "modal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "col s12"
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "",
      className: "modal-close waves-effect waves-green btn-flat",
      onClick: handleSubmit
    }, "\u0414\u0430"))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u041D\u0430\u0433\u0440\u0430\u0434\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "collection"
  }, awards.map(function (award, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index,
      className: "collection-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row",
      style: {
        "marginBottom": "0px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s6 black-text"
    }, award.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s5 center-align helper-text grey-text"
    }, award.eventId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col s1 left-align helper-text container"
    }, renderDeleteButton(index, award["_links"].self.href))));
  }))));
};

/***/ }),

/***/ "./ProfilePage/components/BlackList.js":
/*!*********************************************!*\
  !*** ./ProfilePage/components/BlackList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlackList": () => (/* binding */ BlackList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/block */ "./entities/block/index.js");



var BlackList = function BlackList() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var blocked = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_block__WEBPACK_IMPORTED_MODULE_2__.blockModel.selectors.blocking);

  var renderDeleteButton = function renderDeleteButton(index, link) {
    var handleSubmit = function handleSubmit(event) {
      event.preventDefault();
      dispatch(_entities_block__WEBPACK_IMPORTED_MODULE_2__.blockModel.thunks.deleteBlocking(link));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#deletespam".concat(index),
      className: "btn-small modal-trigger white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "material-icons black-text"
    }, "delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "deletespam".concat(index),
      className: "modal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "col s12"
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "",
      className: "modal-close waves-effect waves-green btn-flat",
      onClick: handleSubmit
    }, "\u0414\u0430"))));
  }; //ToDo: выводить не id а имя
  //ToDo: удаление из чс


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u0427\u0435\u0440\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "collection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row",
    style: {
      "marginBottom": "0px"
    }
  }, blocked.length ? blocked.map(function (blocked, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index,
      className: "collection-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s6 black-text"
    }, blocked.id.blockedId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s5 black-text"
    }, blocked.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col s1 left-align helper-text container"
    }, renderDeleteButton(index, blocked["_links"].self.href)));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col s3 black-text"
  }, "\u041D\u0438\u043A\u043E\u0433\u043E")))));
};

/***/ }),

/***/ "./ProfilePage/components/clothing/AddClothing.js":
/*!********************************************************!*\
  !*** ./ProfilePage/components/clothing/AddClothing.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddClothing": () => (/* binding */ AddClothing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var AddClothing = function AddClothing() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  var types = ["обмундирование", "праздничный наряд", "пижама"];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.thunks.addClothing(name, type));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row",
    style: {
      "marginBottom": "0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col s6"
  }, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0432\u0435\u0449\u044C?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col s4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#addClothing",
    className: "btn-small modal-trigger white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons green-text darken-2"
  }, "add"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "addClothing",
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12"
  }, "\u041D\u043E\u0432\u0430\u044F \u043E\u0434\u0435\u0436\u0434\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "name",
    type: "text",
    className: "validate",
    onChange: function onChange() {
      setName(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "name"
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    onChange: function onChange() {
      setType(event.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "",
    disabled: true,
    selected: true
  }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"), types.map(function (type, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: id,
      value: type
    }, type);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "\u0422\u0438\u043F")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "",
    className: "modal-close waves-effect waves-green btn-flat",
    onClick: handleSubmit
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))));
};

/***/ }),

/***/ "./ProfilePage/components/clothing/ClothingCollection.js":
/*!***************************************************************!*\
  !*** ./ProfilePage/components/clothing/ClothingCollection.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClothingCollection": () => (/* binding */ ClothingCollection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
/* harmony import */ var _AddClothing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddClothing */ "./ProfilePage/components/clothing/AddClothing.js");
/* harmony import */ var _ExchangeClothing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExchangeClothing */ "./ProfilePage/components/clothing/ExchangeClothing.js");
/* harmony import */ var _DeleteClothing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteClothing */ "./ProfilePage/components/clothing/DeleteClothing.js");






var ClothingCollection = function ClothingCollection() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var clothing = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.selectors.clothing);

  if (clothing.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u041E\u0434\u0435\u0436\u0434\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "collection"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddClothing__WEBPACK_IMPORTED_MODULE_3__.AddClothing, null)))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u041E\u0434\u0435\u0436\u0434\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "collection"
  }, clothing.map(function (clothes, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index,
      className: "collection-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row",
      style: {
        "marginBottom": "0px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s5 black-text"
    }, clothes.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s4 center-align helper-text grey-text"
    }, clothes.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col s3 center-align"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExchangeClothing__WEBPACK_IMPORTED_MODULE_4__.ExchangeClothing, {
      clothingLink: clothes["_links"].clothing.href,
      id: index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeleteClothing__WEBPACK_IMPORTED_MODULE_5__.DeleteClothing, {
      clothingLink: clothes["_links"].clothing.href,
      id: index
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: clothing.length + 1,
    className: "collection-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddClothing__WEBPACK_IMPORTED_MODULE_3__.AddClothing, null)))));
};

/***/ }),

/***/ "./ProfilePage/components/clothing/DeleteClothing.js":
/*!***********************************************************!*\
  !*** ./ProfilePage/components/clothing/DeleteClothing.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteClothing": () => (/* binding */ DeleteClothing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");



var DeleteClothing = function DeleteClothing(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.thunks.deleteClothing(props.clothingLink));
  };

  var forHref = "#deleteClothing".concat(props.id);
  var forId = "deleteClothing".concat(props.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: forHref,
    className: "btn-small modal-trigger white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons black-text"
  }, "delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: forId,
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "",
    className: "modal-close waves-effect waves-green btn-flat",
    onClick: handleSubmit
  }, "\u0414\u0430"))));
};

/***/ }),

/***/ "./ProfilePage/components/clothing/ExchangeClothing.js":
/*!*************************************************************!*\
  !*** ./ProfilePage/components/clothing/ExchangeClothing.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeClothing": () => (/* binding */ ExchangeClothing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ExchangeClothing = function ExchangeClothing(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    if (id != JSON.parse(localStorage.getItem("id"))) {
      dispatch(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.thunks.exchangeClothing(props.clothingLink, id));
    }
  };

  var forId = "exchangeClothing".concat(props.id);
  var forHref = "#exchangeClothing".concat(props.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: forHref,
    className: "btn-small modal-trigger white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons brown-text"
  }, "loop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: forId,
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12"
  }, "\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u043E\u0434\u0435\u0436\u0434\u0443"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "name",
    type: "number",
    onChange: function onChange(event) {
      setId(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "name"
  }, "id \u043A\u043E\u043C\u0443")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "",
    className: "modal-close waves-effect waves-green btn-flat",
    onClick: handleSubmit
  }, "\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C"))));
};

/***/ }),

/***/ "./ProfilePage/components/weapon/AddWeapon.js":
/*!****************************************************!*\
  !*** ./ProfilePage/components/weapon/AddWeapon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWeapon": () => (/* binding */ AddWeapon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var AddWeapon = function AddWeapon() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      damage = _useState4[0],
      setDamage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      type = _useState6[0],
      setType = _useState6[1];

  var types = ["магическое оружие", "оружие"];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.thunks.addWeapon(name, damage, type));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row",
    style: {
      "marginBottom": "0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "col s6"
  }, "\u0425\u043E\u0442\u0438\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col s4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#addWeapon",
    className: "btn-small modal-trigger white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons green-text text-darken-2"
  }, "add"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "addWeapon",
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12"
  }, "\u041D\u043E\u0432\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "name",
    type: "text",
    onChange: function onChange() {
      setName(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "name"
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    onChange: function onChange() {
      setType(event.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "",
    disabled: true,
    selected: true
  }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"), types.map(function (type, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: id,
      value: type
    }, type);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "\u0422\u0438\u043F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "name",
    type: "number",
    className: "validate",
    onChange: function onChange() {
      setDamage(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "name"
  }, "\u0423\u0440\u043E\u043D")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "",
    className: "modal-close waves-effect waves-green btn-flat",
    onClick: handleSubmit
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))));
};

/***/ }),

/***/ "./ProfilePage/components/weapon/DeleteWeapon.js":
/*!*******************************************************!*\
  !*** ./ProfilePage/components/weapon/DeleteWeapon.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteWeapon": () => (/* binding */ DeleteWeapon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");



var DeleteWeapon = function DeleteWeapon(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.thunks.deleteWeapon(props.weaponLink));
  };

  var forHref = "#deleteWeapon".concat(props.id);
  var forId = "deleteWeapon".concat(props.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: forHref,
    className: "btn-small modal-trigger white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons black-text"
  }, "delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: forId,
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "",
    className: "modal-close waves-effect waves-green btn-flat",
    onClick: handleSubmit
  }, "\u0414\u0430"))));
};

/***/ }),

/***/ "./ProfilePage/components/weapon/ExchangeWeapon.js":
/*!*********************************************************!*\
  !*** ./ProfilePage/components/weapon/ExchangeWeapon.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeWeapon": () => (/* binding */ ExchangeWeapon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ExchangeWeapon = function ExchangeWeapon(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    M.AutoInit();
  }, []);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    if (id != JSON.parse(localStorage.getItem("id"))) {
      dispatch(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.thunks.exchangeWeapon(props.weaponLink, id));
    }
  };

  var forHref = "#exchangeWeapon".concat(props.id);
  var forId = "exchangeWeapon".concat(props.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: forHref,
    className: "btn-small modal-trigger white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "material-icons brown-text"
  }, "loop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: forId,
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "col s12"
  }, "\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u043E\u0440\u0443\u0436\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "name",
    type: "number",
    onChange: function onChange(event) {
      setId(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "name"
  }, "id \u043A\u043E\u043C\u0443")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "",
    className: "modal-close waves-effect waves-green btn-flat",
    onClick: handleSubmit
  }, "\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C"))));
};

/***/ }),

/***/ "./ProfilePage/components/weapon/WeaponCollection.js":
/*!***********************************************************!*\
  !*** ./ProfilePage/components/weapon/WeaponCollection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeaponCollection": () => (/* binding */ WeaponCollection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
/* harmony import */ var _AddWeapon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddWeapon */ "./ProfilePage/components/weapon/AddWeapon.js");
/* harmony import */ var _ExchangeWeapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExchangeWeapon */ "./ProfilePage/components/weapon/ExchangeWeapon.js");
/* harmony import */ var _DeleteWeapon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteWeapon */ "./ProfilePage/components/weapon/DeleteWeapon.js");






var WeaponCollection = function WeaponCollection() {
  var weapons = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_entities_profile__WEBPACK_IMPORTED_MODULE_2__.personageModel.selectors.weapons);

  if (weapons.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u041E\u0440\u0443\u0436\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "collection"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddWeapon__WEBPACK_IMPORTED_MODULE_3__.AddWeapon, null)))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u041E\u0440\u0443\u0436\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "collection"
  }, weapons.map(function (weapon, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: index,
      className: "collection-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row",
      style: {
        "marginBottom": "0px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s4 black-text"
    }, weapon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s3 center-align helper-text grey-text"
    }, weapon.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "col s2 center-align helper-text grey-text"
    }, weapon.damage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col s3 left-align helper-text container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "center-align"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExchangeWeapon__WEBPACK_IMPORTED_MODULE_4__.ExchangeWeapon, {
      weaponLink: weapon["_links"].weapon.href,
      id: index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeleteWeapon__WEBPACK_IMPORTED_MODULE_5__.DeleteWeapon, {
      weaponLink: weapon["_links"].weapon.href,
      id: index
    })))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: weapons.length + 1,
    className: "collection-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddWeapon__WEBPACK_IMPORTED_MODULE_3__.AddWeapon, null)))));
};

/***/ }),

/***/ "./ProfilePage/index.js":
/*!******************************!*\
  !*** ./ProfilePage/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _entities_invitation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @entities/invitation */ "./entities/invitation/index.js");
/* harmony import */ var _entities_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @entities/profile */ "./entities/profile/index.js");
/* harmony import */ var _entities_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @entities/block */ "./entities/block/index.js");
/* harmony import */ var _entities_award__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @entities/award */ "./entities/award/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_AboutInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/AboutInfo */ "./ProfilePage/components/AboutInfo.js");
/* harmony import */ var _components_weapon_WeaponCollection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/weapon/WeaponCollection */ "./ProfilePage/components/weapon/WeaponCollection.js");
/* harmony import */ var _components_clothing_ClothingCollection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/clothing/ClothingCollection */ "./ProfilePage/components/clothing/ClothingCollection.js");
/* harmony import */ var _components_BlackList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/BlackList */ "./ProfilePage/components/BlackList.js");
/* harmony import */ var _components_AwardCollection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/AwardCollection */ "./ProfilePage/components/AwardCollection.js");












var ProfilePage = function ProfilePage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch(_entities_invitation__WEBPACK_IMPORTED_MODULE_2__.invitationModel.thunks.getInvitations());
    dispatch(_entities_profile__WEBPACK_IMPORTED_MODULE_3__.personageModel.thunks.getPersonage());
    dispatch(_entities_block__WEBPACK_IMPORTED_MODULE_4__.blockModel.thunks.getBlocking());
    dispatch(_entities_award__WEBPACK_IMPORTED_MODULE_5__.awardModel.thunks.getAwards());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_6__.Navbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AboutInfo__WEBPACK_IMPORTED_MODULE_7__.AboutInfo, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_weapon_WeaponCollection__WEBPACK_IMPORTED_MODULE_8__.WeaponCollection, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_clothing_ClothingCollection__WEBPACK_IMPORTED_MODULE_9__.ClothingCollection, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AwardCollection__WEBPACK_IMPORTED_MODULE_11__.AwardCollection, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BlackList__WEBPACK_IMPORTED_MODULE_10__.BlackList, null)));
};

/***/ }),

/***/ "./StartPage/components/SignInForm.js":
/*!********************************************!*\
  !*** ./StartPage/components/SignInForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInForm": () => (/* binding */ SignInForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notistack */ "../node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shrek_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shrek.png */ "./StartPage/components/shrek.png");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/routes */ "./utils/routes.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SignInForm = function SignInForm() {
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  var snackBar = (0,notistack__WEBPACK_IMPORTED_MODULE_1__.useSnackbar)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (JSON.parse(localStorage.getItem("id"))) navigate(_utils_routes__WEBPACK_IMPORTED_MODULE_4__.MAIN);
  }, []);

  var onIdChange = function onIdChange(event) {
    setId(event.target.value);
  };

  var handleClick = function handleClick(event) {
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("api/personages/".concat(id)).then(function (res) {
      localStorage.setItem("id", JSON.stringify(id));
      navigate(_utils_routes__WEBPACK_IMPORTED_MODULE_4__.MAIN);
    })["catch"](function (err) {
      snackBar.enqueueSnackbar('Введите свой id', {
        variant: 'error'
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "start-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _shrek_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "img-shrek"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "col s12 white",
    id: "reg-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field col s12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "id",
    type: "text",
    className: "validate",
    onChange: onIdChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "brown-text",
    htmlFor: "id"
  }, "Id")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-large btn-register waves-effect waves-light green lighten-1",
    type: "submit",
    name: "action",
    onClick: handleClick
  }, "\u0412\u043E\u0439\u0442\u0438")))));
};

/***/ }),

/***/ "./StartPage/index.js":
/*!****************************!*\
  !*** ./StartPage/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPage": () => (/* binding */ StartPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _components_SignInForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SignInForm */ "./StartPage/components/SignInForm.js");


var StartPage = function StartPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SignInForm__WEBPACK_IMPORTED_MODULE_1__.SignInForm, null);
};

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navbar": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/routes */ "./utils/routes.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "../node_modules/react-router/index.js");



var Navbar = function Navbar() {
  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!JSON.parse(localStorage.getItem("id"))) navigate(_utils_routes__WEBPACK_IMPORTED_MODULE_1__.ROOT);
  }, []);

  var handleQuiet = function handleQuiet() {
    localStorage.removeItem("id");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav-wrapper green darken-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "brand-logo",
    style: {
      marginLeft: "10px"
    }
  }, "Shrek"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    id: "nav-mobile",
    className: "right hide-on-med-and-down"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.EVENT
  }, "\u041C\u043E\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.MAIN
  }, "\u041F\u0440\u0438\u043B\u0430\u0448\u0435\u043D\u0438\u044F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.PROFILE
  }, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.ROOT,
    onClick: handleQuiet
  }, "\u0412\u044B\u0439\u0442\u0438")))));
};

/***/ }),

/***/ "./components/Preloader.js":
/*!*********************************!*\
  !*** ./components/Preloader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preloader": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var Preloader = function Preloader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "preloader-wrapper small active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spinner-layer spinner-blue-only"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle-clipper left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "gap-patch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle-clipper right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "circle"
  }))));
};

/***/ }),

/***/ "./entities/award/index.js":
/*!*********************************!*\
  !*** ./entities/award/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "awardModel": () => (/* reexport module object */ _model__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./entities/award/model/index.js");



/***/ }),

/***/ "./entities/award/model/actionsTypes.js":
/*!**********************************************!*\
  !*** ./entities/award/model/actionsTypes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_AWARDS_SUCCESS": () => (/* binding */ GET_AWARDS_SUCCESS),
/* harmony export */   "GET_AWARDS_STARTED": () => (/* binding */ GET_AWARDS_STARTED),
/* harmony export */   "GET_AWARDS_FAILURE": () => (/* binding */ GET_AWARDS_FAILURE),
/* harmony export */   "ADD_AWARD_SUCCESS": () => (/* binding */ ADD_AWARD_SUCCESS),
/* harmony export */   "DELETE_AWARD_SUCCESS": () => (/* binding */ DELETE_AWARD_SUCCESS)
/* harmony export */ });
var GET_AWARDS_SUCCESS = "GET_AWARDS_SUCCESS";
var GET_AWARDS_STARTED = "GET_AWARDS_STARTED";
var GET_AWARDS_FAILURE = "GET_AWARDS_FAILURE";
var ADD_AWARD_SUCCESS = "ADD_AWARD_SUCCESS";
var DELETE_AWARD_SUCCESS = "DELETE_AWARD_SUCCESS";

/***/ }),

/***/ "./entities/award/model/index.js":
/*!***************************************!*\
  !*** ./entities/award/model/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "initialState": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "thunks": () => (/* reexport module object */ _thunk__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "selectors": () => (/* reexport module object */ _selector__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./entities/award/model/actions");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./entities/award/model/reducer.js");
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunk */ "./entities/award/model/thunk.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./entities/award/model/selector.js");








/***/ }),

/***/ "./entities/award/model/reducer.js":
/*!*****************************************!*\
  !*** ./entities/award/model/reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/award/model/actionsTypes */ "./entities/award/model/actionsTypes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  loading: false,
  awards: [],
  error: null
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_AWARDS_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_AWARDS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        awards: [].concat(_toConsumableArray(state.awards), _toConsumableArray(action.payload.awards))
      });

    case _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_AWARDS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload.error
      });

    case _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_AWARD_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        awards: [].concat(_toConsumableArray(state.awards), [action.payload.awards])
      });

    case _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_AWARD_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        awards: state.awards.filter(function (award) {
          return award["_links"].self.href !== action.payload.link;
        })
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./entities/award/model/selector.js":
/*!******************************************!*\
  !*** ./entities/award/model/selector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "awards": () => (/* binding */ awards)
/* harmony export */ });
var all = function all(state) {
  return state.awards;
};
var loading = function loading(state) {
  return all(state).loading;
};
var error = function error(state) {
  return all(state).error;
};
var awards = function awards(state) {
  return all(state).awards;
};

/***/ }),

/***/ "./entities/award/model/thunk.js":
/*!***************************************!*\
  !*** ./entities/award/model/thunk.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAwards": () => (/* binding */ getAwards),
/* harmony export */   "addAward": () => (/* binding */ addAward),
/* harmony export */   "deleteAward": () => (/* binding */ deleteAward)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entities/award/model/actions */ "./entities/award/model/actions");


var getAwards = function getAwards() {
  return function (dispatch) {
    dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.getAwardsStarted)());
    var id = JSON.parse(localStorage.getItem("id"));
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/prizes/search/findByOwnerId?ownerId=".concat(id)).then(function (res) {
      dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.getAwardsSuccess)(res.data["_embedded"].prizes));
    })["catch"](function (err) {
      dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.getAwardsFailure)(err.message));
    });
  };
};
var addAward = function addAward(data) {
  // example
  // data = {
  //     "type": "кубок",
  //     "ownerId": 2,
  //     "eventId": 2
  // }
  return function (dispatch) {
    dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.getAwardsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("api/prizes", data).then(function (res) {
      dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.addAwardsSuccess)(res.data));
    })["catch"](function (err) {
      dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.getAwardsFailure)(err.message));
    });
  };
};
var deleteAward = function deleteAward(link) {
  return function (dispatch) {
    dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.getAwardsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](link).then(function (res) {
      return dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.deleteAwardSuccess)(link));
    })["catch"](function (err) {
      return dispatch((0,_entities_award_model_actions__WEBPACK_IMPORTED_MODULE_1__.getAwardsFailure)(err));
    });
  };
};

/***/ }),

/***/ "./entities/block/index.js":
/*!*********************************!*\
  !*** ./entities/block/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockModel": () => (/* reexport module object */ _model__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./entities/block/model/index.js");



/***/ }),

/***/ "./entities/block/model/actionTypes.js":
/*!*********************************************!*\
  !*** ./entities/block/model/actionTypes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_BLOCKING_SUCCESS": () => (/* binding */ GET_BLOCKING_SUCCESS),
/* harmony export */   "GET_BLOCKING_STARTED": () => (/* binding */ GET_BLOCKING_STARTED),
/* harmony export */   "GET_BLOCKING_FAILURE": () => (/* binding */ GET_BLOCKING_FAILURE),
/* harmony export */   "DELETE_BLOCKING_SUCCESS": () => (/* binding */ DELETE_BLOCKING_SUCCESS),
/* harmony export */   "CHANGE_BLOCKING_SUCCESS": () => (/* binding */ CHANGE_BLOCKING_SUCCESS),
/* harmony export */   "ADD_BLOCKING_SUCCESS": () => (/* binding */ ADD_BLOCKING_SUCCESS)
/* harmony export */ });
var GET_BLOCKING_SUCCESS = "GET_BLOCKING_SUCCESS";
var GET_BLOCKING_STARTED = "GET_BLOCKING_STARTED";
var GET_BLOCKING_FAILURE = "GET_BLOCKING_FAILURE";
var DELETE_BLOCKING_SUCCESS = "DELETE_BLOCKING_SUCCESS";
var CHANGE_BLOCKING_SUCCESS = "CHANGE_BLOCKING_SUCCESS";
var ADD_BLOCKING_SUCCESS = "ADD_BLOCKING_SUCCESS";

/***/ }),

/***/ "./entities/block/model/actions.js":
/*!*****************************************!*\
  !*** ./entities/block/model/actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockingSuccess": () => (/* binding */ getBlockingSuccess),
/* harmony export */   "getBlockingStarted": () => (/* binding */ getBlockingStarted),
/* harmony export */   "getBlockingFailure": () => (/* binding */ getBlockingFailure),
/* harmony export */   "deleteBlockingSuccess": () => (/* binding */ deleteBlockingSuccess),
/* harmony export */   "changeBlockingSuccess": () => (/* binding */ changeBlockingSuccess),
/* harmony export */   "addBlockingSuccess": () => (/* binding */ addBlockingSuccess)
/* harmony export */ });
/* harmony import */ var _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/block/model/actionTypes */ "./entities/block/model/actionTypes.js");
/* harmony import */ var _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entities/profile/model/actionTypes */ "./entities/profile/model/actionTypes.js");


var getBlockingSuccess = function getBlockingSuccess(blocking) {
  return {
    type: _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_BLOCKING_SUCCESS,
    payload: {
      blocking: blocking
    }
  };
};
var getBlockingStarted = function getBlockingStarted() {
  return {
    type: _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_BLOCKING_STARTED
  };
};
var getBlockingFailure = function getBlockingFailure(error) {
  return {
    type: _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_BLOCKING_FAILURE,
    payload: {
      error: error
    }
  };
};
var deleteBlockingSuccess = function deleteBlockingSuccess(link) {
  return {
    type: _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_BLOCKING_SUCCESS,
    payload: {
      link: link
    }
  };
};
var changeBlockingSuccess = function changeBlockingSuccess(link) {
  return {
    type: _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_BLOCKING_SUCCESS,
    payload: {
      link: link
    }
  };
};
var addBlockingSuccess = function addBlockingSuccess(blocking) {
  return {
    type: _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_BLOCKING_SUCCESS,
    payload: {
      blocking: blocking
    }
  };
};

/***/ }),

/***/ "./entities/block/model/index.js":
/*!***************************************!*\
  !*** ./entities/block/model/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "initialState": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "thunks": () => (/* reexport module object */ _thunk__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "selectors": () => (/* reexport module object */ _selector__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./entities/block/model/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./entities/block/model/reducer.js");
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunk */ "./entities/block/model/thunk.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./entities/block/model/selector.js");








/***/ }),

/***/ "./entities/block/model/reducer.js":
/*!*****************************************!*\
  !*** ./entities/block/model/reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/block/model/actionTypes */ "./entities/block/model/actionTypes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  loading: false,
  blocking: [],
  error: null
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_BLOCKING_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_BLOCKING_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        blocking: [].concat(_toConsumableArray(state.blocking), _toConsumableArray(action.payload.blocking))
      });

    case _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_BLOCKING_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload.error
      });

    case _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_BLOCKING_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        blocking: state.blocking.filter(function (blocking) {
          return blocking["_links"].self.href !== action.payload.link;
        })
      });

    case _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_BLOCKING_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        blocking: [].concat(_toConsumableArray(state.blocking.filter(function (blocking) {
          return blocking["_links"].self.href !== action.payload.link;
        })), [action.payload.event])
      });

    case _entities_block_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_BLOCKING_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        blocking: [].concat(_toConsumableArray(state.blocking), [action.payload.blocking])
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./entities/block/model/selector.js":
/*!******************************************!*\
  !*** ./entities/block/model/selector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "blocking": () => (/* binding */ blocking)
/* harmony export */ });
var all = function all(state) {
  return state.blocking;
};
var loading = function loading(state) {
  return all(state).loading;
};
var error = function error(state) {
  return all(state).error;
};
var blocking = function blocking(state) {
  return all(state).blocking;
};

/***/ }),

/***/ "./entities/block/model/thunk.js":
/*!***************************************!*\
  !*** ./entities/block/model/thunk.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlocking": () => (/* binding */ getBlocking),
/* harmony export */   "deleteBlocking": () => (/* binding */ deleteBlocking),
/* harmony export */   "addBlocking": () => (/* binding */ addBlocking),
/* harmony export */   "changeBlocking": () => (/* binding */ changeBlocking)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./entities/block/model/actions.js");


var getBlocking = function getBlocking() {
  return function (dispatch) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getBlockingStarted)());
    var id = JSON.parse(localStorage.getItem("id"));
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/blockList/search/findByIdBlockingId?blockingId=".concat(id)).then(function (res) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getBlockingSuccess)(res.data["_embedded"].blockList));
    })["catch"](function (err) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getBlockingFailure)(err.message));
    });
  };
};
var deleteBlocking = function deleteBlocking(link) {
  return function (dispatch) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getBlockingStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](link).then(function (res) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.deleteBlockingSuccess)(link));
    })["catch"](function (err) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getBlockingFailure)(err));
    });
  };
};
var addBlocking = function addBlocking(blockedId, type) {
  return function (dispatch) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getBlockingStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/blockList", {
      id: {
        "blockingId": JSON.parse(localStorage.getItem("id")),
        "blockedId": blockedId
      },
      type: type
    }).then(function (res) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.addBlockingSuccess)(res.data));
    })["catch"](function (err) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getBlockingFailure)(err.message));
    });
  };
};
var changeBlocking = function changeBlocking(link) {
  return function (dispatch) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getBlockingStarted)());
  };
};

/***/ }),

/***/ "./entities/configureStore.js":
/*!************************************!*\
  !*** ./entities/configureStore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-logger */ "../node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _invitation_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invitation/index */ "./entities/invitation/index.js");
/* harmony import */ var _profile_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/index */ "./entities/profile/index.js");
/* harmony import */ var _event_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event/index */ "./entities/event/index.js");
/* harmony import */ var _location_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location/index */ "./entities/location/index.js");
/* harmony import */ var _block_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block/index */ "./entities/block/index.js");
/* harmony import */ var _award_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./award/index */ "./entities/award/index.js");










var configureStore = function configureStore(initialState) {
  var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({
    invitations: _invitation_index__WEBPACK_IMPORTED_MODULE_1__.invitationModel.reducer,
    profile: _profile_index__WEBPACK_IMPORTED_MODULE_2__.personageModel.reducer,
    events: _event_index__WEBPACK_IMPORTED_MODULE_3__.eventModel.reducer,
    locations: _location_index__WEBPACK_IMPORTED_MODULE_4__.locationModel.reducer,
    blocking: _block_index__WEBPACK_IMPORTED_MODULE_5__.blockModel.reducer,
    awards: _award_index__WEBPACK_IMPORTED_MODULE_6__.awardModel.reducer
  });
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_7__.compose;
  var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_8__["default"], (redux_logger__WEBPACK_IMPORTED_MODULE_0___default())];
  return (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(rootReducer, initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_7__.applyMiddleware.apply(void 0, middlewares)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configureStore);

/***/ }),

/***/ "./entities/event/index.js":
/*!*********************************!*\
  !*** ./entities/event/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventModel": () => (/* reexport module object */ _model__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./entities/event/model/index.js");



/***/ }),

/***/ "./entities/event/model/actionTypes.js":
/*!*********************************************!*\
  !*** ./entities/event/model/actionTypes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_EVENTS_SUCCESS": () => (/* binding */ GET_EVENTS_SUCCESS),
/* harmony export */   "GET_EVENTS_STARTED": () => (/* binding */ GET_EVENTS_STARTED),
/* harmony export */   "GET_EVENTS_FAILURE": () => (/* binding */ GET_EVENTS_FAILURE),
/* harmony export */   "ADD_EVENT_SUCCESS": () => (/* binding */ ADD_EVENT_SUCCESS),
/* harmony export */   "DELETE_EVENT_SUCCESS": () => (/* binding */ DELETE_EVENT_SUCCESS),
/* harmony export */   "CHANGE_EVENT_SUCCESS": () => (/* binding */ CHANGE_EVENT_SUCCESS)
/* harmony export */ });
var GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
var GET_EVENTS_STARTED = "GET_EVENTS_STARTED";
var GET_EVENTS_FAILURE = "GET_EVENTS_FAILURE";
var ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
var DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
var CHANGE_EVENT_SUCCESS = "CHANGE_EVENT_SUCCESS";

/***/ }),

/***/ "./entities/event/model/actions.js":
/*!*****************************************!*\
  !*** ./entities/event/model/actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEventsSuccess": () => (/* binding */ getEventsSuccess),
/* harmony export */   "addEventSuccess": () => (/* binding */ addEventSuccess),
/* harmony export */   "getEventsStarted": () => (/* binding */ getEventsStarted),
/* harmony export */   "getEventsFailure": () => (/* binding */ getEventsFailure),
/* harmony export */   "deleteEventSuccess": () => (/* binding */ deleteEventSuccess),
/* harmony export */   "changeEventSuccess": () => (/* binding */ changeEventSuccess)
/* harmony export */ });
/* harmony import */ var _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/event/model/actionTypes */ "./entities/event/model/actionTypes.js");

var getEventsSuccess = function getEventsSuccess(events) {
  return {
    type: _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_EVENTS_SUCCESS,
    payload: {
      events: events
    }
  };
};
var addEventSuccess = function addEventSuccess(event) {
  return {
    type: _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_EVENT_SUCCESS,
    payload: {
      event: event
    }
  };
};
var getEventsStarted = function getEventsStarted() {
  return {
    type: _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_EVENTS_STARTED
  };
};
var getEventsFailure = function getEventsFailure(error) {
  return {
    type: _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_EVENTS_FAILURE,
    payload: {
      error: error
    }
  };
};
var deleteEventSuccess = function deleteEventSuccess(link) {
  return {
    type: _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_EVENT_SUCCESS,
    payload: {
      link: link
    }
  };
};
var changeEventSuccess = function changeEventSuccess(event, link) {
  return {
    type: _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_EVENT_SUCCESS,
    payload: {
      event: event,
      link: link
    }
  };
};

/***/ }),

/***/ "./entities/event/model/index.js":
/*!***************************************!*\
  !*** ./entities/event/model/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "initialState": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "thunks": () => (/* reexport module object */ _thunk__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "selectors": () => (/* reexport module object */ _selector__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./entities/event/model/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./entities/event/model/reducer.js");
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunk */ "./entities/event/model/thunk.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./entities/event/model/selector.js");








/***/ }),

/***/ "./entities/event/model/reducer.js":
/*!*****************************************!*\
  !*** ./entities/event/model/reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/event/model/actionTypes */ "./entities/event/model/actionTypes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  loading: false,
  events: [],
  error: null
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_EVENTS_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_EVENTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        events: [].concat(_toConsumableArray(state.events), _toConsumableArray(action.payload.events))
      });

    case _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_EVENTS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload.error
      });

    case _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_EVENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        events: [].concat(_toConsumableArray(state.events), [action.payload.events])
      });

    case _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_EVENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        events: state.events.filter(function (event) {
          return event["_links"].self.href !== action.payload.link;
        })
      });

    case _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_EVENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        events: [].concat(_toConsumableArray(state.events.filter(function (event) {
          return event["_links"].self.href !== action.payload.link;
        })), [action.payload.event])
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./entities/event/model/selector.js":
/*!******************************************!*\
  !*** ./entities/event/model/selector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
var all = function all(state) {
  return state.events;
};
var loading = function loading(state) {
  return all(state).loading;
};
var error = function error(state) {
  return all(state).error;
};
var events = function events(state) {
  return all(state).events;
};

/***/ }),

/***/ "./entities/event/model/thunk.js":
/*!***************************************!*\
  !*** ./entities/event/model/thunk.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEvents": () => (/* binding */ getEvents),
/* harmony export */   "deleteEvent": () => (/* binding */ deleteEvent),
/* harmony export */   "changeEvent": () => (/* binding */ changeEvent),
/* harmony export */   "addEvent": () => (/* binding */ addEvent)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entities/event/model/actions */ "./entities/event/model/actions.js");


var getEvents = function getEvents() {
  return function (dispatch) {
    dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsStarted)());
    var id = JSON.parse(localStorage.getItem("id"));
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/events/search/findByOwnerId?ownerId=".concat(id)).then(function (res) {
      dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsSuccess)(res.data["_embedded"].events));
    })["catch"](function (err) {
      dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsFailure)(err.message));
    });
  };
}; //ToDo: удаление наград

var deleteEvent = function deleteEvent(link) {
  return function (dispatch) {
    dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](link).then(function (res) {
      return dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.deleteEventSuccess)(link));
    })["catch"](function (err) {
      return dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsFailure)(err));
    });
  };
};
var changeEvent = function changeEvent(link, data) {
  return function (dispatch) {
    dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch(link, data).then(function (res) {
      return dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.changeEventSuccess)(res.data, link));
    })["catch"](function (err) {
      return dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsFailure)(err));
    });
  };
};
var addEvent = function addEvent(name, description, location, dateStart, dateEnd, thingControl, personageType, visibility) {
  var id = JSON.parse(localStorage.getItem("id"));
  return function (dispatch) {
    dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().post('api/events', {
      name: name,
      description: description,
      location: location,
      dateStart: dateStart,
      dateEnd: dateEnd,
      thingControls: thingControl,
      personageTypes: personageType,
      owner: "/api/personages/".concat(id),
      visibility: visibility
    }).then(function (res) {
      return dispatch(addEventSuccess(res.data));
    })["catch"](function (err) {
      return dispatch((0,_entities_event_model_actions__WEBPACK_IMPORTED_MODULE_1__.getEventsFailure)(err));
    });
  };
};

/***/ }),

/***/ "./entities/invitation/index.js":
/*!**************************************!*\
  !*** ./entities/invitation/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invitationModel": () => (/* reexport module object */ _model__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./entities/invitation/model/index.js");



/***/ }),

/***/ "./entities/invitation/model/actionTypes.js":
/*!**************************************************!*\
  !*** ./entities/invitation/model/actionTypes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_INVITATIONS_SUCCESS": () => (/* binding */ GET_INVITATIONS_SUCCESS),
/* harmony export */   "GET_INVITATIONS_STARTED": () => (/* binding */ GET_INVITATIONS_STARTED),
/* harmony export */   "GET_INVITATIONS_FAILURE": () => (/* binding */ GET_INVITATIONS_FAILURE),
/* harmony export */   "DELETE_INVITATION_SUCCESS": () => (/* binding */ DELETE_INVITATION_SUCCESS),
/* harmony export */   "CHANGE_INVITATION_SUCCESS": () => (/* binding */ CHANGE_INVITATION_SUCCESS)
/* harmony export */ });
var GET_INVITATIONS_SUCCESS = "GET_INVITATIONS_SUCCESS";
var GET_INVITATIONS_STARTED = "GET_INVITATIONS_STARTED";
var GET_INVITATIONS_FAILURE = "GET_INVITATIONS_FAILURE";
var DELETE_INVITATION_SUCCESS = "DELETE_INVITATION_SUCCESS";
var CHANGE_INVITATION_SUCCESS = "CHANGE_INVITATION_SUCCESS";

/***/ }),

/***/ "./entities/invitation/model/actions.js":
/*!**********************************************!*\
  !*** ./entities/invitation/model/actions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInvitationsSuccess": () => (/* binding */ getInvitationsSuccess),
/* harmony export */   "getInvitationsStarted": () => (/* binding */ getInvitationsStarted),
/* harmony export */   "getInvitationsFailure": () => (/* binding */ getInvitationsFailure),
/* harmony export */   "deleteInvitationSuccess": () => (/* binding */ deleteInvitationSuccess),
/* harmony export */   "changeInvitationSuccess": () => (/* binding */ changeInvitationSuccess)
/* harmony export */ });
/* harmony import */ var _entities_invitation_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/invitation/model/actionTypes */ "./entities/invitation/model/actionTypes.js");
/* harmony import */ var _entities_event_model_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entities/event/model/actionTypes */ "./entities/event/model/actionTypes.js");


var getInvitationsSuccess = function getInvitationsSuccess(invitations) {
  return {
    type: _entities_invitation_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_INVITATIONS_SUCCESS,
    payload: {
      invitations: invitations
    }
  };
};
var getInvitationsStarted = function getInvitationsStarted() {
  return {
    type: _entities_invitation_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_INVITATIONS_STARTED
  };
};
var getInvitationsFailure = function getInvitationsFailure(error) {
  return {
    type: _entities_invitation_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_INVITATIONS_FAILURE,
    payload: {
      error: error
    }
  };
};
var deleteInvitationSuccess = function deleteInvitationSuccess(link) {
  return {
    type: _entities_invitation_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_INVITATION_SUCCESS,
    payload: {
      link: link
    }
  };
};
var changeInvitationSuccess = function changeInvitationSuccess(event, link) {
  return {
    type: _entities_invitation_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_INVITATION_SUCCESS,
    payload: {
      event: event,
      link: link
    }
  };
};

/***/ }),

/***/ "./entities/invitation/model/index.js":
/*!********************************************!*\
  !*** ./entities/invitation/model/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "initialState": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "thunks": () => (/* reexport module object */ _thunk__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "selectors": () => (/* reexport module object */ _selector__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./entities/invitation/model/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./entities/invitation/model/reducer.js");
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunk */ "./entities/invitation/model/thunk.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./entities/invitation/model/selector.js");








/***/ }),

/***/ "./entities/invitation/model/reducer.js":
/*!**********************************************!*\
  !*** ./entities/invitation/model/reducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./entities/invitation/model/actionTypes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  loading: false,
  invitations: [],
  error: null
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_INVITATIONS_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_INVITATIONS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        invitations: [].concat(_toConsumableArray(state.invitations), _toConsumableArray(action.payload.invitations))
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_INVITATIONS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload.error
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_INVITATION_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        events: state.invitations.filter(function (invitation) {
          return invitation["_links"].self.href !== action.payload.link;
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_INVITATION_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        events: [].concat(_toConsumableArray(state.invitations.filter(function (invitation) {
          return invitation["_links"].self.href !== action.payload.link;
        })), [action.payload.event])
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./entities/invitation/model/selector.js":
/*!***********************************************!*\
  !*** ./entities/invitation/model/selector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "invitations": () => (/* binding */ invitations)
/* harmony export */ });
var all = function all(state) {
  return state.invitations;
};
var loading = function loading(state) {
  return all(state).loading;
};
var error = function error(state) {
  return all(state).error;
};
var invitations = function invitations(state) {
  return all(state).invitations;
};

/***/ }),

/***/ "./entities/invitation/model/thunk.js":
/*!********************************************!*\
  !*** ./entities/invitation/model/thunk.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInvitations": () => (/* binding */ getInvitations),
/* harmony export */   "deleteInvitation": () => (/* binding */ deleteInvitation),
/* harmony export */   "changeInvitation": () => (/* binding */ changeInvitation)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./entities/invitation/model/actions.js");


var getInvitations = function getInvitations() {
  return function (dispatch) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getInvitationsStarted)());
    var id = JSON.parse(localStorage.getItem("id"));
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/invitations/search/findByPersonageId?personageId=".concat(id)).then(function (res) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getInvitationsSuccess)(res.data["_embedded"].invitations));
    })["catch"](function (err) {
      dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getInvitationsFailure)(err.message));
    });
  };
}; //ToDo: удаление наград

var deleteInvitation = function deleteInvitation(link) {
  return function (dispatch) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getInvitationsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](link).then(function (res) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.deleteInvitationSuccess)(link));
    })["catch"](function (err) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getInvitationsFailure)(err));
    });
  };
};
var changeInvitation = function changeInvitation(link, data) {
  return function (dispatch) {
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getInvitationsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch(link, data).then(function (res) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.changeInvitationSuccess)(res.data, link));
    })["catch"](function (err) {
      return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getInvitationsFailure)(err));
    });
  };
};

/***/ }),

/***/ "./entities/location/index.js":
/*!************************************!*\
  !*** ./entities/location/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationModel": () => (/* reexport module object */ _model__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./entities/location/model/index.js");



/***/ }),

/***/ "./entities/location/model/actions.js":
/*!********************************************!*\
  !*** ./entities/location/model/actions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocationsSuccess": () => (/* binding */ getLocationsSuccess),
/* harmony export */   "getLocationsStarted": () => (/* binding */ getLocationsStarted),
/* harmony export */   "getLocationsFailure": () => (/* binding */ getLocationsFailure)
/* harmony export */ });
/* harmony import */ var _entities_location_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/location/model/actionsTypes */ "./entities/location/model/actionsTypes.js");

var getLocationsSuccess = function getLocationsSuccess(locations) {
  return {
    type: _entities_location_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_LOCATIONS_SUCCESS,
    payload: {
      locations: locations
    }
  };
};
var getLocationsStarted = function getLocationsStarted() {
  return {
    type: _entities_location_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_LOCATIONS_STARTED
  };
};
var getLocationsFailure = function getLocationsFailure(error) {
  return {
    type: _entities_location_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_LOCATIONS_FAILURE,
    payload: {
      error: error
    }
  };
};

/***/ }),

/***/ "./entities/location/model/actionsTypes.js":
/*!*************************************************!*\
  !*** ./entities/location/model/actionsTypes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_LOCATIONS_SUCCESS": () => (/* binding */ GET_LOCATIONS_SUCCESS),
/* harmony export */   "GET_LOCATIONS_STARTED": () => (/* binding */ GET_LOCATIONS_STARTED),
/* harmony export */   "GET_LOCATIONS_FAILURE": () => (/* binding */ GET_LOCATIONS_FAILURE)
/* harmony export */ });
var GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS";
var GET_LOCATIONS_STARTED = "GET_LOCATIONS_STARTED";
var GET_LOCATIONS_FAILURE = "GET_LOCATIONS_FAILURE";

/***/ }),

/***/ "./entities/location/model/index.js":
/*!******************************************!*\
  !*** ./entities/location/model/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "initialState": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "thunks": () => (/* reexport module object */ _thunk__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "selectors": () => (/* reexport module object */ _selector__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./entities/location/model/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./entities/location/model/reducer.js");
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunk */ "./entities/location/model/thunk.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./entities/location/model/selector.js");








/***/ }),

/***/ "./entities/location/model/reducer.js":
/*!********************************************!*\
  !*** ./entities/location/model/reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _entities_location_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/location/model/actionsTypes */ "./entities/location/model/actionsTypes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  loading: false,
  locations: [],
  error: null
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _entities_location_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_LOCATIONS_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _entities_location_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_LOCATIONS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        locations: [].concat(_toConsumableArray(state.locations), _toConsumableArray(action.payload.locations))
      });

    case _entities_location_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_LOCATIONS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload.error
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./entities/location/model/selector.js":
/*!*********************************************!*\
  !*** ./entities/location/model/selector.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "locations": () => (/* binding */ locations)
/* harmony export */ });
var all = function all(state) {
  return state.locations;
};
var loading = function loading(state) {
  return all(state).loading;
};
var error = function error(state) {
  return all(state).error;
};
var locations = function locations(state) {
  return all(state).locations;
};

/***/ }),

/***/ "./entities/location/model/thunk.js":
/*!******************************************!*\
  !*** ./entities/location/model/thunk.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocations": () => (/* binding */ getLocations)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_location_model_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entities/location/model/actions */ "./entities/location/model/actions.js");


var getLocations = function getLocations() {
  return function (dispatch) {
    dispatch((0,_entities_location_model_actions__WEBPACK_IMPORTED_MODULE_1__.getLocationsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/locations').then(function (res) {
      dispatch((0,_entities_location_model_actions__WEBPACK_IMPORTED_MODULE_1__.getLocationsSuccess)(res.data["_embedded"].locations));
    })["catch"](function (err) {
      dispatch((0,_entities_location_model_actions__WEBPACK_IMPORTED_MODULE_1__.getLocationsFailure)(err.message));
    });
  };
};

/***/ }),

/***/ "./entities/profile/index.js":
/*!***********************************!*\
  !*** ./entities/profile/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "personageModel": () => (/* reexport module object */ _model__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./entities/profile/model/index.js");



/***/ }),

/***/ "./entities/profile/model/actionTypes.js":
/*!***********************************************!*\
  !*** ./entities/profile/model/actionTypes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_PROFILE_SUCCESS": () => (/* binding */ GET_PROFILE_SUCCESS),
/* harmony export */   "GET_PROFILE_STARTED": () => (/* binding */ GET_PROFILE_STARTED),
/* harmony export */   "GET_PROFILE_FAILURE": () => (/* binding */ GET_PROFILE_FAILURE),
/* harmony export */   "GET_WEAPONS_SUCCESS": () => (/* binding */ GET_WEAPONS_SUCCESS),
/* harmony export */   "GET_WEAPONS_STARTED": () => (/* binding */ GET_WEAPONS_STARTED),
/* harmony export */   "GET_WEAPONS_FAILURE": () => (/* binding */ GET_WEAPONS_FAILURE),
/* harmony export */   "ADD_WEAPON_SUCCESS": () => (/* binding */ ADD_WEAPON_SUCCESS),
/* harmony export */   "CHANGE_WEAPON_SUCCESS": () => (/* binding */ CHANGE_WEAPON_SUCCESS),
/* harmony export */   "GET_CLOTHING_SUCCESS": () => (/* binding */ GET_CLOTHING_SUCCESS),
/* harmony export */   "GET_CLOTHING_STARTED": () => (/* binding */ GET_CLOTHING_STARTED),
/* harmony export */   "GET_CLOTHING_FAILURE": () => (/* binding */ GET_CLOTHING_FAILURE),
/* harmony export */   "ADD_CLOTHING_SUCCESS": () => (/* binding */ ADD_CLOTHING_SUCCESS),
/* harmony export */   "CHANGE_CLOTHING_SUCCESS": () => (/* binding */ CHANGE_CLOTHING_SUCCESS)
/* harmony export */ });
var GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
var GET_PROFILE_STARTED = "GET_PROFILE_STARTED";
var GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";
var GET_WEAPONS_SUCCESS = "GET_WEAPONS_SUCCESS";
var GET_WEAPONS_STARTED = "GET_WEAPONS_STARTED";
var GET_WEAPONS_FAILURE = "GET_WEAPONS_FAILURE";
var ADD_WEAPON_SUCCESS = "ADD_WEAPON_SUCCESS";
var CHANGE_WEAPON_SUCCESS = "CHANGE_WEAPON_SUCCESS";
var GET_CLOTHING_SUCCESS = "GET_CLOTHING_SUCCESS";
var GET_CLOTHING_STARTED = "GET_CLOTHING_STARTED";
var GET_CLOTHING_FAILURE = "GET_CLOTHING_FAILURE";
var ADD_CLOTHING_SUCCESS = "ADD_CLOTHING_SUCCESS";
var CHANGE_CLOTHING_SUCCESS = "CHANGE_CLOTHING_SUCCESS";

/***/ }),

/***/ "./entities/profile/model/actions.js":
/*!*******************************************!*\
  !*** ./entities/profile/model/actions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfileSuccess": () => (/* binding */ getProfileSuccess),
/* harmony export */   "getProfileStarted": () => (/* binding */ getProfileStarted),
/* harmony export */   "getProfileFailure": () => (/* binding */ getProfileFailure),
/* harmony export */   "getWeaponsSuccess": () => (/* binding */ getWeaponsSuccess),
/* harmony export */   "getWeaponsStarted": () => (/* binding */ getWeaponsStarted),
/* harmony export */   "getWeaponsFailure": () => (/* binding */ getWeaponsFailure),
/* harmony export */   "addWeaponSuccess": () => (/* binding */ addWeaponSuccess),
/* harmony export */   "changeWeaponSuccess": () => (/* binding */ changeWeaponSuccess),
/* harmony export */   "getClothingSuccess": () => (/* binding */ getClothingSuccess),
/* harmony export */   "getClothingStarted": () => (/* binding */ getClothingStarted),
/* harmony export */   "getClothingFailure": () => (/* binding */ getClothingFailure),
/* harmony export */   "addClothingSuccess": () => (/* binding */ addClothingSuccess),
/* harmony export */   "changeClothingSuccess": () => (/* binding */ changeClothingSuccess)
/* harmony export */ });
/* harmony import */ var _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/profile/model/actionTypes */ "./entities/profile/model/actionTypes.js");

var getProfileSuccess = function getProfileSuccess(profile) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_PROFILE_SUCCESS,
    payload: {
      profile: profile
    }
  };
};
var getProfileStarted = function getProfileStarted() {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_PROFILE_STARTED
  };
};
var getProfileFailure = function getProfileFailure(error) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_PROFILE_FAILURE,
    payload: {
      error: error
    }
  };
};
var getWeaponsSuccess = function getWeaponsSuccess(weapons) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_WEAPONS_SUCCESS,
    payload: {
      weapons: weapons
    }
  };
};
var getWeaponsStarted = function getWeaponsStarted() {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_WEAPONS_STARTED
  };
};
var getWeaponsFailure = function getWeaponsFailure(error) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_WEAPONS_FAILURE,
    payload: {
      error: error
    }
  };
};
var addWeaponSuccess = function addWeaponSuccess(weapon) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_WEAPON_SUCCESS,
    payload: {
      weapon: weapon
    }
  };
};
var changeWeaponSuccess = function changeWeaponSuccess(link) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_WEAPON_SUCCESS,
    payload: {
      link: link
    }
  };
};
var getClothingSuccess = function getClothingSuccess(clothing) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_CLOTHING_SUCCESS,
    payload: {
      clothing: clothing
    }
  };
};
var getClothingStarted = function getClothingStarted() {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_CLOTHING_STARTED
  };
};
var getClothingFailure = function getClothingFailure(error) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_CLOTHING_FAILURE,
    payload: {
      error: error
    }
  };
};
var addClothingSuccess = function addClothingSuccess(clothing) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_CLOTHING_SUCCESS,
    payload: {
      clothing: clothing
    }
  };
};
var changeClothingSuccess = function changeClothingSuccess(link) {
  return {
    type: _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_CLOTHING_SUCCESS,
    payload: {
      link: link
    }
  };
};

/***/ }),

/***/ "./entities/profile/model/index.js":
/*!*****************************************!*\
  !*** ./entities/profile/model/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* reexport module object */ _actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "initialState": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "thunks": () => (/* reexport module object */ _thunk__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "selectors": () => (/* reexport module object */ _selector__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./entities/profile/model/actions.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./entities/profile/model/reducer.js");
/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thunk */ "./entities/profile/model/thunk.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./entities/profile/model/selector.js");








/***/ }),

/***/ "./entities/profile/model/reducer.js":
/*!*******************************************!*\
  !*** ./entities/profile/model/reducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/profile/model/actionTypes */ "./entities/profile/model/actionTypes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  loading: false,
  error: null,
  profile: [],
  weapons: [],
  clothing: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_PROFILE_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_PROFILE_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        profile: [].concat(_toConsumableArray(state.profile), [action.payload.profile])
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_PROFILE_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload.error
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_WEAPONS_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_WEAPONS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        weapons: [].concat(_toConsumableArray(state.weapons), _toConsumableArray(action.payload.weapons))
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_WEAPON_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        weapons: [].concat(_toConsumableArray(state.weapons), [action.payload.weapon])
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_WEAPONS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload.error
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_CLOTHING_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_CLOTHING_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        clothing: [].concat(_toConsumableArray(state.clothing), _toConsumableArray(action.payload.clothing))
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.GET_CLOTHING_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload.error
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_CLOTHING_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        clothing: [].concat(_toConsumableArray(state.clothing), [action.payload.clothing])
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_CLOTHING_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        clothing: state.clothing.filter(function (clothing) {
          return clothing["_links"].self.href !== action.payload.link;
        })
      });

    case _entities_profile_model_actionTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_WEAPON_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: null,
        weapons: state.weapons.filter(function (weapon) {
          return weapon["_links"].self.href !== action.payload.link;
        })
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./entities/profile/model/selector.js":
/*!********************************************!*\
  !*** ./entities/profile/model/selector.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "profile": () => (/* binding */ profile),
/* harmony export */   "weapons": () => (/* binding */ weapons),
/* harmony export */   "clothing": () => (/* binding */ clothing)
/* harmony export */ });
var all = function all(state) {
  return state.profile;
};
var loading = function loading(state) {
  return all(state).loading;
};
var error = function error(state) {
  return all(state).error;
};
var profile = function profile(state) {
  return all(state).profile;
};
var weapons = function weapons(state) {
  return all(state).weapons;
};
var clothing = function clothing(state) {
  return all(state).clothing;
};

/***/ }),

/***/ "./entities/profile/model/thunk.js":
/*!*****************************************!*\
  !*** ./entities/profile/model/thunk.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPersonage": () => (/* binding */ getPersonage),
/* harmony export */   "addWeapon": () => (/* binding */ addWeapon),
/* harmony export */   "addClothing": () => (/* binding */ addClothing),
/* harmony export */   "exchangeWeapon": () => (/* binding */ exchangeWeapon),
/* harmony export */   "exchangeClothing": () => (/* binding */ exchangeClothing),
/* harmony export */   "deleteClothing": () => (/* binding */ deleteClothing),
/* harmony export */   "deleteWeapon": () => (/* binding */ deleteWeapon)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @entities/profile/model/actions */ "./entities/profile/model/actions.js");


var getPersonage = function getPersonage() {
  return function (dispatch) {
    var id = JSON.parse(localStorage.getItem("id"));
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/personages/".concat(id)).then(function (res) {
      dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileSuccess)(res.data));
    })["catch"](function (err) {
      dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getProfileFailure)(err.message));
    });
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/weapons/search/findByOwnerId?ownerId=".concat(id)).then(function (res) {
      dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsSuccess)(res.data["_embedded"].weapons));
    })["catch"](function (err) {
      dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsFailure)(err.message));
    });
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/clothing/search/findByOwnerId?ownerId=".concat(id)).then(function (res) {
      dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingSuccess)(res.data["_embedded"].clothing));
    })["catch"](function (err) {
      dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingFailure)(err.message));
    });
  };
};
var addWeapon = function addWeapon(name, damage, type) {
  return function (dispatch) {
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/weapons', {
      "name": name,
      "damage": damage,
      "type": type,
      "ownerId": JSON.parse(localStorage.getItem("id"))
    }).then(function (res) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.addWeaponSuccess)(res.data));
    })["catch"](function (err) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsFailure)(err.message));
    });
  };
};
var addClothing = function addClothing(name, type) {
  return function (dispatch) {
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/clothing', {
      "name": name,
      "type": type,
      "ownerId": JSON.parse(localStorage.getItem("id"))
    }).then(function (res) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.addClothingSuccess)(res.data));
    })["catch"](function (err) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingFailure)(err.message));
    });
  };
};
var exchangeWeapon = function exchangeWeapon(link, id) {
  return function (dispatch) {
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch(link, {
      "ownerId": id
    }).then(function (res) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.changeWeaponSuccess)(link));
    })["catch"](function (err) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsFailure)(err));
    });
  };
};
var exchangeClothing = function exchangeClothing(link, id) {
  return function (dispatch) {
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default().patch(link, {
      "ownerId": id
    }).then(function (res) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.changeClothingSuccess)(link));
    })["catch"](function (err) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingFailure)(err));
    });
  };
};
var deleteClothing = function deleteClothing(link) {
  return function (dispatch) {
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](link).then(function (res) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.changeClothingSuccess)(link));
    })["catch"](function (err) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getClothingFailure)(err));
    });
  };
};
var deleteWeapon = function deleteWeapon(link) {
  return function (dispatch) {
    dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsStarted)());
    axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"](link).then(function (res) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.changeWeaponSuccess)(link));
    })["catch"](function (err) {
      return dispatch((0,_entities_profile_model_actions__WEBPACK_IMPORTED_MODULE_1__.getWeaponsFailure)(err));
    });
  };
};

/***/ }),

/***/ "./utils/history.js":
/*!**************************!*\
  !*** ./utils/history.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "../node_modules/history/index.js");

var history = (0,history__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ }),

/***/ "./utils/routes.js":
/*!*************************!*\
  !*** ./utils/routes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROOT": () => (/* binding */ ROOT),
/* harmony export */   "MAIN": () => (/* binding */ MAIN),
/* harmony export */   "PROFILE": () => (/* binding */ PROFILE),
/* harmony export */   "EVENT": () => (/* binding */ EVENT)
/* harmony export */ });
var ROOT = "/";
var MAIN = "/main";
var PROFILE = "/profile";
var EVENT = "/myEvent";

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./App.js");



(0,react_dom__WEBPACK_IMPORTED_MODULE_0__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.App, null), document.getElementById('root'));

/***/ }),

/***/ "./StartPage/components/shrek.png":
/*!****************************************!*\
  !*** ./StartPage/components/shrek.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "00f5da3056ad2528b54a97d7f91744b4.png");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./entities/award/model/actions":
/*!**************************************!*\
  !*** ./entities/award/model/actions ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAwardsSuccess": () => (/* binding */ getAwardsSuccess),
/* harmony export */   "getAwardsStarted": () => (/* binding */ getAwardsStarted),
/* harmony export */   "getAwardsFailure": () => (/* binding */ getAwardsFailure),
/* harmony export */   "addAwardsSuccess": () => (/* binding */ addAwardsSuccess),
/* harmony export */   "deleteAwardSuccess": () => (/* binding */ deleteAwardSuccess)
/* harmony export */ });
/* harmony import */ var _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entities/award/model/actionsTypes */ "./entities/award/model/actionsTypes.js");


const getAwardsSuccess = (awards) => {
    return {
        type: _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_AWARDS_SUCCESS,
        payload: {
            awards
        }
    }
}

const getAwardsStarted = () => {
    return {
        type: _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_AWARDS_STARTED
    }
}

const getAwardsFailure = (error) => {
    return {
        type: _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.GET_AWARDS_FAILURE,
        payload: {
            error
        }
    }
}

const addAwardsSuccess = (award) => {
    return {
        type: _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_AWARD_SUCCESS,
        payload: {
            award
        }
    }
}

const deleteAwardSuccess = (link) => {
    return {
        type: _entities_award_model_actionsTypes__WEBPACK_IMPORTED_MODULE_0__.DELETE_AWARD_SUCCESS,
        payload: {
            link
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_babel-polyfill_lib_index_js-node_modules_mat-c82320"], () => (__webpack_require__("../node_modules/babel-polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_babel-polyfill_lib_index_js-node_modules_mat-c82320"], () => (__webpack_require__("./index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map