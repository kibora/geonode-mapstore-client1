(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4653],{69199:(t,e,i)=>{var n=i(89881),o=i(98612);t.exports=function(t,e){var i=-1,r=o(t)?Array(t.length):[];return n(t,(function(t,n,o){r[++i]=e(t,n,o)})),r}},82689:(t,e,i)=>{var n=i(29932),o=i(97786),r=i(67206),s=i(69199),a=i(71131),h=i(7518),p=i(85022),u=i(6557),d=i(1469);t.exports=function(t,e,i){e=e.length?n(e,(function(t){return d(t)?function(e){return o(e,1===t.length?t[0]:t)}:t})):[u];var c=-1;e=n(e,h(r));var l=s(t,(function(t,i,o){return{criteria:n(e,(function(e){return e(t)})),index:++c,value:t}}));return a(l,(function(t,e){return p(t,e,i)}))}},71131:t=>{t.exports=function(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].value;return t}},26393:(t,e,i)=>{var n=i(33448);t.exports=function(t,e){if(t!==e){var i=void 0!==t,o=null===t,r=t==t,s=n(t),a=void 0!==e,h=null===e,p=e==e,u=n(e);if(!h&&!u&&!s&&t>e||s&&a&&p&&!h&&!u||o&&a&&p||!i&&p||!r)return 1;if(!o&&!s&&!u&&t<e||u&&i&&r&&!o&&!s||h&&i&&r||!a&&r||!p)return-1}return 0}},85022:(t,e,i)=>{var n=i(26393);t.exports=function(t,e,i){for(var o=-1,r=t.criteria,s=e.criteria,a=r.length,h=i.length;++o<a;){var p=n(r[o],s[o]);if(p)return o>=h?p:p*("desc"==i[o]?-1:1)}return t.index-e.index}},23279:(t,e,i)=>{var n=i(13218),o=i(7771),r=i(14841),s=Math.max,a=Math.min;t.exports=function(t,e,i){var h,p,u,d,c,l,f=0,g=!1,v=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function _(e){var i=h,n=p;return h=p=void 0,f=e,d=t.apply(n,i)}function m(t){return f=t,c=setTimeout(C,e),g?_(t):d}function T(t){var i=t-l;return void 0===l||i>=e||i<0||v&&t-f>=u}function C(){var t=o();if(T(t))return E(t);c=setTimeout(C,function(t){var i=e-(t-l);return v?a(i,u-(t-f)):i}(t))}function E(t){return c=void 0,y&&h?_(t):(h=p=void 0,d)}function P(){var t=o(),i=T(t);if(h=arguments,p=this,l=t,i){if(void 0===c)return m(l);if(v)return clearTimeout(c),c=setTimeout(C,e),_(l)}return void 0===c&&(c=setTimeout(C,e)),d}return e=r(e)||0,n(i)&&(g=!!i.leading,u=(v="maxWait"in i)?s(r(i.maxWait)||0,e):u,y="trailing"in i?!!i.trailing:y),P.cancel=function(){void 0!==c&&clearTimeout(c),f=0,h=l=p=c=void 0},P.flush=function(){return void 0===c?d:E(o())},P}},7771:(t,e,i)=>{var n=i(55639);t.exports=function(){return n.Date.now()}},89734:(t,e,i)=>{var n=i(21078),o=i(82689),r=i(5976),s=i(16612),a=r((function(t,e){if(null==t)return[];var i=e.length;return i>1&&s(t,e[0],e[1])?e=[]:i>2&&s(e[0],e[1],e[2])&&(e=[e[0]]),o(t,n(e,1),[])}));t.exports=a},23493:(t,e,i)=>{var n=i(23279),o=i(13218);t.exports=function(t,e,i){var r=!0,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),n(t,e,{leading:r,maxWait:e,trailing:s})}},16892:(t,e,i)=>{"use strict";i.d(e,{Z:()=>E});var n=i(58493),o=i(13002),r=i(9520),s=i(73381),a=i(40353),h=i(91358),p=i(21882),u=i(18672),d="accuracy",c="accuracyGeometry",l="altitude",f="altitudeAccuracy",g="heading",v="position",y="projection",_="speed",m="tracking",T="trackingOptions",C=function(t){function e(e){t.call(this,s.Z.ERROR),this.code=e.code,this.message=e.message}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(r.ZP);const E=function(t){function e(e){t.call(this);var i=e||{};this.position_=null,this.transform_=u.gD,this.watchId_=void 0,(0,o.oL)(this,(0,n.v_)(y),this.handleProjectionChanged_,this),(0,o.oL)(this,(0,n.v_)(m),this.handleTrackingChanged_,this),void 0!==i.projection&&this.setProjection(i.projection),void 0!==i.trackingOptions&&this.setTrackingOptions(i.trackingOptions),this.setTracking(void 0!==i.tracking&&i.tracking)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.disposeInternal=function(){this.setTracking(!1),t.prototype.disposeInternal.call(this)},e.prototype.handleProjectionChanged_=function(){var t=this.getProjection();t&&(this.transform_=(0,u.WO)((0,u.U2)("EPSG:4326"),t),this.position_&&this.set(v,this.transform_(this.position_)))},e.prototype.handleTrackingChanged_=function(){if(h.De){var t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}},e.prototype.positionChange_=function(t){var e=t.coords;this.set(d,e.accuracy),this.set(l,null===e.altitude?void 0:e.altitude),this.set(f,null===e.altitudeAccuracy?void 0:e.altitudeAccuracy),this.set(g,null===e.heading?void 0:(0,p.Yr)(e.heading)),this.position_?(this.position_[0]=e.longitude,this.position_[1]=e.latitude):this.position_=[e.longitude,e.latitude];var i=this.transform_(this.position_);this.set(v,i),this.set(_,null===e.speed?void 0:e.speed);var n=(0,a.iu)(this.position_,e.accuracy);n.applyTransform(this.transform_),this.set(c,n),this.changed()},e.prototype.positionError_=function(t){this.setTracking(!1),this.dispatchEvent(new C(t))},e.prototype.getAccuracy=function(){return this.get(d)},e.prototype.getAccuracyGeometry=function(){return this.get(c)||null},e.prototype.getAltitude=function(){return this.get(l)},e.prototype.getAltitudeAccuracy=function(){return this.get(f)},e.prototype.getHeading=function(){return this.get(g)},e.prototype.getPosition=function(){return this.get(v)},e.prototype.getProjection=function(){return this.get(y)},e.prototype.getSpeed=function(){return this.get(_)},e.prototype.getTracking=function(){return this.get(m)},e.prototype.getTrackingOptions=function(){return this.get(T)},e.prototype.setProjection=function(t){this.set(y,(0,u.U2)(t))},e.prototype.setTracking=function(t){this.set(m,t)},e.prototype.setTrackingOptions=function(t){this.set(T,t)},e}(n.ZP)},93409:(t,e,i)=>{"use strict";i.d(e,{Z:()=>g});var n=i(40188),o=i(58493),r=i(12868),s=i(67644),a=i(85386),h=i(13002),p=i(21915),u="element",d="map",c="offset",l="position",f="positioning";const g=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+s.$A,this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,(0,h.oL)(this,(0,o.v_)(u),this.handleElementChanged,this),(0,h.oL)(this,(0,o.v_)(d),this.handleMapChanged,this),(0,h.oL)(this,(0,o.v_)(c),this.handleOffsetChanged,this),(0,h.oL)(this,(0,o.v_)(l),this.handlePositionChanged,this),(0,h.oL)(this,(0,o.v_)(f),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:r.Z.TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(u)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(d)},e.prototype.getOffset=function(){return this.get(c)},e.prototype.getPosition=function(){return this.get(l)},e.prototype.getPositioning=function(){return this.get(f)},e.prototype.handleElementChanged=function(){(0,a.ep)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&((0,a.ZF)(this.element),(0,h.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,h.oL)(t,n.Z.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(l)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(u,t)},e.prototype.setMap=function(t){this.set(d,t)},e.prototype.setOffset=function(t){this.set(c,t)},e.prototype.setPosition=function(t){this.set(l,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),i=this.getElement(),n=this.getRect(i,[(0,a.iO)(i),(0,a.Pb)(i)]),o=this.autoPanMargin;if(!(0,p.r4)(e,n)){var r=n[0]-e[0],s=e[2]-n[2],h=n[1]-e[1],u=e[3]-n[3],d=[0,0];if(r<0?d[0]=r-o:s<0&&(d[0]=Math.abs(s)+o),h<0?d[1]=h-o:u<0&&(d[1]=Math.abs(u)+o),0!==d[0]||0!==d[1]){var c=t.getView().getCenter(),l=t.getPixelFromCoordinate(c),f=[l[0]+d[0],l[1]+d[1]];t.getView().animate({center:t.getCoordinateFromPixel(f),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var i=t.getBoundingClientRect(),n=i.left+window.pageXOffset,o=i.top+window.pageYOffset;return[n,o,n+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(f,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var i=t.getPixelFromCoordinate(e),n=t.getSize();this.updateRenderedPosition(i,n)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var i=this.element.style,n=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var s=n[0],a=n[1];if(o==r.Z.BOTTOM_RIGHT||o==r.Z.CENTER_RIGHT||o==r.Z.TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=i.left="");var h=Math.round(e[0]-t[0]-s)+"px";this.rendered.right_!=h&&(this.rendered.right_=i.right=h)}else{""!==this.rendered.right_&&(this.rendered.right_=i.right=""),o!=r.Z.BOTTOM_CENTER&&o!=r.Z.CENTER_CENTER&&o!=r.Z.TOP_CENTER||(s-=this.element.offsetWidth/2);var p=Math.round(t[0]+s)+"px";this.rendered.left_!=p&&(this.rendered.left_=i.left=p)}if(o==r.Z.BOTTOM_LEFT||o==r.Z.BOTTOM_CENTER||o==r.Z.BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=i.top="");var u=Math.round(e[1]-t[1]-a)+"px";this.rendered.bottom_!=u&&(this.rendered.bottom_=i.bottom=u)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=i.bottom=""),o!=r.Z.CENTER_LEFT&&o!=r.Z.CENTER_CENTER&&o!=r.Z.CENTER_RIGHT||(a-=this.element.offsetHeight/2);var d=Math.round(t[1]+a)+"px";this.rendered.top_!=d&&(this.rendered.top_=i.top=d)}},e.prototype.getOptions=function(){return this.options},e}(o.ZP)},12868:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},69669:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var n=i(21915),o=i(28795),r=i(32538),s=i(38667),a=function(t){function e(e,i,n){if(t.call(this),void 0!==n&&void 0===i)this.setFlatCoordinates(n,e);else{var o=i||0;this.setCenterAndRadius(e,o,n)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),void 0,this.layout)},e.prototype.closestPointXY=function(t,e,i,n){var o=this.flatCoordinates,r=t-o[0],s=e-o[1],a=r*r+s*s;if(a<n){if(0===a)for(var h=0;h<this.stride;++h)i[h]=o[h];else{var p=this.getRadius()/Math.sqrt(a);i[0]=o[0]+p*r,i[1]=o[1]+p*s;for(var u=2;u<this.stride;++u)i[u]=o[u]}return i.length=this.stride,a}return n},e.prototype.containsXY=function(t,e){var i=this.flatCoordinates,n=t-i[0],o=e-i[1];return n*n+o*o<=this.getRadiusSquared_()},e.prototype.getCenter=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.computeExtent=function(t){var e=this.flatCoordinates,i=e[this.stride]-e[0];return(0,n.T9)(e[0]-i,e[1]-i,e[0]+i,e[1]+i,t)},e.prototype.getRadius=function(){return Math.sqrt(this.getRadiusSquared_())},e.prototype.getRadiusSquared_=function(){var t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e},e.prototype.getType=function(){return o.Z.CIRCLE},e.prototype.intersectsExtent=function(t){var e=this.getExtent();if((0,n.kK)(t,e)){var i=this.getCenter();return t[0]<=i[0]&&t[2]>=i[0]||t[1]<=i[1]&&t[3]>=i[1]||(0,n.H6)(t,this.intersectsCoordinate,this)}return!1},e.prototype.setCenter=function(t){var e=this.stride,i=this.flatCoordinates[e]-this.flatCoordinates[0],n=t.slice();n[e]=n[0]+i;for(var o=1;o<e;++o)n[e+o]=t[o];this.setFlatCoordinates(this.layout,n),this.changed()},e.prototype.setCenterAndRadius=function(t,e,i){this.setLayout(i,t,0),this.flatCoordinates||(this.flatCoordinates=[]);var n=this.flatCoordinates,o=(0,s.IG)(n,0,t,this.stride);n[o++]=n[0]+e;for(var r=1,a=this.stride;r<a;++r)n[o++]=n[r];n.length=o,this.changed()},e.prototype.getCoordinates=function(){return null},e.prototype.setCoordinates=function(t,e){},e.prototype.setRadius=function(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()},e}(r.ZP);a.prototype.transform;const h=a}}]);