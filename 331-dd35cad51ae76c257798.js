"use strict";(self.webpackChunkbrightlab_gatsby_boilerplate=self.webpackChunkbrightlab_gatsby_boilerplate||[]).push([[331],{4839:function(e,t,n){var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},3331:function(e,t,n){n.r(t),n.d(t,{default:function(){return ge}});var r=n(6459),o=n(7294),i=function(e){return(e+1)%1e6};var a,c,u,s,l=n(5697),f=n.n(l),p=n(4839),d=n.n(p),m=n(2993),h=n.n(m),y=n(6494),b=n.n(y),T="bodyAttributes",v="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",A="href",O="http-equiv",x="innerHTML",S="itemprop",j="name",P="property",k="rel",L="src",I="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",_="encodeSpecialCharacters",F="onChangeClientState",D="titleTemplate",H=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],B="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=ee(e,w.TITLE),n=ee(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,M);return t||r||void 0},Q=function(e){return ee(e,F)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==x&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=b()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,r),le(w.HTML,o),se(f,p);var d={baseTag:fe(w.BASE,n),linkTags:fe(w.LINK,i),metaTags:fe(w.META,a),noscriptTags:fe(w.NOSCRIPT,c),scriptTags:fe(w.SCRIPT,s),styleTags:fe(w.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ue=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},fe=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,i=de(n,r),[o.createElement(w.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var o=pe(n),i=ue(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+G(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case T:case v:return{toComponent:function(){return de(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===x||n===E){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===x||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},he=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:me(w.BASE,t,r),bodyAttributes:me(T,n,r),htmlAttributes:me(v,o,r),link:me(w.LINK,i,r),meta:me(w.META,a,r),noscript:me(w.NOSCRIPT,c,r),script:me(w.SCRIPT,u,r),style:me(w.STYLE,s,r),title:me(w.TITLE,{title:f,titleAttributes:p},r)}},ye=d()((function(e){return{baseTag:X([A,I],e),bodyAttributes:V(T,e),defer:ee(e,R),encode:ee(e,_),htmlAttributes:V(v,e),linkTags:$(w.LINK,[k,A],e),metaTags:$(w.META,[j,C,O,P,S],e),noscriptTags:$(w.NOSCRIPT,[x],e),onChangeClientState:Q(e),scriptTags:$(w.SCRIPT,[L,x],e),styleTags:$(w.STYLE,[E],e),title:J(e),titleAttributes:V(g,e)}}),(function(e){ae&&oe(ae),e.defer?ae=re((function(){ce(e,(function(){ae=null}))})):(ce(e),ae=null)}),he)((function(){return null})),be=(c=ye,s=u=function(e){function t(){return U(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return W({},o,((t={})[r.type]=a,t.titleAttributes=W({},i),t));case w.BODY:return W({},o,{bodyAttributes:W({},i)});case w.HTML:return W({},o,{htmlAttributes:W({},i)})}return W({},o,((n={})[r.type]=W({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(c,r)},K(t,null,[{key:"canUseDOM",set:function(e){c.canUseDOM=e}}]),t}(o.Component),u.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},u.defaultProps={defer:!0,encodeSpecialCharacters:!0},u.peek=c.peek,u.rewind=function(){var e=c.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},s);be.renderStatic=be.rewind;var Te=n(1106),ve=function(e){(0,r.Z)(e);var t=(0,o.useReducer)(i,0)[1],n=++(0,o.useRef)(0).current;return(0,o.useEffect)((function(){1===n&&t()}),[n]),(0,o.useEffect)((function(){var e=document.getElementById("amoCrmForm");if(e){var t=document.createElement("script");t.innerHTML="\n      (function (a, m, o, c, r, m) {\n        ;(a[o + c] = a[o + c] || {\n          setMeta: function (p) {\n            this.params = (this.params || []).concat([p])\n          }\n        }),\n          (a[o + r] =\n            a[o + r] ||\n            function (f) {\n              a[o + r].f = (a[o + r].f || []).concat([f])\n            }),\n          a[o + r]({ id: '857395', hash: 'dde6b0bd3dc223576838c970a1729ae9', locale: 'ru' })\n      })(window, 0, 'amo_forms_', 'params', 'load')\n    ",e.appendChild(t);var n=document.getElementsByTagName("iframe");setTimeout((function(){return new Array(n.length).fill(0).forEach((function(t,r){var o=n.item(r);o&&(e.appendChild(o),o.style.height="368px",o.style.width="500px",o.style.position="absolute")}))}),500)}}),[n]),o.createElement("footer",{className:"relative h-[100vh] bg-cover bg-footer bg-no-repeat bg-center-right"},o.createElement(be,null,o.createElement("script",{id:"amoforms_script_857395",async:!0,src:"https://forms.amocrm.ru/forms/assets/js/amoforms.js?1635958282"})),o.createElement(Te.W2,{className:"relative mt-40 z-10"},o.createElement("div",{className:"text-50 leading-60 font-semibold text-[#636385] md:text-40  xs:text-22 xs:leading-26"},"Привлекайте кандидатов",o.createElement("br",null),o.createElement("span",{className:"text-[#FF7143] xs:text-[#28D2AF]"}," быстрее и легче ")),o.createElement("div",{className:"max-w-[50vw] text-30 text-left text-purple/50 leading-40 text-[##373773] font-normal md:max-w-[100vw] md:text-34 md:pt-5  xs:text-14 xs:leading-18"},"Обращайтесь за дополнительной информацией и запросам на проведение пилотного проекта"),o.createElement("div",{className:"mt-[20px] max-w-[43.75rem] md:mx-auto md:text-center xs:text-left"},o.createElement("div",{className:"absolute left-[10px] sm:left-[150px] xs:left-[0px] "},o.createElement("div",{id:"amoCrmForm"})))))},ge=(0,o.memo)(ve)}}]);
//# sourceMappingURL=331-dd35cad51ae76c257798.js.map