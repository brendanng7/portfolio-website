"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{9971:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(990),o=n(6545),u=r._(n(2741)),a=n(926),l=n(216),i=n(1606),f=n(2959),c=n(1579),s=n(2352),d=n(1250);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}n(1077);let y=u.default.forwardRef(function(e,t){let n,r;let{href:a,as:y,children:g,prefetch:b=null,passHref:m,replace:E,shallow:P,scroll:v,onClick:_,onMouseEnter:j,onTouchStart:C,legacyBehavior:O=!1,...k}=e;n=g,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let w=u.default.useContext(l.AppRouterContext),M=!1!==b,I=null===b?f.PrefetchKind.AUTO:f.PrefetchKind.FULL,{href:x,as:S}=u.default.useMemo(()=>{let e=h(a);return{href:e,as:y?h(y):e}},[a,y]),T=u.default.useRef(x),N=u.default.useRef(S);O&&(r=u.default.Children.only(n));let A=O?r&&"object"==typeof r&&r.ref:t,[R,U,F]=(0,i.useIntersection)({rootMargin:"200px"}),L=u.default.useCallback(e=>{(N.current!==S||T.current!==x)&&(F(),N.current=S,T.current=x),R(e)},[S,x,F,R]),K=(0,c.useMergedRef)(L,A);u.default.useEffect(()=>{w&&U&&M&&p(w,x,{kind:I})},[S,x,U,M,w,I]);let q={ref:K,onClick(e){O||"function"!=typeof _||_(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,n,r,o,a,l){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,w,x,S,E,P,v)},onMouseEnter(e){O||"function"!=typeof j||j(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),w&&M&&p(w,x,{kind:I})},onTouchStart:function(e){O||"function"!=typeof C||C(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),w&&M&&p(w,x,{kind:I})}};return(0,s.isAbsoluteUrl)(S)?q.href=S:O&&!m&&("a"!==r.type||"href"in r.props)||(q.href=(0,d.addBasePath)(S)),O?u.default.cloneElement(r,q):(0,o.jsx)("a",{...k,...q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2621:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1606:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(2741),o=n(2621),u="function"==typeof IntersectionObserver,a=new Map,l=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,f=i||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(f||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),a.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},926:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return l},urlObjectKeys:function(){return a}});let r=n(5687)._(n(2670)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,u=e.protocol||"",a=e.pathname||"",l=e.hash||"",i=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:n&&(f=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(f+=":"+e.port)),i&&"object"==typeof i&&(i=String(r.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==f?(f="//"+(f||""),a&&"/"!==a[0]&&(a="/"+a)):f||(f=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+u+f+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return u(e)}},2670:(e,t)=>{function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},2352:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return m},MissingStaticPage:function(){return b},NormalizeError:function(){return y},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return l},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return s},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return E}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),u=0;u<r;u++)o[u]=arguments[u];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function s(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await s(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class m extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);