import{at as c,p as i,q as e,bp as d,bm as m,bb as u,b0 as l,y as b,F as p}from"./runtime-dom.esm-bundler-b0fe8529.js";import{a as f}from"./app-886f4555.js";import _ from"./Create-11648ed4.js";/* empty css            */const x=e("div",{class:"gap-x-24 items-center px-4 py-2 border-b border-gray-200 dark:border-gray-700"},[e("h1",{class:"text-2xl font-semibold leading-relaxed text-gray-800 dark:text-gray-200"}," Edit the club ")],-1),g=["onSubmit"],h={class:"flex flex-col items-center md:w-1/2 gap-4 m-auto"},y={class:"w-full"},v=e("label",{for:"name",class:"form-label w-full"},"Nom",-1),w=e("div",{class:"flex col-span-6 mt-4 justify-center"},[e("button",{class:"btn-primary",type:"submit"},"Update the club")],-1),V={__name:"Edit",props:{club:Object},setup(a){const t=a;console.log(t.club.name);const s=f({name:t.club.name}),n=()=>s.put(route("lending-club.update",t.club.id));return(k,o)=>(c(),i(p,null,[x,e("div",null,[e("form",{onSubmit:d(n,["prevent"])},[e("div",h,[e("div",y,[v,m(e("input",{id:"name",class:"form-input","onUpdate:modelValue":o[0]||(o[0]=r=>l(s).name=r),type:"text"},null,512),[[u,l(s).name]])]),b(_,{"lending-club":a.club},null,8,["lending-club"])]),w],40,g)])],64))}};export{V as default};
