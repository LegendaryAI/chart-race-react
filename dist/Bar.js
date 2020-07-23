"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classes = {
  bar: {
    position: "relative"
  },
  container: {
    width: "100%",
    display: "flex",
    position: "absolute"
  }
};

function Bar(props) {
  var barDefaultStyle = _objectSpread({
    transition: "all ".concat(props.timeout, "ms ease-in-out")
  }, props.prevStyle);

  var posDefaultStyle = {
    transition: "all ".concat(props.timeout, "ms ease-in-out"),
    marginTop: props.prevStyle.marginTop
  };
  var barTransitionStyles = {
    entering: props.prevStyle,
    entered: props.currStyle,
    exiting: props.currStyle
  };
  var posTransitionStyles = {
    entering: {
      marginTop: props.prevStyle.marginTop
    },
    entered: {
      marginTop: props.currStyle.marginTop
    },
    exiting: {
      marginTop: props.currStyle.marginTop
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: classes.container
  }, /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
    "in": true,
    timeout: props.timeout
  }, function (state) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      style: _objectSpread(_objectSpread(_objectSpread({}, posDefaultStyle), posTransitionStyles[state]), {}, {
        width: "".concat(props.width[0], "%")
      })
    }, props.label), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: "".concat(props.width[1], "%")
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: _objectSpread(_objectSpread(_objectSpread({}, classes.bar), barDefaultStyle), barTransitionStyles[state])
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: _objectSpread(_objectSpread(_objectSpread({}, posDefaultStyle), posTransitionStyles[state]), {}, {
        width: "".concat(props.width[2], "%")
      })
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: _objectSpread({}, props.textBoxStyle)
    }, props.value)));
  }));
}

