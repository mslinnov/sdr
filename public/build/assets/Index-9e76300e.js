import{P as d,E as u,a as m}from"./index-f5146087.js";import{L as o}from"./app-886f4555.js";import{_ as f}from"./Pagination-85bfc202.js";import{at as t,p as l,q as e,y as s,bk as i,b0 as a,F as r,aE as h,o as _,aU as b}from"./runtime-dom.esm-bundler-b0fe8529.js";/* empty css            */const p={class:"flex justify-between items-start"},g=e("div",{class:"flex flex-col justify-between pb-7"},[e("h1",{class:"h1-title-primary"},"Club list")],-1),x=e("span",{class:"text-sm font-semibold tracking-wide"},"Add a club",-1),y={class:"w-full"},w=e("thead",null,[e("tr",{class:"tr-head"},[e("td",{class:"td-head"})])],-1),k={class:"tr-body"},j={class:"td-body flex items-center justify-start gap-x-4"},L=["src"],v=["src"],E={class:"td-body"},I={class:"flex gap-x-2 items-center"},B={key:0,class:"w-full flex justify-center my-8"},A={__name:"Index",props:{clubs:Object},setup(c){return console.log(c.clubs.data[1]),(N,P)=>(t(),l(r,null,[e("main",p,[g,e("div",null,[s(a(o),{href:"lending-club/create",class:"btn-primary inline-flex"},{default:i(()=>[s(a(d),{class:"text-white w-6 h-6"}),x]),_:1},8,["href"])])]),e("table",y,[w,e("tbody",null,[(t(!0),l(r,null,h(c.clubs.data,n=>(t(),l("tr",k,[e("td",j,[n.image?(t(),l("img",{key:0,src:n.image.src,alt:"Logo du club emprunteur",class:"w-8"},null,8,L)):(t(),l("img",{key:1,src:"/image/club/none.png",alt:"Logo du club emprunteur",class:"w-8"},null,8,v)),e("span",null,b(n.name),1)]),e("td",E,[e("div",I,[s(a(o),{href:`/lending-club/${n.id}`},{default:i(()=>[s(a(u),{class:"w-6 h-6 color text-blue-700"})]),_:2},1032,["href"]),s(a(o),{href:`/lending-club/${n.id}/edit`},{default:i(()=>[s(a(m),{class:"w-6 h-6 color text-blue-700"})]),_:2},1032,["href"])])])]))),256))])]),c.clubs.data.length?(t(),l("div",B,[s(f,{links:c.clubs.links},null,8,["links"])])):_("",!0)],64))}};export{A as default};
