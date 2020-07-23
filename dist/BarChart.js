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

      var toSort = Object.keys(data).map(function (name) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXJDaGFydC5qcyJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiYmFyQ2hhcnQiLCJ3aWR0aCIsInBvc2l0aW9uIiwiY29udGFpbmVyIiwiQmFyQ2hhcnQiLCJwcm9wcyIsInN0YXJ0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwidXBkYXRlIiwidGltZW91dCIsImRlbGF5Iiwic2V0U3RhdGUiLCJjbGVhckludGVydmFsIiwic3RhdGUiLCJpZHgiLCJ0aW1lbGluZSIsImxlbmd0aCIsInByZXZTdGF0ZSIsInNvcnRBeGlzIiwiY3VyclJhbmsiLCJtYXhWYWwiLCJwcmV2UmFuayIsImkiLCJkZXNjZW5kaW5nIiwidW5kZWZpbmVkIiwidG9Tb3J0IiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJtYXAiLCJuYW1lIiwidmFsIiwic29ydCIsImxlZnQiLCJyaWdodCIsInJldmVyc2UiLCJmSXRlbXMiLCJtYXhJdGVtcyIsInNsaWNlIiwiTWF0aCIsIm1heCIsImFwcGx5IiwiaXRlbSIsIm1pblZhbCIsIm1pbiIsInJlZHVjZSIsInJldCIsImN1cnJJZHgiLCJwcmV2SWR4IiwidmFsdWUiLCJoaWRkZW4iLCJjdXJyU3R5bGUiLCJiYXJTdHlsZSIsIm1hcmdpblRvcCIsImJhckhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsInByZXZTdHlsZSIsImhlaWdodCIsIm5JdG1lcyIsImJhckNoYXJ0U3R5bGUiLCJpbml0UmFuayIsInN0YXJ0ZWQiLCJuZXh0UHJvcHMiLCJ0aW1lbGluZVN0eWxlIiwiZ2V0SW5mb0Zyb21SYW5rIiwibGFiZWxzIiwidGV4dEJveFN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLEtB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QUFBO0FBQUEsWUFDaENtQixLQURnQztBQUFBLFlBQ3pCQyxNQUR5QjtBQUFBLFlBQ2pCQyxTQURpQjtBQUFBLFlBQ05NLFNBRE07O0FBRXZDLFlBQUdQLE1BQUgsRUFBVyxvQkFBUTtBQUFLLFVBQUEsR0FBRyxFQUFFcEI7QUFBVixVQUFSO0FBQ1gsNEJBQ0ksZ0NBQUMsZUFBRDtBQUNFLFVBQUEsSUFBSSxFQUFFQSxJQURSO0FBRUUsVUFBQSxLQUFLLEVBQUVtQixLQUZUO0FBR0UsVUFBQSxLQUFLLEVBQUUsTUFBSSxDQUFDN0MsS0FBTCxDQUFXOEQsTUFBWCxDQUFrQnBDLElBQWxCLENBSFQ7QUFJRSxVQUFBLFNBQVMsRUFBRXFCLFNBSmI7QUFLRSxVQUFBLFNBQVMsRUFBRU0sU0FMYjtBQU1FLFVBQUEsR0FBRyxFQUFFM0IsSUFOUDtBQU9FLFVBQUEsT0FBTyxFQUFFLE1BQUksQ0FBQzFCLEtBQUwsQ0FBV0ssT0FQdEI7QUFRRSxVQUFBLFlBQVksRUFBRSxNQUFJLENBQUNMLEtBQUwsQ0FBVytELFlBUjNCO0FBU0UsVUFBQSxLQUFLLEVBQUUsTUFBSSxDQUFDL0QsS0FBTCxDQUFXSjtBQVRwQixVQURKO0FBYUQsT0FoQkQsQ0FGSixDQUpGLENBREY7QUE0QkQ7Ozs7RUF2SWtCb0Usa0JBQU1DLFM7O2VBMElkbEUsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFyIGZyb20gJy4vQmFyJztcblxuY29uc3QgY2xhc3NlcyA9IHtcbiAgYmFyQ2hhcnQ6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9XG59XG5jbGFzcyBCYXJDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYmFySGVpZ2h0ID0gYGNhbGMoJHtwcm9wcy5iYXJTdHlsZS5oZWlnaHR9ICsgJHtwcm9wcy5iYXJTdHlsZS5tYXJnaW5Ub3B9KWA7XG4gICAgICAgIHRoaXMubkl0bWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhKS5sZW5ndGg7XG4gICAgICAgIHRoaXMubWF4SXRlbXMgPSBwcm9wcy5tYXhJdGVtcyA8PSB0aGlzLm5JdG1lcyA/IHByb3BzLm1heEl0ZW1zIDogdGhpcy5uSXRtZXM7XG4gICAgICAgIHRoaXMuYmFyQ2hhcnRTdHlsZSA9IHtcbiAgICAgICAgICAgIGhlaWdodDogYGNhbGMoJHt0aGlzLm1heEl0ZW1zfSAqICR7dGhpcy5iYXJIZWlnaHR9KWAsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBbaW5pdFJhbmssIG1heFZhbF0gPSB0aGlzLnNvcnRBeGlzKDApO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaWR4OiAwLFxuICAgICAgICAgICAgcHJldlJhbms6IGluaXRSYW5rLFxuICAgICAgICAgICAgY3VyclJhbms6IGluaXRSYW5rLFxuICAgICAgICAgICAgbWF4VmFsOiBtYXhWYWwsXG4gICAgICAgICAgICBzdGFydGVkOiBwcm9wcy5zdGFydFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgICAgaWYodGhpcy5wcm9wcy5zdGFydCl7XG4gICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGUsIHRoaXMucHJvcHMudGltZW91dCArIHRoaXMucHJvcHMuZGVsYXkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnRlcnZhbElkOiBpbnRlcnZhbElkfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuc3RhcnQpIHtcbiAgICAgICAgdmFyIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZSwgdGhpcy5wcm9wcy50aW1lb3V0ICsgdGhpcy5wcm9wcy5kZWxheSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ludGVydmFsSWQ6IGludGVydmFsSWR9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbElkKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICBpZih0aGlzLnN0YXRlLmlkeCArIDEgPT09IHRoaXMucHJvcHMudGltZWxpbmUubGVuZ3RoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbElkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgbGV0IFtjdXJyUmFuaywgbWF4VmFsXSA9IHRoaXMuc29ydEF4aXMocHJldlN0YXRlLmlkeCArIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZHg6IHByZXZTdGF0ZS5pZHggKyAxLFxuICAgICAgICAgICAgICAgIHByZXZSYW5rOiBwcmV2U3RhdGUuY3VyclJhbmssXG4gICAgICAgICAgICAgICAgY3VyclJhbms6IGN1cnJSYW5rLFxuICAgICAgICAgICAgICAgIG1heFZhbDogbWF4VmFsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIHNvcnRBeGlzXG4gICAgKiBIYW5kbGVzIHNvcnRpbmcgdGhlIHJlc3VsdHNcbiAgICAqIEBwYXJhbSB7Kn0gaSBpcyB0aGUgaXRlbSB0byBzdGFydCBzb3J0aW5nIGZyb21cbiAgICAqIEBwYXJhbSB7Kn0gZGVzY2VuZGluZyBpcyB0aGUgZGlyZWN0aW9uIHRvIHNvcnRcbiAgICAqL1xuICAgIHNvcnRBeGlzID0gKGksIGRlc2NlbmRpbmcpID0+IHtcbiAgICAgIGlmKGRlc2NlbmRpbmcgPT09IHVuZGVmaW5lZCkgZGVzY2VuZGluZyA9IHRydWU7XG4gICAgICAvLyBCdWlsZCBhIG5ldyBhcnJheSB0byBzb3J0IGUueC4geyBuYW1lOiAnc29tZSBuYW1lJywgdmFsOiAxIH1cbiAgICAgIGxldCB0b1NvcnQgPSBPYmplY3Qua2V5cyhkYXRhKS5tYXAobmFtZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICB2YWw6IHRoaXMucHJvcHMuZGF0YVtuYW1lXVtpXVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICAvLyBIYW5kbGUgdGhlIHNvcnRpbmcgYmFzZWQgb24gdGhlIHZhbHVlc1xuICAgICAgdG9Tb3J0LnNvcnQoKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0LnZhbCAtIHJpZ2h0LnZhbClcbiAgICAgIGlmIChkZXNjZW5kaW5nKSB7XG4gICAgICAgIHRvU29ydC5yZXZlcnNlKClcbiAgICAgIH1cbiAgICAgIC8vIFNsaWNlIGJhc2VkIG9uIHRoZSBtYXhpbXVtIGl0ZW1zIGFsbG93ZWRcbiAgICAgIGNvbnN0IGZJdGVtcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YSkubGVuZ3RoXG4gICAgICBpZiAodGhpcy5tYXhJdGVtcyAmJiB0aGlzLm1heEl0ZW1zIDw9IGZJdGVtcykge1xuICAgICAgICB0b1NvcnQgPSB0b1NvcnQuc2xpY2UoMCwgdGhpcy5tYXhJdGVtcylcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHRvU29ydC5tYXAoaXRlbSA9PiBpdGVtLnZhbCkpXG4gICAgICBjb25zdCBtaW5WYWwgPSBNYXRoLm1pbi5hcHBseShNYXRoLCB0b1NvcnQubWFwKGl0ZW0gPT4gaXRlbS52YWwpKVxuICAgICAgLy8gU29ydGVkIGxpc3Qgb2YgcmVzdWx0cyBiYXNlZCBvbiB0aGUgYXhpc1xuICAgICAgcmV0dXJuIFt0b1NvcnQucmVkdWNlKChyZXQsIGl0ZW0sIGlkeCkgPT4gKHtcbiAgICAgICAgLi4ucmV0LCAuLi57IFtpdGVtLm5hbWVdOiBpZHggfVxuICAgICAgfSksIHt9KSwgbWluVmFsLCBtYXhWYWxdXG4gICAgfVxuXG4gICAgZ2V0SW5mb0Zyb21SYW5rID0gbmFtZSA9PiB7XG4gICAgICBjb25zdCBjdXJySWR4ID0gdGhpcy5zdGF0ZS5pZHg7XG4gICAgICBjb25zdCBwcmV2SWR4ID0gKGN1cnJJZHggPiAwID8gY3VycklkeCAtIDEgOiAwKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW25hbWVdW2N1cnJJZHhdO1xuICAgICAgY29uc3QgaGlkZGVuID0gKHRoaXMuc3RhdGUuY3VyclJhbmtbbmFtZV0gPT09IHVuZGVmaW5lZCk7XG4gICAgICBjb25zdCBjdXJyU3R5bGUgPSB7XG4gICAgICAgIC4uLnRoaXMucHJvcHMuYmFyU3R5bGUsXG4gICAgICAgIG1hcmdpblRvcDogYGNhbGMoJHt0aGlzLnN0YXRlLmN1cnJSYW5rW25hbWVdfSAqICR7dGhpcy5iYXJIZWlnaHR9KWAsXG4gICAgICAgIHdpZHRoOiBgJHsxMDAgKiB0aGlzLnByb3BzLmRhdGFbbmFtZV1bY3VycklkeF0vIHRoaXMuc3RhdGUubWF4VmFsfSVgLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuY29sb3JzW25hbWVdLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHByZXZTdHlsZSA9IHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5iYXJTdHlsZSxcbiAgICAgICAgbWFyZ2luVG9wOiBgY2FsYygke3RoaXMuc3RhdGUucHJldlJhbmtbbmFtZV19ICogJHt0aGlzLmJhckhlaWdodH0pYCxcbiAgICAgICAgd2lkdGg6IGAkezEwMCAqIHRoaXMucHJvcHMuZGF0YVtuYW1lXVtwcmV2SWR4XS8gdGhpcy5zdGF0ZS5tYXhWYWx9JWAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5jb2xvcnNbbmFtZV0sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIFt2YWx1ZSwgaGlkZGVuLCBjdXJyU3R5bGUsIHByZXZTdHlsZV07XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy50aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWVsaW5lW3RoaXMuc3RhdGUuaWR4XX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Li4uY2xhc3Nlcy5iYXJDaGFydCwgLi4udGhpcy5iYXJDaGFydFN0eWxlfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuZGF0YSkubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgaGlkZGVuLCBjdXJyU3R5bGUsIHByZXZTdHlsZV0gPSB0aGlzLmdldEluZm9Gcm9tUmFuayhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZihoaWRkZW4pIHJldHVybiAoPGRpdiBrZXk9e25hbWV9PjwvZGl2Pik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEJhclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICBjdXJyU3R5bGU9e2N1cnJTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBwcmV2U3R5bGU9e3ByZXZTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17dGhpcy5wcm9wcy50aW1lb3V0fVxuICAgICAgICAgICAgICAgICAgICAgIHRleHRCb3hTdHlsZT17dGhpcy5wcm9wcy50ZXh0Qm94U3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXJDaGFydDtcbiJdfQ==