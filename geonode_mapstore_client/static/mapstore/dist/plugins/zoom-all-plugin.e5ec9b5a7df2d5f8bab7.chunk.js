(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7236],{1550:(t,e,o)=>{"use strict";o.d(e,{pP:()=>r,TR:()=>i,N7:()=>c,mq:()=>p,uv:()=>u,Qy:()=>a,IL:()=>l,Li:()=>s,OW:()=>f,ZO:()=>y,Um:()=>m,TF:()=>b,Ls:()=>h,Ec:()=>g,Eu:()=>E,JJ:()=>v,nZ:()=>O,YD:()=>d,GI:()=>_,Jb:()=>x,Uh:()=>P,LP:()=>S,xy:()=>T,o6:()=>j,FP:()=>C,Mo:()=>w,sO:()=>N,Px:()=>I,hd:()=>R,BV:()=>A,SO:()=>z,H0:()=>M,$X:()=>Z,ou:()=>G,NE:()=>L});var n=o(97395),r="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",c="CHANGE_MOUSE_POINTER",p="CHANGE_ZOOM_LVL",u="PAN_TO",a="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",y="CHANGE_MAP_STYLE",m="CHANGE_ROTATION",b="CREATION_ERROR_LAYER",h="UPDATE_VERSION",g="INIT_MAP",E="RESIZE_MAP",v="CHANGE_MAP_LIMITS",O="SET_MAP_RESOLUTIONS",d="REGISTER_EVENT_LISTENER",_="UNREGISTER_EVENT_LISTENER",x="MOUSE_MOVE",P="MOUSE_OUT";function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,n.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function T(t,e,o){return{type:l,pos:t,zoom:e,crs:o}}function j(t,e,o,n,i,c,p,u){return{type:r,center:t,zoom:e,bbox:o,size:n,mapStateSource:i,projection:c,viewerOptions:p,resolution:u}}function C(t,e){return{type:i,point:t,layer:e}}function w(t){return{type:c,pointer:t}}function N(t,e){return{type:p,zoom:t,mapStateSource:e}}function I(t,e,o){return{type:a,extent:t,crs:e,maxZoom:o}}function R(t,e){return{type:y,style:t,mapStateSource:e}}function A(t){var e=t.restrictedExtent,o=t.crs,n=t.minZoom;return{type:v,restrictedExtent:e,crs:o,minZoom:n}}function z(t){return{type:O,resolutions:t}}var M=function(t,e){return{type:d,eventName:t,toolName:e}},Z=function(t,e){return{type:_,eventName:t,toolName:e}},G=function(t){return{type:x,position:t}},L=function(){return{type:P}}},50966:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(61365),r=o(30294);const i=(0,n.Z)(r.OverlayTrigger)},61365:(t,e,o)=>{"use strict";o.d(e,{Z:()=>p});var n=o(24852),r=o.n(n),i=o(37275);function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},c.apply(this,arguments)}const p=function(t){return function(e){return r().createElement(t,c({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},19461:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>k}),o(48966);var n=o(27418),r=o.n(n),i=o(24852),c=o.n(i),p=o(30294),u=o(71703),a=o(22222),l=o(1550),s=o(45697),f=o.n(s),y=o(38560),m=o(50966),b=o(52259),h=o(37275);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function d(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}function P(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,o,n,r,i=(n=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(n);if(r){var o=x(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return d(this,t)});function u(){var t;E(this,u);for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return P(_(t=i.call.apply(i,[this].concat(o))),"addTooltip",(function(e){var o=c().createElement(p.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return c().createElement(m.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:o},e)})),P(_(t),"zoomToMaxExtent",(function(){var e=t.props.mapConfig.maxExtent,o=t.props.mapConfig.size,n=1,r=t.props.mapConfig.center,i=t.props.mapConfig.projection||"EPSG:3857";e&&"[object Array]"===Object.prototype.toString.call(e)&&(n=(0,b.getZoomForExtent)(e,o,0,21),0===(r=(0,b.getCenterForExtent)(e,i)).x&&0===r.y||(r=(0,h.qg)(r,"EPSG:4326")));var c=(0,b.getBbox)(r,n,o);t.props.changeMapView(r,n,c,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),P(_(t),"zoomToInitialExtent",(function(){var e=t.props.mapInitialConfig,o=(0,b.getBbox)(e.center,e.zoom,t.props.mapConfig.size);t.props.changeMapView(e.center,e.zoom,o,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),t}return e=u,(o=[{key:"render",value:function(){var t=this;return this.addTooltip(c().createElement(y.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:function(){return t.props.useInitialExtent?t.zoomToInitialExtent():t.zoomToMaxExtent()},className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?c().createElement(p.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&v(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),u}(c().Component);P(S,"propTypes",{id:f().string,image:f().string,glyphicon:f().string,text:f().string,btnSize:f().oneOf(["large","small","xsmall"]),mapConfig:f().object,mapInitialConfig:f().object,changeMapView:f().func,btnType:f().oneOf(["normal","image"]),help:f().oneOfType([f().string,f().element]),tooltip:f().element,tooltipPlace:f().string,className:f().string,useInitialExtent:f().bool,bsStyle:f().string,style:f().object}),P(S,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const T=S;var j=o(5346),C=o(827);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function N(){return N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},N.apply(this,arguments)}function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function z(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var Z=(0,a.P1)([C.Od,function(t){return t.mapInitialConfig}],(function(t,e){return{mapConfig:t,mapInitialConfig:e}})),G=(0,u.connect)(Z,{changeMapView:l.o6})(T),L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(p,t);var e,o,n,r,i=(n=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(n);if(r){var o=M(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return z(this,t)});function p(){return I(this,p),i.apply(this,arguments)}return e=p,(o=[{key:"render",value:function(){return c().createElement(G,N({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}])&&R(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),p}(c().Component);const k={ZoomAllPlugin:r()(L,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:c().createElement(p.Glyphicon,{glyph:"resize-full"}),help:c().createElement(j.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},60536:(t,e,o)=>{(t.exports=o(9252)()).push([t.id,".msgapi #mapstore-zoomtomaxextent {\n    z-index: 1;\n    position: relative;\n}\n",""])},56029:(t,e,o)=>{var n=o(33448);t.exports=function(t,e,o){for(var r=-1,i=t.length;++r<i;){var c=t[r],p=e(c);if(null!=p&&(void 0===u?p==p&&!n(p):o(p,u)))var u=p,a=c}return a}},53407:t=>{t.exports=function(t,e){return t<e}},95395:(t,e,o)=>{var n=o(89465),r=o(47816),i=o(67206);t.exports=function(t,e){var o={};return e=i(e,3),r(t,(function(t,r,i){n(o,e(t,r,i),t)})),o}},22762:(t,e,o)=>{var n=o(56029),r=o(67206),i=o(53407);t.exports=function(t,e){return t&&t.length?n(t,r(e,2),i):void 0}},87185:(t,e,o)=>{var n=o(45652);t.exports=function(t,e){return e="function"==typeof e?e:void 0,t&&t.length?n(t,void 0,e):[]}},48966:(t,e,o)=>{var n=o(60536);"string"==typeof n&&(n=[[t.id,n,""]]),o(14246)(n,{}),n.locals&&(t.exports=n.locals)}}]);