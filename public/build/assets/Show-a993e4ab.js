import{u as q,L as w}from"./app-2ce2a41c.js";import{at as o,p as c,b0 as g,aU as p,o as x,q as e,y as b,bk as l,x as y,aF as i,ad as f,F as h,aE as $,af as T,n as j,v as R}from"./runtime-dom.esm-bundler-b0fe8529.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css            */const S={key:0,class:"success_message"},C={class:"w-full bg-white dark:bg-slate-800 z-20 fixed top-O border-b border-slate-100 dark:border-slate-700"},A={class:"p-2 h-10 flex justify-between text-xs md:text-sm items-center border-b border-slate-100 dark:border-slate-700"},B=e("div",null,null,-1),O=e("div",null,null,-1),L={class:"h-12 max-w-screen-xl px-8 m-auto flex gap-4 pt-4 pb-[1.3rem] items-center"},N={class:"flex flex-wrap -mb-px"},V={class:"mr-2"},z={class:"mr-2"},E={class:"max-w-screen-xl px-8 mx-auto pt-32 bg-gray-100"},F={name:"slate-tabs",data(){return{openTab:1}},methods:{toggleTabs:function(t){this.openTab=t}}},D=Object.assign(F,{setup(t){const n=q();return(s,a)=>(o(),c(h,null,[g(n).props.value.flash.success?(o(),c("div",S,p(g(n).props.value.flash.success),1)):x("",!0),e("nav",C,[e("div",A,[b(g(w),{href:s.route("survey.index")},{default:l(()=>[y("Dashbord / "),i(s.$slots,"header")]),_:3},8,["href"]),B,O]),e("div",L,[e("ul",N,[e("li",V,[e("a",{onClick:a[0]||(a[0]=u=>s.toggleTabs(1)),class:f({"inactive-tab":s.openTab!==1,"active-tab":s.openTab===1})},"Summary",2)]),e("li",z,[e("a",{onClick:a[1]||(a[1]=u=>s.toggleTabs(2)),class:f({"inactive-tab":s.openTab!==2,"active-tab":s.openTab===2})},"Table",2)])])])]),e("main",E,[e("div",{class:f({hidden:s.openTab!==1,block:s.openTab===1})},[i(s.$slots,"tab1")],2),e("div",{class:f({hidden:s.openTab!==2,block:s.openTab===2})},[i(s.$slots,"tab2")],2)])],64))}}),I={},K={class:"rounded-md pl-2 pr-6 pt-6 pb-8 shadow-md dark:text-gray-300 bg-white dark:bg-slate-700 flex gap-4"},P={class:"place-items-end ml-6"},U={class:"flex-1"},G={class:"flex justify-between pb-4 gap-2"},H={class:"text-black dark:text-gray-100 font-medium text-md"};function J(t,n){return o(),c("div",K,[e("div",P,[e("div",null,[i(t.$slots,"icon_number")])]),e("div",U,[e("div",G,[e("div",H,[i(t.$slots,"header")]),i(t.$slots,"average")]),i(t.$slots,"default")])])}const M=k(I,[["render",J]]),Q={class:"flex items-center flex-row"},W={class:"w-12 flex items-center flex-col"},X={class:"text-gray-600 dark:text-gray-100 text-sm pb-2"},Y={class:"h-32 flex flex-col flex-nowrap justify-end w-8 bg-gray-200 dark:bg-gray-300 rounded-sm overflow-hidden"},Z={class:"text-gray-600 dark:text-gray-100 text-sm pt-2"},ee={__name:"OpinionScale",props:{responseElements:Array,current_survey_element:Object},setup(t){const n=t;var s=0,a=[];for(let[d,v]of n.responseElements)parseInt(d)===n.current_survey_element&&(s=s+1,a.push(v));for(let d of a)console.log("rep"),console.log(d);console.log("Current Responses"),console.log(a),console.log(s);const u=[{name:0,quantity:0,quantity_string:"0%"},{name:1,quantity:0,quantity_string:"0%"},{name:2,quantity:0,quantity_string:"0%"},{name:3,quantity:0,quantity_string:"0%"},{name:4,quantity:0,quantity_string:"0%"},{name:5,quantity:0,quantity_string:"0%"},{name:6,quantity:5,quantity_string:"5%"},{name:7,quantity:10,quantity_string:"10%"},{name:8,quantity:46,quantity_string:"46%"},{name:9,quantity:27,quantity_string:"27%"},{name:10,quantity:12,quantity_string:"12%"}];return(d,v)=>(o(),c("div",null,[e("div",Q,[(o(),c(h,null,$(u,r=>e("div",W,[e("div",X,p(r.quantity)+" % ",1),e("div",Y,[e("div",{class:"bg-sky-800 dark:bg-sky-700 overflow-hidden",role:"progressbar",style:T([{height:r.quantity_string},{width:"100%"}]),"aria-valuenow":"{{answer.quantity}}","aria-valuemin":"0","aria-valuemax":"100"},null,4)]),e("div",Z,p(r.name),1)])),64))])]))}},se={};function te(t,n){return i(t.$slots,"default")}const ne=k(se,[["render",te]]),ae={class:"flex flex-col-reverse lg:grid lg:grid-cols-12 my-4 gap-12"},oe={class:"lg:col-span-8"},re={class:"flex flex-col gap-4"},le=e("div",{class:"mb-2 text-xl"},"Response summary",-1),ie=e("div",{class:"avg-pil"}," Avg. 8.5 ",-1),ce={class:"flex gap-2 items-center justify-end"},de={class:"flex rounded-md px-2 py-1.5 bg-sky-200 justify-between gap-3"},ue=["src"],_e={key:0},pe=e("div",{class:"lg:col-span-4 bg-green-600"},[e("div",null,"Exporter les données")],-1),me={layout:ne},he=Object.assign(me,{__name:"Show",props:{survey:Array,surveyResponses:Array},setup(t){const n=t,s=n.survey[0],a=s.survey_elements,u=[];for(var d in n.surveyResponses)for(var v in n.surveyResponses[d].reponse_elements){const m=n.surveyResponses[d].reponse_elements[v];var r=null;m.survey_element.element_type_id===1?r=parseInt(m.value):r=m.value,u.push([m.survey_element_id,r])}return(m,ye)=>(o(),j(D,null,{header:l(()=>[y(p(g(s).name),1)]),tab1:l(()=>[e("div",ae,[e("div",oe,[e("div",re,[le,(o(!0),c(h,null,$(g(a),_=>(o(),c("div",null,[b(M,null,R({icon_number:l(()=>[e("div",ce,[e("div",de,[e("img",{class:"icon-survey",src:"/image/icon/"+_.survey_input.image},null,8,ue),y(" "+p(_.order),1)])])]),header:l(()=>[y(p(_.survey_input.title),1)]),default:l(()=>[_.element_type_id===1?(o(),c("div",_e,[b(ee,{"response-elements":u,current_survey_element:_.id},null,8,["current_survey_element"])])):x("",!0)]),_:2},[_.element_type_id===1?{name:"average",fn:l(()=>[ie]),key:"0"}:void 0]),1024)]))),256))])]),pe])]),tab2:l(()=>[y(" Tab 2 ")]),_:1}))}});export{he as default};
