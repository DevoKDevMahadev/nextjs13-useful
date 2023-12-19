"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _react = _interopRequireWildcard(require("react"));
var _reactSummernote = _interopRequireDefault(require("react-summernote"));
require("./global");
var _constants = require("./constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SummernoteComponent = function SummernoteComponent(_ref) {
  var content = _ref.content,
    onChange = _ref.onChange,
    _ref$config = _ref.config,
    config = _ref$config === void 0 ? {
      expiryDate: _constants.EXPIRY_DATE
    } : _ref$config;
  var _useState = (0, _react.useState)(new Date(config === null || config === void 0 ? void 0 : config.expiryDate)),
    _useState2 = _slicedToArray(_useState, 2),
    expirationDate = _useState2[0],
    setExpirationDate = _useState2[1];
  var editorRef = (0, _react.useRef)(null);
  return new Date() < expirationDate && /*#__PURE__*/_react["default"].createElement(_reactSummernote["default"], {
    className: "w-full h-full min-h-fit max-w-fit",
    disabled: true,
    value: content,
    onInit: function onInit(e) {
      return e === null || e === void 0 ? void 0 : e.summernote("code", content);
    },
    options: {
      innerHeight: "100%",
      outerHeight: "100%",
      disableDragAndDrop: true,
      // lang: "ru-RU",
      // dialogsInBody: true,
      // editable: false,
      // disabled: true,
      toolbar: [
        //   ["style", ["style"]],
        //   ["font", ["bold", "underline", "clear"]],
        //   ["fontname", ["fontname"]],
        //   ["para", ["ul", "ol", "paragraph"]],
        //   ["table", ["table"]],
        //   ["insert", ["link", "picture", "video"]],
        //   ["view", ["fullscreen", "codeview"]],
      ],
      content: {
        content: content
      }
    },
    onChange: onChange
  });
};
module.exports = SummernoteComponent;