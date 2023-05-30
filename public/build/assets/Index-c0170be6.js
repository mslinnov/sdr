import{h as m}from"./moment-fbc5633a.js";import{B as f}from"./Box-f8a49fcc.js";import{A as u}from"./index-1c0b0f77.js";import{M as g}from"./entry.4eb2397b-32f68e3d.js";import{l as k,aB as h,at as w,p as x,y as o,bk as n,q as e,b0 as t,aU as l,F as y,x as Y}from"./runtime-dom.esm-bundler-b0fe8529.js";import{L as D}from"./app-7c1f5f17.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css            */(function(){try{if(typeof document<"u"){var d=document.createElement("style");d.appendChild(document.createTextNode('.vtd-datepicker-overlay.open:before{display:block;opacity:.5}.vtd-datepicker:before{--vtd-datepicker: 0px;content:"";position:absolute;top:0px;height:1rem;width:1rem;border-width:1px;border-color:#0000001a;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.dark .vtd-datepicker:before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker:before{transform:translate(50%,-50%) rotate(-45deg);-webkit-clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)));clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)))}.vtd-datepicker.place-left:before{left:.25rem}.vtd-datepicker.place-right:before{right:1.25rem}')),document.head.appendChild(d)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();const M={class:"grid grid-cols-4 gap-4"},W={class:"flex gap-4"},A={class:"text-2xl font-medium"},O={class:"text-sm"},V={class:"flex gap-4"},B={class:"text-2xl font-medium"},C={class:"text-sm"},E={class:"flex gap-4 w-full"},$={class:"w-full"},N=e("h2",{class:"text-2xl font-medium col-span-5"},"Dates personnalisées",-1),S={class:"flex w-full gap-4"},j=["disabled"],T={__name:"ExportDataDashboard",setup(d){const a=k(()=>m().locale("fr").startOf("isoWeek")),s=k(()=>m().locale("fr").subtract(1,"weeks").startOf("isoWeek")),c=h([]),_=h({date:"DD MMM YYYY",month:"MMM"});function b(){p(c.value[0],c.value[1])}function p(v,r){const i=route("export",{startDate:v,endDate:r});window.open(i,"_blank")}return(v,r)=>(w(),x("section",M,[o(f,{class:"col-span-2 hover:cursor-pointer",onClick:r[0]||(r[0]=i=>p(t(s).startOf("isoWeek").format("YYYY-MM-DD"),t(s).endOf("isoWeek").format("YYYY-MM-DD")))},{default:n(()=>[e("div",W,[o(t(u),{class:"w-12"}),e("div",null,[e("h2",A,"Semaine "+l(t(s).week()),1),e("p",O,"du "+l(t(s).day(1).format("DD MM YYYY"))+" au "+l(t(s).day(7).format("DD MM YYYY")),1)])])]),_:1}),o(f,{class:"col-span-2 hover:cursor-pointer",onClick:r[1]||(r[1]=i=>p(t(a).startOf("isoWeek").format("YYYY-MM-DD"),t(a).endOf("isoWeek").format("YYYY-MM-DD")))},{default:n(()=>[e("div",V,[o(t(u),{class:"w-12"}),e("div",null,[e("h2",B,"Semaine "+l(t(a).week()),1),e("p",C,"du "+l(t(a).day(1).format("DD MM YYYY"))+" au "+l(t(a).day(7).format("DD MM YYYY")),1)])])]),_:1}),o(f,{class:"col-span-4"},{default:n(()=>[e("div",E,[o(t(u),{class:"w-12"}),e("div",$,[N,e("div",S,[o(t(g),{"as-single":"","use-range":"",formatter:_.value,shortcuts:!1,modelValue:c.value,"onUpdate:modelValue":r[2]||(r[2]=i=>c.value=i)},null,8,["formatter","modelValue"]),e("button",{class:"btn-outline-small disabled:opacity-25 disabled:cursor-not-allowed",disabled:c.value.length<2,onClick:b},"Télécharger",8,j)])])])]),_:1})]))}},q=e("div",{class:"gap-x-24 items-center px-4 py-2 border-gray-200 flex justify-between"},[e("h1",{class:"text-2xl font-semibold leading-relaxed text-gray-800"}," Export des données ")],-1),F={class:"mt-4"},J={__name:"Index",props:{overall_condition:Array,overall_condition_types:Array,players:Array,weeks:Array},setup(d){return(a,s)=>(w(),x(y,null,[q,e("div",null,[o(T,{weeks:d.weeks},null,8,["weeks"])]),e("div",F,[o(t(D),{class:"btn-primary-rounded",href:a.route("notifyAllPlayers")},{default:n(()=>[Y("Envoyer notification")]),_:1},8,["href"])])],64))}};export{J as default};