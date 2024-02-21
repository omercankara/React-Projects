"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var root = ReactDOM.createRoot(document.getElementById("root"));

//Class component içerisinde state yapısı kullanılır
//function component içinde state yapısı kullanulmıyor hooks olmadan
var NewItem = /*#__PURE__*/function (_React$Component) {
  _inherits(NewItem, _React$Component);
  function NewItem(props) {
    var _this;
    _classCallCheck(this, NewItem);
    _this = _callSuper(this, NewItem, [props]);
    _this.onFormSubmit = _this.onFormSubmit.bind(_assertThisInitialized(_this));
    _this.state = {
      error: ''
    };
    return _this;
  }
  _createClass(NewItem, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim();
      if (item) {
        e.target.elements.txtItem.value = "";
        var error = this.props.addItem(item);
        this.setState({
          error: error
        });
      } else {
        console.log("Boş");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-control",
        name: "txtItem",
        type: "text"
      }), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-success btn-sm",
        type: "submit"
      }, "Ekle"))));
    }
  }]);
  return NewItem;
}(React.Component); //main component
function TodoList(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, props.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      key: index,
      item: item,
      deleteItems: props.deleteItems
    });
  })), props.items.length > 0 ? /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-danger mt-3 float-end",
    onClick: props.clear
  }, "Temizle")) : /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warning"
  }, "Herhangi bir g\xF6rev yok"));
}

//child component
function TodoItem(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: "list-group-item"
  }, props.item, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger btn-sm float-end",
    onClick: function onClick() {
      props.deleteItems(props.item);
    }
  }, "X"));
}

//child Component
function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, props.title), /*#__PURE__*/React.createElement("p", null, props.description));
}

//Main components
var TodoApp = /*#__PURE__*/function (_React$Component2) {
  _inherits(TodoApp, _React$Component2);
  function TodoApp(props) {
    var _this2;
    _classCallCheck(this, TodoApp);
    _this2 = _callSuper(this, TodoApp, [props]);
    _this2.clearItems = _this2.clearItems.bind(_assertThisInitialized(_this2));
    _this2.addItem = _this2.addItem.bind(_assertThisInitialized(_this2));
    _this2.deleteItems = _this2.deleteItems.bind(_assertThisInitialized(_this2));
    _this2.state = {
      items: ["1", "2", "3"]
    };
    return _this2;
  }
  _createClass(TodoApp, [{
    key: "deleteItems",
    value: function deleteItems(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return 'Lütfen eleman gir';
      } else if (this.state.items.indexOf(item) > -1) {
        return 'Bu eleman mevcut ';
      }
      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = {
        title: "React App",
        description: "Ömercan kara"
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "container my-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-header"
      }, /*#__PURE__*/React.createElement(Header, {
        title: data.title,
        description: data.description
      })), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.items,
        clear: this.clearItems,
        deleteItems: this.deleteItems
      })), /*#__PURE__*/React.createElement("div", {
        className: "card-footer"
      }, /*#__PURE__*/React.createElement(NewItem, {
        addItem: this.addItem
      }))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var json = localStorage.getItem("items");
      var items = JSON.parse(json);
      if (items) {
        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.items.length != this.state.items.length) {
        var json_string = JSON.stringify(this.state.items);
        localStorage.setItem("items", json_string);
      }
    }
  }]);
  return TodoApp;
}(React.Component);
root.render( /*#__PURE__*/React.createElement(TodoApp, null));
