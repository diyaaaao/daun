import{r,o as s,b as l,w as v,d as o,u as h,i as k,t as f,e as w,p as x,f as V,g as $,c as _,F as B,h as M,a as P}from"./index-0d204d03.js";/* empty css              */const S=["src"],b={class:"main__media-list-item-title"},C={__name:"MediaItem",props:{item:Object,type:String},setup(e){return(t,c)=>{const a=r("router-link");return s(),l(a,{to:`/${e.type}/${e.item.id}`,class:"main__media-list-item"},{default:v(()=>[o("img",{src:h(k)+e.item.backdrop_path,alt:"",class:"main__media-list-item-img"},null,8,S),o("h1",b,f(e.item.title||e.item.name),1)]),_:1},8,["to"])}}};const L={key:0,class:"main"},F={class:"container"},N={class:"main__media"},U={class:"main__media-list"},D={__name:"Media",props:{type:String},setup(e){const t=e,c=w(),a=x();a.getPopular({type:t.type,page:1});const m=V(()=>t.type=="movie"?a.popularMovies:t.type=="tv"?a.popularTvs:""),p=$(1),d=async i=>{await a.getPopular({type:t.type,page:i}),c.push({name:t.type,query:{currentPage:i}})};return(i,u)=>{const y=r("vue-awesome-paginate"),g=r("Loader");return m.value?(s(),_("div",L,[o("div",F,[o("div",N,[o("div",U,[(s(!0),_(B,null,M(m.value,n=>(s(),l(C,{type:e.type,key:n.id,item:n},null,8,["type","item"]))),128))])]),P(y,{"total-items":1e4,"items-per-page":20,"max-pages-shown":10,modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=n=>p.value=n),"on-click":d},null,8,["modelValue"])])])):(s(),l(g,{key:1}))}}};export{D as _};
