import{h as _,r as l,o as v,k as d,y as m,p as e,q as u,z as g,t as w,v as D,_ as S,l as k,m as $,A as x,u as C,S as I}from"./index-F3ikbQIR.js";const f=t=>(w("data-v-f53af7e3"),t=t(),D(),t),B={class:"glitch_container"},G=["data-time"],V=f(()=>e("div",{class:"figure"},null,-1)),W=f(()=>e("div",{class:"figure-mask"},null,-1)),y=_({__name:"GlitchWidget",setup(t){const c=l(!0),a=l(""),o=l(!0),i=new Date;i.setDate(i.getDate()),v(()=>{setTimeout(()=>{c.value=!1},2e3),setInterval(()=>{const s=new Date().getHours(),n=new Date().getSeconds(),r=new Date().getMinutes(),h=`${(s<10?"0":"")+s} : ${r<10?"0":""}${r} : ${n<10?"0":""}${n}`;a.value=h},1e3)});function p(s){s.preventDefault(),o.value=!o.value}return(s,n)=>(d(),m("div",B,[e("a",{class:"switcher",href:"#",onClick:p}),e("div",{class:u(["screen",{glitch:o.value}])},[e("div",{class:u(["clock",{"is-off":c.value}])},[e("span",{class:"time","data-time":a.value},g(a.value),9,G)],2),V,W],2)]))}}),z=S(y,[["__scopeId","data-v-f53af7e3"]]),N=_({__name:"GlitchWidgetView",setup(t){return(c,a)=>(d(),k(C(I),null,{default:$(()=>[x(z)]),_:1}))}});export{N as default};
