(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{7022:(e,t,n)=>{Promise.resolve().then(n.bind(n,3659)),Promise.resolve().then(n.t.bind(n,5149,23)),Promise.resolve().then(n.t.bind(n,8619,23)),Promise.resolve().then(n.t.bind(n,2978,23)),Promise.resolve().then(n.bind(n,1367)),Promise.resolve().then(n.bind(n,449)),Promise.resolve().then(n.t.bind(n,6759,23))},3659:(e,t,n)=>{"use strict";n.d(t,{Navbar:()=>d});var r=n(6545),a=n(9971),s=n.n(a),o=n(6767),l=n(2741);let i={"/":{name:"home"},"/blog":{name:"blog"},"/gallery":{name:"gallery"}},c={github:{name:"github",url:"github.com/brendanng7",svg:"/socials/github.svg"},linkedin:{name:"linkedin",url:"linkedin.com/in/brendanng7",svg:"/socials/linkedin.svg"}};function d(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{window.scrollY>50?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,r.jsx)("aside",{className:"-ml-[8px] mb-16 tracking-tight z-50 lg:sticky lg:top-0 w-full transition-shadow duration-300 ".concat(e&&"sm:shadow-lg bg-white dark:bg-black"),children:(0,r.jsxs)("div",{className:"lg:w-4xl md:w-3xl mx-auto flex justify-between items-center py-4",children:[(0,r.jsx)("div",{className:"flex space-x-4",children:Object.entries(i).map(e=>{let[t,{name:n}]=e;return(0,r.jsx)(s(),{href:t,className:"transition-all hover:text-neutral-600 dark:hover:text-neutral-400 py-1 px-2",children:n},t)})}),(0,r.jsxs)("div",{className:"flex space-x-4 items-center",children:[Object.entries(c).map(e=>{let[t,{name:n,url:a,svg:s}]=e;return(0,r.jsx)("a",{href:"https://".concat(a),target:"_blank",rel:"noopener noreferrer",className:"transition-all group",children:(0,r.jsx)(o.default,{src:s,alt:n,width:30,height:30,className:"group-hover:-translate-y-1 transition-transform dark:invert"})},t)}),(0,r.jsx)("a",{href:"/resume/resume.pdf",target:"_blank",className:"transition-all group",children:(0,r.jsx)(o.default,{src:"/resume/download-resume.svg",alt:"resume",width:30,height:30,className:"group-hover:-translate-y-1 transition-transform dark:invert"})})]})]})})}},6767:(e,t,n)=>{"use strict";n.d(t,{default:()=>a.a});var r=n(6484),a=n.n(r)},6484:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},getImageProps:function(){return l}});let r=n(990),a=n(7368),s=n(980),o=r._(n(2044));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let i=s.Image},5149:()=>{},2978:()=>{},8619:()=>{},6759:e=>{e.exports={style:{fontFamily:"'Inconsolata', 'Inconsolata Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_c02acd"}},1367:(e,t,n)=>{"use strict";n.d(t,{Analytics:()=>i});var r=n(2741),a=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function s(){return"undefined"!=typeof window}function o(){return"production"}function l(){return"development"===((s()?window.vam:o())||"production")}function i(e){let{beforeSend:t,debug:n=!0,mode:i="auto"}=e;return(0,r.useEffect)(()=>{!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!s())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=o();return}window.vam=e})(t.mode),a(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=l()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.setAttribute("data-sdkn","@vercel/analytics"),r.setAttribute("data-sdkv","1.1.3"),r.onerror=()=>{let e=l()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},l()&&!1===t.debug&&r.setAttribute("data-debug","false"),document.head.appendChild(r)}({beforeSend:t,debug:n,mode:i})},[t,n,i]),null}},449:(e,t,n)=>{"use strict";n.d(t,{SpeedInsights:()=>m});var r=n(2741),a=n(4724),s=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.siq=window.siq||[]).push(t)})};function o(){return false}var l="https://va.vercel-scripts.com/v1/speed-insights",i="".concat(l,"/script.js"),c="".concat(l,"/script.debug.js");function d(e){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{let n=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("undefined"!=typeof window)||null===t.route)return null;s();let n=!!t.dsn,r=t.scriptSrc||(n?i:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;t.beforeSend&&(null==(e=window.si)||e.call(window,"beforeSend",t.beforeSend));let a=document.createElement("script");return a.src=r,a.defer=!0,a.dataset.sdkn="@vercel/speed-insights"+(t.framework?"/".concat(t.framework):""),a.dataset.sdkv="1.0.9",t.sampleRate&&(a.dataset.sampleRate=t.sampleRate.toString()),t.route&&(a.dataset.route=t.route),t.endpoint&&(a.dataset.endpoint=t.endpoint),t.dsn&&(a.dataset.dsn=t.dsn),a.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(a),{setRoute:e=>{a.dataset.route=null!=e?e:void 0}}}({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}var u=()=>{let e=(0,a.useParams)(),t=(0,a.useSearchParams)(),n=(0,a.usePathname)(),r={...Object.fromEntries(t.entries()),...e||{}};return e?function(e,t){if(!e||!t)return e;let n=e;try{for(let[e,r]of Object.entries(t)){let t=Array.isArray(r),a=t?r.join("/"):r,s=t?"...".concat(e):e,o=new RegExp("/".concat(a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"));o.test(n)&&(n=n.replace(o,"/[".concat(s,"]")))}return n}catch(t){return e}}(n,r):null};function f(e){let t=u();return r.createElement(d,{route:t,...e,framework:"next"})}function m(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(f,{...e}))}}},e=>{var t=t=>e(e.s=t);e.O(0,[171,980,971,413,203,358],()=>t(7022)),_N_E=e.O()}]);