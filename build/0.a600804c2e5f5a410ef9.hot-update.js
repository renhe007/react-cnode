webpackHotUpdate(0,{107:function(t,e,o){(function(t){!function(){var e=o(27),n=o(28),a=o(19),r=o(2);t.makeHot=t.hot.data?t.hot.data.makeHot:e(function(){return n.getRootInstances(a)},r)}();try{(function(){"use strict";function t(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),c=o(2),u=t(c),i=o(43),l=function(t){function e(t){n(this,e);var o=a(this,Object.getPrototypeOf(e).call(this,t));return o.state={state:o.props},o}return r(e,t),s(e,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(console.log(this.props),console.log(t),!0)}},{key:"type",value:function(t){var e="";switch(t){case"share":e="分享";break;case"ask":e="问答";break;case"good":e="精华";break;case"job":e="招聘";break;default:e="神秘"}return e}},{key:"render",value:function(){return console.log(this.state.state.id||"haha"),u["default"].createElement("div",{className:"topicItem"},u["default"].createElement("img",{src:this.state.state.author.avatar_url}),u["default"].createElement("span",{className:"topicType"},this.type(this.state.state.tab)),u["default"].createElement(i.Link,{style:{textDecoration:"none",color:"black"},to:"/topic/"+this.state.state.id},u["default"].createElement("p",null,this.state.state.title)))}}]),e}(u["default"].Component);e["default"]=l}).call(this)}finally{!function(){var e=t.hot.data&&t.hot.data.foundReactClasses||!1;if(t.exports&&t.makeHot){var n=o(29);n(t,o(2))&&(e=!0);var a=e;a&&t.hot.accept(function(t){t&&console.error("Cannot not apply hot update to TopicItem.jsx: "+t.message)})}t.hot.dispose(function(o){o.makeHot=t.makeHot,o.foundReactClasses=e})}()}}).call(e,o(21)(t))}});
//# sourceMappingURL=0.a600804c2e5f5a410ef9.hot-update.js.map