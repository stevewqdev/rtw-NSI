(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),s=n("FYa8"),i=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var u=f[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=o.props[u],d=r[u]||new Set;d.has(l)?a=!1:(d.add(l),r[u]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var h=m;t.default=h},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=i(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||i(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),a=n("9rSQ"),s=n("UnBK"),i=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,s){try{var i=e[a](s),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var s=e.apply(t,n);function i(e){r(s,o,a,i,c,"next",e)}function c(e){r(s,o,a,i,c,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return o}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n("tQ2B"):"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){i.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){i.headers[e]=r.merge(a)})),e.exports=i}).call(this,n("8oxB"))},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,a){var s=new Error(e);return r(s,t,n,o,a)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),a=s.join("&")}if(a){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||s()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return x})),n.d(t,"default",(function(){return S}));var r=n("8Kt/"),o=n.n(r),a=n("q1tI"),s=n.n(a),i=n("vDqi"),c=n.n(i),u=n("o0o1"),l=n.n(u),f=n("HaE+"),d=n("1OyB"),p=n("vuIU"),m=n("JX7q"),h=n("Ji7U"),v=n("md7G"),_=n("foSv"),y=s.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(_.a)(e);if(t){var o=Object(_.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var b=function(e){Object(h.a)(n,e);var t=g(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={press:r.props.pressData,offset:6,moreposts:!0,morepostsMessage:"SEE MORE PRESS"},r.loadMoreArticles=r.loadMoreArticles.bind(Object(m.a)(r)),r}return Object(p.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){this.state.press.length>6&&this.setState({moreposts:!0})}},{key:"loadMoreArticles",value:function(){var e=this;function t(){return(t=Object(f.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://cms.servethemoment.org/","/wp-json/wp/v2/posts?per_page=6&offset=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}this.setState({morepostsMessage:"Loading press..."}),this.setState({offset:this.state.offset+6}),function(e){return t.apply(this,arguments)}(this.state.offset).then((function(t){t.length<=0?e.setState({moreposts:!0,morepostsMessage:"There is no more press to load"}):e.setState({morepostsMessage:"SEE MORE PRESS"});var n=e.state.press.concat(t);e.setState({press:n})}))}},{key:"render",value:function(){var e=this.state.press;return y("section",{id:"in__the__press"},y("div",{className:"container"},y("div",{className:"row"},y("div",{className:"col-lg-12"},y("h2",{className:"poppins bold white-text text-center"},"In the Press")),e.map((function(e,t){return y("div",{className:"press__post col-sm-12 col-md-6 col-lg-6 ".concat(""),key:t},y("a",{href:e.acf.press_external_link,"aria-label":e.title.rendered,target:"_BLANK"},y("p",{className:"press__title title poppins teal-text bold xxl"},e.title.rendered),y("p",{className:"title poppins gray-text bold text-uppercase sm"},e.acf.subtitle.length>50?e.acf.subtitle.substr(0,50)+"...":e.acf.subtitle),y("div",{className:"press__post__arrow"},y("span",{className:"absolute__name"},e.title.rendered),y("svg",{xmlns:"http://www.w3.org/2000/svg",width:"29.889",height:"11.96",viewBox:"0 0 29.889 11.96"},y("path",{title:e.title.rendered,id:"Hover",d:"M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z",transform:"translate(-10)",fill:"#015d5d",fillRule:"evenodd"})))))})),this.state.moreposts?y("div",{className:"col-lg-12 text-center"},y("p",{className:"poppins bold white-text lg text-uppercase more__press",onClick:this.loadMoreArticles},this.state.morepostsMessage)):"")))}}]),n}(a.Component),w=s.a.createElement,x=!0;function S(e){var t=Object(a.useState)(""),n=t[0],r=t[1],i=Object(a.useState)(""),u=i[0],l=i[1],f=Object(a.useState)(""),d=f[0],p=f[1],m=Object(a.useState)(""),h=m[0],v=m[1],_=Object(a.useState)(""),y=_[0],g=_[1],x=Object(a.useState)(""),S=x[0],N=x[1],T=Object(a.useState)(""),j=T[0],E=T[1],O=Object(a.useState)(""),k=O[0],R=O[1],C=Object(a.useState)(""),M=C[0],A=C[1],L=Object(a.useState)(!1),D=L[0],P=L[1],B=Object(a.useState)([]),I=(B[0],B[1]),q=Object(a.useState)(0),H=(q[0],q[1],Object(a.useState)(""));H[0],H[1];function U(e){var t=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}("__ss_tk");e.preventDefault();if(0===n.length?(v("invalid"),g("Please, add a valid email address")):(v("invalid"),g("")),0===u.length&&u.length<4?(N("invalid"),E("Please, add your first name")):(N("invalid"),E("")),0===d.length&&d.length<4?(R("invalid"),A("Please, add your last name")):(R("invalid"),A("")),n&&n.length>0&&u&&u.length)if(n.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){var o=new FormData,a="".concat(u," ").concat(d);o.set("your-name",a),o.set("your-email",n);var s=u,i=d,f=new XMLHttpRequest;f.open("POST","https://app-3QNMWRHCZE.marketingautomation.services/webforms/receivePostback/MzawMLEwMjM1BQA/2634af05-920a-4055-9b6a-e4592ec85d29/jsonp/?firstName=".concat(s,"&LastName=").concat(i,"&email=").concat(n,"&trackingid__sb=").concat(t)),f.send(),c.a.post("https://stm.raxo.dev/wp-json/contact-form-7/v1/contact-forms/7/feedback",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){v("success"),g("Thanks for subscribing"),l(""),p(""),r(""),P(!0)})).catch((function(e){v("error"),g("We could not subscribed you at the moment, please try again later")}))}else v("invalid"),g("Please, add a valid email address"),N("invalid"),E("Please, add your first name"),R("invalid"),A("Please, add your last name")}return Object(a.useEffect)((function(){I(e.postData),console.log(e.pageData)})),w(s.a.Fragment,null,w(o.a,null,w("title",null,e.pageData.yoast_title),e.pageData.yoast_meta.map((function(e){return"name"===Object.keys(e)[0]?w("meta",{name:e.name,content:e.content}):"property"===Object.keys(e)[0]?w("meta",{property:e.property,content:e.content}):""})),w("style",null,"\n  .header{\n    background: black;\n  }\n  ")),w("main",{className:"home__page"},w("section",{id:"main",style:{background:"url(".concat(e.pageData.better_featured_image.source_url,")")}},w("div",{className:"floating__svg"},w("img",{loading:"lazy",src:"/landing/images/scroll.svg",alt:"Scroll"})),w("div",{className:"container"},w("div",{className:"row"},w("div",{className:"col-lg-12"},w("h1",{className:"poppins bold",dangerouslySetInnerHTML:{__html:e.acfData.acf.title}}),w("h2",{className:" poppins  sub__p xxl semibold",dangerouslySetInnerHTML:{__html:e.acfData.acf.subtitle}}))))),w("section",{id:"cause"},w("div",{className:"container cause__one"},w("div",{className:"row"},w("div",{className:"col-lg-12 title"},w("h2",{className:"poppins bold teal-text text-left",dangerouslySetInnerHTML:{__html:e.acfData.acf.title_two}})),w("div",{className:"col-md-12 col-lg-5 text"},w("div",{className:"md poppins medium teal-text",dangerouslySetInnerHTML:{__html:e.acfData.acf.subtitle_two}})),w("div",{className:"col-md-12 col-lg-1"}),w("div",{className:"col-md-12 col-lg-5 image"},w("img",{loading:"lazy",src:e.acfData.acf.image_two,alt:""}))))),w("section",{id:"extraordinary__moment"},w("div",{className:"container"},w("div",{className:"row"},w("div",{className:"col-lg-12 title"},w("h2",{className:"poppins bold white-text text-center",dangerouslySetInnerHTML:{__html:e.acfData.acf.title_third}}))))),w("section",{id:"movement__steps"},w("div",{className:"container"},w("div",{className:"row"},w("div",{className:"col-lg-12"},e.acfData.acf.work_steps.map((function(e,t){return w("div",{className:"movement__step",key:t},w("img",{loading:"lazy",className:"icon",src:e.icon,alt:"".concat(e.title)}),w("div",{className:"line__divider"}),w("h3",{className:"title poppins bold  xmd teal-text text-uppercase"},e.title),w("div",{className:"description poppins medium teal-text slg text-center",dangerouslySetInnerHTML:{__html:e.description}}))})))))),w("section",{id:"we__serve__because"},w("div",{className:"container"},w("div",{className:"row reasons__we__serve d-flex justify-content-center align-items-center"},e.acfData.acf.we_serve_reasons.map((function(e,t){return w("div",{className:"col-sm-12 col-md-6 col-lg-4 reason__we__serve",key:t},w("a",{href:e.link,target:e.link.includes("https")?"_blank":"_self"},w("img",{loading:"lazy",src:e.image,alt:e.reason}),w("p",{className:"xl poppins text-uppercase teal-text bold text-center",dangerouslySetInnerHTML:{__html:e.reason}})))}))))),w("section",{id:"join__us"},w("div",{className:"container"},w("div",{className:"row"},w("div",{className:"col-lg-12 d-flex title justify-content-center align-items-center flex-column"},w("h2",{className:"poppins bold teal-text text-center",dangerouslySetInnerHTML:{__html:e.acfData.acf.title_four}}),w("div",{className:"description poppins medium teal-text slg text-center",dangerouslySetInnerHTML:{__html:e.acfData.acf.description_four}}))),w("div",{className:"row form__home"},w("div",{className:"col-md-12"},w("form",{onSubmit:U},w("label",{htmlFor:"email",style:{display:"none"}}),w("div",{className:"name__wrapper"},w("div",{className:"form__input"},w("label",{htmlFor:"name"},"First Name"),w("input",{type:"text",className:"ab__font dark__font bold__font name__input",name:"name",onChange:function(e){l(e.currentTarget.value)},value:u})),w("div",{className:"form__messages"},"error"===S?w("div",{className:"form__".concat(h," form__message sm__font bold__font"),dangerouslySetInnerHTML:{__html:j}}):"","invalid"===S?w("div",{className:"form__email__wrong form__message sm__font bold__font"},j):"")),w("div",{className:"name__wrapper"},w("div",{className:"form__input"},w("label",{htmlFor:"lastname"},"Last name"),w("input",{type:"text",className:"ab__font dark__font bold__font name__input",name:"lastname",onChange:function(e){p(e.currentTarget.value)},value:d})),w("div",{className:"form__messages"},"error"===k?w("div",{className:"form__".concat(h," form__message sm__font bold__font"),dangerouslySetInnerHTML:{__html:M}}):"","invalid"===k?w("div",{className:"form__email__wrong form__message sm__font bold__font"},M):"")),w("div",{className:"email__wrapper"},w("div",{className:"form__input"},w("label",{htmlFor:"email"},"Email"),w("input",{type:"email",className:"ab__font dark__font bold__font email__input",name:"email",onChange:function(e){r(e.currentTarget.value)},value:n})),w("div",{className:"form__messages"},"success"===h?w("div",{className:"form__".concat(h," form__message sm__font bold__font form__is__sent"),dangerouslySetInnerHTML:{__html:y}}):"","error"===h?w("div",{className:"form__".concat(h," form__message sm__font bold__font"),dangerouslySetInnerHTML:{__html:y}}):"","invalid"===h?w("div",{className:"form__email__wrong form__message sm__font bold__font"},y):"")),w("p",{className:"poppins sm teal-text text-center"},"Thank you for joining us. Serve the Moment is powered by Repair the World. ",w("br",null)," By submitting your email, you'll be opted in to Repair the World's marketing emails.")," ",w("br",null),D?"":w("button",{onClick:function(e){U(e)},class:"btn main-btn teal",tabindex:"-1"},w("strong",null,"SUBMIT"))))))),w(b,{pressData:e.postData})))}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],a=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(a,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])})),r.forEach(s,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var i=o.concat(a).concat(s),c=Object.keys(t).filter((function(e){return-1===i.indexOf(e)}));return r.forEach(c,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),a=n("Lmem"),s=n("JEQr");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(i(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),s=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),u=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){s(u,i);var c=l(u);function u(e){var a;return r(this,u),a=c.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(f.Component))}},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},g7np:function(e,t,n){"use strict";var r=n("2SVd"),o=n("5oMp");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}));var o=n("JX7q");function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),a=n("MLWZ"),s=n("g7np"),i=n("w0Vi"),c=n("OTTw"),u=n("LYNF");e.exports=function(e){return new Promise((function(t,l){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";d.Authorization="Basic "+btoa(m+":"+h)}var v=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,l,r),p=null}},p.onabort=function(){p&&(l(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var _=n("eqyj"),y=(e.withCredentials||c(v))&&e.xsrfCookieName?_.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(g){if("json"!==e.responseType)throw g}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},vDqi:function(e,t,n){e.exports=n("zuR4")},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,s={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return"undefined"===typeof e}function i(e){return null!==e&&"object"===typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:i,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"===typeof t[r]&&"object"===typeof n?t[r]=e(t[r],n):t[r]="object"===typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),a=n("CgaS"),s=n("SntB");function i(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var c=i(n("JEQr"));c.Axios=a,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}},[["vlRD",0,1,2]]]);