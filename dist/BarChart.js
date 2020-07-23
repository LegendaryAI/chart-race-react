"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Bar = _interopRequireDefault(require("./Bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classes = {
  barChart: {
    width: "100%",
    position: "relative"
  },
  container: {
    width: "100%"
  }
};

var BarChart = /*#__PURE__*/function (_React$Component) {
  _inherits(BarChart, _React$Component);

  var _super = _createSuper(BarChart);

  function BarChart(props) {
    var _this;

    _classCallCheck(this, BarChart);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      if (_this.props.start) {
        var intervalId = setInterval(_this.update, _this.props.timeout + _this.props.delay);

        _this.setState({
          intervalId: intervalId
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      clearInterval(_this.state.intervalId);
    });

    _defineProperty(_assertThisInitialized(_this), "update", function () {
      if (_this.state.idx + 1 === _this.props.timeline.length) {
        clearInterval(_this.state.intervalId);
        return;
      }

      _this.setState(function (prevState) {
        var _this$sortAxis = _this.sortAxis(prevState.idx + 1),
            _this$sortAxis2 = _slicedToArray(_this$sortAxis, 2),
            currRank = _this$sortAxis2[0],
            maxVal = _this$sortAxis2[1];

        return {
          idx: prevState.idx + 1,
          prevRank: prevState.currRank,
          currRank: currRank,
          maxVal: maxVal
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sortAxis", function (i, descending) {
      if (descending === undefined) descending = true; // Build a new array to sort e.x. { name: 'some name', val: 1 }

      var toSort = Object.keys(_this.props.data).map(function (name) {
        return {
          name: name,
          val: _this.props.data[name][i]
        };
      }); // Handle the sorting based on the values

      toSort.sort(function (left, right) {
        return left.val - right.val;
      });

      if (descending) {
        toSort.reverse();
      } // Slice based on the maximum items allowed


      var fItems = Object.keys(_this.props.data).length;

      if (_this.maxItems && _this.maxItems <= fItems) {
        toSort = toSort.slice(0, _this.maxItems);
      }

      var maxVal = Math.max.apply(Math, toSort.map(function (item) {
        return item.val;
      }));
      var minVal = Math.min.apply(Math, toSort.map(function (item) {
        return item.val;
      })); // Sorted list of results based on the axis

      return [toSort.reduce(function (ret, item, idx) {
        return _objectSpread(_objectSpread({}, ret), _defineProperty({}, item.name, idx));
      }, {}), minVal, maxVal];
    });

    _defineProperty(_assertThisInitialized(_this), "getInfoFromRank", function (name) {
      var currIdx = _this.state.idx;
      var prevIdx = currIdx > 0 ? currIdx - 1 : 0;
      var value = _this.props.data[name][currIdx];
      var hidden = _this.state.currRank[name] === undefined;

      var currStyle = _objectSpread(_objectSpread({}, _this.props.barStyle), {}, {
        marginTop: "calc(".concat(_this.state.currRank[name], " * ").concat(_this.barHeight, ")"),
        width: "".concat(100 * _this.props.data[name][currIdx] / _this.state.maxVal, "%"),
        backgroundColor: _this.props.colors[name]
      });

      var prevStyle = _objectSpread(_objectSpread({}, _this.props.barStyle), {}, {
        marginTop: "calc(".concat(_this.state.prevRank[name], " * ").concat(_this.barHeight, ")"),
        width: "".concat(100 * _this.props.data[name][prevIdx] / _this.state.maxVal, "%"),
        backgroundColor: _this.props.colors[name]
      });

      return [value, hidden, currStyle, prevStyle];
    });

    _this.barHeight = "calc(".concat(props.barStyle.height, " + ").concat(props.barStyle.marginTop, ")");
    _this.nItmes = Object.keys(_this.props.data).length;
    _this.maxItems = props.maxItems <= _this.nItmes ? props.maxItems : _this.nItmes;
    _this.barChartStyle = {
      height: "calc(".concat(_this.maxItems, " * ").concat(_this.barHeight, ")")
    };

    var _this$sortAxis3 = _this.sortAxis(0),
        _this$sortAxis4 = _slicedToArray(_this$sortAxis3, 2),
        initRank = _this$sortAxis4[0],
        _maxVal = _this$sortAxis4[1];

    _this.state = {
      idx: 0,
      prevRank: initRank,
      currRank: initRank,
      maxVal: _maxVal,
      started: props.start
    };
    return _this;
  }

  _createClass(BarChart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.start) {
        var intervalId = setInterval(this.update, this.props.timeout + this.props.delay);
        this.setState({
          intervalId: intervalId
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: classes.container
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: this.props.timelineStyle
      }, this.props.timeline[this.state.idx]), /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, classes.barChart), this.barChartStyle)
      }, Object.keys(this.props.data).map(function (name) {
        var _this2$getInfoFromRan = _this2.getInfoFromRank(name),
            _this2$getInfoFromRan2 = _slicedToArray(_this2$getInfoFromRan, 4),
            value = _this2$getInfoFromRan2[0],
            hidden = _this2$getInfoFromRan2[1],
            currStyle = _this2$getInfoFromRan2[2],
            prevStyle = _this2$getInfoFromRan2[3];

        if (hidden) return /*#__PURE__*/_react["default"].createElement("div", {
          key: name
        });
        return /*#__PURE__*/_react["default"].createElement(_Bar["default"], {
          name: name,
          value: value,
          label: _this2.props.labels[name],
          currStyle: currStyle,
          prevStyle: prevStyle,
          key: name,
          timeout: _this2.props.timeout,
          textBoxStyle: _this2.props.textBoxStyle,
          width: _this2.props.width
        });
      })));
    }
  }]);

  return BarChart;
}(_react["default"].Component);

