import{at as r,p as a,q as s,aF as p,bm as i,bb as d,b0 as o,aU as m,o as c,bp as _}from"./runtime-dom.esm-bundler-b0fe8529.js";import{u as f}from"./app-fc85cb6b.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css            */const w={},h={class:"items-center p-8 w-full"},x=["src"],g=s("h1",{class:"text-red-600 font-bold text-3xl text-center my-10"},"BIENVENUE",-1);function y(n,t){return r(),a("div",h,[s("img",{src:"/image/logo.png",class:"h-40 my-10 mx-auto"},null,8,x),g,p(n.$slots,"default")])}const v=b(w,[["render",y]]),E=["onSubmit"],V={class:"w-full md:w-1/2 mx-auto"},$=s("label",{for:"email",class:"form-label"},"E-mail",-1),k={key:0,class:"input-error"},B={class:"mt-4"},L=s("label",{for:"password",class:"form-label"},"Password",-1),N={key:0,class:"input-error"},S=s("div",{class:"mt-4"},[s("button",{class:"btn-primary-rounded w-full text-center",type:"submit"},"Login")],-1),U={layout:v},C=Object.assign(U,{__name:"Login",setup(n){const t=f({email:null,password:null}),u=()=>t.post(route("login.store"));return(D,e)=>(r(),a("form",{onSubmit:_(u,["prevent"])},[s("div",V,[s("div",null,[$,i(s("input",{id:"email",type:"text",class:"form-input","onUpdate:modelValue":e[0]||(e[0]=l=>o(t).email=l)},null,512),[[d,o(t).email]]),o(t).errors.email?(r(),a("div",k,m(o(t).errors.email),1)):c("",!0)]),s("div",B,[L,i(s("input",{id:"password",type:"password",class:"form-input","onUpdate:modelValue":e[1]||(e[1]=l=>o(t).password=l),autocomplete:"on"},null,512),[[d,o(t).password]]),o(t).errors.password?(r(),a("div",N,m(o(t).errors.password),1)):c("",!0)]),S])],40,E))}});export{C as default};
