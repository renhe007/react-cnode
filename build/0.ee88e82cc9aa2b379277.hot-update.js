webpackHotUpdate(0,{200:function(e,t,a){(function(e){!function(){var t=a(27),n=a(28),o=a(19),l=a(3);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return n.getRootInstances(o)},l)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(3),i=e(u),s=a(56),f=e(s),d=a(109),p=e(d),m=a(43),h=function(e){function t(e){n(this,t);var a=o(this,Object.getPrototypeOf(t).call(this,e));return a.state={detail:null},a}return l(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;f["default"].get("/api/v1/topic/"+this.props.location.pathname.split("/")[2],{mdrender:!0},function(t){t.success?(console.log(t),e.setState({detail:t.data})):alert("加载失败")})}},{key:"render",value:function(){var e=this.state.detail,t=[],a=function(){return{__html:e?e.content:""}};return e&&e.replies.map(function(e,a){t.push(i["default"].createElement(p["default"],r({key:e.id+a},e)))}),i["default"].createElement("div",null,i["default"].createElement("div",{className:"back"},i["default"].createElement(m.Link,{to:"/"},i["default"].createElement("span",{className:"iconfont icon-arrowleft"})),i["default"].createElement("h2",null,"详情")),i["default"].createElement("div",{className:"auth"},i["default"].createElement("img",{src:e?e.author.avatar_url:""}),i["default"].createElement("div",{className:"loginName"},e?e.author.loginname:""),i["default"].createElement("div",{className:"visitCount"},i["default"].createElement("span",null,"阅读：",e?e.visit_count:""),i["default"].createElement("span",null,"回复：",e?e.reply_count:"")),i["default"].createElement("div",{className:"iconfont icon-collect",style:{"float":"right",marginRight:"20px"}})),i["default"].createElement("h3",{className:"titleBackground"},e?e.title:""),i["default"].createElement("div",{className:"topicContent",dangerouslySetInnerHTML:a()}),i["default"].createElement("div",{className:"repleBackground"},i["default"].createElement("span",{className:"span1"},"收 藏"),i["default"].createElement("span",{className:"span2"},"回 复")),t)}}]),t}(i["default"].Component);t["default"]=h}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var n=a(29);n(e,a(3))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to TopicDetail.jsx: "+e.message)})}e.hot.dispose(function(a){a.makeHot=e.makeHot,a.foundReactClasses=t})}()}}).call(t,a(21)(e))}});
//# sourceMappingURL=0.ee88e82cc9aa2b379277.hot-update.js.map