(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5121],{25108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(82904),a=n(27418),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.kM:var n=t.property||"enabled";return l()({},e,o({},t.control,l()({},e[t.control],o({},n,!(e[t.control]||{})[n]))));case r.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?l()({},e,o({},t.control,l()({},e[t.control],o({},t.property,void 0)))):l()({},e,o({},t.control,l()({},e[t.control],o({},t.property,t.value))));case r.dc:return l()({},e,o({},t.control,l()({},e[t.control],t.properties)));case r.l:var a=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=a.reduce((function(t,n){return l()(t,o({},n,l()({},e[n],!0===e[n].enabled?{enabled:!1}:{})))}),{});return l()({},e,i);default:return e}}},17214:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(24852),a=n.n(r);function l(e){var t=e.name,n=e.className,r=e.style;return a().createElement("i",{className:"fa fa-".concat(t).concat(n?" ".concat(n):""),style:r})}l.defaultProps={};const o=l},25130:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>le});var r=n(24852),a=n.n(r),l=n(22843),o=n(71703),i=n(22222),s=n(27856),c=n.n(s),u=n(17214),d=n(30294),m=["children","variant","size"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const j=(0,r.forwardRef)((function(e,t){var n=e.children,r=e.variant,l=e.size,o=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,m);return a().createElement(d.Button,f({},o,{ref:t,bsStyle:r,bsSize:l}),n)}));var p=n(45697),v=n.n(p),y=["id","className","style","children"];function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e){var t=e.id,n=e.className,r=e.style,l=e.children,o=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,y),i=n?" "+n:"";return a().createElement(a().Fragment,null,a().createElement("div",b({},o,{id:t,className:"spinner".concat(i),style:r}),a().createElement("div",null)),l)}g.propTypes={id:v().string,className:v().string,style:v().object},g.defaultProps={};const h=g;var E=n(5346),w=n(15135),O=n(30381),k=n.n(O),N=n(29896),P=n(74855),S=n.n(P),z=n(72500),C=n.n(z),x=n(61512),I=n.n(x);const A=(0,r.forwardRef)((function(e,t){var n=e.text,r=e.className,l=void 0===r?"gn-text-editable":r,o=e.onEdit,i=void 0===o?function(){}:o;return a().createElement(I(),{innerRef:t,className:l,html:n,onClick:function(e){e.stopPropagation()},onChange:function(e){i(e.target.value)}})}));var Z=n(14068);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const T=function(e){var t,n,l=e.defaultImage,o=e.onEdit,i=void 0===o?function(){}:o,s=(t=(0,r.useState)(),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=s[0],d=s[1];return(0,r.useEffect)((function(){d(l)}),[]),a().createElement(a().Fragment,null,a().createElement(Z.Z,{thumbnail:c,onUpdate:function(e){d(e),i(e)}}),a().createElement("div",{className:"icon-image-preview"},a().createElement(u.Z,{name:"file-upload"})))};var D=["src","style"];function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=(0,w.Z)(S()),q=function(e){var t=e.title,n=e.onEdit;return a().createElement("div",{className:"editContainer"},a().createElement("h1",null,a().createElement(A,{onEdit:n,text:t})))},B=function(e){var t=e.abstract,n=e.onEdit;return a().createElement("div",{className:"editContainer"},a().createElement(A,{onEdit:n,text:t}))},Y=function(e){var t=e.image,n=e.onEdit;return a().createElement("div",{className:"editContainer imagepreview"},a().createElement(T,{onEdit:n,defaultImage:t}))};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(0===e.indexOf("http"))return e;var t=C().parse(e),n=t.path,r=window.location,a=r.protocol,l=r.host;return"".concat(a,"://").concat(l).concat(n)}function $(e){var t=e.src,n=e.style,l=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,D),o=V((0,r.useState)(),2),i=o[0],s=o[1];return(0,r.useEffect)((function(){t&&!i&&s(!0)}),[t]),a().createElement("img",M({},l,{src:t,onLoad:function(){return s(!1)},onError:function(){return s(!1)},style:U(U(U({},n),i&&{backgroundColor:"transparent"}),{},{objectFit:"contain"})}))}function W(e){var t,n=e.resource,l=e.formatHref,o=e.linkHref,i=e.sectionStyle,s=e.loading,d=e.getTypesInfo,m=e.editTitle,f=e.editAbstract,p=e.editThumbnail,v=e.activeEditMode,y=e.closePanel,b=V((0,r.useState)(!1),2),g=b[0],w=b[1],O=V((0,r.useState)(!1),2),P=O[0],S=O[1],z=function(){w(!g)},C=function(){S(!P)},x=(0,r.useRef)(),I=(0,r.useRef)(),A=V((0,r.useState)(!1),2),Z=A[0],_=A[1];if((0,r.useEffect)((function(){return I.current=!0,function(){I.current=!1}}),[]),!n&&!s)return null;var T=d(),D=n&&(T[n.doc_type]||T[n.resource_type])||{},M=D.formatEmbedUrl,R=void 0===M?function(e){return null==e?void 0:e.embed_url}:M,U=D.formatDetailUrl,F=void 0===U?function(e){return null==e?void 0:e.detail_url}:U,H=D.icon,W=D.name,G=(null==n?void 0:n.embed_url)&&R(n),J=(null==n?void 0:n.pk)&&F(n);return a().createElement("div",{ref:x,className:"gn-details-panel".concat(s?" loading":""),style:{width:null==i?void 0:i.width}},a().createElement("section",{style:i},a().createElement("div",{className:"gn-details-panel-header"},a().createElement(j,{variant:"default",href:o(),onClick:y,size:"sm"},a().createElement(u.Z,{name:"times"}))),!v&&a().createElement("div",{className:"gn-details-panel-preview"},a().createElement("div",{className:"gn-loader-placeholder",style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},a().createElement(u.Z,{name:H})),G?a().createElement("iframe",{key:G,src:G,style:{position:"absolute",width:"100%",height:"100%"},frameBorder:"0"}):a().createElement($,{src:null==n?void 0:n.thumbnail_url,style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,backgroundColor:"inherit"}}),s&&a().createElement("div",{className:"gn-details-panel-preview-loader",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"}},a().createElement(h,{animation:"border",role:"status"},a().createElement("span",{className:"sr-only"},"Loading resource detail...")))),v&&p&&a().createElement("div",{className:"gn-details-panel-preview inediting"}," ",a().createElement(Y,{onEdit:p,image:null==n?void 0:n.thumbnail_url})," "),a().createElement("div",{className:"gn-details-panel-content"},a().createElement("div",{className:"gn-details-panel-title"},!g&&a().createElement("h1",null,H&&a().createElement(a().Fragment,null,a().createElement(u.Z,{name:H})),null==n?void 0:n.title),v&&!g&&a().createElement("span",{className:"inEdit",onClick:z},a().createElement(u.Z,{name:"edit"})),g&&a().createElement(a().Fragment,null,a().createElement("h1",null,a().createElement(q,{title:null==n?void 0:n.title,onEdit:m})),a().createElement("span",{className:"inEdit",onClick:z},a().createElement(u.Z,{name:"check-circle"}))),a().createElement("div",{className:"gn-details-panel-tools"},J&&a().createElement(L,{tooltipPosition:"top",tooltipId:Z?"gnhome.copiedResourceUrl":"gnhome.copyResourceUrl",text:X(J)},a().createElement(j,{variant:"default",onClick:function(){_(!0),setTimeout((function(){I.current&&_(!1)}),700)}},a().createElement(u.Z,{name:"share-alt"}))),J&&a().createElement(j,{variant:"default",href:J,target:"_blank",rel:"noopener noreferrer"},a().createElement(E.Z,{msgId:"gnhome.view".concat(W||"")})))),a().createElement("p",null,(null==n?void 0:n.owner)&&a().createElement(a().Fragment,null,a().createElement("a",{href:l({query:{"filter{owner.username.in}":n.owner.username}})},(0,N.vW)(n.owner))),(null==n?void 0:n.date_type)&&(null==n?void 0:n.date)&&a().createElement(a().Fragment,null," ","/"," ",k()(n.date).format("MMMM Do YYYY"))),a().createElement("p",null,v&&!P&&a().createElement("span",{className:"inEdit",onClick:C},a().createElement(u.Z,{name:"edit"})),a().createElement("div",{className:"gn-details-panel-description"},P&&a().createElement(a().Fragment,null,a().createElement("span",{className:"inEdit",onClick:C},a().createElement(u.Z,{name:"check-circle"})),a().createElement(B,{abstract:null==n?void 0:n.abstract,onEdit:f})),!P&&null!=n&&n.abstract?a().createElement("div",{dangerouslySetInnerHTML:{__html:c().sanitize(n.abstract)}}):null)),a().createElement("p",null,(null==n||null===(t=n.category)||void 0===t?void 0:t.identifier)&&a().createElement("div",null,a().createElement(E.Z,{msgId:"gnhome.category"}),":"," ",a().createElement("a",{href:l({query:{"filter{category.identifier.in}":n.category.identifier}})},n.category.identifier))))))}W.defaultProps={onClose:function(){},formatHref:function(){return"#"},linkHref:function(){return"#"},width:696,getTypesInfo:N.NN};const G=W;var J=n(43892),K=n(25108),Q=n(82904),ee=n(72036),te=n(74621),ne=(0,o.connect)((0,i.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1}],(function(e,t,n){return{resource:e,loading:t,editMode:n}})),{closePanel:Q.Xi.bind(null,"DetailViewer",null)})(G),re=(0,o.connect)((0,i.P1)([te.np],(function(e){return{user:e}})),{onClick:Q.Xi.bind(null,"DetailViewer",null)})((function(e){var t=e.user,n=e.onClick;return t&&a().createElement("button",{className:"btn btn-default",onClick:function(){n()}}," ",a().createElement(E.Z,{msgId:"gnviewer.edit"})," ")})),ae=(0,o.connect)((0,i.P1)([function(e){var t,n;return(null==e||null===(t=e.controls)||void 0===t||null===(n=t.DetailViewer)||void 0===n?void 0:n.enabled)||!1}],(function(e){return{enabled:e}})),{onEditResource:J.Br,onEditAbstractResource:J.bI,onEditThumbnail:J.U5})((function(e){var t=e.enabled,n=e.onEditResource,r=e.onEditAbstractResource,l=e.onEditThumbnail;return a().createElement("div",{style:{top:0,left:0,width:"100%",height:"100%"}},t&&a().createElement(ne,{editTitle:function(e){n(e)},editAbstract:function(e){r(e)},editThumbnail:function(e){l(e)},activeEditMode:t,sectionStyle:{width:"600px",position:"fixed"}}))}));const le=(0,l.rx)("DetailViewer",{component:ae,containers:{ViewerLayout:{name:"DetailViewer",target:"rightColumn",priority:1},ActionNavbar:{name:"ButtonViewer",target:"leftMenuItem",Component:re,priority:1}},epics:{},reducers:{gnresource:ee.Z,controls:K.Z}})},46700:(e,t,n)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-nz":76319,"./en-nz.js":76319,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":92844,"./hu.js":92844,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=l,e.exports=a,a.id=46700}}]);