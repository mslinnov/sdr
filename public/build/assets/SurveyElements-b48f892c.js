import{b0 as _,at as s,p as r,y as h,F as y,aE as S,q as t,aU as m,aF as g,az as w,o as v,bp as F,bk as k,bm as C,b9 as R,ad as T,bb as z}from"./runtime-dom.esm-bundler-b0fe8529.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{a as N}from"./app-61827959.js";import{C as V}from"./index-b7967a84.js";const Q={key:0,class:"rounded-md shadow-sm text-gray-800 font-medium bg-white p-12 mx-auto mt-6 flex items-center"},U=t("p",null,"Nous avons bien reçus ta réponse. Pense à bien remplir tous les formulaires.",-1),B={key:1,class:"relative rounded-md shadow-sm text-gray-800 font-medium bg-white p-12 mx-auto mt-6 flex flex-col gap-6 items-center"},M={class:"flex flex-col gap-2 w-full text-center items-center"},L=["src"],O={class:"text-sm"},W={class:"font-bold"},D=t("div",{class:"w-10/12 border-b border-gray-700"},null,-1),I={__name:"SurveyCompleted",props:{surveyQuestions:Array,surveyResponses:Array},setup(u){const i=u;let l=[];if(i.surveyResponses){for(let a of i.surveyResponses)if(a.survey_id===i.surveyQuestions.id){for(let c in i.surveyQuestions.survey_elements){const n={emoji:i.surveyQuestions.survey_elements[c].survey_input.image,question:i.surveyQuestions.survey_elements[c].survey_input.title,response:a.reponse_elements[c].value};l.push(n)}break}}return(a,c)=>_(l).length===0?(s(),r("div",Q,[h(_(V),{class:"w-24 text-white bg-green-600 rounded-full mr-4"}),U])):(s(),r("div",B,[h(_(V),{class:"w-12 text-white bg-green-600 rounded-full mr-4 absolute -top-4 -left-4"}),(s(!0),r(y,null,S(_(l),n=>(s(),r("div",M,[t("img",{src:"/image/icon/"+n.emoji,class:"img-survey-create"},null,8,L),t("div",O,m(n.question),1),t("div",W,m(n.response),1),D]))),256))]))}},P={},G={class:"rounded-md px-2 pb-2 shadow-md bg-white flex flex-col items-center gap-4 md:w-96 mx-auto"},H={class:"-mt-4"},J={class:"flex-1 w-full"};function K(u,i){return s(),r("div",G,[t("div",H,[g(u.$slots,"image")]),t("div",J,[g(u.$slots,"title"),g(u.$slots,"default")])])}const X=A(P,[["render",K]]),Y={key:0,class:"fixed top-10 mt-2 mr-2 z-20"},Z=t("div",{class:"bg-red-500 text-white py-2 px-4 rounded-lg"}," Veuillez sélectionner une réponse pour toutes les questions avant de valider le formulaire. ",-1),E=[Z],ee={key:1},te=["id"],se=["src"],re={class:"text-gray-500 font-medium text-sm text-center"},oe={key:0,class:"flex flex-row justify-evenly pt-3"},ie=["id","value","onUpdate:modelValue"],le=["for"],ne={class:"text-xs text-gray-400 font-medium text-white"},de={key:1,class:"w-full flex justify-between pt-1"},ue={class:"surveyLegend"},ae={class:"surveyLegend"},ce={key:2},_e=["id","onUpdate:modelValue","placeholder"],me=t("button",{type:"submit",class:"btn-primary-rounded mt-4 m-auto w-1/2"}," Submit ",-1),pe={key:2},fe={__name:"SurveyElements",props:{survey:Object},emits:["surveyCompleted"],setup(u,{emit:i}){const l=u,a={};function c(){for(const f in l.survey.survey_elements){const o=l.survey.survey_elements[f];let e="responseSurveyElement_"+o.id;o.formid=e,o.element_type_id===2&&o.survey_input.placeholder?a[e]=o.survey_input.placeholder:a[e]=null}a.surveyId=l.survey.id}c();const n=w({error:!1}),p=w(N(a)),j=()=>{const f=l.survey.survey_elements;for(let o=0;o<f.length;o++){const e=f[o];if(e.element_type_id===1){const x=document.querySelector(`#survey_element_${e.id}`).querySelectorAll('input[type="radio"]');if(!Array.from(x).some(q=>q.checked))return!1}}return!0};let $=w({ThisWeek:!1}),b;return b=()=>{j()?($.ThisWeek=!0,i("surveyCompleted",l.survey.id),p.post(route("survey.store"))):(n.error=!0,setTimeout(()=>{n.error=!1},3e3))},(f,o)=>(s(),r(y,null,[n.error?(s(),r("div",Y,E)):v("",!0),_($).ThisWeek?(s(),r("div",pe,[h(I)])):(s(),r("div",ee,[t("form",{onSubmit:o[0]||(o[0]=F((...e)=>_(b)&&_(b)(...e),["prevent"])),class:"flex flex-col items-center"},[(s(!0),r(y,null,S(u.survey.survey_elements,e=>(s(),r("div",{class:"w-full",id:"survey_element_"+e.id,ref_for:!0,ref:"surveyElement"+e.id},[h(X,{class:"mt-8"},{image:k(()=>[t("img",{src:"/image/icon/"+e.survey_input.image,class:"img-survey-create"},null,8,se)]),title:k(()=>[t("div",re,m(e.survey_input.title),1)]),default:k(()=>[e.element_type_id===1?(s(),r("div",oe,[(s(),r(y,null,S(10,d=>t("div",null,[C((s(),r("input",{type:"radio",required:!0,id:"id_"+e.id+"_"+d,value:d,key:d,"onUpdate:modelValue":x=>p[e.formid]=x,class:"hidden peer cursor-pointer"},null,8,ie)),[[R,p[e.formid]]]),t("label",{for:"id_"+e.id+"_"+d,class:T(["flex items-center flex-col justify-between w-7 text-center rounded-full p-1 cursor-pointer border-2 drop-shadow-sm border-white hover:text-gray-600 hover:bg-blue-500 peer-checked:border-blue-500 peer-checked:border-2 peer-checked:bg-blue-600","survey-scale-selector-"+d]),onClick:c},[t("div",ne,m(d),1)],10,le)])),64))])):v("",!0),e.element_type_id===1?(s(),r("div",de,[t("div",ue,m(e.survey_input.legend_1),1),t("div",ae,m(e.survey_input.legend_10),1)])):v("",!0),e.element_type_id===2?(s(),r("div",ce,[C(t("input",{type:"text",id:"id_"+e.id,"onUpdate:modelValue":d=>p[e.formid]=d,class:"form-input mt-4",placeholder:e.survey_input.placeholder,required:""},null,8,_e),[[z,p[e.formid]]])])):v("",!0)]),_:2},1024)],8,te))),256)),me],32)]))],64))}},ge=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));export{ge as S,fe as _,I as a};
