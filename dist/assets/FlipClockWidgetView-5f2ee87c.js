import{h as _,r as d,o as f,n as p,k as v,l as h,m,p as e,u as x,G as g}from"./index-12074311.js";const y={class:"clock-container"},S={class:"clock"},q=e("div",{class:"gear"},null,-1),w=e("div",{class:"gear"},null,-1),k=e("div",{class:"top"},[e("div",{class:"text"},"00")],-1),C=e("div",{class:"bottom"},[e("div",{class:"text"},"00")],-1),R=[q,w,k,C],T=e("div",{class:"gear"},null,-1),b=e("div",{class:"gear"},null,-1),A=e("div",{class:"top"},[e("div",{class:"text"},"00")],-1),B=e("div",{class:"bottom"},[e("div",{class:"text"},"00")],-1),L=[T,b,A,B],V=e("div",{class:"gear"},null,-1),F=e("div",{class:"gear"},null,-1),M=e("div",{class:"top"},[e("div",{class:"text"},"00")],-1),N=e("div",{class:"bottom"},[e("div",{class:"text"},"00")],-1),W=[V,F,M,N],H=_({__name:"FlipClockWidgetView",setup(D){const c=d(),l=d(),i=d();function r(t,s){var n=t.querySelector(".top").cloneNode(!0),o=t.querySelector(".bottom").cloneNode(!0);n.classList.add("new"),o.classList.add("new"),o.querySelector(".text").textContent=s,t.querySelector(".top").after(n),t.querySelector(".top.new").append(o),t.classList.add("flipping"),t.querySelector(".top:not(.new)").querySelector(".text").textContent=s,setTimeout(function(){t.querySelector(".bottom:not(.new)").querySelector(".text").textContent=s},500)}function u(){for(let a of document.querySelectorAll(".flipper"))a.classList.remove("flipping");for(let a of document.querySelectorAll(".flipper .new"))a.remove();const t=new Date;let s=t.getSeconds().toString();s.length==1&&(s="0"+s);let n=t.getMinutes().toString();n.length==1&&(n="0"+n);let o=t.getHours();o=o.toString(),o.length==1&&(o="0"+o),c.value.querySelector(".top>.text").textContent!==o&&r(c.value,o),l.value.querySelector(".top>.text").textContent!==n&&r(l.value,n),i.value.querySelector(".top>.text").textContent!==s&&r(i.value,s),setTimeout(function(){u()},500)}return f(async()=>{await p(),u()}),(t,s)=>(v(),h(x(g),null,{default:m(()=>[e("div",y,[e("div",S,[e("div",{class:"flipper",ref_key:"hourRef",ref:c},R,512),e("div",{class:"flipper",ref_key:"minuteRef",ref:l},L,512),e("div",{class:"flipper",ref_key:"secondRef",ref:i},W,512)])])]),_:1}))}});export{H as default};
