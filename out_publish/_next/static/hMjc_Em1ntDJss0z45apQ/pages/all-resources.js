(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(c.default.useContext(n.AmpStateContext))};var r,c=(r=a("q1tI"))&&r.__esModule?r:{default:r},n=a("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,r=e.hybrid,c=void 0!==r&&r,n=e.hasQuery;return a||c&&(void 0!==n&&n)}},"1OyB":function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return r}))},"8Kt/":function(e,t,a){"use strict";t.__esModule=!0,t.defaultHead=i,t.default=void 0;var r=o(a("q1tI")),c=o(a("Xuae")),n=a("lwAK"),l=a("FYa8"),s=a("/0+H");function o(e){return e&&e.__esModule?e:{default:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function g(e,t){return e.reduce((function(e,t){var a=r.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(u,[]).reverse().concat(i(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,r={};return function(c){var n=!0;if(c.key&&"number"!==typeof c.key&&c.key.indexOf("$")>0){var l=c.key.slice(c.key.indexOf("$")+1);e.has(l)?n=!1:e.add(l)}switch(c.type){case"title":case"base":t.has(c.type)?n=!1:t.add(c.type);break;case"meta":for(var s=0,o=p.length;s<o;s++){var i=p[s];if(c.props.hasOwnProperty(i))if("charSet"===i)a.has(i)?n=!1:a.add(i);else{var u=c.props[i],g=r[i]||new Set;g.has(u)?n=!1:(g.add(u),r[i]=g)}}}return n}}()).reverse().map((function(e,t){var a=e.key||t;return r.default.cloneElement(e,{key:a})}))}var d=(0,c.default)();function m(e){var t=e.children;return(r.default.createElement(n.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(l.HeadManagerContext.Consumer,null,(function(a){return r.default.createElement(d,{reduceComponentsToState:g,handleStateChange:a,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}m.rewind=d.rewind;var f=m;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,a){var r=a("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JX7q:function(e,t,a){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return r}))},Ji7U:function(e,t,a){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}a.d(t,"a",(function(){return c}))},KQm4:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function c(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return c}))},RIqP:function(e,t,a){var r=a("Ijbi"),c=a("EbDI"),n=a("ZhPi"),l=a("Bnag");e.exports=function(e){return r(e)||c(e)||n(e)||l()}},Xuae:function(e,t,a){"use strict";var r=a("lwsE"),c=a("PJYZ"),n=a("W8MJ"),l=a("7W2i"),s=a("a1gu"),o=a("Nsbk"),i=a("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=o(e);if(t){var c=o(this).constructor;a=Reflect.construct(r,arguments,c)}else a=r.apply(this,arguments);return s(this,a)}}t.__esModule=!0,t.default=void 0;var p=a("q1tI"),g=!1;t.default=function(){var e,t=new Set;function a(a){e=a.props.reduceComponentsToState(i(t),a.props),a.props.handleStateChange&&a.props.handleStateChange(e)}return(function(s){l(i,s);var o=u(i);function i(e){var n;return r(this,i),n=o.call(this,e),g&&(t.add(c(n)),a(c(n))),n}return n(i,null,[{key:"rewind",value:function(){var a=e;return e=void 0,t.clear(),a}}]),n(i,[{key:"componentDidMount",value:function(){t.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),a(this)}},{key:"render",value:function(){return null}}]),i}(p.Component))}},d7sU:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSP",(function(){return h})),a.d(t,"default",(function(){return v}));var r=a("KQm4"),c=a("1OyB"),n=a("vuIU"),l=a("JX7q"),s=a("Ji7U"),o=a("md7G"),i=a("foSv"),u=a("q1tI"),p=a.n(u),g=(a("nOHt"),a("8Kt/")),d=a.n(g),m=p.a.createElement;function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(i.a)(e);if(t){var c=Object(i.a)(this).constructor;a=Reflect.construct(r,arguments,c)}else a=r.apply(this,arguments);return Object(o.a)(this,a)}}var h=!0,v=function(e){Object(s.a)(a,e);var t=f(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={resources:r.props.resourceData,filteredResources:[],resourceFilters:[],totalPages:[],currentPage:0,prevPage:-1,nextPage:1,selectedFilters:[],search:!1},r.nextPage=r.nextPage.bind(Object(l.a)(r)),r.prevPage=r.prevPage.bind(Object(l.a)(r)),r.cleanSearch=r.cleanSearch.bind(Object(l.a)(r)),r.toggleTag=r.toggleTag.bind(Object(l.a)(r)),r}return Object(n.a)(a,[{key:"nextPage",value:function(e){var t=e.target.getAttribute("data-page");this.setState({currentPage:parseInt(t),prevPage:parseInt(t)-1,nextPage:parseInt(t)+1})}},{key:"prevPage",value:function(e){var t=e.target.getAttribute("data-page");this.setState({currentPage:parseInt(t),prevPage:parseInt(t)-1,nextPage:parseInt(t)+1})}},{key:"cleanSearch",value:function(e){Object(r.a)(document.querySelectorAll(".filter__tags .active")).map((function(e){return e.classList.remove("active"),!0})),this.setState({selectedFilters:[],search:!1});var t=this.props.resourceData.reduce((function(e,t,a){var r=Math.floor(a/20);return e[r]||(e[r]=[]),e[r].push(t),e}),[]),a=Math.round(this.props.resourceData.length/20);0===a&&(a=1),this.setState({filteredResources:t,totalPages:a})}},{key:"toggleTag",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e.target)if(e.target.classList.contains("active"))e.target.classList.remove("active"),this.setState({search:!1}),this.cleanSearch(e);else{var c=Object(r.a)(document.querySelectorAll(".filter__tags .active")),n=[];c.map((function(e){return e.classList.remove("active"),!0})),this.setState({search:!0}),this.setState({selectedFilters:[]});var l=[];if("keydown"===e.type){if(32===e.which||13===e.which){if(a.length>0)(u=document.querySelectorAll('[data-category="'.concat(a,'"]')))[0].classList.contains("active")?u[0].classList.remove("active"):u[0].classList.add("active");else e.target.classList.contains("active")?e.target.classList.remove("active"):e.target.classList.add("active");c=Object(r.a)(document.querySelectorAll(".filter__tags .active")),n=[];c.map((function(e){return n.push(e.getAttribute("data-category")),!0})),this.setState({selectedFilters:n}),n.length>0?n.map((function(e){t.state.resources.map((function(t){t._embedded["wp:term"][0]&&t._embedded["wp:term"][0].map((function(r){var c=r.name.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase();"all"===a?l.push(t):c===e&&l.push(t)}))}))})):l=this.props.resourceData,l=Object(r.a)(new Set(l));var s=20,o=l.reduce((function(e,t,a){var r=Math.floor(a/s);return e[r]||(e[r]=[]),e[r].push(t),e}),[]);0===(p=Math.round(l.length/20))&&(p=1),this.setState({filteredResources:o,totalPages:p,currentPage:0,prevPage:-1,nextPage:1})}}else if("click"===e.type){if(a.length>0)(u=document.querySelectorAll('[data-category="'.concat(a,'"]')))[0].classList.contains("active")?u[0].classList.remove("active"):u[0].classList.add("active");else e.target.classList.contains("active")?e.target.classList.remove("active"):e.target.classList.add("active");c=Object(r.a)(document.querySelectorAll(".filter__tags .active")),n=[];c.map((function(e){return n.push(e.getAttribute("data-category")),!0})),this.setState({selectedFilters:n}),n.length>0?(n.map((function(e){t.state.resources.map((function(t){t._embedded["wp:term"][0]&&t._embedded["wp:term"][0].map((function(a){var r=a.name.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase();r===e&&(console.log(r,e),l.push(t))}))}))})),console.log(l)):l=this.props.resourceData,l=Object(r.a)(new Set(l));s=20,o=l.reduce((function(e,t,a){var r=Math.floor(a/s);return e[r]||(e[r]=[]),e[r].push(t),e}),[]);0===(p=Math.round(l.length/20))&&(p=1),console.log(o,l),this.setState({filteredResources:o,totalPages:p,currentPage:0,prevPage:-1,nextPage:1})}else{if(a.length>0)(u=document.querySelectorAll('[data-category="'.concat(a,'"]'))).length>0&&(u[0].classList.contains("active")?u[0].classList.remove("active"):u[0].classList.add("active"));else e.target.classList.contains("active")?e.target.classList.remove("active"):e.target.classList.add("active");c=Object(r.a)(document.querySelectorAll(".filter__tags .active")),n=[];c.map((function(e){return n.push(e.getAttribute("data-category")),!0})),this.setState({selectedFilters:n}),n.length>0?n.map((function(e){t.state.resources.map((function(t){t._embedded["wp:term"][0]&&t._embedded["wp:term"][0].map((function(a){a.name.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()===e&&l.push(t)}))}))})):l=this.props.resourceData,l=Object(r.a)(new Set(l));s=20,o=l.reduce((function(e,t,a){var r=Math.floor(a/s);return e[r]||(e[r]=[]),e[r].push(t),e}),[]);0===(p=Math.round(l.length/20))&&(p=1),this.setState({filteredResources:o,totalPages:p,currentPage:0,prevPage:-1,nextPage:1})}}else{c=Object(r.a)(document.querySelectorAll(".filter__tags .active")),n=[];c.map((function(e){return e.classList.remove("active"),!0})),this.setState({search:!0}),this.setState({selectedFilters:[]});var i=[];if("keydown"===e.type){if(32===e.which||13===e.which){if(a.length>0)(u=document.querySelectorAll('[data-category="'.concat(a,'"]')))[0].classList.contains("active")?u[0].classList.remove("active"):u[0].classList.add("active");else e.target.classList.contains("active")?e.target.classList.remove("active"):e.target.classList.add("active");c=Object(r.a)(document.querySelectorAll(".filter__tags .active")),n=[];c.map((function(e){return n.push(e.getAttribute("data-category")),!0})),this.setState({selectedFilters:n}),n.length>0?n.map((function(e){t.state.resources.map((function(t){t._embedded["wp:term"][0]&&t._embedded["wp:term"][0].map((function(r){var c=r.name.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase();"all"===a?i.push(t):c===e&&i.push(t)}))}))})):i=this.props.resourceData,i=Object(r.a)(new Set(i));s=20,o=i.reduce((function(e,t,a){var r=Math.floor(a/s);return e[r]||(e[r]=[]),e[r].push(t),e}),[]);0===(p=Math.round(i.length/20))&&(p=1),this.setState({filteredResources:o,totalPages:p,currentPage:0,prevPage:-1,nextPage:1})}}else if("click"===e.type){if(a.length>0)(u=document.querySelectorAll('[data-category="'.concat(a,'"]')))[0].classList.contains("active")?u[0].classList.remove("active"):u[0].classList.add("active");else e.target.classList.contains("active")?e.target.classList.remove("active"):e.target.classList.add("active");c=Object(r.a)(document.querySelectorAll(".filter__tags .active")),n=[];c.map((function(e){return n.push(e.getAttribute("data-category")),!0})),this.setState({selectedFilters:n}),n.length>0?(n.map((function(e){t.state.resources.map((function(t){t._embedded["wp:term"][0]&&t._embedded["wp:term"][0].map((function(a){var r=a.name.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase();r===e&&(console.log(r,e),i.push(t))}))}))})),console.log(i)):i=this.props.resourceData,i=Object(r.a)(new Set(i));s=20,o=i.reduce((function(e,t,a){var r=Math.floor(a/s);return e[r]||(e[r]=[]),e[r].push(t),e}),[]);0===(p=Math.round(i.length/20))&&(p=1),console.log(o,i),this.setState({filteredResources:o,totalPages:p,currentPage:0,prevPage:-1,nextPage:1})}else{var u;if(a.length>0)(u=document.querySelectorAll('[data-category="'.concat(a,'"]'))).length>0&&(u[0].classList.contains("active")?u[0].classList.remove("active"):u[0].classList.add("active"));else e.target.classList.contains("active")?e.target.classList.remove("active"):e.target.classList.add("active");c=Object(r.a)(document.querySelectorAll(".filter__tags .active")),n=[];c.map((function(e){return n.push(e.getAttribute("data-category")),!0})),this.setState({selectedFilters:n}),n.length>0?n.map((function(e){t.state.resources.map((function(t){t._embedded["wp:term"][0]&&t._embedded["wp:term"][0].map((function(a){a.name.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()===e&&i.push(t)}))}))})):i=this.props.resourceData,i=Object(r.a)(new Set(i));var p;s=20,o=i.reduce((function(e,t,a){var r=Math.floor(a/s);return e[r]||(e[r]=[]),e[r].push(t),e}),[]);0===(p=Math.round(i.length/20))&&(p=1),this.setState({filteredResources:o,totalPages:p,currentPage:0,prevPage:-1,nextPage:1})}}}},{key:"componentWillMount",value:function(){var e=[];this.props.resourceData.map((function(t){return t._embedded["wp:term"][0]&&t._embedded["wp:term"][0].map((function(t){e.push(t.name)})),!0})),(e=(e=Object(r.a)(new Set(e))).sort()).map((function(t,a){"Miscellaneous"===t&&e.push(e.splice(a,1)[0])})),this.setState({resourceFilters:e})}},{key:"componentDidMount",value:function(){var e=this.props.resourceData.sort((function(e,t){return e.acf.subtitle<t.acf.subtitle?-1:e.acf.subtitle>t.acf.subtitle?1:0})),t=e.reduce((function(e,t,a){var r=Math.floor(a/20);return e[r]||(e[r]=[]),e[r].push(t),e}),[]),a=Math.round(this.props.resourceData.length/20);0===a&&(a=1),this.setState({filteredResources:t,totalPages:a});var r=window.location.search;r.length>0&&("hunger"===(r=(r=r.replace(/\?/g,"").split("&"))[0].split("=")[1].replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase())&&(r="hungerandfoodaccess"),"health"===r&&(r="mentalhealthsocialisolation"),this.toggleTag("0",r))}},{key:"render",value:function(){var e=this;return m(p.a.Fragment,null,m(d.a,null,m("title",null,this.props.pageData.yoast_title),this.props.pageData.yoast_meta.map((function(e){return"name"===Object.keys(e)[0]?m("meta",{name:e.name,content:e.content}):"property"===Object.keys(e)[0]?m("meta",{property:e.property,content:e.content}):""}))),m("main",{className:"getting__started"},m("section",{id:"main__hero"},m("div",{className:"main__hero__background"},m("img",{loading:"lazy",src:this.props.pageData.better_featured_image.source_url,alt:"Getting Started Background"})),m("div",{className:"container"},m("div",{className:"row"},m("div",{className:"col-lg-12 no__padding"},m("div",{className:"main__hero__title"},m("h2",{className:"poppins bold xxmd white-text",dangerouslySetInnerHTML:{__html:this.props.acfData.acf.title}})))),m("div",{className:"main__hero__resources row"},this.props.acfData.acf.featured_resources.map((function(e,t){return m("div",{className:"resource",key:t},m("a",{href:e.acf.external_link,target:"_BLANK",id:"id-".concat(t)},m("div",{className:"resource__title"},m("h2",{className:"poppins bold lg white-text",dangerouslySetInnerHTML:{__html:e.post_title}})),m("div",{className:"resource__subtitle"},m("p",{className:"poppins bold sm white-text text-uppercase",dangerouslySetInnerHTML:{__html:e.acf.subtitle}}))))}))))),m("section",{id:"resource__filter"},m("div",{className:"container"},m("div",{className:"row"},m("div",{className:"col-lg-12 resource__filter__title text-left no__padding"},m("h2",{className:"poppins  bold teal-text ",dangerouslySetInnerHTML:{__html:this.props.acfData.acf.resources_filter_title}}))),m("div",{className:"row filter__tags"},m("div",{className:"container"},m("div",{className:"row"},this.state.resourceFilters.map((function(t,a){return m("div",(r={tabIndex:"0",className:"resource__filter__tag ".concat(t.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()),"data-category":"".concat(t.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()),key:a,onClick:e.toggleTag,onKeyDown:e.toggleTag},n=a,(c="key")in r?Object.defineProperty(r,c,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[c]=n,r),"foodjustice"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\./g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo1991.svg",alt:"".concat(t," icon")}):"","educationjustice"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\./g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2044.svg",alt:"".concat(t," icon")}):"","unemployment"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\./g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2045.svg",alt:"".concat(t," icon")}):"","mentalhealthjustice"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2046.svg",alt:"".concat(t," icon")}):"","housingjustice"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2050.svg",alt:"".concat(t," icon")}):"","communitybuilding"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2051.svg",alt:"".concat(t," icon")}):"","sustainabilityenvironment"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2048.svg",alt:"".concat(t," icon")}):"","racialjustice"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2049.svg",alt:"".concat(t," icon")}):"","volunteering"===t.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2052.svg",alt:"".concat(t," icon")}):"",m("p",{className:"poppins bold md text-uppercase",dangerouslySetInnerHTML:{__html:t}}));var r,c,n})),this.state.search?m("div",{tabIndex:"0",className:"resource__filter__tag clear__search",onClick:this.cleanSearch,onKeyDown:this.cleanSearch},m("p",{className:"poppins bold md text-uppercase "},"\u2573")):""))),m("div",{className:"row filter__results"},m("div",{className:"container"},m("div",{className:"row"},m(p.a.Fragment,null,this.state.filteredResources.length?m(p.a.Fragment,null,this.state.filteredResources[this.state.currentPage].map((function(e,t){return m("div",{className:"filter__result__item ".concat(e._embedded["wp:term"][0][0].name.replace(/ /g,"").replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/ /g,"").replace(/'/g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()),key:t},m("div",{className:"category__icon"},"foodjustice"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\./g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo1991.svg",alt:"".concat(e.title.rendered," icon")}):"","educationjustice"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\./g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2044.svg",alt:"".concat(e.title.rendered," icon")}):"","unemployment"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\./g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2045.svg",alt:"".concat(e.title.rendered," icon")}):"","mentalhealthjustice"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2046.svg",alt:"".concat(e.title.rendered," icon")}):"","housingjustice"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2050.svg",alt:"".concat(e.title.rendered," icon")}):"","communitybuilding"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2051.svg",alt:"".concat(e.title.rendered," icon")}):"","sustainabilityenvironment"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2048.svg",alt:"".concat(e.title.rendered," icon")}):"","racialjustice"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2049.svg",alt:"".concat(e.title.rendered," icon")}):"","volunteering"===e._embedded["wp:term"][0][0].name.replace(/,/g,"").replace(/-/g,"").replace(/!/g,"").replace(/'/g,"").replace(/ /g,"").replace(/\//g,"").replace(/\./g,"").toLowerCase()?m("img",{loading:"lazy",src:"/images/Grupo2052.svg",alt:"".concat(e.title.rendered," icon")}):""),m("a",{href:e.acf.external_link,target:"_BLANK","aria-label":e.title.rendered},m("div",{className:"filtered__resource__item"},m("h2",{className:"title poppins teal-text bold xxl"},e.title.rendered),m("p",{className:"title poppins gray-text bold text-uppercase sm"},e.acf.subtitle)),m("div",{className:"filtered__resource__link"},m("span",{className:"absolute__name"},e.title.rendered),m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"29.889",height:"11.96",viewBox:"0 0 29.889 11.96"},m("path",{id:"Hover",d:"M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z",transform:"translate(-10)",fill:"#015d5d",fillRule:"evenodd"})))))}))):"")))),m("div",{className:"row filter__pagination"},m("div",{className:"container"},m("div",{className:"row"},m("div",{className:"col-lg-12"},this.state.prevPage>=0?m("p",{className:"filter__pagination__page__changer","data-page":this.state.prevPage,"aria-label":"previous page","data-total":this.state.totalPages,onKeyDown:this.prevPage,onClick:this.prevPage},m("span",null,m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7.27",height:"12.722",viewBox:"0 0 7.27 12.722"},m("path",{id:"Hover",d:"M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879",transform:"translate(104.336 36.242) rotate(180)",fill:"#00a99e",fillRule:"evenodd"})))):"",m("div",{className:"filter__pagination__current"},m("p",null,this.state.currentPage+1)),m("div",{className:"filter__pagination__current"},m("p",null,"OF")),m("div",{className:"filter__pagination__current"},m("p",null,this.state.totalPages)),this.state.nextPage!=this.state.totalPages?m("p",{className:"filter__pagination__page__changer","data-page":this.state.nextPage,"aria-label":"next page","data-total":this.state.totalPages,onKeyDown:this.nextPage,onClick:this.nextPage},m("span",null,m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"7.27",height:"12.722",viewBox:"0 0 7.27 12.722"},m("path",{id:"Hover",d:"M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879",transform:"translate(-97.066 -23.52)",fill:"#00a99e",fillRule:"evenodd"})))):""))))))))}}]),a}(u.Component)},foSv:function(e,t,a){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return r}))},lwAK:function(e,t,a){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var c=((r=a("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=c},md7G:function(e,t,a){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return n}));var c=a("JX7q");function n(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(c.a)(e):t}},vuIU:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}a.d(t,"a",(function(){return c}))},ynTQ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-resources",function(){return a("d7sU")}])}},[["ynTQ",0,1,2,3]]]);