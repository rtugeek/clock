import{h as u,B as r,W as i,C as p,N as m,X as f,k as g,l as w,u as e,i as c,x as C}from"./index-F3ikbQIR.js";const B=u({__name:"ClockWidgetConfigView",setup(k){r.setSize(600,350),r.center();const a=new i(p.name);a.theme.backgroundColor="#000";const{widgetData:t,widgetParams:l,save:n}=m(i,{defaultData:a}),d=new f({custom:!1,theme:{backgroundColor:!0,borderRadius:!0}});return(W,o)=>(g(),w(e(C),{modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=s=>c(t)?t.value=s:null),"widget-params":e(l),option:e(d),onApply:e(n),onConfirm:o[1]||(o[1]=s=>e(n)({closeWindow:!0}))},null,8,["modelValue","widget-params","option","onApply"]))}});export{B as default};