var _default = Bar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXIuanMiXSwibmFtZXMiOlsiY2xhc3NlcyIsImJhciIsInBvc2l0aW9uIiwiY29udGFpbmVyIiwid2lkdGgiLCJkaXNwbGF5IiwiQmFyIiwicHJvcHMiLCJiYXJEZWZhdWx0U3R5bGUiLCJ0cmFuc2l0aW9uIiwidGltZW91dCIsInByZXZTdHlsZSIsInBvc0RlZmF1bHRTdHlsZSIsIm1hcmdpblRvcCIsImJhclRyYW5zaXRpb25TdHlsZXMiLCJlbnRlcmluZyIsImVudGVyZWQiLCJjdXJyU3R5bGUiLCJleGl0aW5nIiwicG9zVHJhbnNpdGlvblN0eWxlcyIsInN0YXRlIiwibGFiZWwiLCJ0ZXh0Qm94U3R5bGUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ1pDLEVBQUFBLEdBQUcsRUFBRTtBQUNEQyxJQUFBQSxRQUFRLEVBQUU7QUFEVCxHQURPO0FBSVpDLEVBQUFBLFNBQVMsRUFBRTtBQUNQQyxJQUFBQSxLQUFLLEVBQUUsTUFEQTtBQUVQQyxJQUFBQSxPQUFPLEVBQUUsTUFGRjtBQUdQSCxJQUFBQSxRQUFRLEVBQUU7QUFISDtBQUpDLENBQWhCOztBQVdBLFNBQVNJLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNoQixNQUFNQyxlQUFlO0FBQ2pCQyxJQUFBQSxVQUFVLGdCQUFTRixLQUFLLENBQUNHLE9BQWY7QUFETyxLQUVkSCxLQUFLLENBQUNJLFNBRlEsQ0FBckI7O0FBSUUsTUFBTUMsZUFBZSxHQUFHO0FBQ3RCSCxJQUFBQSxVQUFVLGdCQUFTRixLQUFLLENBQUNHLE9BQWYsbUJBRFk7QUFFdEJHLElBQUFBLFNBQVMsRUFBRU4sS0FBSyxDQUFDSSxTQUFOLENBQWdCRTtBQUZMLEdBQXhCO0FBSUEsTUFBTUMsbUJBQW1CLEdBQUc7QUFDeEJDLElBQUFBLFFBQVEsRUFBRVIsS0FBSyxDQUFDSSxTQURRO0FBRXhCSyxJQUFBQSxPQUFPLEVBQUdULEtBQUssQ0FBQ1UsU0FGUTtBQUd4QkMsSUFBQUEsT0FBTyxFQUFFWCxLQUFLLENBQUNVO0FBSFMsR0FBNUI7QUFLQSxNQUFNRSxtQkFBbUIsR0FBRztBQUN4QkosSUFBQUEsUUFBUSxFQUFFO0FBQUNGLE1BQUFBLFNBQVMsRUFBRU4sS0FBSyxDQUFDSSxTQUFOLENBQWdCRTtBQUE1QixLQURjO0FBRXhCRyxJQUFBQSxPQUFPLEVBQUU7QUFBQ0gsTUFBQUEsU0FBUyxFQUFFTixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JKO0FBQTVCLEtBRmU7QUFHeEJLLElBQUFBLE9BQU8sRUFBRTtBQUFDTCxNQUFBQSxTQUFTLEVBQUVOLEtBQUssQ0FBQ1UsU0FBTixDQUFnQko7QUFBNUI7QUFIZSxHQUE1QjtBQUtBLHNCQUNJO0FBQUssSUFBQSxLQUFLLEVBQUViLE9BQU8sQ0FBQ0c7QUFBcEIsa0JBQ0UsZ0NBQUMsZ0NBQUQ7QUFBWSxVQUFJLElBQWhCO0FBQXNCLElBQUEsT0FBTyxFQUFFSSxLQUFLLENBQUNHO0FBQXJDLEtBRUksVUFBQVUsS0FBSztBQUFBLHdCQUNMLGdDQUFDLGlCQUFELENBQU8sUUFBUCxxQkFDQTtBQUFLLE1BQUEsS0FBSyxnREFDSFIsZUFERyxHQUVITyxtQkFBbUIsQ0FBQ0MsS0FBRCxDQUZoQjtBQUdOaEIsUUFBQUEsS0FBSyxZQUFLRyxLQUFLLENBQUNILEtBQU4sQ0FBWSxDQUFaLENBQUw7QUFIQztBQUFWLE9BS0tHLEtBQUssQ0FBQ2MsS0FMWCxDQURBLGVBUUE7QUFBSyxNQUFBLEtBQUssRUFBRTtBQUFDakIsUUFBQUEsS0FBSyxZQUFLRyxLQUFLLENBQUNILEtBQU4sQ0FBWSxDQUFaLENBQUw7QUFBTjtBQUFaLG9CQUNJO0FBQ0ksTUFBQSxLQUFLLGdEQUNFSixPQUFPLENBQUNDLEdBRFYsR0FFRU8sZUFGRixHQUdFTSxtQkFBbUIsQ0FBQ00sS0FBRCxDQUhyQjtBQURULE1BREosQ0FSQSxlQWdCQTtBQUFLLE1BQUEsS0FBSyxnREFDSFIsZUFERyxHQUVITyxtQkFBbUIsQ0FBQ0MsS0FBRCxDQUZoQjtBQUdOaEIsUUFBQUEsS0FBSyxZQUFLRyxLQUFLLENBQUNILEtBQU4sQ0FBWSxDQUFaLENBQUw7QUFIQztBQUFWLG9CQUtJO0FBQUssTUFBQSxLQUFLLG9CQUFNRyxLQUFLLENBQUNlLFlBQVo7QUFBVixPQUNLZixLQUFLLENBQUNnQixLQURYLENBTEosQ0FoQkEsQ0FESztBQUFBLEdBRlQsQ0FERixDQURKO0FBbUNMOztlQUVjakIsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcblxuY29uc3QgY2xhc3NlcyA9IHtcbiAgICBiYXI6IHtcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gQmFyKHByb3BzKSB7XG4gICAgY29uc3QgYmFyRGVmYXVsdFN0eWxlID0ge1xuICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7cHJvcHMudGltZW91dH1tcyBlYXNlLWluLW91dGAsXG4gICAgICAgIC4uLnByb3BzLnByZXZTdHlsZSxcbiAgICAgIH07XG4gICAgICBjb25zdCBwb3NEZWZhdWx0U3R5bGUgPSB7XG4gICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHtwcm9wcy50aW1lb3V0fW1zIGVhc2UtaW4tb3V0YCxcbiAgICAgICAgbWFyZ2luVG9wOiBwcm9wcy5wcmV2U3R5bGUubWFyZ2luVG9wLFxuICAgICAgfVxuICAgICAgY29uc3QgYmFyVHJhbnNpdGlvblN0eWxlcyA9IHtcbiAgICAgICAgICBlbnRlcmluZzogcHJvcHMucHJldlN0eWxlLFxuICAgICAgICAgIGVudGVyZWQ6ICBwcm9wcy5jdXJyU3R5bGUsXG4gICAgICAgICAgZXhpdGluZzogcHJvcHMuY3VyclN0eWxlLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHBvc1RyYW5zaXRpb25TdHlsZXMgPSB7XG4gICAgICAgICAgZW50ZXJpbmc6IHttYXJnaW5Ub3A6IHByb3BzLnByZXZTdHlsZS5tYXJnaW5Ub3B9LFxuICAgICAgICAgIGVudGVyZWQ6IHttYXJnaW5Ub3A6IHByb3BzLmN1cnJTdHlsZS5tYXJnaW5Ub3B9LFxuICAgICAgICAgIGV4aXRpbmc6IHttYXJnaW5Ub3A6IHByb3BzLmN1cnJTdHlsZS5tYXJnaW5Ub3B9LFxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8VHJhbnNpdGlvbiBpbj17dHJ1ZX0gdGltZW91dD17cHJvcHMudGltZW91dH0+XG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICBzdGF0ZSA9PiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgLi4ucG9zRGVmYXVsdFN0eWxlLCBcbiAgICAgICAgICAgICAgICAgICAgLi4ucG9zVHJhbnNpdGlvblN0eWxlc1tzdGF0ZV0sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtwcm9wcy53aWR0aFswXX0lYFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBgJHtwcm9wcy53aWR0aFsxXX0lYH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNsYXNzZXMuYmFyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5iYXJEZWZhdWx0U3R5bGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJhclRyYW5zaXRpb25TdHlsZXNbc3RhdGVdfX0gXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAuLi5wb3NEZWZhdWx0U3R5bGUsIFxuICAgICAgICAgICAgICAgICAgICAuLi5wb3NUcmFuc2l0aW9uU3R5bGVzW3N0YXRlXSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3Byb3BzLndpZHRoWzJdfSVgXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3suLi5wcm9wcy50ZXh0Qm94U3R5bGV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYXI7Il19