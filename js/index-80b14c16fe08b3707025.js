(self.webpackChunkwebpack_starter=self.webpackChunkwebpack_starter||[]).push([[826],{"32c1ba98ca59567de60e":(e,a,n)=>{e.exports=n.p+"assets/images/logo-3fda612a5dcc621924444239fc99f59e.svg"},f746b58d4e2f60cd69e1:(e,a,n)=>{"use strict";var l=n("82d8eefb58430341f555"),t=n("b641633d6c906d199e02"),s=n("99c472be6da179221b13"),o=n("32c1ba98ca59567de60e"),d=n.n(o);const i=(0,t._)("div",{class:"generator no-print"},[(0,t._)("div",{class:"hints"},[(0,t._)("p",null,[(0,t._)("span",null,"❗"),(0,t.Uk)("Данные нужно вводить прям на визитке")])])],-1),c={class:"business-card"},r={class:"card card--front"},p={class:"card-persona"},u={class:"card-persona__fio"},m={for:"business-card-post"},h=(0,t._)("span",null,"Должность",-1),f=(0,t._)("img",{class:"logo-company",src:d(),alt:"логотип"},null,-1),b={class:"card-contacts"},v={class:"contact-phone"},w=(0,t.Uk)("  (доб.  "),g=(0,t.Uk)(") "),y=(0,t._)("div",null,[(0,t._)("p",null,[(0,t._)("span",null,"pr-liz.ru")]),(0,t._)("p",null,[(0,t._)("span",null,"8(800) 250-25-31")]),(0,t._)("p",null,[(0,t._)("span",null,"prleasing/"),(0,t.Uk)(" — telegram, youtube,")]),(0,t._)("p",null,"vkontakte, facebook, instagram")],-1),k={class:"card card--back"},_={class:"qr"},V=["src"],x=(0,t.uE)('<div><h2>Взять в ПР-Лизинг</h2><div class="leasing-categories"><ul><li><label class="custom-checkbox"><input type="checkbox" checked><span>Грузовой транспорт</span></label></li><li><label class="custom-checkbox"><input type="checkbox"><span>Легковой транспорт</span></label></li><li><label class="custom-checkbox"><input type="checkbox"><span>Недвижимость</span></label></li><li><label class="custom-checkbox"><input type="checkbox"><span>Оборудование</span></label></li><li><label class="custom-checkbox"><input type="checkbox"><span>Спецтехника</span></label></li><li><label class="custom-checkbox"><input type="checkbox"><span>Cуда</span></label></li><li><label class="custom-checkbox"><input type="checkbox"><span>Подвижной состав</span></label></li><li><label class="custom-checkbox"><input type="checkbox"><span>Сельхозтехника и скот</span></label></li></ul><div class="new-category"><div class="new-category__icon"><svg width="3mm" height="3mm" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.21875 0.919616C0.21875 0.853355 0.272465 0.79964 0.338726 0.79964H1.89841C1.96467 0.79964 2.01839 0.853355 2.01839 0.919616C2.01839 0.985877 1.96467 1.03959 1.89841 1.03959H0.338726C0.272465 1.03959 0.21875 0.985877 0.21875 0.919616Z" fill="#403E4B"></path><path d="M1.11802 1.82308C1.05176 1.82308 0.998047 1.76936 0.998047 1.7031L0.998047 0.143414C0.998047 0.0771526 1.05176 0.0234375 1.11802 0.0234375C1.18428 0.0234375 1.238 0.0771526 1.238 0.143414V1.7031C1.238 1.76936 1.18428 1.82308 1.11802 1.82308Z" fill="#403E4B"></path></svg></div><span class="new-category__title">Новый пункт</span></div></div></div>',1);var C=n("a54fa6d0a722ba3f04c5"),H=n("2745d39c4812a9ff6886");var $=n("5360fbf3a686361f9a03"),U=n("45217fd55e25a59b14fa"),D=n("25acef809fcacbd11923"),Z=n("69478d37cc070dac30ae"),z=n("337bc4b9fe0532ddf821"),E=n("1b6a45b3eab92e8f2445"),L=n("2190a885655ea6d1bc56"),T=n("8d7c4fce499bbb5efb77"),A=n("71c08fb42c084758fa6d"),B=n("2928c8936d74fecd93b4"),N=n("cb2fb2d26f6fc89c9982"),O=n("cde7f62cdf0c46cbea4c"),S=n("9de6af1f7604bec2a12b"),F=n("49b7f3d55b7bf1fb9887"),Y=n("a499769908c8f0c91250"),q=n("06935dc7679545f38afa"),K=n("8a43964d3d84fc212b01"),M=n("95854d4ff1bfb5d38de2");const P=["value","placeholder"];var R=n("df2ecbf420203f2bc541"),j=n("260f3680b921ede7f717"),W=n.n(j);const I=(0,t.aZ)({name:"TextFieldAutosize",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},mask:{type:Object,default:null}},emits:["update:modelValue"],setup(e,{emit:a}){const n=(0,C.iH)(e.modelValue),l=(0,C.iH)(void 0);let s;async function o(){if(void 0!==l.value){const{font:a,height:n,padding:t,border:s,lineHeight:o,fontFamily:d}=window.getComputedStyle(l.value),i=document.createElement("div"),c=l.value.value.length<1?`${e.placeholder}`:l.value.value;i.innerHTML=c.replace(/\s/g,">"),await new(W())(d.split(",")[0]).load(),Object.assign(i.style,{font:a,height:n,padding:t,border:s,lineHeight:o,display:"inline"}),document.body.append(i);const{width:r}=i.getBoundingClientRect();i.remove(),l.value.style.width=`${r}px`}}return(0,t.bv)((()=>{o(),e.mask&&l.value&&(s=(0,R.ZP)(l.value,e.mask),s.on("accept",(()=>{o(),a("update:modelValue",s?.value)})))})),(0,t.YP)((()=>e.modelValue),(()=>{n.value=e.modelValue})),(0,t.Jd)((()=>{void 0!==s&&s.destroy()})),{fieldValue:n,input:l}}});var G=n("461bee8a7784aa7fd7da");const J=(0,G.Z)(I,[["render",function(e){return(0,t.wg)(),(0,t.iD)("input",(0,t.dG)(e.$attrs,{ref:"input",value:e.fieldValue,placeholder:e.placeholder}),null,16,P)}]]),Q=["value","innerHTML"];const X=(0,t.aZ)({name:"TextareaAutosize",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const n=(0,C.iH)(e.modelValue),l=(0,C.iH)(void 0);function s(){if(void 0!==l.value){const{font:e,width:a,padding:n,border:t,lineHeight:s}=window.getComputedStyle(l.value),o=document.createElement("div"),d=l.value.value.length<1?" ":l.value.value;o.innerHTML=d.replace(/\n$/g,"\n ").replace(/\n/g,"<br>").replace(/\s/g,">"),Object.assign(o.style,{font:e,width:a,padding:n,border:t,lineHeight:s}),document.body.append(o);const{height:i}=o.getBoundingClientRect();o.remove(),l.value.style.height=`${i}px`}}return(0,t.bv)((()=>{s()})),(0,t.YP)((()=>e.modelValue),(()=>{n.value=e.modelValue})),{textareaValue:n,setValue:function(e){const l=e.target;n.value=l.value,a("update:modelValue",l.value),s()},textarea:l}}}),ee=(0,G.Z)(X,[["render",function(e,a){return(0,t.wg)(),(0,t.iD)("textarea",(0,t.dG)(e.$attrs,{ref:"textarea",rows:"1",value:e.textareaValue,onInput:a[0]||(a[0]=(...a)=>e.setValue&&e.setValue(...a)),onKeydown:a[1]||(a[1]=(...a)=>e.setValue&&e.setValue(...a)),innerHTML:e.textareaValue}),null,16,Q)}]]),ae=(0,t.aZ)({components:{TextFieldAutosize:J,TextareaAutosize:ee},setup(){const e=(0,C.qj)({fio:{firstname:"",name:"",middleName:""},post:"",addresses:[""],phones:[{phone:"8(800) 250-25-31",extension:""}],email:""});const a=(0,t.Fl)((()=>{const{firstname:a,name:n,middleName:l}=e.fio,t=e.phones.filter((e=>e.phone.length>0)).map((({phone:e,extension:a})=>{let n=e;return a.length>0&&(n+=`;${a}`),n})),s=e.addresses.filter((e=>e.length>0));return function(e){const{firstname:a,name:n,middleName:l}=e,t=[a,n,l].join(" "),s=new $.w([],new U.y(t)),o=new Array(5);void 0!==a&&(o[0]=new U.y(a)),void 0!==n&&(o[1]=new U.y(n)),void 0!==l&&(o[2]=new U.y(l));const d=new D._([],new Z.t(o,"nproperty")),i=new z.u([new E.B(new L.F(2))],new T.o("ru")),c=new A.a([new B.l(new U.y("work"),"urlproperty")],new N.h("https://pr-liz.ru")),r=[s,i,d,new O.D([new B.l(new U.y("work"),"orgproperty")],new Z.t([new U.y('Лизинговая компания "ПР-Лизинг"')],"orgproperty")),c];if(void 0!==e.post){const a=new S.e([],new U.y(e.post));r.push(a)}if(void 0!==e.email){const a=new F.o([new B.l(new U.y("work"),"emailproperty")],new U.y(e.email));r.push(a)}if(void 0!==e.phones){const a=e.phones.map((e=>new Y.F([new B.l(new q.p([new U.y("WORK")]),"telproperty"),new E.B(new L.F(2))],new U.y(e))));r.push(...a)}if(void 0!==e.addresses){const a=e.addresses.map((e=>{const a=new Array(7);return a[1]=new U.y(e),new K.J([new B.l(new U.y("work"),"adrproperty")],new Z.t(a,"adrproperty"))}));r.push(...a)}return new M.F(r).repr()}({firstname:a,name:n,middleName:l,post:e.post.length>0?e.post:void 0,phones:t,addresses:s})})),n=(0,C.iH)(null);async function l(){const e=a.value.replace("VERSION:4.0","VERSION:3.0");n.value=await H.toDataURL(e,{width:1e3,margin:0,type:"image/png",errorCorrectionLevel:"low",color:{dark:"#403E4B"}})}const s=function(e,a){let n;return(...l)=>{clearTimeout(n),n=setTimeout((()=>{e(...l)}),a)}}(l,1e3);return(0,t.YP)(a,(()=>{n.value=null,s()})),(0,t.YP)(e.addresses,(a=>{!function(a){const n=a.filter((e=>e.length>0));n.push(""),e.addresses.length!==n.length&&n.length<3&&e.addresses.splice(0,e.addresses.length,...n)}(a)})),(0,t.YP)(e.phones,(a=>{!function(a){const n=a.filter((e=>e.phone.length>0));n.push({phone:"",extension:""}),e.phones.length!==n.length&&n.length<3&&e.phones.splice(0,e.phones.length,...n)}(a)})),(0,t.bv)((()=>{l().then()})),{...(0,C.BK)(e),vCard:a,svg:n,print:function(){window.print()}}}}),ne=(0,G.Z)(ae,[["render",function(e,a){const n=(0,t.up)("textarea-autosize"),o=(0,t.up)("text-field-autosize");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t._)("div",c,[(0,t._)("div",r,[(0,t._)("div",null,[(0,t._)("div",p,[(0,t._)("div",u,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[0]||(a[0]=a=>e.fio.firstname=a),pattern:"([А-ЯA-Z])[a-za-яёйъ-]{1,100}",required:"",placeholder:"Фамилия",name:"business-card-firstname",autocomplete:"business-card-firstname",class:(0,s.C_)({"no-print":e.fio.firstname.length<1})},null,2),[[l.nr,e.fio.firstname]]),(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[1]||(a[1]=a=>e.fio.name=a),pattern:"([А-ЯA-Z])[a-za-яёйъ-]{1,100}",placeholder:"Имя",name:"business-card-name",autocomplete:"business-card-name",class:(0,s.C_)({"no-print":e.fio.name.length<1})},null,2),[[l.nr,e.fio.name]]),(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[2]||(a[2]=a=>e.fio.middleName=a),pattern:"([А-ЯA-Z])[a-za-яёйъ-]{1,100}",placeholder:"Отчество",name:"business-card-middle-name",autocomplete:"business-card-middle-name",class:(0,s.C_)({"no-print":e.fio.middleName.length<1})},null,2),[[l.nr,e.fio.middleName]])]),(0,t._)("label",m,[h,(0,t.wy)((0,t._)("textarea",{id:"business-card-post","onUpdate:modelValue":a[3]||(a[3]=a=>e.post=a),class:(0,s.C_)({"no-print":e.post.length<1}),name:"business-card-post",autocomplete:"business-card-post",required:"",rows:"3",placeholder:"Должность"},null,2),[[l.nr,e.post]])])]),f]),(0,t._)("div",b,[(0,t._)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.addresses.length,(a=>((0,t.wg)(),(0,t.iD)("div",{key:a},[(0,t.Wm)(n,{modelValue:e.addresses[a-1],"onUpdate:modelValue":n=>e.addresses[a-1]=n,name:`business-card-address-${a}`,autocomplete:`business-card-address-${a}`,class:"contact-address",placeholder:`Адрес №${a}`},null,8,["modelValue","onUpdate:modelValue","name","autocomplete","placeholder"])])))),128)),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.phones.length,(a=>((0,t.wg)(),(0,t.iD)("div",{key:a,class:(0,s.C_)({"no-print":e.phones[a-1].phone.length<1})},[(0,t._)("div",v,[(0,t.Wm)(o,{modelValue:e.phones[a-1].phone,"onUpdate:modelValue":n=>e.phones[a-1].phone=n,class:"contact-phone",name:`business-card-phone-${a}`,autocomplete:`business-card-phone-${a}`,placeholder:`Телефон №${a}`,mask:{mask:[{mask:"{8} (000) 000-00-00"},{mask:"{+7} (000) 000-00-00"}]}},null,8,["modelValue","onUpdate:modelValue","name","autocomplete","placeholder","mask"]),(0,t._)("div",{class:(0,s.C_)({"no-print":e.phones[a-1].extension.length<1})},[w,(0,t.Wm)(o,{modelValue:e.phones[a-1].extension,"onUpdate:modelValue":n=>e.phones[a-1].extension=n,class:"contact-phone",name:`business-card-phone-extension-${a}`,autocomplete:`business-card-phone-extension-${a}`,placeholder:"000",mask:{mask:/^[0-9]\d{0,5}$/}},null,8,["modelValue","onUpdate:modelValue","name","autocomplete"]),g],2)])],2)))),128)),(0,t.Wm)(o,{modelValue:e.email,"onUpdate:modelValue":a[4]||(a[4]=a=>e.email=a),type:"email",class:(0,s.C_)(["contact-email",{"no-print":e.email.length<1}]),name:"business-card-email",autocomplete:"business-card-email",placeholder:"Электронная почта",mask:{mask:/^\S*@?\S*$/}},null,8,["modelValue","class"])]),y])]),(0,t._)("div",k,[(0,t._)("div",_,[e.svg?((0,t.wg)(),(0,t.iD)("img",{key:0,src:e.svg,alt:"qr"},null,8,V)):(0,t.kq)("v-if",!0)]),x])]),e.svg?((0,t.wg)(),(0,t.iD)("button",{key:0,class:"print no-print",onClick:a[5]||(a[5]=(...a)=>e.print&&e.print(...a))},"Сохранить")):(0,t.kq)("v-if",!0)],64)}]]);window.addEventListener("DOMContentLoaded",(()=>{(0,l.ri)(ne).mount("#app")})),window.addEventListener("keydown",(e=>{"p"===e.key&&(e.metaKey||e.ctrlKey)&&e.preventDefault()}))}},e=>{e.O(0,[736],(()=>{return a="f746b58d4e2f60cd69e1",e(e.s=a);var a}));e.O()}]);