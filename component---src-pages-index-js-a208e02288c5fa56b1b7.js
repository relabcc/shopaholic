/*! For license information please see component---src-pages-index-js-a208e02288c5fa56b1b7.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{5900:function(t,e){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)){if(a.length){var s=o.apply(null,a);s&&t.push(s)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var r in a)n.call(a,r)&&a[r]&&t.push(r);else t.push(a.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(a=function(){return o}.apply(e,[]))||(t.exports=a)}()},7004:function(t,e,a){"use strict";var n=a(3366),o=a(1721),c=a(7294),s=a(5900),r=a.n(s),i=["className","selected"],l=function(t){function e(){for(var e,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={active:!1},e.deactivateButton=function(){return e.setState({active:!1})},e.activateButton=function(){return e.setState({active:!0})},e}return(0,o.Z)(e,t),e.prototype.render=function(){var t=this.props,e=t.className,a=t.selected,o=(0,n.Z)(t,i),s=this.state.active;return c.createElement("button",Object.assign({},o,{className:r()(e,"btn",{"btn-active":s||a}),onMouseEnter:this.activateButton,onMouseLeave:this.deactivateButton,onTouchStart:this.activateButton,onTouchEnd:this.deactivateButton,onTouchCancel:this.deactivateButton,onDragEnd:this.deactivateButton}))},e}(c.PureComponent);l.defaultProps={className:"",selected:!1},e.Z=l},3789:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return f}});var n=a(7326),o=a(1721),c=a(7294),s=a(5444),r=a(5900),i=a.n(r),l=a(7004),u=a.p+"static/home-1-a0d1ff5576e3ee7fe9b5aa7a08f520f0.svg",m=a.p+"static/home-2-eb40b77ad891c644bce8fc9c32dec57c.svg",f=function(t){function e(){var e;return(e=t.call(this)||this).activateButton=e.activateButton.bind((0,n.Z)(e)),e.deactivateButton=e.deactivateButton.bind((0,n.Z)(e)),e.state={isButtonActive:!1},e}(0,o.Z)(e,t);var a=e.prototype;return a.activateButton=function(){this.setState({isButtonActive:!0})},a.deactivateButton=function(){this.setState({isButtonActive:!1})},a.render=function(){return c.createElement("div",{className:"container mobile-center-adj vertical-horizontal-center full-width"},c.createElement("div",{className:"row"},c.createElement("div",{className:"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 text-center"},c.createElement("img",{src:u,className:"img-responsive img-xs-title",alt:"然後，錢包就死掉了"}))),c.createElement("div",{className:"row margin-top-xl"},c.createElement("div",{className:"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 text-center"},c.createElement("img",{src:m,className:"img-responsive",alt:"Fainting figure"}))),c.createElement("div",{className:"row margin-top-home"},c.createElement("div",{className:"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 text-center"},c.createElement("div",{className:"dialog padding-sm padding-no"},c.createElement("h4",{className:"margin-no"},"錢包怎麼了？它為什麼死了？它怎麼死的？")))),c.createElement("div",{className:"row margin-top-lg margin-bottom-lg"},c.createElement("div",{className:"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 text-center"},c.createElement(s.rU,{to:"/explanation"},c.createElement(l.Z,{className:i()("btn","btn-default")},"一起來破案")))))},e}(c.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-a208e02288c5fa56b1b7.js.map