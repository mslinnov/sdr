import{h as m}from"./moment-fbc5633a.js";import{B as v}from"./Box-16f52667.js";import{A as u}from"./index-d0b9d88b.js";import{M as b}from"./entry.4eb2397b-cd06ca06.js";import{aB as h,at as w,p as x,y as o,bk as i,q as e,b0 as t,aU as d,F as y,x as g}from"./runtime-dom.esm-bundler-b0fe8529.js";import{L as Y}from"./app-2ce2a41c.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css            */(function(){try{if(typeof document<"u"){var l=document.createElement("style");l.appendChild(document.createTextNode('.vtd-datepicker-overlay.open:before{display:block;opacity:.5}.vtd-datepicker:before{--vtd-datepicker: 0px;content:"";position:absolute;top:0px;height:1rem;width:1rem;border-width:1px;border-color:#0000001a;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.dark .vtd-datepicker:before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker:before{transform:translate(50%,-50%) rotate(-45deg);-webkit-clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)));clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)))}.vtd-datepicker.place-left:before{left:.25rem}.vtd-datepicker.place-right:before{right:1.25rem}')),document.head.appendChild(l)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();const D={class:"grid grid-cols-4 gap-4"},M={class:"flex gap-4"},A={class:"text-2xl font-medium"},V={class:"text-sm"},B={class:"flex gap-4"},C={class:"text-2xl font-medium"},E={class:"text-sm"},$={class:"flex gap-4 w-full"},N={class:"w-full"},S=e("h2",{class:"text-2xl font-medium col-span-5"},"Dates personnalisées",-1),j={class:"flex w-full gap-4"},T=["disabled"],q={__name:"ExportDataDashboard",setup(l){const a=m(),s=m().add(-1,"weeks"),c=h([]),k=h({date:"DD MMM YYYY",month:"MMM"});function _(){p(c.value[0],c.value[1])}function p(f,r){const n=route("export",{startDate:f,endDate:r});window.open(n,"_blank")}return(f,r)=>(w(),x("section",D,[o(v,{class:"col-span-2 hover:cursor-pointer",onClick:r[0]||(r[0]=n=>p(t(s).day(1).format("YYYY-MM-DD"),t(s).day(7).format("YYYY-MM-DD")))},{default:i(()=>[e("div",M,[o(t(u),{class:"w-12"}),e("div",null,[e("h2",A,"Semaine "+d(t(s).week()),1),e("p",V,"du "+d(t(s).day(1).format("DD MM YYYY"))+" au "+d(t(s).day(7).format("DD MM YYYY")),1)])])]),_:1}),o(v,{class:"col-span-2 hover:cursor-pointer",onClick:r[1]||(r[1]=n=>p(t(a).day(1).format("YYYY-MM-DD"),t(a).day(7).format("YYYY-MM-DD")))},{default:i(()=>[e("div",B,[o(t(u),{class:"w-12"}),e("div",null,[e("h2",C,"Semaine "+d(t(a).week()),1),e("p",E,"du "+d(t(a).day(1).format("DD MM YYYY"))+" au "+d(t(a).day(7).format("DD MM YYYY")),1)])])]),_:1}),o(v,{class:"col-span-4"},{default:i(()=>[e("div",$,[o(t(u),{class:"w-12"}),e("div",N,[S,e("div",j,[o(t(b),{"as-single":"","use-range":"",formatter:k.value,shortcuts:!1,modelValue:c.value,"onUpdate:modelValue":r[2]||(r[2]=n=>c.value=n)},null,8,["formatter","modelValue"]),e("button",{class:"btn-outline-small disabled:opacity-25 disabled:cursor-not-allowed",disabled:c.value.length<2,onClick:_},"Télécharger",8,T)])])])]),_:1})]))}},F=e("div",{class:"gap-x-24 items-center px-4 py-2 border-gray-200 dark:border-gray-700 flex justify-between"},[e("h1",{class:"text-2xl font-semibold leading-relaxed text-gray-800 dark:text-gray-200"}," Export des données ")],-1),I={class:"mt-4"},H={__name:"Index",props:{overall_condition:Array,overall_condition_types:Array,players:Array,weeks:Array},setup(l){return(a,s)=>(w(),x(y,null,[F,e("div",null,[o(q,{weeks:l.weeks},null,8,["weeks"])]),e("div",I,[o(t(Y),{class:"btn-primary-rounded",href:a.route("notifyAllPlayers")},{default:i(()=>[g("Envoyer notification")]),_:1},8,["href"])])],64))}};export{H as default};
