/*! For license information please see 521.eebf0a7d04ca7b6dc972.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[521],{64210:(t,n,i)=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){if(t){if("string"==typeof t)return s(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,n):void 0}}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var a=i(87883),c=i(44020),l=i(74851);function u(t,n){return n.encode?n.strict?a(t):encodeURIComponent(t):t}function h(t,n){return n.decode?c(t):t}function p(t){return Array.isArray(t)?t.sort():"object"===e(t)?p(Object.keys(t)).sort((function(t,n){return Number(t)-Number(n)})).map((function(n){return t[n]})):t}function f(t){var n=t.indexOf("#");return-1!==n&&(t=t.slice(0,n)),t}function d(t){var n=(t=f(t)).indexOf("?");return-1===n?"":t.slice(n+1)}function v(t,n){return n.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!n.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function _(t,n){var i=function(t){var n;switch(t.arrayFormat){case"index":return function(t,i,e){n=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),n?(void 0===e[t]&&(e[t]={}),e[t][n[1]]=i):e[t]=i};case"bracket":return function(t,i,e){n=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),n?void 0!==e[t]?e[t]=[].concat(e[t],i):e[t]=[i]:e[t]=i};case"comma":return function(t,n,i){var e="string"==typeof n&&n.split("").indexOf(",")>-1?n.split(","):n;i[t]=e};default:return function(t,n,i){void 0!==i[t]?i[t]=[].concat(i[t],n):i[t]=n}}}(n=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},n)),o=Object.create(null);if("string"!=typeof t)return o;if(!(t=t.trim().replace(/^[?#&]/,"")))return o;var s,a,c,u=function(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=r(t))){i&&(t=i);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){c=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(c)throw s}}}}(t.split("&"));try{for(u.s();!(s=u.n()).done;){var f=s.value,d=(a=l(n.decode?f.replace(/\+/g," "):f,"="),c=2,function(t){if(Array.isArray(t))return t}(a)||function(t,n){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var e,o,r=[],s=!0,a=!1;try{for(i=i.call(t);!(s=(e=i.next()).done)&&(r.push(e.value),!n||r.length!==n);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==i.return||i.return()}finally{if(a)throw o}}return r}}(a,c)||r(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),_=d[0],m=d[1];m=void 0===m?null:h(m,n),i(h(_,n),m,o)}}catch(t){u.e(t)}finally{u.f()}for(var y=0,g=Object.keys(o);y<g.length;y++){var w=g[y],b=o[w];if("object"===e(b)&&null!==b)for(var k=0,C=Object.keys(b);k<C.length;k++){var x=C[k];b[x]=v(b[x],n)}else o[w]=v(b,n)}return!1===n.sort?o:(!0===n.sort?Object.keys(o).sort():Object.keys(o).sort(n.sort)).reduce((function(t,n){var i=o[n];return Boolean(i)&&"object"===e(i)&&!Array.isArray(i)?t[n]=p(i):t[n]=i,t}),Object.create(null))}n.extract=d,n.parse=_,n.stringify=function(t,n){if(!t)return"";var i=function(t){switch(t.arrayFormat){case"index":return function(n){return function(i,e){var r=i.length;return void 0===e||t.skipNull&&null===e?i:[].concat(o(i),null===e?[[u(n,t),"[",r,"]"].join("")]:[[u(n,t),"[",u(r,t),"]=",u(e,t)].join("")])}};case"bracket":return function(n){return function(i,e){return void 0===e||t.skipNull&&null===e?i:[].concat(o(i),null===e?[[u(n,t),"[]"].join("")]:[[u(n,t),"[]=",u(e,t)].join("")])}};case"comma":return function(n){return function(i,e){return null==e||0===e.length?i:0===i.length?[[u(n,t),"=",u(e,t)].join("")]:[[i,u(e,t)].join(",")]}};default:return function(n){return function(i,e){return void 0===e||t.skipNull&&null===e?i:[].concat(o(i),null===e?[u(n,t)]:[[u(n,t),"=",u(e,t)].join("")])}}}}(n=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},n)),e=Object.assign({},t);if(n.skipNull)for(var r=0,s=Object.keys(e);r<s.length;r++){var a=s[r];void 0!==e[a]&&null!==e[a]||delete e[a]}var c=Object.keys(e);return!1!==n.sort&&c.sort(n.sort),c.map((function(e){var o=t[e];return void 0===o?"":null===o?u(e,n):Array.isArray(o)?o.reduce(i(e),[]).join("&"):u(e,n)+"="+u(o,n)})).filter((function(t){return t.length>0})).join("&")},n.parseUrl=function(t,n){return{url:f(t).split("?")[0]||"",query:_(d(t),n)}}},87883:t=>{"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},74851:t=>{"use strict";t.exports=function(t,n){if("string"!=typeof t||"string"!=typeof n)throw new TypeError("Expected the arguments to be of type `string`");if(""===n)return[t];var i=t.indexOf(n);return-1===i?[t]:[t.slice(0,i),t.slice(i+n.length)]}},23928:(t,n,i)=>{"use strict";i.d(n,{Z:()=>r});var e=i(23645),o=i.n(e)()((function(t){return t[1]}));o.push([t.id,"/* Compatible with Leaflet 0.7 */\n.msgapi .leaflet-control-locate a {\n  font-size: 1.4em;\n  color: #444;\n  cursor: pointer;\n}\n.msgapi .leaflet-control-locate.active a {\n  color: #2074B6;\n}\n.msgapi .leaflet-control-locate.active.following a {\n  color: #FC8428;\n}\n",""]);const r=o},44020:t=>{"use strict";var n="%[a-f0-9]{2}",i=new RegExp(n,"gi"),e=new RegExp("("+n+")+","gi");function o(t,n){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;n=n||1;var i=t.slice(0,n),e=t.slice(n);return Array.prototype.concat.call([],o(i),o(e))}function r(t){try{return decodeURIComponent(t)}catch(r){for(var n=t.match(i),e=1;e<n.length;e++)n=(t=o(n,e).join("")).match(i);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(n){return function(t){for(var n={"%FE%FF":"��","%FF%FE":"��"},i=e.exec(t);i;){try{n[i[0]]=decodeURIComponent(i[0])}catch(t){var o=r(i[0]);o!==i[0]&&(n[i[0]]=o)}i=e.exec(t)}n["%C2"]="�";for(var s=Object.keys(n),a=0;a<s.length;a++){var c=s[a];t=t.replace(new RegExp(c,"g"),n[c])}return t}(t)}}},32818:()=>{var t,n,i;t=L.Marker.prototype._initIcon,n=L.Marker.prototype._setPos,i="msTransform"===L.DomUtil.TRANSFORM,L.Marker.addInitHook((function(){var t=this.options.icon&&this.options.icon.options&&this.options.icon.options.iconAnchor;t&&(t=t[0]+"px "+t[1]+"px"),this.options.rotationOrigin=this.options.rotationOrigin||t||"center bottom",this.options.rotationAngle=this.options.rotationAngle||0,this.on("drag",(function(t){t.target._applyRotation()}))})),L.Marker.include({_initIcon:function(){t.call(this)},_setPos:function(t){n.call(this,t),this._applyRotation()},_applyRotation:function(){this.options.rotationAngle&&(this._icon.style[L.DomUtil.TRANSFORM+"Origin"]=this.options.rotationOrigin,i?this._icon.style[L.DomUtil.TRANSFORM]="rotate("+this.options.rotationAngle+"deg)":this._icon.style[L.DomUtil.TRANSFORM]+=" rotateZ("+this.options.rotationAngle+"deg)")},setRotationAngle:function(t){return this.options.rotationAngle=t,this.update(),this},setRotationOrigin:function(t){return this.options.rotationOrigin=t,this.update(),this}})},80687:(t,n,i)=>{var e,o,r;!function(s,a){o=[i(56307)],void 0===(r="function"==typeof(e=s)?e.apply(n,o):e)||(t.exports=r),void 0!==a&&a.L&&(a.L.Control.Locate=s(L))}((function(t){var n=function(n,i,e){(e=e.split(" ")).forEach((function(e){t.DomUtil[n].call(this,i,e)}))},i=function(t,i){n("addClass",t,i)},e=function(t,i){n("removeClass",t,i)},o=t.Control.extend({options:{position:"topleft",layer:void 0,setView:"untilPan",keepCurrentZoomLevel:!1,flyTo:!1,clickBehavior:{inView:"stop",outOfView:"setView"},returnToPrevBounds:!1,cacheLocation:!0,drawCircle:!0,drawMarker:!0,markerClass:t.CircleMarker,circleStyle:{color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:2,opacity:.5},markerStyle:{color:"#136AEC",fillColor:"#2A93EE",fillOpacity:.7,weight:2,opacity:.9,radius:5},followCircleStyle:{},followMarkerStyle:{},icon:"fa fa-map-marker",iconLoading:"fa fa-spinner fa-spin",iconElementTag:"span",circlePadding:[0,0],metric:!0,createButtonCallback:function(n,i){var e=t.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",n);return e.title=i.strings.title,{link:e,icon:t.DomUtil.create(i.iconElementTag,i.icon,e)}},onLocationError:function(t,n){alert(t.message)},onLocationOutsideMapBounds:function(t){t.stop(),alert(t.options.strings.outsideMapBoundsMsg)},showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0,setView:!1}},initialize:function(n){for(var i in n)"object"==typeof this.options[i]?t.extend(this.options[i],n[i]):this.options[i]=n[i];this.options.followMarkerStyle=t.extend({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=t.extend({},this.options.circleStyle,this.options.followCircleStyle)},onAdd:function(n){var i=t.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._layer=this.options.layer||new t.LayerGroup,this._layer.addTo(n),this._event=void 0,this._prevBounds=null;var e=this.options.createButtonCallback(i,this.options);return this._link=e.link,this._icon=e.icon,t.DomEvent.on(this._link,"click",t.DomEvent.stopPropagation).on(this._link,"click",t.DomEvent.preventDefault).on(this._link,"click",this._onClick,this).on(this._link,"dblclick",t.DomEvent.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),i},_onClick:function(){if(this._justClicked=!0,this._userPanned=!1,this._active&&!this._event)this.stop();else if(this._active&&void 0!==this._event)switch(this._map.getBounds().contains(this._event.latlng)?this.options.clickBehavior.inView:this.options.clickBehavior.outOfView){case"setView":this.setView();break;case"stop":this.stop(),this.options.returnToPrevBounds&&(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._prevBounds)}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start:function(){this._activate(),this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle()},stop:function(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this._onLocationFound,this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},_deactivate:function(){this._map.stopLocate(),this._active=!1,this.options.cacheLocation||(this._event=void 0),this._map.off("locationfound",this._onLocationFound,this),this._map.off("locationerror",this._onLocationError,this),this._map.off("dragstart",this._onDrag,this)},setView:function(){this._drawMarker(),this._isOutsideMapBounds()?(this._event=void 0,this.options.onLocationOutsideMapBounds(this)):this.options.keepCurrentZoomLevel?(this.options.flyTo?this._map.flyTo:this._map.panTo).bind(this._map)([this._event.latitude,this._event.longitude]):(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._event.bounds,{padding:this.options.circlePadding,maxZoom:this.options.locateOptions.maxZoom})},_drawMarker:function(){void 0===this._event.accuracy&&(this._event.accuracy=0);var n,i,e=this._event.accuracy,o=this._event.latlng;if(this.options.drawCircle){var r=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(o).setRadius(e).setStyle(r):this._circle=t.circle(o,e,r).addTo(this._layer)}if(this.options.metric?(n=e.toFixed(0),i=this.options.strings.metersUnit):(n=(3.2808399*e).toFixed(0),i=this.options.strings.feetUnit),this.options.drawMarker){var s=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(o),this._marker.setStyle&&this._marker.setStyle(s)):this._marker=new this.options.markerClass(o,s).addTo(this._layer)}var a=this.options.strings.popup;this.options.showPopup&&a&&this._marker&&this._marker.bindPopup(t.Util.template(a,{distance:n,unit:i}))._popup.setLatLng(o)},_removeMarker:function(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload:function(){this.stop(),this._map.off("unload",this._unload,this)},_onLocationError:function(t){3==t.code&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(t,this))},_onLocationFound:function(t){if((!this._event||this._event.latlng.lat!==t.latlng.lat||this._event.latlng.lng!==t.latlng.lng||this._event.accuracy!==t.accuracy)&&this._active){switch(this._event=t,this._drawMarker(),this._updateContainerStyle(),this.options.setView){case"once":this._justClicked&&this.setView();break;case"untilPan":this._userPanned||this.setView();break;case"always":this.setView()}this._justClicked=!1}},_onDrag:function(){this._event&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing:function(){return!!this._active&&("always"===this.options.setView||("untilPan"===this.options.setView?!this._userPanned:void 0))},_isOutsideMapBounds:function(){return void 0!==this._event&&this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng)},_updateContainerStyle:function(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses:function(t){"requesting"==t?(e(this._container,"active following"),i(this._container,"requesting"),e(this._icon,this.options.icon),i(this._icon,this.options.iconLoading)):"active"==t?(e(this._container,"requesting following"),i(this._container,"active"),e(this._icon,this.options.iconLoading),i(this._icon,this.options.icon)):"following"==t&&(e(this._container,"requesting"),i(this._container,"active following"),e(this._icon,this.options.iconLoading),i(this._icon,this.options.icon))},_cleanClasses:function(){t.DomUtil.removeClass(this._container,"requesting"),t.DomUtil.removeClass(this._container,"active"),t.DomUtil.removeClass(this._container,"following"),e(this._icon,this.options.iconLoading),i(this._icon,this.options.icon)},_resetVariables:function(){this._active=!1,this._justClicked=!1,this._userPanned=!1}});return t.control.locate=function(n){return new t.Control.Locate(n)},o}),window)},69199:(t,n,i)=>{var e=i(89881),o=i(98612);t.exports=function(t,n){var i=-1,r=o(t)?Array(t.length):[];return e(t,(function(t,e,o){r[++i]=n(t,e,o)})),r}},82689:(t,n,i)=>{var e=i(29932),o=i(97786),r=i(67206),s=i(69199),a=i(71131),c=i(7518),l=i(85022),u=i(6557),h=i(1469);t.exports=function(t,n,i){n=n.length?e(n,(function(t){return h(t)?function(n){return o(n,1===t.length?t[0]:t)}:t})):[u];var p=-1;n=e(n,c(r));var f=s(t,(function(t,i,o){return{criteria:e(n,(function(n){return n(t)})),index:++p,value:t}}));return a(f,(function(t,n){return l(t,n,i)}))}},71131:t=>{t.exports=function(t,n){var i=t.length;for(t.sort(n);i--;)t[i]=t[i].value;return t}},26393:(t,n,i)=>{var e=i(33448);t.exports=function(t,n){if(t!==n){var i=void 0!==t,o=null===t,r=t==t,s=e(t),a=void 0!==n,c=null===n,l=n==n,u=e(n);if(!c&&!u&&!s&&t>n||s&&a&&l&&!c&&!u||o&&a&&l||!i&&l||!r)return 1;if(!o&&!s&&!u&&t<n||u&&i&&r&&!o&&!s||c&&i&&r||!a&&r||!l)return-1}return 0}},85022:(t,n,i)=>{var e=i(26393);t.exports=function(t,n,i){for(var o=-1,r=t.criteria,s=n.criteria,a=r.length,c=i.length;++o<a;){var l=e(r[o],s[o]);if(l)return o>=c?l:l*("desc"==i[o]?-1:1)}return t.index-n.index}},23279:(t,n,i)=>{var e=i(13218),o=i(7771),r=i(14841),s=Math.max,a=Math.min;t.exports=function(t,n,i){var c,l,u,h,p,f,d=0,v=!1,_=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(n){var i=c,e=l;return c=l=void 0,d=n,h=t.apply(e,i)}function g(t){return d=t,p=setTimeout(b,n),v?y(t):h}function w(t){var i=t-f;return void 0===f||i>=n||i<0||_&&t-d>=u}function b(){var t=o();if(w(t))return k(t);p=setTimeout(b,function(t){var i=n-(t-f);return _?a(i,u-(t-d)):i}(t))}function k(t){return p=void 0,m&&c?y(t):(c=l=void 0,h)}function C(){var t=o(),i=w(t);if(c=arguments,l=this,f=t,i){if(void 0===p)return g(f);if(_)return clearTimeout(p),p=setTimeout(b,n),y(f)}return void 0===p&&(p=setTimeout(b,n)),h}return n=r(n)||0,e(i)&&(v=!!i.leading,u=(_="maxWait"in i)?s(r(i.maxWait)||0,n):u,m="trailing"in i?!!i.trailing:m),C.cancel=function(){void 0!==p&&clearTimeout(p),d=0,c=f=l=p=void 0},C.flush=function(){return void 0===p?h:k(o())},C}},7771:(t,n,i)=>{var e=i(55639);t.exports=function(){return e.Date.now()}},89734:(t,n,i)=>{var e=i(21078),o=i(82689),r=i(5976),s=i(16612),a=r((function(t,n){if(null==t)return[];var i=n.length;return i>1&&s(t,n[0],n[1])?n=[]:i>2&&s(n[0],n[1],n[2])&&(n=[n[0]]),o(t,e(n,1),[])}));t.exports=a},23493:(t,n,i)=>{var e=i(23279),o=i(13218);t.exports=function(t,n,i){var r=!0,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),e(t,n,{leading:r,maxWait:n,trailing:s})}},42122:(t,n,i)=>{"use strict";var e=i(93379),o=i.n(e),r=i(23928);o()(r.Z,{insert:"head",singleton:!1}),r.Z.locals}}]);