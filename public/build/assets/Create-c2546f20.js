import{l as q,az as g,aH as B,at as o,p as i,q as e,bm as n,x as I,aU as m,b0 as s,bp as y,F as w,aE as k,y as p,bk as C,b9 as j}from"./runtime-dom.esm-bundler-b0fe8529.js";import{u as L,a as F,C as R,L as S}from"./app-55e830cc.js";import{g as f}from"./getOverallConditionNameById-72407106.js";import{g as N}from"./getHadRespondThisWeek-c72c4808.js";import{_ as D}from"./AppLayout-100b0aaf.js";/* empty css            */import"./moment-fbc5633a.js";import"./index-7ba30179.js";const O={class:"bg-slate-50 w-full pb-10 pt-2"},E={class:"pb-4 m-4"},H={class:"font-medium text-2xl"},M={class:"font-medium text-xl pb-4 ml-4"},P={key:0},$=["onSubmit"],z={class:"flex items-center flex-row justify-center gap-4"},G=["id","value"],J=["for"],K=["src","alt"],Q={class:"text-sm text-gray-400 font-medium"},X=e("br",null,null,-1),Y={class:"flex items-center flex-col"},Z=["disabled"],ee={key:1},te=["onSubmit"],se={class:"flex items-center flex-row justify-center gap-4"},oe=["id","value"],ie=["for"],ne=["src","alt"],le={class:"text-sm text-gray-400 font-medium"},ae=e("br",null,null,-1),re={class:"flex items-center flex-col display-none"},de=["disabled"],ce={key:2},ue={class:"flex items-center justify-between mx-12"},_e={class:"flex items-center"},me=["src","alt"],pe={class:"text-gray-600 text-sm"},he={class:"flex items-center flex-col"},be={class:"flex flex-col m-4 gap-4"},fe={class:"flex justify-start gap-4 items-center"},ve={class:"rounded-full bg-blue-100 p-3"},xe=["src"],ge={class:"text-blue-600 font-bold"},ye={class:"flex justify-start gap-4 items-center"},we={class:"rounded-full bg-blue-100 p-3"},ke=["src"],Ce={class:"text-blue-600 font-bold"},je={layout:D},qe=Object.assign(je,{__name:"Create",props:{overall_condition_types:Array,last_user_condition:Object},emits:["overallConditionUpdated"],setup(h,{emit:T}){const l=h,U=L(),A=q(()=>U.props.value.user);let r;r=g({editForm:!1,hadARespondThisWeek:!1});const d=g({name:"none"}),u=F({overall_condition_choice:null}),c=F({overall_condition_choice:null});l.last_user_condition&&(d.name=f(l.overall_condition_types,l.last_user_condition.overall_condition_type_id),c.overall_condition_choice=l.last_user_condition.overall_condition_type_id,r.hadARespondThisWeek=N(l.last_user_condition.updated_at));function v(){r.editForm=!r.editForm}const V=()=>{r.hadARespondThisWeek=!0,d.name=f(l.overall_condition_types,u.overall_condition_choice),u.post("/overall-condition/store")},W=()=>{v(),T("overallConditionUpdated",!0),d.name=f(l.overall_condition_types,c.overall_condition_choice),c.put(`/overall-condition/update/${l.last_user_condition.id}`)};return(x,_)=>{const a=B("t");return o(),i("main",O,[e("div",E,[n(e("h1",H,null,512),[[a,"appCreate.welcome"]]),n(e("span",null,null,512),[[a,"appCreate.hello"]]),I(),e("span",null,m(s(A).first_name),1)]),e("div",null,[n(e("h2",M,null,512),[[a,"appCreate.how_are_you"]]),s(r).hadARespondThisWeek?s(r).editForm?(o(),i("div",ee,[e("form",{onSubmit:y(W,["prevent"]),id:"overallConditionUpdateForm"},[e("div",se,[(o(!0),i(w,null,k(h.overall_condition_types,t=>(o(),i("div",null,[n((o(),i("input",{type:"radio",id:t.id,value:t.id,"onUpdate:modelValue":_[1]||(_[1]=b=>s(c).overall_condition_choice=b),key:t.id,class:"hidden peer cursor-pointer"},null,8,oe)),[[j,s(c).overall_condition_choice]]),e("label",{for:t.id,class:"overallCondition_btn flex items-center flex-col justify-between w-20 text-center rounded-md px-4 py-2 bg-white cursor-pointer border border-white drop-shadow-sm peer-checked:border-blue-600 peer-checked:bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"},[(o(),i("img",{src:"/image/overall_condition_type/"+t.image,alt:t.name+" emoji",class:"w-10 pb-3",key:t.id},null,8,ne)),e("div",le,m(t.name),1)],8,ie),ae]))),256))]),e("div",re,[e("button",{type:"submit",id:"update_condition",class:"btn-primary-rounded",disabled:!s(c).overall_condition_choice},[n(e("span",null,null,512),[[a,"appCreate.update"]])],8,de)])],40,te)])):(o(),i("div",ce,[e("div",ue,[e("div",_e,[e("img",{src:"/image/overall_condition_type/"+d.name.toLowerCase()+".png",alt:d.name+" emoji",class:"h-12 w-12"},null,8,me),e("div",pe,m(d.name),1)]),e("div",he,[e("button",{type:"submit",class:"btn-primary-rounded",onClick:v},[n(e("span",null,null,512),[[a,"appCreate.edit"]])])])])])):(o(),i("div",P,[e("form",{onSubmit:y(V,["prevent"]),id:"overallConditionCreateForm"},[e("div",z,[(o(!0),i(w,null,k(h.overall_condition_types,t=>(o(),i("div",null,[n((o(),i("input",{type:"radio",id:t.id,value:t.id,"onUpdate:modelValue":_[0]||(_[0]=b=>s(u).overall_condition_choice=b),key:t.id,class:"hidden peer cursor-pointer"},null,8,G)),[[j,s(u).overall_condition_choice]]),e("label",{for:t.id,class:"overallCondition_btn flex items-center flex-col justify-between w-20 text-center rounded-md px-4 py-2 bg-white cursor-pointer border border-white drop-shadow-sm peer-checked:border-blue-600 peer-checked:bg-blue-200 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"},[(o(),i("img",{src:"/image/overall_condition_type/"+t.image,alt:t.name+" emoji",class:"w-10 pb-3",key:t.id},null,8,K)),e("div",Q,m(t.name),1)],8,J),X]))),256))]),e("div",Y,[e("button",{type:"submit",class:"btn-primary-rounded",disabled:!s(u).overall_condition_choice},[n(e("span",null,null,512),[[a,"appCreate.submit"]])],8,Z)])],40,$)]))]),e("div",be,[p(s(S),{href:x.route("survey.create"),class:"flex justify-between px-4 py-2 bg-white items-center rounded-2xl drop-shadow-md"},{default:C(()=>[e("div",fe,[e("div",ve,[e("img",{src:"/image/icon/formulaire.png",alt:"Icone de formulaire",class:"aspect-square w-10 object-contain object-center"},null,8,xe)]),e("div",ge,[n(e("span",null,null,512),[[a,"appCreate.questionnaire"]])])]),p(s(R),{class:"h-6 w-6 text-gray-700"})]),_:1},8,["href"]),p(s(S),{href:x.route("bodyParts"),class:"flex justify-between px-4 py-2 bg-white items-center rounded-2xl drop-shadow-md"},{default:C(()=>[e("div",ye,[e("div",we,[e("img",{src:"/image/icon/blessures.png",alt:"Icone de formulaire",class:"aspect-square w-10 object-contain object-center"},null,8,ke)]),e("div",Ce,[n(e("span",null,null,512),[[a,"appCreate.injury"]])])]),p(s(R),{class:"h-6 w-6 text-gray-700"})]),_:1},8,["href"])])])}}});export{qe as default};