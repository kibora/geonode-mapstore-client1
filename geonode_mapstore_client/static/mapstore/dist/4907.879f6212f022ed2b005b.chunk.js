(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4907],{58767:(e,t,o)=>{"use strict";o.d(t,{Eo:()=>z,z4:()=>Y,N_:()=>V,_P:()=>Q,Tl:()=>ee,bh:()=>te,F7:()=>oe});var n=o(84110),r=o.n(n),i=o(86638),l=o(33506),a=o(66287),c=o(61868),s=o(52628),u=o.n(s),y=o(14293),d=o.n(y),p=o(12571),f=o.n(p),g=o(91175),v=o.n(g),m=o(84596),h=o.n(m),P=o(10928),C=o.n(P),S=o(1469),T=o.n(S),b=o(30998),O=o.n(b),A=o(47037),x=o.n(A),F=o(22138),k=o.n(F),L=o(79101),w=o(27418),M=o.n(w);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=o){var n,r,i=[],l=!0,a=!1;try{for(o=o.call(e);!(l=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){a=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(a)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function I(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function G(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?I(Object(o),!0).forEach((function(t){E(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):I(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function E(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var Z={},D={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2},j={iconGlyph:"comment",iconShape:"square",iconColor:"blue"},z={fontStyle:"normal",fontSize:"14",fontSizeUom:"px",fontFamily:"Arial",fontWeight:"normal",font:"14px Arial",textAlign:"center",color:"#000000",opacity:1,fillColor:"#000000",fillOpacity:1},U={color:"#ffcc33",opacity:1,weight:3,editing:{fill:1}},R={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,editing:{fill:1}},Y={Text:z,Point:j,Circle:D,MultiPoint:j,LineString:U,MultiLineString:U,Polygon:R,MultiPolygon:R},W="ms2-annotations",V=function(){return[G(G({},Y.Point),{},{highlight:!0,iconAnchor:[.5,.5],type:"Point",title:"StartPoint Style",geometry:"startPoint",filtering:!1,id:r()()}),G(G({},Y.Point),{},{highlight:!0,iconAnchor:[.5,.5],type:"Point",title:"EndPoint Style",geometry:"endPoint",filtering:!1,id:r()()})]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1!==e.indexOf("rgba")?"rgb".concat(e.slice(e.indexOf("("),e.lastIndexOf(",")),")"):e},X=function(e){return("start"===e?"lm":"end"===e&&"rm")||"cm"},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,o=void 0===t?"Point":t,n=e.features,r=void 0===n?[]:n;return"FeatureCollection"===o?r.reduce((function(e,t){return e[t.geometry.type]=Y[t.geometry.type],e}),{type:"FeatureCollection"}):G({},Y[o])},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return G({title:"annotations.defaulttitle"!==(0,i.S$)(t,"annotations.defaulttitle")?(0,i.S$)(t,"annotations.defaulttitle"):"Default title",id:r()()},e)},$=function(e){return x()(e)&&e||T()(e)&&e.join(" ")},q=function(e){return e.color&&e.opacity&&e.weight},K=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=t&&t[e]?t[e]:t,r=n,i=r.dashArray?$(r.dashArray):"solid";switch(e){case"MultiPolygon":case"Polygon":case"Circle":return{strokeColor:H(r.color),strokeOpacity:r.opacity,strokeWidth:r.weight,fillColor:H(r.fillColor),fillOpacity:r.fillOpacity,strokeDashstyle:i};case"LineString":case"MultiLineString":return{strokeColor:H(r.color),strokeOpacity:r.opacity,strokeWidth:r.weight,strokeDashstyle:i};case"Text":var c=q(r)?{labelOutlineColor:H(r.color),labelOutlineOpacity:r.opacity,labelOutlineWidth:r.weight}:{};return G({fontStyle:r.fontStyle,fontSize:r.fontSize,fontFamily:r.fontFamily,fontWeight:r.fontWeight,labelAlign:X(r.textAlign),fontColor:H(r.fillColor),fontOpacity:r.fillOpacity,label:o,stroke:!0,strokeColor:H(r.color),strokeOpacity:r.opacity,strokeWidth:r.weight,strokeDashstyle:i},c);case"Point":case"MultiPoint":var s=r.symbolUrl&&(0,a.fetchStyle)((0,a.hashAndStringify)(r),"base64")||l.Z.extraMarkers.markerToDataUrl(r),u=-18,y=-46;return r.iconAnchor&&T()(r.iconAnchor)&&r.size&&(u="pixels"===r.anchorXUnits?-1*r.iconAnchor[0]:-1*r.size*r.iconAnchor[0],y="pixels"===r.anchorYUnits?-1*r.iconAnchor[1]:-1*r.size*r.iconAnchor[1]),s?{graphicWidth:r.size||36,graphicHeight:r.size||46,externalGraphic:s,graphicXOffset:u,graphicYOffset:y,display:!1===r.filtering&&"none"}:{fillColor:"#0000AE",fillOpacity:.5,strokeColor:"#0000FF",pointRadius:10,strokeOpacity:1,strokeWidth:1,display:!1===r.filtering&&"none"};default:return{fillColor:"#FF0000",fillOpacity:0,strokeColor:"#FF0000",pointRadius:5,strokeOpacity:1,strokeDashstyle:i,strokeWidth:1}}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return"FeatureCollection"===t.type?e.concat(t.features.map((function(e){return h()(e.style||t.style||{}).filter((function(e){return!!d()(e.filtering)||e.filtering})).map((function(t){return Z.fromAnnotationToGeoJson(G(G({},e),{},{style:t}))}))})).reduce((function(e,t){return e.concat(t)}),[])):t.geometry&&"GeometryCollection"===t.geometry.type?e.concat(Z.flattenGeometryCollection(t)):e.concat({type:"Feature",geometry:t.geometry,properties:G(G({},t.properties),{},{ms_style:K(t.geometry.type,t.style)})})}),[])},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.lat,o=e.lon;return!isNaN(parseFloat(t))&&!isNaN(parseFloat(o))},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[e.lon,e.lat]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[[]]],t=e[0].filter(Z.validateCoordsArray);return t.length>3&&v()(t)[0]===C()(t)[0]&&v()(t)[1]===C()(t)[1]};Z={ANNOTATION_TYPE:W,convertGeoJSONToInternalModel:function(e){var t=e.type,o=void 0===t?"Point":t,n=e.geometries,r=void 0===n?[]:n,i=e.features,l=void 0===i?[]:i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];switch(o){case"Point":case"MultiPoint":return{type:1===a.length?"Text":o};case"Polygon":return{type:1===c.length?"Circle":o};case"GeometryCollection":var s=r.filter((function(e){return"Point"===e.type||"MultiPoint"===e.type})),u=r.filter((function(e){return"Polygon"===e.type})),y=0,d=0;return{type:"GeometryCollection",geometries:r.map((function(e){if("Point"===e.type||"MultiPoint"===e.type){if(s.length===a.length)return{type:"Text"};if(0===a.length)return{type:e.type};if(0===y)return y++,{type:"Text"}}if("Polygon"===e.type){if(u.length===c.length)return{type:"Circle"};if(0===c.length)return{type:e.type};if(0===d)return d++,{type:"Circle"}}return{type:e.type}}))};case"FeatureCollection":var p=l.map((function(e){return e.properties&&e.properties.isCircle?{type:"Circle"}:e.properties&&e.properties.isText?{type:"Text"}:{type:e.geometry.type}}));return{type:"FeatureCollection",features:p};default:return{type:o}}},getAvailableStyler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,o=void 0===t?"Point":t,n=e.geometries,r=void 0===n?[]:n,i=e.features,l=void 0===i?[]:i;switch(o){case"Point":case"MultiPoint":case"Symbol":return[Z.getRelativeStyler(o)];case"LineString":case"MultiLineString":return[Z.getRelativeStyler(o)];case"Polygon":case"MultiPolygon":case"Text":case"Circle":return[Z.getRelativeStyler(o)];case"GeometryCollection":return r.reduce((function(e,t){return-1!==e.indexOf(Z.getRelativeStyler(t.type))?e:e.concat(Z.getAvailableStyler(t))}),[]);case"FeatureCollection":return l.reduce((function(e,t){return-1!==e.indexOf(Z.getRelativeStyler(t.type))?e:e.concat(Z.getAvailableStyler(t))}),[]);default:return[]}},getRelativeStyler:function(e){switch(e){case"Point":case"MultiPoint":return"marker";case"Symbol":return"symbol";case"Circle":return"circle";case"LineString":case"MultiLineString":return"lineString";case"Polygon":case"MultiPolygon":return"polygon";case"Text":return"text";default:return""}},createFont:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.fontSize,o=void 0===t?"14":t,n=e.fontSizeUom,r=void 0===n?"px":n,i=e.fontFamily,l=void 0===i?"Arial":i,a=e.fontStyle,c=void 0===a?"normal":a,s=e.fontWeight,u=void 0===s?"normal":s;return"".concat(c," ").concat(u," ").concat(o).concat(r," ").concat(l)},DEFAULT_ANNOTATIONS_STYLES:Y,STYLE_CIRCLE:D,STYLE_POINT_MARKER:j,STYLE_POINT_SYMBOL:{iconAnchor:[.5,.5],anchorXUnits:"fraction",anchorYUnits:"fraction",color:"#000000",fillColor:"#000000",opacity:1,size:64,fillOpacity:1},STYLE_TEXT:z,STYLE_LINE:U,STYLE_POLYGON:R,getGeometryType:function(e){var t,o,n;return null!=e&&null!==(t=e.properties)&&void 0!==t&&t.isCircle?"Circle":null!=e&&null!==(o=e.properties)&&void 0!==o&&o.isText?"Text":null==e||null===(n=e.geometry)||void 0===n?void 0:n.type},getGeometryGlyphInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Point",t={Point:{glyph:"point",label:"Point"},MultiPoint:{glyph:"point",label:"Point"},LineString:{glyph:"polyline",label:"Line"},MultiLineString:{glyph:"polyline",label:"Line"},Polygon:{glyph:"polygon",label:"Polygon"},MultiPolygon:{glyph:"polygon",label:"Polygon"},Text:{glyph:"font",label:"Text"},Circle:{glyph:"1-circle",label:"Circle"}};return t[e]},normalizeAnnotation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o="FeatureCollection"===e.type?G({},e):{type:"Feature",geometry:e},n=B(o),r=J(o.properties,t);return G({style:n,properties:r},o)},removeDuplicate:function(e){return u()(e.reduce((function(e,t){return G(G({},e),{},E({},t.properties.id,t))}),{}))},circlesToMultiPolygon:function(e,t){var o=e.geometries,n=void 0===o?[]:o,i=t.circles,l=void 0===i?[]:i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D,c=l.reduce((function(e,t){return e.concat([n[t].coordinates])}),[]);return{type:"Feature",geometry:{type:"MultiPolygon",coordinates:c},properties:{id:r()(),ms_style:K("Circle",a)}}},fromCircleToPolygon:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;return{type:"Feature",geometry:t.polygonGeom||e,properties:{id:t.id||r()(),ms_style:K("Circle",o)}}},fromTextToPoint:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z;return{type:"Feature",geometry:e,properties:{id:t.id||r()(),ms_style:K("Text",o,t.valueText)}}},fromLineStringToGeodesicLineString:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U;return{type:"Feature",geometry:e.geometryGeodesic,properties:{id:e.id||r()(),ms_style:K(e.geometryGeodesic.type,t)}}},textToPoint:function(e,t){var o=e.geometries,n=void 0===o?[]:o,i=t.textGeometriesIndexes,l=void 0===i?[]:i,a=t.textValues,c=void 0===a?[]:a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z;return l.map((function(e,t){return{type:"Feature",geometry:n[e],properties:{id:r()(),ms_style:K("Text",s,c[t])}}}))},flattenGeometryCollection:function(e){var t=e.geometry,o=e.properties,n=e.style,i=o.circles&&Z.circlesToMultiPolygon(t,o,n.Circle)||[],l=o.textGeometriesIndexes&&Z.textToPoint(t,o,n.Text)||[],a=(o.circles||[]).concat(o.textGeometriesIndexes||[]);return t.geometries.filter((function(e,t){return-1===a.indexOf(t)})).map((function(e){return{type:"Feature",geometry:e,properties:{id:r()(),ms_style:K(e.type,n[e.type])}}})).concat(i,l)},createGeometryFromGeomFunction:function(e){var t=a.geometryFunctions[e.style.geometry]&&a.geometryFunctions[e.style.geometry].type||e.geometry.type,o=e.geometry.coordinates||[];switch(e.style.geometry){case"startPoint":o=v()(o);break;case"endPoint":o=C()(o);break;case"centerPoint":o=(0,L.Z)(e).geometry.coordinates}return{type:t,coordinates:o}},fromAnnotationToGeoJson:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.geometry,o=e.properties,n=void 0===o?{}:o,i=e.style,l=void 0===i?{}:i,a=l.geometry?Z.createGeometryFromGeomFunction({geometry:t,properties:n,style:l,type:"Feature"}):t;return n.isCircle&&"Polygon"===a.type?Z.fromCircleToPolygon(a,n,l):n.isText?Z.fromTextToPoint(a,n,l):"LineString"===a.type&&n.useGeodesicLines&&l.filtering?Z.fromLineStringToGeodesicLineString(n,l):{type:"Feature",geometry:a,properties:{id:n.id||r()(),ms_style:K(a.type,l)}}},annotationsToPrint:Q,formatCoordinates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[]];return e.map((function(e){return{lat:e&&e[1],lon:e&&e[0]}}))},getBaseCoord:function(e){switch(e){case"Polygon":case"LineString":case"MultiPoint":return[];default:return[[{lat:"",lon:""}]]}},getComponents:function(e){var t=e.type,o=e.coordinates;switch(t){case"Polygon":return Z.isCompletePolygon(o)?Z.formatCoordinates(f()(o[0],0,o[0].length-1)):Z.formatCoordinates(o[0]);case"LineString":case"MultiPoint":return Z.formatCoordinates(o);default:return Z.formatCoordinates([o])}},addIds:function(e){return e.map((function(e){return e.properties&&e.properties.id?e:(0,c.t8)("properties.id",k().v1(),e)}))},COMPONENTS_VALIDATION:{Point:{min:1,add:!1,remove:!1,validation:"validateCoordinates",notValid:"Add a valid coordinate to complete the Point"},MultiPoint:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"Add 2 valid coordinates to complete the Polyline"},Polygon:{min:3,add:!0,remove:!0,validation:"validateCoordinates",notValid:"Add 3 valid coordinates to complete the Polygon"},LineString:{min:2,add:!0,remove:!0,validation:"validateCoordinates",notValid:"Add 2 valid coordinates to complete the Polyline"},Circle:{add:!1,remove:!1,validation:"validateCircle",notValid:"Add a valid coordinate and a radius (m) to complete the Circle"},Text:{add:!1,remove:!1,validation:"validateText",notValid:"Add a valid coordinate and a Text value"}},validateCoords:ee,validateCoordsArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=N(e,2),o=t[0],n=t[1];return!isNaN(parseFloat(n))&&!isNaN(parseFloat(o))},validateCoord:function(e){return!isNaN(parseFloat(e))},coordToArray:te,validateCoordinates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.components,o=void 0===t?[]:t,n=e.remove,r=void 0!==n&&n,i=e.type;if(o&&o.length){var l=o.filter(Z.validateCoords);return r?l.length>Z.COMPONENTS_VALIDATION[i].min&&l.length===o.length:l.length>=Z.COMPONENTS_VALIDATION[i].min&&l.length===o.length}return!1},validateCircle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.components,o=void 0===t?[]:t,n=e.properties,r=void 0===n?{radius:0}:n;if(o&&o.length){var i=v()(o);return!isNaN(parseFloat(r.radius))&&Z.validateCoords(i)}return!1},validateText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.components,o=void 0===t?[]:t,n=e.properties,r=void 0===n?{valueText:""}:n;if(o&&o.length){var i=v()(o);return r&&!!r.valueText&&Z.validateCoords(i)}return!1},validateFeature:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.components,o=void 0===t?[[]]:t,n=e.type,r=e.remove,i=void 0!==r&&r,l=e.properties,a=void 0===l?{}:l;return!d()(n)&&("Text"===n?Z.validateText({components:o,properties:a}):"Circle"===n?Z.validateCircle({components:o,properties:a}):Z.validateCoordinates({components:o,remove:i,type:n}))},updateAllStyles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.features&&e.features.length?G(G({},e),{},{features:e.features.map((function(e){return M()({},e,{style:h()(e.style).map((function(e){return M()({},e,t)}))})}))}):e},getStartEndPointsForLinestring:V,DEFAULT_SHAPE:"triangle",DEFAULT_PATH:"product/assets/symbols/",checkSymbolsError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading_symbols_path";return e.length&&-1!==O()(e,(function(e){return e===t}))},isAMissingSymbol:function(e){return e.symbolUrlCustomized===o(70898)},isCompletePolygon:oe,getDashArrayFromStyle:$,isAnnotation:function(e){return(null==e?void 0:e.type)===W||"Annotations"===(null==e?void 0:e.name)}}},53275:(e,t,o)=>{"use strict";o.d(t,{y7:()=>P,oU:()=>C,hH:()=>S});var n=o(73800),r=o(45801),i=o(86306),l=o(18369),a=o(78516),c=o(52),s=o(48041),u=o(78653),y=o(97950),d=o(52043),p=o(44538),f=o(52329),g=o(25642),v=o(13987),m=o(69669),h=o(40353),P=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.type,n=t.coordinates,r=t.radius,i=t.center;switch(o){case"Point":e=new d.Z(n||[]);break;case"LineString":e=new p.Z(n||[]);break;case"MultiPoint":e=new f.Z(n||[]);break;case"MultiLineString":e=new g.Z(n||[]);break;case"MultiPolygon":e=new v.Z(n||[]);break;default:e=r&&i?(0,h.Bb)(new m.Z([i.x,i.y],r),100):new h.ZP(n||[])}return e},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&e.geometry&&"Polygon"===e.geometry.type},S={dragPan:{options:{kinetic:!1},Instance:n.Z},keyboardPan:{options:{kinetic:!1},Instance:r.Z},mouseWheelZoom:{options:{duration:0},Instance:i.Z},doubleClickZoom:{options:{duration:0},Instance:l.Z},shiftDragZoom:{options:{duration:0},Instance:a.Z},keyboardZoom:{options:{},Instance:c.Z},pinchZoom:{options:{duration:0},Instance:s.Z},pinchRotate:{options:{},Instance:u.Z},altShiftDragRotate:{options:{},Instance:y.Z}}}}]);