var _default = BarChart;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXJDaGFydC5qcyJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiYmFyQ2hhcnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwiY29udGFpbmVyIiwiQmFyQ2hhcnQiLCJwcm9wcyIsInN0YXJ0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwidXBkYXRlIiwidGltZW91dCIsImRlbGF5Iiwic2V0U3RhdGUiLCJjbGVhckludGVydmFsIiwic3RhdGUiLCJpZHgiLCJ0aW1lbGluZSIsImxlbmd0aCIsInByZXZTdGF0ZSIsInNvcnRBeGlzIiwiY3VyclJhbmsiLCJtYXhWYWwiLCJwcmV2UmFuayIsImkiLCJkZXNjZW5kaW5nIiwidW5kZWZpbmVkIiwidG9Tb3J0IiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJtYXAiLCJuYW1lIiwidmFsIiwic29ydCIsImxlZnQiLCJyaWdodCIsInJldmVyc2UiLCJmSXRlbXMiLCJtYXhJdGVtcyIsInNsaWNlIiwiTWF0aCIsIm1heCIsImFwcGx5IiwiaXRlbSIsIm1pblZhbCIsIm1pbiIsInJlZHVjZSIsInJldCIsImN1cnJJZHgiLCJwcmV2SWR4IiwidmFsdWUiLCJoaWRkZW4iLCJjdXJyU3R5bGUiLCJiYXJTdHlsZSIsIm1hcmdpblRvcCIsImJhckhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsInByZXZTdHlsZSIsImhlaWdodCIsIm5JdG1lcyIsImJhckNoYXJ0U3R5bGUiLCJpbml0UmFuayIsInN0YXJ0ZWQiLCJuZXh0UHJvcHMiLCJ0aW1lbGluZVN0eWxlIiwiZ2V0SW5mb0Zyb21SYW5rIiwibGFiZWxzIiwidGV4dEJveFN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEtB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QUFxQm5DLElBQXJCLENBRFA7QUFBQTtBQUFBLFlBQ2hDbUIsS0FEZ0M7QUFBQSxZQUN6QkMsTUFEeUI7QUFBQSxZQUNqQkMsU0FEaUI7QUFBQSxZQUNOTSxTQURNOztBQUV2QyxZQUFHUCxNQUFILEVBQVcsb0JBQVE7QUFBSyxVQUFBLEdBQUcsRUFBRXBCO0FBQVYsVUFBUjtBQUNYLDRCQUNJLGdDQUFDLGVBQUQ7QUFDRSxVQUFBLElBQUksRUFBRUEsSUFEUjtBQUVFLFVBQUEsS0FBSyxFQUFFbUIsS0FGVDtBQUdFLFVBQUEsS0FBSyxFQUFFLE1BQUksQ0FBQzdDLEtBQUwsQ0FBVzhELE1BQVgsQ0FBa0JwQyxJQUFsQixDQUhUO0FBSUUsVUFBQSxTQUFTLEVBQUVxQixTQUpiO0FBS0UsVUFBQSxTQUFTLEVBQUVNLFNBTGI7QUFNRSxVQUFBLEdBQUcsRUFBRTNCLElBTlA7QUFPRSxVQUFBLE9BQU8sRUFBRSxNQUFJLENBQUMxQixLQUFMLENBQVdLLE9BUHRCO0FBUUUsVUFBQSxZQUFZLEVBQUUsTUFBSSxDQUFDTCxLQUFMLENBQVcrRCxZQVIzQjtBQVNFLFVBQUEsS0FBSyxFQUFFLE1BQUksQ0FBQy9ELEtBQUwsQ0FBV0o7QUFUcEIsVUFESjtBQWFELE9BaEJELENBRkosQ0FKRixDQURGO0FBNEJEOzs7O0VBdklrQm9FLGtCQUFNQyxTOztlQTBJZGxFLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhciBmcm9tICcuL0Jhcic7XG5cbmNvbnN0IGNsYXNzZXMgPSB7XG4gIGJhckNoYXJ0OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfVxufVxuY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmJhckhlaWdodCA9IGBjYWxjKCR7cHJvcHMuYmFyU3R5bGUuaGVpZ2h0fSArICR7cHJvcHMuYmFyU3R5bGUubWFyZ2luVG9wfSlgO1xuICAgICAgICB0aGlzLm5JdG1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YSkubGVuZ3RoO1xuICAgICAgICB0aGlzLm1heEl0ZW1zID0gcHJvcHMubWF4SXRlbXMgPD0gdGhpcy5uSXRtZXMgPyBwcm9wcy5tYXhJdGVtcyA6IHRoaXMubkl0bWVzO1xuICAgICAgICB0aGlzLmJhckNoYXJ0U3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGBjYWxjKCR7dGhpcy5tYXhJdGVtc30gKiAke3RoaXMuYmFySGVpZ2h0fSlgLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgW2luaXRSYW5rLCBtYXhWYWxdID0gdGhpcy5zb3J0QXhpcygwKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlkeDogMCxcbiAgICAgICAgICAgIHByZXZSYW5rOiBpbml0UmFuayxcbiAgICAgICAgICAgIGN1cnJSYW5rOiBpbml0UmFuayxcbiAgICAgICAgICAgIG1heFZhbDogbWF4VmFsLFxuICAgICAgICAgICAgc3RhcnRlZDogcHJvcHMuc3RhcnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgIGlmKHRoaXMucHJvcHMuc3RhcnQpe1xuICAgICAgICB2YXIgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlLCB0aGlzLnByb3BzLnRpbWVvdXQgKyB0aGlzLnByb3BzLmRlbGF5KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWxJZDogaW50ZXJ2YWxJZH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLnN0YXJ0KSB7XG4gICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGUsIHRoaXMucHJvcHMudGltZW91dCArIHRoaXMucHJvcHMuZGVsYXkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnRlcnZhbElkOiBpbnRlcnZhbElkfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWxJZCk7XG4gICAgfVxuXG4gICAgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5pZHggKyAxID09PSB0aGlzLnByb3BzLnRpbWVsaW5lLmxlbmd0aCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWxJZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIGxldCBbY3VyclJhbmssIG1heFZhbF0gPSB0aGlzLnNvcnRBeGlzKHByZXZTdGF0ZS5pZHggKyAxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWR4OiBwcmV2U3RhdGUuaWR4ICsgMSxcbiAgICAgICAgICAgICAgICBwcmV2UmFuazogcHJldlN0YXRlLmN1cnJSYW5rLFxuICAgICAgICAgICAgICAgIGN1cnJSYW5rOiBjdXJyUmFuayxcbiAgICAgICAgICAgICAgICBtYXhWYWw6IG1heFZhbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBzb3J0QXhpc1xuICAgICogSGFuZGxlcyBzb3J0aW5nIHRoZSByZXN1bHRzXG4gICAgKiBAcGFyYW0geyp9IGkgaXMgdGhlIGl0ZW0gdG8gc3RhcnQgc29ydGluZyBmcm9tXG4gICAgKiBAcGFyYW0geyp9IGRlc2NlbmRpbmcgaXMgdGhlIGRpcmVjdGlvbiB0byBzb3J0XG4gICAgKi9cbiAgICBzb3J0QXhpcyA9IChpLCBkZXNjZW5kaW5nKSA9PiB7XG4gICAgICBpZihkZXNjZW5kaW5nID09PSB1bmRlZmluZWQpIGRlc2NlbmRpbmcgPSB0cnVlO1xuICAgICAgLy8gQnVpbGQgYSBuZXcgYXJyYXkgdG8gc29ydCBlLnguIHsgbmFtZTogJ3NvbWUgbmFtZScsIHZhbDogMSB9XG4gICAgICBsZXQgdG9Tb3J0ID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhKS5tYXAobmFtZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICB2YWw6IHRoaXMucHJvcHMuZGF0YVtuYW1lXVtpXVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICAvLyBIYW5kbGUgdGhlIHNvcnRpbmcgYmFzZWQgb24gdGhlIHZhbHVlc1xuICAgICAgdG9Tb3J0LnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0LnZhbCAtIHJpZ2h0LnZhbClcbiAgICAgIGlmIChkZXNjZW5kaW5nKSB7XG4gICAgICAgIHRvU29ydC5yZXZlcnNlKClcbiAgICAgIH1cbiAgICAgIC8vIFNsaWNlIGJhc2VkIG9uIHRoZSBtYXhpbXVtIGl0ZW1zIGFsbG93ZWRcbiAgICAgIGNvbnN0IGZJdGVtcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YSkubGVuZ3RoXG4gICAgICBpZiAodGhpcy5tYXhJdGVtcyAmJiB0aGlzLm1heEl0ZW1zIDw9IGZJdGVtcykge1xuICAgICAgICB0b1NvcnQgPSB0b1NvcnQuc2xpY2UoMCwgdGhpcy5tYXhJdGVtcylcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHRvU29ydC5tYXAoaXRlbSA9PiBpdGVtLnZhbCkpXG4gICAgICBjb25zdCBtaW5WYWwgPSBNYXRoLm1pbi5hcHBseShNYXRoLCB0b1NvcnQubWFwKGl0ZW0gPT4gaXRlbS52YWwpKVxuICAgICAgLy8gU29ydGVkIGxpc3Qgb2YgcmVzdWx0cyBiYXNlZCBvbiB0aGUgYXhpc1xuICAgICAgcmV0dXJuIFt0b1NvcnQucmVkdWNlKChyZXQsIGl0ZW0sIGlkeCkgPT4gKHtcbiAgICAgICAgLi4ucmV0LCAuLi57IFtpdGVtLm5hbWVdOiBpZHggfVxuICAgICAgfSksIHt9KSwgbWluVmFsLCBtYXhWYWxdXG4gICAgfVxuXG4gICAgZ2V0SW5mb0Zyb21SYW5rID0gbmFtZSA9PiB7XG4gICAgICBjb25zdCBjdXJySWR4ID0gdGhpcy5zdGF0ZS5pZHg7XG4gICAgICBjb25zdCBwcmV2SWR4ID0gKGN1cnJJZHggPiAwID8gY3VycklkeCAtIDEgOiAwKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW25hbWVdW2N1cnJJZHhdO1xuICAgICAgY29uc3QgaGlkZGVuID0gKHRoaXMuc3RhdGUuY3VyclJhbmtbbmFtZV0gPT09IHVuZGVmaW5lZCk7XG4gICAgICBjb25zdCBjdXJyU3R5bGUgPSB7XG4gICAgICAgIC4uLnRoaXMucHJvcHMuYmFyU3R5bGUsXG4gICAgICAgIG1hcmdpblRvcDogYGNhbGMoJHt0aGlzLnN0YXRlLmN1cnJSYW5rW25hbWVdfSAqICR7dGhpcy5iYXJIZWlnaHR9KWAsXG4gICAgICAgIHdpZHRoOiBgJHsxMDAgKiB0aGlzLnByb3BzLmRhdGFbbmFtZV1bY3VycklkeF0vIHRoaXMuc3RhdGUubWF4VmFsfSVgLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuY29sb3JzW25hbWVdLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHByZXZTdHlsZSA9IHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5iYXJTdHlsZSxcbiAgICAgICAgbWFyZ2luVG9wOiBgY2FsYygke3RoaXMuc3RhdGUucHJldlJhbmtbbmFtZV19ICogJHt0aGlzLmJhckhlaWdodH0pYCxcbiAgICAgICAgd2lkdGg6IGAkezEwMCAqIHRoaXMucHJvcHMuZGF0YVtuYW1lXVtwcmV2SWR4XS8gdGhpcy5zdGF0ZS5tYXhWYWx9JWAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5jb2xvcnNbbmFtZV0sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFt2YWx1ZSwgaGlkZGVuLCBjdXJyU3R5bGUsIHByZXZTdHlsZV07XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy50aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWVsaW5lW3RoaXMuc3RhdGUuaWR4XX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Li4uY2xhc3Nlcy5iYXJDaGFydCwgLi4udGhpcy5iYXJDaGFydFN0eWxlfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YSkubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgaGlkZGVuLCBjdXJyU3R5bGUsIHByZXZTdHlsZV0gPSB0aGlzLmdldEluZm9Gcm9tUmFuayhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZihoaWRkZW4pIHJldHVybiAoPGRpdiBrZXk9e25hbWV9PjwvZGl2Pik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICBjdXJyU3R5bGU9e2N1cnJTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBwcmV2U3R5bGU9e3ByZXZTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17dGhpcy5wcm9wcy50aW1lb3V0fVxuICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3hTdHlsZT17dGhpcy5wcm9wcy50ZXh0Qm94U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXJDaGFydDtcbiJdfQ==