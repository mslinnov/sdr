import{l as q,az as y,aH as B,at as s,p as i,q as e,bm as n,x as I,aU as m,b0 as o,bp as w,F as k,aE as C,y as p,bk as j,b9 as F}from"./runtime-dom.esm-bundler-b0fe8529.js";import{u as L,a as R,C as S,L as T}from"./app-61e07488.js";import{g as f}from"./getOverallConditionNameById-72407106.js";import{g as N}from"./getHadRespondThisWeek-c72c4808.js";import{_ as D}from"./AppLayout-063429d9.js";/* empty css            */import"./moment-fbc5633a.js";import"./index-94f5a6ee.js";const O={class:"bg-slate-50 w-full pb-10 pt-2"},E={class:"pb-4 m-4"},H={class:"font-medium text-2xl"},M={class:"font-medium text-xl pb-4 ml-4"},P={key:0},$=["onSubmit"],z={class:"flex items-center flex-row justify-center gap-4"},G=["id","value"],J=["for"],K=["src","alt"],Q={class:"text-sm text-gray-400 font-medium"},X=e("br",null,null,-1),Y={class:"flex items-center flex-col"},Z=["disabled"],ee={key:1},te=["onSubmit"],oe={class:"flex items-center flex-row justify-center gap-4"},se=["id","value"],ie=["for"],ne=["src","alt"],le={class:"text-sm text-gray-400 font-medium"},ae=e("br",null,null,-1),re={class:"flex items-center flex-col display-none"},de=["disabled"],ce={key:2},ue={class:"flex items-center justify-between mx-12"},_e={class:"flex items-center"},me=["src","alt"],pe={class:"text-gray-600 text-sm"},he={class:"flex items-center flex-col"},be={class:"flex flex-col m-4 gap-4"},fe={class:"flex justify-start gap-4 items-center"},ve={class:"rounded-full bg-blue-100 p-3"},xe=["src"],ge={class:"text-blue-600 font-bold"},ye={class:"flex justify-start gap-4 items-center"},we={class:"rounded-full bg-blue-100 p-3"},ke=["src"],Ce={class:"text-blue-600 font-bold"},je={layout:D},qe=Object.assign(je,{__name:"Create",props:{overall_condition_types:Array,last_user_condition:Object},emits:["overallConditionUpdated"],setup(h,{emit:U}){const l=h,A=L(),v=q(()=>A.props.value.user);console.log(v);let r;r=y({editForm:!1,hadARespondThisWeek:!1});const d=y({name:"none"}),u=R({overall_condition_choice:null}),c=R({overall_condition_choice:null});l.last_user_condition&&(d.name=f(l.overall_condition_types,l.last_user_condition.overall_condition_type_id),c.overall_condition_choice=l.last_user_condition.overall_condition_type_id,r.hadARespondThisWeek=N(l.last_user_condition.updated_at));function x(){r.editForm=!r.editForm}const V=()=>{r.hadARespondThisWeek=!0,d.name=f(l.overall_condition_types,u.overall_condition_choice),u.post("/overall-condition/store")},W=()=>{x(),U("overallConditionUpdated",!0),d.name=f(l.overall_condition_types,c.overall_condition_choice),c.put(`/overall-condition/update/${l.last_user_condition.id}`)};return(g,_)=>{const a=B("t");return s(),i("main",O,[e("div",E,[n(e("h1",H,null,512),[[a,"appCreate.welcome"]]),n(e("span",null,null,512),[[a,"appCreate.hello"]]),I(),e("span",null,m(o(v).first_name),1)]),e("div",null,[n(e("h2",M,null,512),[[a,"appCreate.how_are_you"]]),o(r).hadARespondThisWeek?o(r).editForm?(s(),i("div",ee,[e("form",{onSubmit:w(W,["prevent"]),id:"overallConditionUpdateForm"},[e("div",oe,[(s(!0),i(k,null,C(h.overall_condition_types,t=>(s(),i("div",null,[n((s(),i("input",{type:"radio",id:t.id,value:t.id,"onUpdate:modelValue":_[1]||(_[1]=b=>o(c).overall_condition_choice=b),key:t.id,class:"hidden peer cursor-pointer"},null,8,se)),[[F,o(c).overall_condition_choice]]),e("label",{for:t.id,class:"overallCondition_btn flex items-center flex-col justify-between w-20 text-center rounded-md px-4 py-2 bg-white cursor-pointer border border-white drop-shadow-sm peer-checked:border-blue-600 peer-checked:bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"},[(s(),i("img",{src:"/image/overall_condition_type/"+t.image,alt:t.name+" emoji",class:"w-10 pb-3",key:t.id},null,8,ne)),e("div",le,m(t.name),1)],8,ie),ae]))),256))]),e("div",re,[e("button",{type:"submit",id:"update_condition",class:"btn-primary-rounded",disabled:!o(c).overall_condition_choice},[n(e("span",null,null,512),[[a,"appCreate.update"]])],8,de)])],40,te)])):(s(),i("div",ce,[e("div",ue,[e("div",_e,[e("img",{src:"/image/overall_condition_type/"+d.name.toLowerCase()+".png",alt:d.name+" emoji",class:"h-12 w-12"},null,8,me),e("div",pe,m(d.name),1)]),e("div",he,[e("button",{type:"submit",class:"btn-primary-rounded",onClick:x},[n(e("span",null,null,512),[[a,"appCreate.edit"]])])])])])):(s(),i("div",P,[e("form",{onSubmit:w(V,["prevent"]),id:"overallConditionCreateForm"},[e("div",z,[(s(!0),i(k,null,C(h.overall_condition_types,t=>(s(),i("div",null,[n((s(),i("input",{type:"radio",id:t.id,value:t.id,"onUpdate:modelValue":_[0]||(_[0]=b=>o(u).overall_condition_choice=b),key:t.id,class:"hidden peer cursor-pointer"},null,8,G)),[[F,o(u).overall_condition_choice]]),e("label",{for:t.id,class:"overallCondition_btn flex items-center flex-col justify-between w-20 text-center rounded-md px-4 py-2 bg-white cursor-pointer border border-white drop-shadow-sm peer-checked:border-blue-600 peer-checked:bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"},[(s(),i("img",{src:"/image/overall_condition_type/"+t.image,alt:t.name+" emoji",class:"w-10 pb-3",key:t.id},null,8,K)),e("div",Q,m(t.name),1)],8,J),X]))),256))]),e("div",Y,[e("button",{type:"submit",class:"btn-primary-rounded",disabled:!o(u).overall_condition_choice},[n(e("span",null,null,512),[[a,"appCreate.submit"]])],8,Z)])],40,$)]))]),e("div",be,[p(o(T),{href:g.route("survey.create"),class:"flex justify-between px-4 py-2 bg-white items-center rounded-2xl drop-shadow-md"},{default:j(()=>[e("div",fe,[e("div",ve,[e("img",{src:"/image/icon/formulaire.png",alt:"Icone de formulaire",class:"aspect-square w-10 object-contain object-center"},null,8,xe)]),e("div",ge,[n(e("span",null,null,512),[[a,"appCreate.questionnaire"]])])]),p(o(S),{class:"h-6 w-6 text-gray-700"})]),_:1},8,["href"]),p(o(T),{href:g.route("bodyParts"),class:"flex justify-between px-4 py-2 bg-white items-center rounded-2xl drop-shadow-md"},{default:j(()=>[e("div",ye,[e("div",we,[e("img",{src:"/image/icon/blessures.png",alt:"Icone de formulaire",class:"aspect-square w-10 object-contain object-center"},null,8,ke)]),e("div",Ce,[n(e("span",null,null,512),[[a,"appCreate.injury"]])])]),p(o(S),{class:"h-6 w-6 text-gray-700"})]),_:1},8,["href"])])])}}});export{qe as default};
