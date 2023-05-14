import{u as w,L as k}from"./app-61827959.js";import{at as a,p as c,b0 as v,aU as _,o as x,q as e,y as h,bk as i,x as y,aF as l,ad as f,F as b,aE as $,af as T,n as j,v as S}from"./runtime-dom.esm-bundler-b0fe8529.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css            */const R={key:0,class:"success_message"},B={class:"w-full bg-white z-20 fixed top-O border-b border-slate-100"},C={class:"p-2 h-10 flex justify-between text-xs md:text-sm items-center border-b border-slate-100"},O=e("div",null,null,-1),A=e("div",null,null,-1),L={class:"h-12 max-w-screen-xl px-8 m-auto flex gap-4 pt-4 pb-[1.3rem] items-center"},N={class:"flex flex-wrap -mb-px"},V={class:"mr-2"},z={class:"mr-2"},E={class:"max-w-screen-xl px-8 mx-auto pt-32 bg-gray-100"},F={name:"slate-tabs",data(){return{openTab:1}},methods:{toggleTabs:function(t){this.openTab=t}}},D=Object.assign(F,{setup(t){const n=w();return(s,o)=>(a(),c(b,null,[v(n).props.value.flash.success?(a(),c("div",R,_(v(n).props.value.flash.success),1)):x("",!0),e("nav",B,[e("div",C,[h(v(k),{href:s.route("survey.index")},{default:i(()=>[y("Dashbord / "),l(s.$slots,"header")]),_:3},8,["href"]),O,A]),e("div",L,[e("ul",N,[e("li",V,[e("a",{onClick:o[0]||(o[0]=r=>s.toggleTabs(1)),class:f({"inactive-tab":s.openTab!==1,"active-tab":s.openTab===1})},"Summary",2)]),e("li",z,[e("a",{onClick:o[1]||(o[1]=r=>s.toggleTabs(2)),class:f({"inactive-tab":s.openTab!==2,"active-tab":s.openTab===2})},"Table",2)])])])]),e("main",E,[e("div",{class:f({hidden:s.openTab!==1,block:s.openTab===1})},[l(s.$slots,"tab1")],2),e("div",{class:f({hidden:s.openTab!==2,block:s.openTab===2})},[l(s.$slots,"tab2")],2)])],64))}}),I={},K={class:"rounded-md pl-2 pr-6 pt-6 pb-8 shadow-md bg-white flex gap-4"},P={class:"place-items-end ml-6"},U={class:"flex-1"},G={class:"flex justify-between pb-4 gap-2"},H={class:"text-black font-medium text-md"};function J(t,n){return a(),c("div",K,[e("div",P,[e("div",null,[l(t.$slots,"icon_number")])]),e("div",U,[e("div",G,[e("div",H,[l(t.$slots,"header")]),l(t.$slots,"average")]),l(t.$slots,"default")])])}const M=q(I,[["render",J]]),Q={class:"flex items-center flex-row"},W={class:"w-12 flex items-center flex-col"},X={class:"text-gray-600 text-sm pb-2"},Y={class:"h-32 flex flex-col flex-nowrap justify-end w-8 bg-gray-200rounded-sm overflow-hidden"},Z={class:"text-gray-600 text-sm pt-2"},ee={__name:"OpinionScale",props:{responseElements:Array,current_survey_element:Object},setup(t){const n=t;var s=[];for(let[r,p]of n.responseElements)parseInt(r)===n.current_survey_element&&s.push(p);for(let r of s);const o=[{name:0,quantity:0,quantity_string:"0%"},{name:1,quantity:0,quantity_string:"0%"},{name:2,quantity:0,quantity_string:"0%"},{name:3,quantity:0,quantity_string:"0%"},{name:4,quantity:0,quantity_string:"0%"},{name:5,quantity:0,quantity_string:"0%"},{name:6,quantity:5,quantity_string:"5%"},{name:7,quantity:10,quantity_string:"10%"},{name:8,quantity:46,quantity_string:"46%"},{name:9,quantity:27,quantity_string:"27%"},{name:10,quantity:12,quantity_string:"12%"}];return(r,p)=>(a(),c("div",null,[e("div",Q,[(a(),c(b,null,$(o,d=>e("div",W,[e("div",X,_(d.quantity)+" % ",1),e("div",Y,[e("div",{class:"bg-sky-800 overflow-hidden",role:"progressbar",style:T([{height:d.quantity_string},{width:"100%"}]),"aria-valuenow":"{{answer.quantity}}","aria-valuemin":"0","aria-valuemax":"100"},null,4)]),e("div",Z,_(d.name),1)])),64))])]))}},se={};function te(t,n){return l(t.$slots,"default")}const ne=q(se,[["render",te]]),ae={class:"flex flex-col-reverse lg:grid lg:grid-cols-12 my-4 gap-12"},oe={class:"lg:col-span-8"},re={class:"flex flex-col gap-4"},ie=e("div",{class:"mb-2 text-xl"},"Response summary",-1),le=e("div",{class:"avg-pil"}," Avg. 8.5 ",-1),ce={class:"flex gap-2 items-center justify-end"},de={class:"flex rounded-md px-2 py-1.5 bg-sky-200 justify-between gap-3"},ue=["src"],_e={key:0},pe=e("div",{class:"lg:col-span-4 bg-green-600"},[e("div",null,"Exporter les données")],-1),me={layout:ne},be=Object.assign(me,{__name:"Show",props:{survey:Array,surveyResponses:Array},setup(t){const n=t,s=n.survey[0],o=s.survey_elements,r=[];for(var p in n.surveyResponses)for(var d in n.surveyResponses[p].reponse_elements){const m=n.surveyResponses[p].reponse_elements[d];var g=null;m.survey_element.element_type_id===1?g=parseInt(m.value):g=m.value,r.push([m.survey_element_id,g])}return(m,ye)=>(a(),j(D,null,{header:i(()=>[y(_(v(s).name),1)]),tab1:i(()=>[e("div",ae,[e("div",oe,[e("div",re,[ie,(a(!0),c(b,null,$(v(o),u=>(a(),c("div",null,[h(M,null,S({icon_number:i(()=>[e("div",ce,[e("div",de,[e("img",{class:"icon-survey",src:"/image/icon/"+u.survey_input.image},null,8,ue),y(" "+_(u.order),1)])])]),header:i(()=>[y(_(u.survey_input.title),1)]),default:i(()=>[u.element_type_id===1?(a(),c("div",_e,[h(ee,{"response-elements":r,current_survey_element:u.id},null,8,["current_survey_element"])])):x("",!0)]),_:2},[u.element_type_id===1?{name:"average",fn:i(()=>[le]),key:"0"}:void 0]),1024)]))),256))])]),pe])]),tab2:i(()=>[y(" Tab 2 ")]),_:1}))}});export{be as default};
