(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7094],{15402:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(45697),o=n.n(r),i=n(24852),c=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(68195).FormattedHTMLMessage,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function l(){return a(this,l),i.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){return this.context.intl?c().createElement(f,{id:this.props.msgId,values:this.props.msgParams}):c().createElement("span",null,this.props.msgId||"")}}])&&s(t.prototype,n),l}(c().Component);p(g,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),p(g,"contextTypes",{intl:o().object});const y=g},76424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(24852),o=n.n(r),i=n(13218),c=n.n(i),l=n(32425),a=["body","caption","infoExtra","className","description","fullText","onClick","onMouseEnter","onMouseLeave","preview","selected","size","style","stylePreview","styleTools","title","loading","dragSymbol","tools"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.body,n=e.caption,r=e.infoExtra,i=e.className,s=void 0===i?"":i,d=e.description,p=e.fullText,f=e.onClick,g=void 0===f?function(){}:f,y=e.onMouseEnter,b=void 0===y?function(){}:y,v=e.onMouseLeave,h=void 0===v?function(){}:v,E=e.preview,O=e.selected,P=e.size,S=e.style,j=void 0===S?{}:S,w=e.stylePreview,I=void 0===w?{}:w,C=e.styleTools,T=void 0===C?{}:C,k=e.title,x=e.loading,D=e.dragSymbol,N=void 0===D?"+":D,Z=e.tools,_=m(e,a);return o().createElement("div",{className:"mapstore-side-card".concat(O?" selected":"").concat(P?" ms-"+P:"").concat(s?" ".concat(s):"").concat(p?" full-text":""),onClick:function(e){return g(u({title:k,preview:E,description:d,caption:n,tools:Z},_),e)},onMouseEnter:b,onMouseLeave:h,style:j},o().createElement("div",{className:"ms-head"},_.isDraggable&&_.connectDragSource&&_.connectDragSource(o().createElement("div",{className:"mapstore-side-card-tool text-center"},o().createElement("div",{style:{width:10,overflow:"hidden"}},N))),E&&o().createElement("div",{className:"mapstore-side-preview",style:I},E),o().createElement("div",{className:"mapstore-side-card-container"},o().createElement("div",{className:"mapstore-side-card-inner"},o().createElement("div",{className:"mapstore-side-card-left-container"},o().createElement("div",{className:"mapstore-side-card-info"},k&&o().createElement("div",{className:"mapstore-side-card-title"},o().createElement("span",null,k)),d&&o().createElement("div",{className:"mapstore-side-card-desc"},c()(d)?d:o().createElement("span",null,d)),n&&o().createElement("div",{className:"mapstore-side-card-caption"},o().createElement("span",null,n))),r),o().createElement("div",{className:"mapstore-side-card-right-container"},o().createElement("div",{className:"mapstore-side-card-tool text-center",style:T},Z),"sm"!==P&&o().createElement("div",{className:"mapstore-side-card-loading"},o().createElement(l.Z,{className:"mapstore-side-card-loader",size:12,hidden:!x})))))),t&&o().createElement("div",{className:"ms-body"},t))}},38064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(45697),o=n.n(r),i=n(24852),c=n.n(i),l=n(30294),a=n(76424);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function s(){return d(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.cardComponent,n=e.items,r=e.colProps,o=e.onItemClick,i=e.size,s=t||a.Z;return c().createElement("div",{className:"msSideGrid"+(this.props.className?" "+this.props.className:"")},c().createElement(l.Row,{className:"items-list"},n.map((function(e,t){return c().createElement(l.Col,u({key:e.id||t},r),c().createElement(s,u({onClick:function(){return o(e)},size:i},e)))}))))}}])&&m(t.prototype,n),s}(c().Component);y(b,"propTypes",{size:o().string,onItemClick:o().func,colProps:o().object,items:o().array,cardComponent:o().oneOfType([o().string,o().func]),className:o().string}),y(b,"defaultProps",{size:"",onItemClick:function(){},colProps:{xs:12},className:"",items:[]});const v=b},25311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(24852),o=n.n(r),i=n(90937),c=n(67076),l=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}};const m=(0,c.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDraggable;return t}),(0,c.compose)((0,i.Ej)("row",d,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,i.GR)("row",{drop:function(e,t){var n=t.getItem();n.sortId!==e.sortId&&e.onSort(e.sortId,n.sortId,{id:e.id,containerId:e.containerId},{id:n.id,containerId:n.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var n=t.connectDragSource,r=t.connectDragPreview,i=t.connectDropTarget,c=t.isDragging,s=t.isOver,u=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,l),d=u.draggingItem&&u.draggingItem.sortId<u.sortId,m=u.draggingItem&&u.draggingItem.containerId===u.containerId,p=m&&c?" ms-dragging":"",f=m&&s?" ms-over":"",g=m&&d?" ms-above":" ms-below";return r(i(o().createElement("div",{className:"ms-dragg".concat(p).concat(f," ").concat(g)},o().createElement("div",null,o().createElement(e,a({},u,{connectDragSource:n,isDragging:c,isOver:s,onDrop:function(e){return e.stopPropagation()}}))))))}})))},45567:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(24852),o=n.n(r),i=n(67076),c=["onSort","isDraggable","items","containerId"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=(0,i.compose)((0,i.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var n=t.onSort,r=t.isDraggable,i=t.items,a=void 0===i?[]:i,u=t.containerId,d=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,c),m=a.map((function(e,t){return s(s({},e),{},{onSort:n,isDraggable:r,sortId:t,key:e.id||t,containerId:u})}));return o().createElement(e,l({},s(s({},d),{},{isDraggable:r}),{items:m}))}})))},93451:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(86638),o=n(45697),i=n.n(o),c=n(84596),l=n.n(c),a=n(1469),s=n.n(a),u=n(14293),d=n.n(u),m=n(47037),p=n.n(m),f=n(67076),g=["messages"];function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(t))return t.map((function(o){var i=(0,r.S$)(e,o[n]||p()(o)&&o||"");return v(v({},o),{},h({},n,d()(i)?t:i))}));var o=(0,r.S$)(e,t);return d()(o)?t:o},O=function(e,t,n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return v(v({},r),{},h({},o,e[o]&&E(t,e[o],n)))}};const P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,f.compose)((0,f.getContext)({messages:i().object}),(0,f.mapProps)((function(n){var r=n.messages,o=y(n,g);return v(v({},o),l()(e).reduce(O(o,r,t),{}))})))}},75105:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>De});var r=n(24852),o=n.n(r),i=n(71703),c=n(22222),l=n(66113),a=n(66190),s=n(34990),u=n(45697),d=n.n(u),m=n(92579),p=n(5346),f=n(65539),g=n(80717),y=n(90085),b=n(12122),v=n(48403),h=n.n(v),E=n(13311),O=n.n(E),P=n(27361),S=n.n(P),j=n(30294),w=n(67076),I=n(55877),C=n.n(I),T=n(76424),k=n(38064),x=n(25311),D=n(45567),N=n(42090),Z=n.n(N);const _=(0,w.compose)((0,w.withState)("text","setText",(function(e){return e.title})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.text,n=e.className,r=void 0===n?"ms-story-title-editable":n,i=e.onUpdate,c=void 0===i?function(){}:i,l=e.setText,a=void 0===l?function(){}:l;return o().createElement(Z(),{className:r,html:t,onClick:function(e){e.stopPropagation()},onChange:function(e){a(e.target.value)},onBlur:function(e){c(e.target.innerText)}})}));function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var F=(0,D.Z)(k.Z),U=(0,x.Z)((function(e){return o().createElement(T.Z,R({},e,{dragSymbol:o().createElement(j.Glyphicon,{glyph:"menu-hamburger"})}))})),z=function(e,t){return function(n){n.stopPropagation(),t(e)}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.src,r=e.thumbnail,i={text:"sheet",image:"picture",title:"story-title-section",banner:"story-banner-section",paragraph:"story-paragraph-section",immersive:"story-immersive-section",media:"story-media-section",map:"1-map",columnleft:"align-left",columnright:"align-right",columncenter:"align-center",webPage:"story-webpage-section",video:"play"},c=r||"image"===t&&n;return c?o().createElement("img",{src:c}):o().createElement(j.Glyphicon,{glyph:i[t]||"picture"})},G=(0,w.compose)((0,i.connect)((0,c.P1)(l.jq,(function(e){return{resources:e}}))),(0,w.withProps)((function(e){var t=e.resources,n=e.resourceId;return(O()(t,{id:n})||{}).data})))(B),L={title:function(){return null},paragraph:function(e){var t=e.id,n=e.contents,r=e.isCollapsed,i=e.scrollTo,c=e.onSort,l=e.sectionId,a=e.onUpdate;return o().createElement("div",{style:{position:"relative"}},o().createElement(F,{containerId:t,isDraggable:!0,onSort:function(e,r,o,i){if(o.containerId===i.containerId){var l='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents[{"id":"').concat(i.id,'"}]'),a='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents'),s=e,u=C()();c(l,a,s,u,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents[{"id":"').concat(u,'"}]'))}},cardComponent:U,items:n[0].contents.map((function(e){var s="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=L[e.type];return{id:e.id,preview:o().createElement(G,{type:s,resourceId:e.resourceId}),tools:o().createElement(g.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:z(e.id,i)}]}),title:o().createElement(_,{title:e.title||h()(e.type),onUpdate:function(t){return a('sections[{"id": "'.concat(l,'"}].contents[{"id": "').concat(n[0].id,'"}].contents[{"id": "').concat(e.id,'"}]'),{title:t},"merge")}}),description:"type: ".concat(e.type),body:u&&o().createElement(u,{id:t,onSort:c,scrollTo:i,isCollapsed:r,contents:e.contents})}}))}))},column:function(e){var t=e.sectionId,n=e.id,r=e.contents,i=e.isCollapsed,c=e.scrollTo,l=e.onSort,a=e.onUpdate;return o().createElement("div",{style:{position:"relative"}},o().createElement(F,{containerId:n,isDraggable:!0,onSort:function(e,r,o,i){if(o.containerId===i.containerId){var c='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents[{"id":"').concat(i.id,'"}]'),a='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents'),s=e,u=C()();l(c,a,s,u,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents[{"id":"').concat(u,'"}]'))}},cardComponent:U,items:r.map((function(e){var r="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,s=L[e.type];return{id:e.id,preview:o().createElement(G,{type:r,resourceId:e.resourceId}),tools:o().createElement(g.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:z(e.id,c)}]}),title:o().createElement(_,{title:e.title||h()(e.type),onUpdate:function(r){return a('sections[{"id": "'.concat(t,'"}].contents[{"id": "').concat(n,'"}].contents[{"id": "').concat(e.id,'"}]'),{title:r},"merge")}}),description:"type: ".concat(e.type),body:!i&&s&&o().createElement(s,{id:n,onSort:l})}}))}))},immersive:function(e){var t=e.id,n=e.contents,r=e.isCollapsed,i=e.scrollTo,c=e.onUpdate,l=e.onSort,a=e.currentPage;return o().createElement("div",{style:{position:"relative"}},o().createElement(F,{containerId:t,isDraggable:!0,onSort:function(e,n,r,o){if(r.containerId===o.containerId){var i='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(o.id,'"}]'),c='sections[{ "id": "'.concat(t,'" }].contents'),a=e,s=C()();l(i,c,a,s,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(s,'"}]'))}},cardComponent:U,items:n.map((function(e){var n="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,s=L[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:o().createElement(B,{type:n}),tools:o().createElement(g.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:z(e.id,i)}]}),title:o().createElement(_,{title:e.title||h()(e.type),onUpdate:function(n){return c('sections[{"id": "'.concat(t,'"}].contents[{"id":"').concat(e.id,'"}]'),{title:n},"merge")}}),description:"type: ".concat(e.type),body:s&&o().createElement(s,{id:e.id,sectionId:t,onSort:l,onUpdate:c,scrollTo:i,isCollapsed:r,contents:e.contents})}}))}))}},M=function(e){var t=e.scrollTo,n=e.isCollapsed,r=void 0!==n&&n,i=e.currentPage,c=e.onSort,l=e.onSelect,a=e.onUpdate,s=e.selected,u=void 0===s?"title_section_id1":s;return function(e){var n=e.contents,s=e.type,d=e.title,m=e.id,p=L[s];return{id:m,preview:o().createElement(G,{type:s,resourceId:S()(n[0],"background.resourceId")}),className:i&&i.sectionId===m?"ms-highlight":"",onClick:function(){return l(m)},selected:m===u,tools:o().createElement(g.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{onClick:z(m,t),glyph:"zoom-to",tooltipId:"geostory.zoomToContent"}]}),title:o().createElement(_,{title:d,onUpdate:function(e){return a('sections[{"id": "'.concat(m,'"}]'),{title:e},"merge")}}),description:"type: ".concat(s),body:r?null:p&&o().createElement(p,{id:m,sectionId:m,onSort:c,onUpdate:a,onSelect:l,currentPage:i,selected:u,scrollTo:t,isCollapsed:r,contents:n})}}};const A=function(e){var t=e.sections,n=void 0===t?[]:t,r=e.scrollTo,i=e.onSelect,c=void 0===i?function(){}:i,l=e.isCollapsed,a=e.currentPage,s=e.selected,u=e.onSort,d=e.onUpdate;return o().createElement(F,{isDraggable:!0,onSort:function(e,t,n,r){if("story-sections"===n.containerId&&"story-sections"===r.containerId){var o=C()(),i='sections[{ "id": "'.concat(r.id,'" }]');u(i,"sections",e,o,'sections[{ "id": "'.concat(o,'" }]'))}},containerId:"story-sections",cardComponent:U,size:"sm",items:n.map(M({currentPage:a,onSelect:c,isCollapsed:l,scrollTo:r,selected:s,onUpdate:d,onSort:u}))})};var q=n(45869),K=n(14068),V=n(28388),W=n.n(V),Y=(n(50288),n(93451)),$=n(11766),H=n(43129);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=(0,Y.Z)("placeholder")(j.FormControl),re=[{value:"14px",label:"14px"},{value:"16px",label:"16px"},{value:"18px",label:"18px"},{value:"24px",label:"24px"},{value:"28px",label:"28px"}];const oe=function(e){var t,n,i,c,l,a,s,u,d=e.items,f=void 0===d?[]:d,g=e.settings,y=e.storyFonts,b=e.onToggleSettings,v=void 0===b?function(){}:b,h=e.onUpdateSettings,E=void 0===h?function(){}:h,O=ee((0,r.useState)(g.storyTitle),2),P=O[0],S=O[1],w=ee((0,r.useState)(g.expanded||[]),2),I=w[0],C=w[1],T=y.length>0?y:m.Km;return o().createElement(j.Form,{className:"ms-geostory-settings"},o().createElement("div",null,o().createElement("h4",null,o().createElement(p.Z,{msgId:"geostory.builder.settings.storyTheme"})),o().createElement("hr",null)),o().createElement(j.FormGroup,null,o().createElement("div",{style:{marginBottom:"10px"}},o().createElement(j.ControlLabel,null,o().createElement(p.Z,{msgId:"geostory.builder.settings.theme"}))),o().createElement($.Z,{themeStyle:null==g||null===(t=g.theme)||void 0===t?void 0:t.general,placement:"right",disableBackgroundAlpha:!0,disableShadow:!0,onChange:function(e){return E("theme",X(X({},null==g?void 0:g.theme),{},{general:e}))}})),o().createElement(j.FormGroup,null,o().createElement("div",{className:"ms-font-select"},o().createElement("div",null,o().createElement(p.Z,{msgId:"geostory.builder.settings.fontFamily"})),o().createElement("div",null,o().createElement(H.ZP,{value:null==g||null===(n=g.theme)||void 0===n||null===(i=n.general)||void 0===i?void 0:i.fontFamily,onChange:function(e){var t;return E("theme",X(X({},null==g?void 0:g.theme),{},{general:X(X({},null==g||null===(t=g.theme)||void 0===t?void 0:t.general),{},{fontFamily:e.value})}))},options:(u=T,u.map((function(e){return{label:e,value:e}})))})))),o().createElement(j.FormGroup,null,o().createElement("div",{style:{marginBottom:"10px"}},o().createElement(j.ControlLabel,null,o().createElement(p.Z,{msgId:"geostory.builder.settings.overlay"}))),o().createElement($.Z,{themeStyle:null==g||null===(c=g.theme)||void 0===c?void 0:c.overlay,placement:"right",onChange:function(e){return E("theme",X(X({},null==g?void 0:g.theme),{},{overlay:e}))}})),o().createElement(j.FormGroup,null,o().createElement("div",{style:{marginBottom:"10px"}},o().createElement(j.ControlLabel,null,o().createElement(p.Z,{msgId:"Links"}))),o().createElement($.Z,{disableBackgroundPicker:!0,disableShadow:!0,themeStyle:null==g||null===(l=g.theme)||void 0===l?void 0:l.link,placement:"right",onChange:function(e){return E("theme",X(X({},null==g?void 0:g.theme),{},{link:e}))}})),o().createElement("div",null,o().createElement("h4",null,o().createElement(p.Z,{msgId:"geostory.builder.settings.storyHeader"})),o().createElement("hr",null)),o().createElement(j.FormGroup,null,o().createElement("div",{style:{marginBottom:"10px"}},o().createElement(j.ControlLabel,null,o().createElement(p.Z,{msgId:"geostory.builder.settings.title"})),o().createElement(q.Z,{onChange:function(){return v("isTitleEnabled")},className:"ms-geostory-settings-switch",checked:g.isTitleEnabled})),o().createElement(ne,{disabled:!g.isTitleEnabled,value:P,onChange:function(e){return S(e.target.value)},onBlur:function(e){return E("storyTitle",e.target.value)},placeholder:"geostory.builder.settings.titlePlaceholder",style:{marginTop:"10px"}})),o().createElement(j.FormGroup,null,o().createElement("div",{className:"ms-font-select"},o().createElement("div",null,o().createElement(p.Z,{msgId:"geostory.builder.settings.fontSize"})),o().createElement("div",null,o().createElement(H.ZP,{disabled:!g.isTitleEnabled,value:g.storyTitleFontSize,onChange:function(e){return E("storyTitleFontSize",e.value)},options:re,clearable:!1})))),o().createElement(j.FormGroup,null,o().createElement("div",{style:{marginBottom:"10px"}},o().createElement(j.ControlLabel,null,o().createElement(p.Z,{msgId:"geostory.builder.settings.logo"})),o().createElement(q.Z,{onChange:function(){return v("isLogoEnabled")},className:"ms-geostory-settings-switch",checked:g.isLogoEnabled})),g.isLogoEnabled&&o().createElement(o().Fragment,null,o().createElement(K.Z,{thumbnail:(null==g||null===(a=g.thumbnail)||void 0===a?void 0:a.data)||(null==g||null===(s=g.thumbnail)||void 0===s?void 0:s.url),onUpdate:function(e,t){var n;E("thumbnail",{data:e,url:null==t||null===(n=t[0])||void 0===n?void 0:n.preview}),E("thumbnailErrors",void 0)},onRemove:function(){E("thumbnail",void 0),E("thumbnailErrors",void 0)},onError:function(e){return E("thumbnailErrors",e)},message:o().createElement(p.Z,{msgId:"geostory.builder.settings.logoPlaceholder"}),thumbnailOptions:{width:300,height:150,type:"image/png",contain:!0}}),g.thumbnailErrors&&g.thumbnailErrors.length>0&&o().createElement(j.Alert,{bsStyle:"danger",className:"text-center"},o().createElement("div",null,o().createElement(p.Z,{msgId:"map.error"})),-1!==g.thumbnailErrors.indexOf("FORMAT")&&o().createElement("div",null,o().createElement(p.Z,{msgId:"map.errorFormat"})),-1!==g.thumbnailErrors.indexOf("SIZE")&&o().createElement("div",null,o().createElement(p.Z,{msgId:"map.errorSize"}))))),o().createElement(j.FormGroup,null,o().createElement("div",{style:{marginBottom:"10px"}},o().createElement(j.ControlLabel,null,o().createElement(p.Z,{msgId:"geostory.builder.settings.navbar"})),o().createElement(q.Z,{onChange:function(){return v("isNavbarEnabled")},className:"ms-geostory-settings-switch",checked:g.isNavbarEnabled})),g.isNavbarEnabled&&o().createElement(W(),{showNodeIcon:!1,nativeCheckboxes:!0,nodes:f,checked:g.checked||[],expanded:I,onCheck:function(e){return E("checked",e)},onExpand:function(e){return C(e)}})))};function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=(0,b.Z)(y.Z),pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(l,e);var t,n,r,i,c=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ue(r);if(i){var n=ue(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return se(this,e)});function l(){return ce(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.story,n=e.settings,r=e.scrollTo,i=e.setEditing,c=e.mode,l=e.isCollapsed,a=e.isToolbarEnabled,s=e.isSettingsEnabled,u=e.isSettingsChanged,d=e.settingsItems,b=e.onToggleCardPreview,v=e.onToggleSettingsPanel,h=e.onToggleSettings,E=e.onUpdateSettings,O=e.currentPage,P=e.selected,S=e.onRemove,j=e.onSort,w=e.onUpdate,I=e.onSelect,C=e.storyFonts,T=u?me:y.Z;return o().createElement(f.Z,{className:"ms-geostory-builder",header:o().createElement("div",{className:"text-center ms-geostory-builder-header"},o().createElement(g.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},transitionProps:!1,buttons:[{visible:!s,Element:function(){return o().createElement(me,{glyph:"trash",bsStyle:"primary",className:"square-button-md no-border",tooltipId:"geostory.builder.delete",confirmTitle:o().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmTitle"}),disabled:!a||!P,confirmContent:o().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmContent"}),onClick:function(){S(P&&'sections[{ "id": "'.concat(P,'" }]')||"")}})}},{tooltipId:"geostory.builder.preview",glyph:"preview",visible:!s,disabled:!a,onClick:function(){return i(c===m.nl.VIEW)}},{tooltipId:"geostory.builder.settings.tooltip",glyph:"cog",id:"geostory-builder-settings-button",visible:!s,onClick:function(){return v()}},{tooltipId:"geostory.builder.".concat(l?"expandAll":"collapseAll"),glyph:l?"chevron-left":"chevron-down",bsStyle:"primary",disabled:!a,visible:!s,onClick:function(){return b()}},{visible:s,Element:function(){return o().createElement(T,{bsStyle:"primary",glyph:"arrow-left",className:"square-button-md no-border",tooltipId:"geostory.builder.settings.back",confirmTitle:o().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmTitle"}),confirmContent:o().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmBody"}),confirmNo:o().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmNo"}),confirmYes:o().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmYes"}),onClick:function(){v()}})}},{tooltipId:"geostory.builder.settings.save",glyph:"floppy-disk",visible:s,onClick:function(){return v(!0)}}]}))},s&&o().createElement(oe,{items:d,settings:n,onToggleSettings:h,onUpdateSettings:E,storyFonts:C}),a&&!s?o().createElement(A,{currentPage:O,scrollTo:r,onSelect:I,selected:P,onUpdate:w,isCollapsed:l,sections:t&&t.sections,onSort:j}):s?null:o().createElement("div",{className:"ms-story-empty-content-parent"},o().createElement("div",{className:"ms-story-empty-content-child"},o().createElement(p.Z,{msgId:"geostory.builder.noContents"}))))}}])&&le(t.prototype,n),l}(o().Component);de(pe,"propTypes",{currentPage:d().object,settingsItems:d().array,story:d().object,settings:d().object,mode:d().oneOf(m.lg.Modes),onToggleCardPreview:d().func,onToggleSettingsPanel:d().func,onToggleSettings:d().func,onUpdateSettings:d().func,isCollapsed:d().bool,isToolbarEnabled:d().bool,isSettingsEnabled:d().bool,isSettingsChanged:d().bool,scrollTo:d().func,setEditing:d().func,onSort:d().func,onSelect:d().func,onRemove:d().func,onUpdate:d().func,selected:d().string,storyFonts:d().array}),de(pe,"defaultProps",{mode:m.nl.VIEW,setEditing:function(){},onToggleCardPreview:function(){},onToggleSettingsPanel:function(){},story:{},settings:{},isCollapsed:!0,isToolbarEnabled:!0,isSettingsEnabled:!1,onSort:function(){}});const fe=pe;var ge=n(31398),ye=n(22843),be=n(15135),ve=n(5803),he=n(72500),Ee=n.n(he),Oe=n(95659),Pe=n.n(Oe),Se=(n(13880),["hash"]);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){Ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ce(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Te=n(38560),ke=(0,be.Z)(Te.Z),xe=(0,i.connect)((0,c.zB)({isEditAllowed:l.pu}),{setEditingMode:s.D_})((function(e){var t=e.isEditAllowed,n=e.setEditingMode,r=void 0===n?function(){}:n,i=e.location,c=e.history;return t?o().createElement(ke,{id:"edit-story",className:"square-button-md no-border",onClick:function(){r(!0);var e=i.pathname;if(e.includes("/geostory/shared")){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Ee().parse(e),n=t.hash,r=void 0===n?"":n,o=Ce(t,Se),i=Ee().parse(r&&Pe()(r,"#")||""),c=Ee().format(we(we({},i),{},{query:null,search:null}));return Ee().format(we(we({},o),{},{query:null,search:null,hash:c?"#".concat(c):null}))}(e.replace("/geostory/shared","/geostory"));c.push(t)}},tooltipId:"geostory.navigation.edit",tooltipPosition:"bottom"},o().createElement(j.Glyphicon,{glyph:"pencil"})):null}));const De=(0,ye.rx)("GeoStoryEditor",{component:(0,i.connect)((0,c.zB)({isCollapsed:l.eg,mode:l.eK,story:l.Kg,currentPage:l.PR,settingsItems:l.yL,settings:l.TQ,isSettingsChanged:l.KR,isToolbarEnabled:l.Lu,selected:l.sY,isSettingsEnabled:l.W5,isFocused:l.z7,storyFonts:l.mm}),{setEditingMode:s.D_,onUpdateSettings:s.m7,onToggleCardPreview:s.kB,onToggleSettingsPanel:s.G5,onToggleSettings:s.Xn,onRemove:s.Od,onSelect:s._e,onSort:s.pB,onUpdate:s.Vx,onBasicError:ge.d})((function(e){var t=e.currentPage,n=e.isCollapsed,r=e.isSettingsChanged,i=void 0!==r&&r,c=e.isSettingsEnabled,l=e.isToolbarEnabled,a=e.isFocused,s=void 0!==a&&a,u=e.mode,d=void 0===u?m.nl.VIEW:u,p=e.story,f=void 0===p?{}:p,g=e.settings,y=void 0===g?{}:g,b=e.settingsItems,v=e.selected,h=e.storyFonts,E=void 0===h?[]:h,O=e.setEditingMode,P=void 0===O?function(){}:O,S=e.onToggleCardPreview,j=void 0===S?function(){}:S,w=e.onToggleSettingsPanel,I=void 0===w?function(){}:w,C=e.onToggleSettings,T=void 0===C?function(){}:C,k=e.onUpdateSettings,x=void 0===k?function(){}:k,D=e.onSelect,N=void 0===D?function(){}:D,Z=e.onRemove,_=void 0===Z?function(){}:Z,R=e.onUpdate,F=void 0===R?function(){}:R,U=e.onSort,z=void 0===U?function(){}:U;return d!==m.nl.EDIT||s?null:o().createElement("div",{key:"left-column",className:"ms-geostory-editor",style:{order:-1,width:400,position:"relative"}},o().createElement(fe,{currentPage:t,isCollapsed:n,isSettingsChanged:i,isSettingsEnabled:c,isToolbarEnabled:l,mode:d,scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,m.M1)(e,t)},selected:v,settings:y,settingsItems:b,story:f,storyFonts:(0,m._R)(E),setEditing:P,onRemove:_,onSelect:N,onSort:z,onToggleCardPreview:j,onToggleSettings:T,onToggleSettingsPanel:I,onUpdate:F,onUpdateSettings:x}))})),containers:{GeoStoryNavigation:{tool:(0,ve.EN)(xe)}},reducers:{geostory:a.Z}})}}]);