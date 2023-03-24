import{az as P,l as I,at as l,p as r,q as e,b0 as s,o as d,bm as n,bc as y,bp as C,y as a,bb as c,aU as m,bk as h,F as E,x as v}from"./runtime-dom.esm-bundler-b0fe8529.js";import{u as N,a as M,I as _,E as b,P as w,b as g,L as k}from"./app-b5e74820.js";import{_ as S}from"./AppLayout-0c65e94a.js";/* empty css            */import"./index-c06cd5d1.js";const j=e("div",{class:"w-full p-4"},[e("h2",{class:"text-center"},"Paramètre du compte")],-1),T={class:"flex flex-col gap-4 items-center px-10"},B=["src","alt"],D=["onSubmit"],F={class:"my-account-input-box"},L={class:"inline-flex gap-2 items-center"},A=e("label",{for:"firstname",class:"text-primary"},"Prénom",-1),$={key:0,class:"input-error"},q={class:"my-account-input-box"},z={class:"inline-flex gap-2 items-center"},O=e("label",{for:"lastname",class:"text-primary"},"Nom",-1),G={key:0,class:"input-error"},H={class:"my-account-input-box"},J={class:"inline-flex gap-2 items-center"},K=e("label",{for:"email",class:"text-primary"},"Email",-1),Q={key:0,class:"input-error"},R={class:"my-account-input-box"},W={class:"inline-flex gap-2 items-center"},X=e("label",{for:"phone",class:"text-primary"},"Téléphone",-1),Y={key:0,class:"input-error"},Z={class:"my-account-input-box"},ee={class:"inline-flex gap-2 items-center"},se=e("label",{for:"password",class:"text-primary"},"Mot de passe",-1),te={class:"my-account-input-box"},oe={class:"inline-flex gap-2 items-center"},ie=e("label",{for:"password_confirmation",class:"text-primary"},"Confirmation du mot de passe",-1),ne={key:0,class:"input-error"},ae=e("button",{class:"btn-primary-rounded w-2/3 md:w-2/3 text-center",type:"submit"}," Sauvegarder ",-1),le={class:"w-full flex flex-col items-center gap-4"},re={class:"my-account-input-box"},ce={class:"inline-flex gap-2 items-center"},de=e("label",{for:"firstname",class:"text-primary"},"Prénom",-1),pe={class:"my-account-input-box"},me={class:"inline-flex gap-2 items-center"},ue=e("label",{for:"lastname",class:"text-primary"},"Nom",-1),_e={key:0,class:"input-error"},fe={class:"my-account-input-box"},xe={class:"inline-flex gap-2 items-center"},ye=e("label",{for:"email",class:"text-primary"},"Email",-1),he={key:0,class:"input-error"},ve={class:"my-account-input-box"},be={class:"inline-flex gap-2 items-center"},we=e("label",{for:"phone",class:"text-primary"},"Téléphone",-1),ge={key:0,class:"input-error"},ke={class:"flex flex-col gap-4 items-center p-10"},Ve={layout:S},Me=Object.assign(Ve,{__name:"MyAccount",setup(Ue){const u=P({profil:!1}),f=N(),p=I(()=>f.props.value.user),t=M({first_name:p.value.first_name,last_name:p.value.last_name,email:p.value.email,phone:p.value.phone,password:p.value.password,password_confirmation:null}),V=()=>t.put(`/user/${f.props.value.user.id}`);function x(){u.profil=!u.profil,console.log(u.profil)}return(U,o)=>(l(),r(E,null,[j,e("div",T,[s(p).image[0]?(l(),r("img",{key:0,src:s(p).image[0].src,alt:"Photo de profil du joueur "+s(p).first_name,class:"h-40 w-40 rounded-full object-cover object-top"},null,8,B)):d("",!0),n(e("form",{class:"w-full flex flex-col items-center gap-4",onSubmit:C(V,["prevent"])},[e("div",F,[e("div",L,[a(s(_),{class:"icon-primary"}),A]),n(e("input",{id:"firstname",class:"edit-input","onUpdate:modelValue":o[0]||(o[0]=i=>s(t).first_name=i),type:"text"},null,512),[[c,s(t).first_name]]),s(t).errors.first_name?(l(),r("div",$,m(s(t).errors.first_name),1)):d("",!0)]),e("div",q,[e("div",z,[a(s(_),{class:"icon-primary"}),O]),n(e("input",{id:"lastname",class:"edit-input","onUpdate:modelValue":o[1]||(o[1]=i=>s(t).last_name=i),type:"text"},null,512),[[c,s(t).last_name]]),s(t).errors.last_name?(l(),r("div",G,m(s(t).errors.last_name),1)):d("",!0)]),e("div",H,[e("div",J,[a(s(b),{class:"icon-primary"}),K]),n(e("input",{id:"email",class:"edit-input","onUpdate:modelValue":o[2]||(o[2]=i=>s(t).email=i),type:"text"},null,512),[[c,s(t).email]]),s(t).errors.email?(l(),r("div",Q,m(s(t).errors.email),1)):d("",!0)]),e("div",R,[e("div",W,[a(s(w),{class:"icon-primary"}),X]),n(e("input",{id:"phone",class:"edit-input","onUpdate:modelValue":o[3]||(o[3]=i=>s(t).phone=i),type:"tel"},null,512),[[c,s(t).phone]]),s(t).errors.phone?(l(),r("div",Y,m(s(t).errors.phone),1)):d("",!0)]),e("div",Z,[e("div",ee,[a(s(g),{class:"icon-primary"}),se]),n(e("input",{id:"password",class:"edit-input","onUpdate:modelValue":o[4]||(o[4]=i=>s(t).password=i),type:"password",placeholder:"********"},null,512),[[c,s(t).password]])]),e("div",te,[e("div",oe,[a(s(g),{class:"icon-primary"}),ie]),n(e("input",{id:"password_confirmation",class:"edit-input","onUpdate:modelValue":o[5]||(o[5]=i=>s(t).password_confirmation=i),type:"password",placeholder:"********"},null,512),[[c,s(t).password_confirmation]])]),s(t).errors.password?(l(),r("div",ne,m(s(t).errors.password),1)):d("",!0),e("div",{class:"flex gap-4 items-center w-full md:w-1/2"},[ae,e("button",{class:"alert-primary-rounded w-2/3 md:w-2/3 text-center",type:"button",onClick:x}," Annuler ")])],40,D),[[y,u.profil]]),n(e("section",le,[e("div",re,[e("div",ce,[a(s(_),{class:"icon-primary"}),de]),n(e("input",{id:"firstname",class:"no-edit-input","onUpdate:modelValue":o[6]||(o[6]=i=>s(t).first_name=i),type:"text"},null,512),[[c,s(t).first_name]])]),e("div",pe,[e("div",me,[a(s(_),{class:"icon-primary"}),ue]),n(e("input",{id:"lastname",class:"no-edit-input","onUpdate:modelValue":o[7]||(o[7]=i=>s(t).last_name=i),type:"text"},null,512),[[c,s(t).last_name]]),s(t).errors.last_name?(l(),r("div",_e,m(s(t).errors.last_name),1)):d("",!0)]),e("div",fe,[e("div",xe,[a(s(b),{class:"icon-primary"}),ye]),n(e("input",{id:"email",class:"no-edit-input","onUpdate:modelValue":o[8]||(o[8]=i=>s(t).email=i),type:"text"},null,512),[[c,s(t).email]]),s(t).errors.email?(l(),r("div",he,m(s(t).errors.email),1)):d("",!0)]),e("div",ve,[e("div",be,[a(s(w),{class:"icon-primary"}),we]),n(e("input",{id:"phone",class:"no-edit-input","onUpdate:modelValue":o[9]||(o[9]=i=>s(t).phone=i),type:"tel"},null,512),[[c,s(t).phone]]),s(t).errors.phone?(l(),r("div",ge,m(s(t).errors.phone),1)):d("",!0)]),e("div",{class:"flex flex-col items-center w-full md:w-1/2"},[e("button",{class:"btn-primary-rounded w-2/3 md:w-2/3 text-center",type:"button",onClick:x}," Modifier ")])],512),[[y,!u.profil]])]),e("div",ke,[e("div",null,[a(s(k),{class:"text-center text-md"},{default:h(()=>[v(" Installer l'application ")]),_:1})]),e("div",null,[a(s(k),{class:"text-center text-xs",href:U.route("logout"),method:"delete",as:"button"},{default:h(()=>[v(" Déconnexion ")]),_:1},8,["href"])])])],64))}});export{Me as default};