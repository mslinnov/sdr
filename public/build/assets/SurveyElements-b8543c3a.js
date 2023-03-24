import{at as s,p as r,y as g,b0 as u,q as t,aF as y,az as v,o as h,F as b,aE as S,bp as q,bk as x,aU as $,bm as C,b9 as T,ad as j,bb as z}from"./runtime-dom.esm-bundler-b0fe8529.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{a as U}from"./app-b05e8386.js";import{C as B}from"./index-337c1a46.js";const M={class:"rounded-md shadow-sm text-gray-800 font-medium bg-white p-12 mx-auto mt-6 flex items-center dark:bg-slate-700 dark:text-gray-300"},A=t("p",null,"Nous avons bien reçus ta réponse. Pense à bien remplir tous les formulaires.",-1),E={__name:"SurveyCompleted",setup(d){return(c,l)=>(s(),r("div",M,[g(u(B),{class:"w-24 text-white bg-green-600 rounded-full mr-4"}),A]))}},O={},R={class:"rounded-md px-2 pb-2 shadow-md dark:text-gray-300 bg-white dark:bg-slate-700 flex flex-col items-center gap-4 md:w-96"},W={class:"-mt-4"},D={class:"flex-1"};function I(d,c){return s(),r("div",R,[t("div",W,[y(d.$slots,"image")]),t("div",D,[y(d.$slots,"title"),y(d.$slots,"default")])])}const P=N(O,[["render",I]]),L={key:0,class:"fixed top-10 mt-2 mr-2 z-20"},G=t("div",{class:"bg-red-500 text-white py-2 px-4 rounded-lg"}," Veuillez sélectionner une réponse pour toutes les questions avant de valider le formulaire. ",-1),H=[G],J={key:1},K=["id"],Q=["src"],X={class:"dark:text-white text-gray-500 font-medium text-sm text-center"},Y={key:0,class:"flex flex-row justify-center pt-3"},Z=["id","value","onUpdate:modelValue"],ee=["for"],te={class:"text-xs text-gray-400 font-medium text-white"},se=t("br",null,null,-1),re={key:1},oe=["id","onUpdate:modelValue"],ie=t("button",{type:"submit",class:"btn-primary-rounded mt-4 m-auto w-1/2"}," Submit ",-1),de={key:2},le={__name:"SurveyElements",props:{survey:Object},emits:["surveyCompleted"],setup(d,{emit:c}){const l=d,m={};function k(){for(const a in l.survey.survey_elements){const o=l.survey.survey_elements[a];let e="responseSurveyElement_"+o.id;o.formid=e,m[e]=null}m.surveyId=l.survey.id}k();const _=v({error:!1}),n=v(U(m)),V=()=>{const a=l.survey.survey_elements;for(let o=0;o<a.length;o++){const e=a[o];if(e.element_type_id===1){const f=document.querySelector(`#survey_element_${e.id}`).querySelectorAll('input[type="radio"]');if(!Array.from(f).some(F=>F.checked))return!1}}return!0};let w=v({ThisWeek:!1}),p;return p=()=>{V()?(w.ThisWeek=!0,c("surveyCompleted",l.survey.id),n.post(route("survey.store"))):(_.error=!0,setTimeout(()=>{_.error=!1},3e3))},(a,o)=>(s(),r(b,null,[_.error?(s(),r("div",L,H)):h("",!0),u(w).ThisWeek?(s(),r("div",de,[g(E)])):(s(),r("div",J,[t("form",{onSubmit:o[0]||(o[0]=q((...e)=>u(p)&&u(p)(...e),["prevent"])),class:"flex flex-col items-center"},[(s(!0),r(b,null,S(d.survey.survey_elements,e=>(s(),r("div",{class:"w-full",id:"survey_element_"+e.id,ref_for:!0,ref:"surveyElement"+e.id},[g(P,{class:"mt-8"},{image:x(()=>[t("img",{src:"/image/icon/"+e.survey_input.image,class:"img-survey-create"},null,8,Q)]),title:x(()=>[t("div",X,$(e.survey_input.title),1)]),default:x(()=>[e.element_type_id===1?(s(),r("div",Y,[(s(),r(b,null,S(10,i=>t("div",null,[C((s(),r("input",{type:"radio",required:!0,id:"id_"+e.id+"_"+i,value:i,key:i,"onUpdate:modelValue":f=>n[e.formid]=f,class:"hidden peer cursor-pointer"},null,8,Z)),[[T,n[e.formid]]]),t("label",{for:"id_"+e.id+"_"+i,class:j(["flex items-center flex-col justify-between w-7 text-center rounded-full p-1 cursor-pointer border-2 drop-shadow-sm dark:hover:text-gray-300 border-white dark:border-slate-700 hover:text-gray-600 dark:text-gray-400 hover:bg-blue-500 peer-checked:border-blue-500 peer-checked:border-2 peer-checked:bg-blue-600","survey-scale-selector-"+i]),onClick:k},[t("div",te,$(i),1)],10,ee),se])),64))])):h("",!0),e.element_type_id===2?(s(),r("div",re,[C(t("input",{type:"text",id:"id_"+e.id,"onUpdate:modelValue":i=>n[e.formid]=i,class:"form-input mt-4",required:""},null,8,oe),[[z,n[e.formid]]])])):h("",!0)]),_:2},1024)],8,K))),256)),ie],32)]))],64))}},_e=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{_e as S,le as _,E as a};
