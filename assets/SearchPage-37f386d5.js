import{r as g,j as v,o as a,b as p,w as y,k as f,d as l,u as o,i as h,t as k,l as S,m as $,g as d,n as x,f as w,q as D,c as i,v as b,F as B,h as C,s as V,a as N}from"./index-0d204d03.js";const T={alt:"",class:"main__search-list-item-img"},U={class:"main__search-list-item-title"},j={__name:"SearchContent",props:{item:Object},setup(e){return(t,s)=>{const r=g("router-link"),n=v("lazy");return a(),p(r,{to:`/${e.item.media_type}/${e.item.id}`,class:"main__search-list-item"},{default:y(()=>[f(l("img",T,null,512),[[n,e.item.backdrop_path?o(h)+e.item.backdrop_path:o(h)+e.item.profile_path]]),l("h2",U,k(e.item.title||e.item.name),1)]),_:1},8,["to"])}}},q=S("search",{state:()=>({result:null}),actions:{async getSearchData(e){try{let t=await $.get(`search/multi?query=${e}&language=ru-RU`);this.result=t.data.results}catch(t){console.log("Ошибка при получении популярных фильмов и сериалов"+t.message)}}}}),z={class:"main__search"},F={class:"container"},M={key:0,class:"main__search-list"},A={__name:"Search",setup(e){const t=d(""),s=d(null),r=q();let n=null;x(t,u=>{clearTimeout(n),n=setTimeout(()=>{r.getSearchData(u)},500)});let m=w(()=>r.result);return D(()=>{s.value.focus()}),(u,_)=>(a(),i("div",z,[l("div",F,[f(l("input",{type:"text",class:"main__search-input",placeholder:"Найти фильм, сериал или актера...","onUpdate:modelValue":_[0]||(_[0]=c=>t.value=c),ref_key:"input",ref:s},null,512),[[b,t.value]]),o(m)?(a(),i("div",M,[(a(!0),i(B,null,C(o(m),c=>(a(),p(j,{key:c.id,item:c},null,8,["item"]))),128))])):V("",!0)])]))}},E={class:"main"},O={__name:"SearchPage",setup(e){return(t,s)=>(a(),i("main",E,[N(A)]))}};export{O as default};
