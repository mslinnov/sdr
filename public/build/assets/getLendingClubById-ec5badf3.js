const u=(l,o)=>{const n=l.filter(function(e){return e.id==o}).slice(-1);if(n[0]){const e=n[0].name,t=n[0].logo;return{name:e,logo:t}}else return{name:null,logo:null}};export{u as g};
