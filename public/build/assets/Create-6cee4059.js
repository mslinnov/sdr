import{az as m,l as p,at as g,p as b,q as e,b0 as f,bp as _}from"./runtime-dom.esm-bundler-b0fe8529.js";import{d as h,N as x,u as C}from"./app-fc85cb6b.js";/* empty css            */const y={class:"p-6 shadow-sm flex flex-col gap-4"},v=e("div",{class:"text-gray-500 dark:text-gray-100 font-medium"},[e("div",null," Ecusson du club ")],-1),w=["src"],j=["onSubmit"],k={class:"flex gap-2 justify-between items-center"},I={class:"flex gap-2"},B=["disabled"],F={__name:"Create",props:{lendingClub:Object,title:Object},setup(a){const o=a;h.Inertia.on("progress",s=>{s.detail.progress.percentage&&x.set(s.detail.progress.percentage/100*.9),s.detail.progress.percentage===100&&setTimeout(function(){l()}.bind(this),1e3)});const i=m({src:"/image/club/none.png"});function l(){o.lendingClub.image&&(i.src=o.lendingClub.image.src)}l();const t=C({images:[]}),r=p(()=>t.images.length),c=()=>{t.post(route("lendingClub.image.store",{lendingClub:o.lendingClub.id}),{onSuccess:()=>t.reset("images")})},d=s=>{for(const n of s.target.files)t.images.push(n)},u=()=>t.reset("images");return(s,n)=>(g(),b("div",y,[v,e("img",{src:i.src,alt:"Ecusson du club",class:"rounded-full object-contain h-20 w-20 m-auto mt-4"},null,8,w),e("form",{onSubmit:_(c,["prevent"])},[e("section",k,[e("input",{class:"border rounded-md file:px-4 file:py-2 border-blue-600 file:mr-4 file:bg-slate-100 file:hover:bg-slate-200 file:font-medium file:text-blue-600 file:border-0 file:cursor-pointer",type:"file",onInput:d},null,32),e("div",I,[e("button",{type:"submit",class:"btn-outline-small disabled:opacity-25 disabled:cursor-not-allowed",disabled:!f(r)},"Upload",8,B),e("button",{type:"reset",onClick:u,class:"btn-outline-small"},"Reset")])])],40,j)]))}};export{F as default};
