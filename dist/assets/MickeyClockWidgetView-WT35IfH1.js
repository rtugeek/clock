import{_ as o,k as i,z as v,p as d,s as a,E as c,h as r,l,m as u,D as p,u as h,T as m}from"./index-aRHATkb3.js";const _={name:"MickeyClockWidget",props:{borderRadius:{type:Number,default:22}},data(){return{hours:0,minutes:0,hoursRotate:"rotate(0deg) ",minutesRotate:"rotate(0deg)",scale:1}},created(){this.updateTime()},methods:{updateTime(){setInterval(()=>{this.hours=new Date().getHours(),this.minutes=new Date().getMinutes(),this.hours>12&&(this.hours=this.hours-12),this.hoursRotate=`rotate(${this.hours*30+this.minutes/2}deg)`,this.minutesRotate=`rotate(${this.minutes*6}deg)`},1e3)}}},g={class:"mickey-clock"},f={id:"watch"},k=c('<div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>1</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>2</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>3</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>4</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>5</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>6</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>7</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>8</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>9</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>10</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>11</span></div><div class="digit" data-v-1d2d2d10><span data-v-1d2d2d10>12</span></div><div id="mickey" data-v-1d2d2d10></div>',13);function y(e,n,t,b,s,x){return i(),v("div",g,[d("div",{class:"bg",style:a({borderRadius:`${t.borderRadius??22}px`})},null,4),d("div",f,[k,d("div",{id:"hours",class:"right",style:a({transform:s.hoursRotate})},null,4),d("div",{id:"minutes",class:"back left",style:a({transform:s.minutesRotate})},null,4)])])}const R=o(_,[["render",y],["__scopeId","data-v-1d2d2d10"]]),C=r({__name:"MickeyClockWidgetView",setup(e){return(n,t)=>(i(),l(h(m),null,{default:u(()=>[p(R,{"border-radius":22})]),_:1}))}});export{C as default};