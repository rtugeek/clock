import{h as _,r as l,o as v,k as d,A as m,p as e,s as u,D as g,v as w,x as D,_ as k,l as x,m as S,E as $,u as B,F as C}from"./index-DvvDUAwq.js";const f=t=>(w("data-v-3575f17b"),t=t(),D(),t),I={class:"glitch_container"},G=["data-time"],T=f(()=>e("div",{class:"figure"},null,-1)),V=f(()=>e("div",{class:"figure-mask"},null,-1)),W=_({__name:"GlitchWidget",setup(t){const c=l(!0),a=l(""),o=l(!0),i=new Date;i.setDate(i.getDate()),v(()=>{setTimeout(()=>{c.value=!1},2e3),setInterval(()=>{const s=new Date().getHours(),n=new Date().getSeconds(),r=new Date().getMinutes(),h=`${(s<10?"0":"")+s} : ${r<10?"0":""}${r} : ${n<10?"0":""}${n}`;a.value=h},1e3)});function p(s){s.preventDefault(),o.value=!o.value}return(s,n)=>(d(),m("div",I,[e("a",{class:"switcher",href:"#",onClick:p}),e("div",{class:u(["screen",{glitch:o.value}])},[e("div",{class:u(["clock",{"is-off":c.value}])},[e("span",{class:"time","data-time":a.value},g(a.value),9,G)],2),T,V],2)]))}}),b=k(W,[["__scopeId","data-v-3575f17b"]]),M=_({__name:"GlitchWidgetView",setup(t){return(c,a)=>(d(),x(B(C),null,{default:S(()=>[$(b)]),_:1}))}});export{M as default};