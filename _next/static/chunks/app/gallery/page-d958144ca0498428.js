(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{8077:(e,r,t)=>{Promise.resolve().then(t.bind(t,7786)),Promise.resolve().then(t.t.bind(t,3452,23)),Promise.resolve().then(t.t.bind(t,285,23))},7786:(e,r,t)=>{"use strict";t.d(r,{Masonry:()=>o});var n=t(2920),i=t(2404);let l=()=>{let e=(0,i.useRef)(null),[r,t]=(0,i.useState)([]);(0,i.useEffect)(()=>{e.current&&t(Array.from(e.current.children))},[]),(0,i.useEffect)(()=>{let t=()=>{if(!r||r.length<1)return;let t=0;e.current&&(t=parseInt(window.getComputedStyle(e.current).getPropertyValue("grid-row-gap"))),r.forEach(e=>{if(!(e instanceof HTMLElement))return;let r=e.previousSibling;for(;r;){if(1===r.nodeType&&(e.style.marginTop="0",r instanceof HTMLElement&&n(r)===n(e))){e.style.marginTop=-(l(e)-o(r)-t)+"px";break}r=r.previousSibling}})};return(async()=>{if(!e.current)return;let r=Array.from(e.current.querySelectorAll("img")).map(e=>new Promise(r=>{e.complete?r(!0):e.addEventListener("load",()=>r(!0))}));await Promise.all(r),t()})(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[r]);let n=e=>e.getBoundingClientRect().left,l=e=>e.getBoundingClientRect().top+window.scrollY,o=e=>e.getBoundingClientRect().bottom+window.scrollY;return e};function o(e){let{children:r}=e,t=l();return(0,n.jsx)("div",{ref:t,className:"grid items-start gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 ",children:r})}}},e=>{var r=r=>e(e.s=r);e.O(0,[285,452,478,971,358],()=>r(8077)),_N_E=e.O()}]);