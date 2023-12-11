import{j as y,c as $}from"./clsx-42c82d7d.js";import{w as Te,e as V,u as O}from"./index-95c7b577.js";import{r as m,R as K}from"./index-39946eba.js";import{g as Se}from"./getDistanceToBottom-7ac1525d.js";import{F as ie}from"./Icon-0f430218.js";import{t as ke}from"./tw-merge-1166cefb.js";import{T as Fe,h as Ve,p as me,e as je,i as be,u as Pe,a as N,o as xe,x as Be}from"./use-tracked-pointer-d62f8799.js";import{l as U,e as Ie,o as g,S as ge,D as Q,u as J,R as He,X,I as te,y as oe,s as Le,a as $e,b as j}from"./keyboard-0ca52a30.js";import{c as Ae,d as ce,C as Me,r as _e}from"./open-closed-8b62a719.js";import{c as qe,p as Ke,I as Ue}from"./hidden-cb730d23.js";import{S as Ge}from"./Spacing-e48a303d.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";function We({container:e,accept:o,walk:n,enabled:t=!0}){let s=m.useRef(o),l=m.useRef(n);m.useEffect(()=>{s.current=o,l.current=n},[o,n]),U(()=>{if(!e||!t)return;let a=Ie(e);if(!a)return;let f=s.current,w=l.current,u=Object.assign(D=>f(D),{acceptNode:f}),x=a.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;x.nextNode();)w(x.currentNode)},[e,t,s,l])}function he(e,o){let n=m.useRef([]),t=g(e);m.useEffect(()=>{let s=[...n.current];for(let[l,a]of o.entries())if(n.current[l]!==a){let f=t(o,s);return n.current=o,f}},[t,...o])}function Je(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Qe(){return/Android/gi.test(window.navigator.userAgent)}function Xe(){return Je()||Qe()}function Ze(...e){return m.useMemo(()=>Ie(...e),[...e])}var Ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ye||{}),et=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(et||{}),tt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(tt||{}),ot=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(ot||{});function pe(e,o=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=Ue(o(e.options.slice()),l=>l.dataRef.current.domRef.current),s=n?t.indexOf(n):null;return s===-1&&(s=null),{options:t,activeOptionIndex:s}}let nt={1(e){var o;return(o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},0(e){var o;if((o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===0)return e;let n=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,s=e.options.findIndex(l=>t(l.dataRef.current.value));s!==-1&&(n=s)}return{...e,comboboxState:0,activeOptionIndex:n}},2(e,o){var n,t,s,l;if((n=e.dataRef.current)!=null&&n.disabled||(t=e.dataRef.current)!=null&&t.optionsRef.current&&!((s=e.dataRef.current)!=null&&s.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let a=pe(e);if(a.activeOptionIndex===null){let w=a.options.findIndex(u=>!u.dataRef.current.disabled);w!==-1&&(a.activeOptionIndex=w)}let f=Be(o,{resolveItems:()=>a.options,resolveActiveIndex:()=>a.activeOptionIndex,resolveId:w=>w.id,resolveDisabled:w=>w.dataRef.current.disabled});return{...e,...a,activeOptionIndex:f,activationTrigger:(l=o.trigger)!=null?l:1}},3:(e,o)=>{var n,t;let s={id:o.id,dataRef:o.dataRef},l=pe(e,f=>[...f,s]);e.activeOptionIndex===null&&(n=e.dataRef.current)!=null&&n.isSelected(o.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(s));let a={...e,...l,activationTrigger:1};return(t=e.dataRef.current)!=null&&t.__demoMode&&e.dataRef.current.value===void 0&&(a.activeOptionIndex=0),a},4:(e,o)=>{let n=pe(e,t=>{let s=t.findIndex(l=>l.id===o.id);return s!==-1&&t.splice(s,1),t});return{...e,...n,activationTrigger:1}},5:(e,o)=>({...e,labelId:o.id})},fe=m.createContext(null);fe.displayName="ComboboxActionsContext";function ne(e){let o=m.useContext(fe);if(o===null){let n=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ne),n}return o}let ve=m.createContext(null);ve.displayName="ComboboxDataContext";function Z(e){let o=m.useContext(ve);if(o===null){let n=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return o}function rt(e,o){return J(o.type,nt,e,o)}let at=m.Fragment;function it(e,o){let{value:n,defaultValue:t,onChange:s,form:l,name:a,by:f=(b,h)=>b===h,disabled:w=!1,__demoMode:u=!1,nullable:x=!1,multiple:D=!1,...r}=e,[i=D?[]:void 0,z]=Fe(n,s,t),[v,p]=m.useReducer(rt,{dataRef:m.createRef(),comboboxState:u?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),E=m.useRef(!1),R=m.useRef({static:!1,hold:!1}),G=m.useRef(null),k=m.useRef(null),P=m.useRef(null),W=m.useRef(null),F=g(typeof f=="string"?(b,h)=>{let I=f;return(b==null?void 0:b[I])===(h==null?void 0:h[I])}:f),A=m.useCallback(b=>J(c.mode,{1:()=>i.some(h=>F(h,b)),0:()=>F(i,b)}),[i]),c=m.useMemo(()=>({...v,optionsPropsRef:R,labelRef:G,inputRef:k,buttonRef:P,optionsRef:W,value:i,defaultValue:t,disabled:w,mode:D?1:0,get activeOptionIndex(){if(E.current&&v.activeOptionIndex===null&&v.options.length>0){let b=v.options.findIndex(h=>!h.dataRef.current.disabled);if(b!==-1)return b}return v.activeOptionIndex},compare:F,isSelected:A,nullable:x,__demoMode:u}),[i,t,w,D,x,u,v]),T=m.useRef(c.activeOptionIndex!==null?c.options[c.activeOptionIndex]:null);m.useEffect(()=>{let b=c.activeOptionIndex!==null?c.options[c.activeOptionIndex]:null;T.current!==b&&(T.current=b)}),U(()=>{v.dataRef.current=c},[c]),Ve([c.buttonRef,c.inputRef,c.optionsRef],()=>ue.closeCombobox(),c.comboboxState===0);let M=m.useMemo(()=>({open:c.comboboxState===0,disabled:w,activeIndex:c.activeOptionIndex,activeOption:c.activeOptionIndex===null?null:c.options[c.activeOptionIndex].dataRef.current.value,value:i}),[c,w,i]),Y=g(b=>{let h=c.options.find(I=>I.id===b);h&&L(h.dataRef.current.value)}),d=g(()=>{if(c.activeOptionIndex!==null){let{dataRef:b,id:h}=c.options[c.activeOptionIndex];L(b.current.value),ue.goToOption(N.Specific,h)}}),H=g(()=>{p({type:0}),E.current=!0}),C=g(()=>{p({type:1}),E.current=!1}),ee=g((b,h,I)=>(E.current=!1,b===N.Specific?p({type:2,focus:N.Specific,id:h,trigger:I}):p({type:2,focus:b,trigger:I}))),S=g((b,h)=>(p({type:3,id:b,dataRef:h}),()=>{var I;((I=T.current)==null?void 0:I.id)===b&&(E.current=!0),p({type:4,id:b})})),_=g(b=>(p({type:5,id:b}),()=>p({type:5,id:null}))),L=g(b=>J(c.mode,{0(){return z==null?void 0:z(b)},1(){let h=c.value.slice(),I=h.findIndex(ae=>F(ae,b));return I===-1?h.push(b):h.splice(I,1),z==null?void 0:z(h)}})),ue=m.useMemo(()=>({onChange:L,registerOption:S,registerLabel:_,goToOption:ee,closeCombobox:C,openCombobox:H,selectActiveOption:d,selectOption:Y}),[]),Ee=o===null?{}:{ref:o},re=m.useRef(null),Ce=me();return m.useEffect(()=>{re.current&&t!==void 0&&Ce.addEventListener(re.current,"reset",()=>{z==null||z(t)})},[re,z]),K.createElement(fe.Provider,{value:ue},K.createElement(ve.Provider,{value:c},K.createElement(Ae,{value:J(c.comboboxState,{0:ce.Open,1:ce.Closed})},a!=null&&i!=null&&je({[a]:i}).map(([b,h],I)=>K.createElement(qe,{features:Ke.Hidden,ref:I===0?ae=>{var we;re.current=(we=ae==null?void 0:ae.closest("form"))!=null?we:null}:void 0,...He({key:b,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:b,value:h})})),X({ourProps:Ee,theirProps:r,slot:M,defaultTag:at,name:"Combobox"}))))}let lt="input";function st(e,o){var n,t,s,l;let a=te(),{id:f=`headlessui-combobox-input-${a}`,onChange:w,displayValue:u,type:x="text",...D}=e,r=Z("Combobox.Input"),i=ne("Combobox.Input"),z=oe(r.inputRef,o),v=Ze(r.inputRef),p=m.useRef(!1),E=me(),R=g(()=>{i.onChange(null),r.optionsRef.current&&(r.optionsRef.current.scrollTop=0),i.goToOption(N.Nothing)}),G=function(){var d;return typeof u=="function"&&r.value!==void 0?(d=u(r.value))!=null?d:"":typeof r.value=="string"?r.value:""}();he(([d,H],[C,ee])=>{if(p.current)return;let S=r.inputRef.current;S&&((ee===0&&H===1||d!==C)&&(S.value=d),requestAnimationFrame(()=>{if(p.current||!S||(v==null?void 0:v.activeElement)!==S)return;let{selectionStart:_,selectionEnd:L}=S;Math.abs((L??0)-(_??0))===0&&_===0&&S.setSelectionRange(S.value.length,S.value.length)}))},[G,r.comboboxState,v]),he(([d],[H])=>{if(d===0&&H===1){if(p.current)return;let C=r.inputRef.current;if(!C)return;let ee=C.value,{selectionStart:S,selectionEnd:_,selectionDirection:L}=C;C.value="",C.value=ee,L!==null?C.setSelectionRange(S,_,L):C.setSelectionRange(S,_)}},[r.comboboxState]);let k=m.useRef(!1),P=g(()=>{k.current=!0}),W=g(()=>{E.nextFrame(()=>{k.current=!1})}),F=g(d=>{switch(p.current=!0,d.key){case j.Enter:if(p.current=!1,r.comboboxState!==0||k.current)return;if(d.preventDefault(),d.stopPropagation(),r.activeOptionIndex===null){i.closeCombobox();return}i.selectActiveOption(),r.mode===0&&i.closeCombobox();break;case j.ArrowDown:return p.current=!1,d.preventDefault(),d.stopPropagation(),J(r.comboboxState,{0:()=>{i.goToOption(N.Next)},1:()=>{i.openCombobox()}});case j.ArrowUp:return p.current=!1,d.preventDefault(),d.stopPropagation(),J(r.comboboxState,{0:()=>{i.goToOption(N.Previous)},1:()=>{i.openCombobox(),E.nextFrame(()=>{r.value||i.goToOption(N.Last)})}});case j.Home:if(d.shiftKey)break;return p.current=!1,d.preventDefault(),d.stopPropagation(),i.goToOption(N.First);case j.PageUp:return p.current=!1,d.preventDefault(),d.stopPropagation(),i.goToOption(N.First);case j.End:if(d.shiftKey)break;return p.current=!1,d.preventDefault(),d.stopPropagation(),i.goToOption(N.Last);case j.PageDown:return p.current=!1,d.preventDefault(),d.stopPropagation(),i.goToOption(N.Last);case j.Escape:return p.current=!1,r.comboboxState!==0?void 0:(d.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&d.stopPropagation(),r.nullable&&r.mode===0&&r.value===null&&R(),i.closeCombobox());case j.Tab:if(p.current=!1,r.comboboxState!==0)return;r.mode===0&&i.selectActiveOption(),i.closeCombobox();break}}),A=g(d=>{w==null||w(d),r.nullable&&r.mode===0&&d.target.value===""&&R(),i.openCombobox()}),c=g(()=>{p.current=!1}),T=be(()=>{if(r.labelId)return[r.labelId].join(" ")},[r.labelId]),M=m.useMemo(()=>({open:r.comboboxState===0,disabled:r.disabled}),[r]),Y={ref:z,id:f,role:"combobox",type:x,"aria-controls":(n=r.optionsRef.current)==null?void 0:n.id,"aria-expanded":r.comboboxState===0,"aria-activedescendant":r.activeOptionIndex===null||(t=r.options[r.activeOptionIndex])==null?void 0:t.id,"aria-labelledby":T,"aria-autocomplete":"list",defaultValue:(l=(s=e.defaultValue)!=null?s:r.defaultValue!==void 0?u==null?void 0:u(r.defaultValue):null)!=null?l:r.defaultValue,disabled:r.disabled,onCompositionStart:P,onCompositionEnd:W,onKeyDown:F,onChange:A,onBlur:c};return X({ourProps:Y,theirProps:D,slot:M,defaultTag:lt,name:"Combobox.Input"})}let ct="button";function ut(e,o){var n;let t=Z("Combobox.Button"),s=ne("Combobox.Button"),l=oe(t.buttonRef,o),a=te(),{id:f=`headlessui-combobox-button-${a}`,...w}=e,u=me(),x=g(v=>{switch(v.key){case j.ArrowDown:return v.preventDefault(),v.stopPropagation(),t.comboboxState===1&&s.openCombobox(),u.nextFrame(()=>{var p;return(p=t.inputRef.current)==null?void 0:p.focus({preventScroll:!0})});case j.ArrowUp:return v.preventDefault(),v.stopPropagation(),t.comboboxState===1&&(s.openCombobox(),u.nextFrame(()=>{t.value||s.goToOption(N.Last)})),u.nextFrame(()=>{var p;return(p=t.inputRef.current)==null?void 0:p.focus({preventScroll:!0})});case j.Escape:return t.comboboxState!==0?void 0:(v.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&v.stopPropagation(),s.closeCombobox(),u.nextFrame(()=>{var p;return(p=t.inputRef.current)==null?void 0:p.focus({preventScroll:!0})}));default:return}}),D=g(v=>{if(_e(v.currentTarget))return v.preventDefault();t.comboboxState===0?s.closeCombobox():(v.preventDefault(),s.openCombobox()),u.nextFrame(()=>{var p;return(p=t.inputRef.current)==null?void 0:p.focus({preventScroll:!0})})}),r=be(()=>{if(t.labelId)return[t.labelId,f].join(" ")},[t.labelId,f]),i=m.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled,value:t.value}),[t]),z={ref:l,id:f,type:Le(e,t.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(n=t.optionsRef.current)==null?void 0:n.id,"aria-expanded":t.comboboxState===0,"aria-labelledby":r,disabled:t.disabled,onClick:D,onKeyDown:x};return X({ourProps:z,theirProps:w,slot:i,defaultTag:ct,name:"Combobox.Button"})}let pt="label";function dt(e,o){let n=te(),{id:t=`headlessui-combobox-label-${n}`,...s}=e,l=Z("Combobox.Label"),a=ne("Combobox.Label"),f=oe(l.labelRef,o);U(()=>a.registerLabel(t),[t]);let w=g(()=>{var x;return(x=l.inputRef.current)==null?void 0:x.focus({preventScroll:!0})}),u=m.useMemo(()=>({open:l.comboboxState===0,disabled:l.disabled}),[l]);return X({ourProps:{ref:f,id:t,onClick:w},theirProps:s,slot:u,defaultTag:pt,name:"Combobox.Label"})}let mt="ul",bt=ge.RenderStrategy|ge.Static;function ft(e,o){let n=te(),{id:t=`headlessui-combobox-options-${n}`,hold:s=!1,...l}=e,a=Z("Combobox.Options"),f=oe(a.optionsRef,o),w=Me(),u=(()=>w!==null?(w&ce.Open)===ce.Open:a.comboboxState===0)();U(()=>{var i;a.optionsPropsRef.current.static=(i=e.static)!=null?i:!1},[a.optionsPropsRef,e.static]),U(()=>{a.optionsPropsRef.current.hold=s},[a.optionsPropsRef,s]),We({container:a.optionsRef.current,enabled:a.comboboxState===0,accept(i){return i.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let x=be(()=>{var i,z;return(z=a.labelId)!=null?z:(i=a.buttonRef.current)==null?void 0:i.id},[a.labelId,a.buttonRef.current]),D=m.useMemo(()=>({open:a.comboboxState===0}),[a]),r={"aria-labelledby":x,role:"listbox","aria-multiselectable":a.mode===1?!0:void 0,id:t,ref:f};return X({ourProps:r,theirProps:l,slot:D,defaultTag:mt,features:bt,visible:u,name:"Combobox.Options"})}let vt="li";function wt(e,o){var n,t;let s=te(),{id:l=`headlessui-combobox-option-${s}`,disabled:a=!1,value:f,...w}=e,u=Z("Combobox.Option"),x=ne("Combobox.Option"),D=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===l:!1,r=u.isSelected(f),i=m.useRef(null),z=$e({disabled:a,value:f,domRef:i,textValue:(t=(n=i.current)==null?void 0:n.textContent)==null?void 0:t.toLowerCase()}),v=oe(o,i),p=g(()=>x.selectOption(l));U(()=>x.registerOption(l,z),[z,l]);let E=m.useRef(!u.__demoMode);U(()=>{if(!u.__demoMode)return;let c=xe();return c.requestAnimationFrame(()=>{E.current=!0}),c.dispose},[]),U(()=>{if(u.comboboxState!==0||!D||!E.current||u.activationTrigger===0)return;let c=xe();return c.requestAnimationFrame(()=>{var T,M;(M=(T=i.current)==null?void 0:T.scrollIntoView)==null||M.call(T,{block:"nearest"})}),c.dispose},[i,D,u.comboboxState,u.activationTrigger,u.activeOptionIndex]);let R=g(c=>{if(a)return c.preventDefault();p(),u.mode===0&&x.closeCombobox(),Xe()||requestAnimationFrame(()=>{var T;return(T=u.inputRef.current)==null?void 0:T.focus()})}),G=g(()=>{if(a)return x.goToOption(N.Nothing);x.goToOption(N.Specific,l)}),k=Pe(),P=g(c=>k.update(c)),W=g(c=>{k.wasMoved(c)&&(a||D||x.goToOption(N.Specific,l,0))}),F=g(c=>{k.wasMoved(c)&&(a||D&&(u.optionsPropsRef.current.hold||x.goToOption(N.Nothing)))}),A=m.useMemo(()=>({active:D,selected:r,disabled:a}),[D,r,a]);return X({ourProps:{id:l,ref:v,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":r,disabled:void 0,onClick:R,onFocus:G,onPointerEnter:P,onMouseEnter:P,onPointerMove:W,onMouseMove:W,onPointerLeave:F,onMouseLeave:F},theirProps:w,slot:A,defaultTag:vt,name:"Combobox.Option"})}let xt=Q(it),gt=Q(ut),ht=Q(st),yt=Q(dt),Dt=Q(ft),zt=Q(wt),q=Object.assign(xt,{Input:ht,Button:gt,Label:yt,Options:Dt,Option:zt});const Ot=268,Nt=(e,o)=>{const n=new RegExp(o,"gi");return e.replace(n,t=>"<b>"+t+"</b>")},Rt=(e,o)=>$("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":e},{"zep-bg-greyscale-300":o},{"zep-pr-3":o}),de=({disabled:e=!1,items:o,label:n,message:t,noOptionsLabel:s,placeholder:l,readOnly:a=!1,state:f="default",...w})=>{const u=K.useRef(null),x=K.useRef(null),D=f==="error",r=f==="info",[i,z]=K.useState(""),[v,p]=K.useState(null),E=i!==""||v!==null,R=e||a,G=D?"zep-text-error":r?"zep-text-info":"",k=i===""?o:o.filter(P=>P.name.toLowerCase().includes(i.toLowerCase()));return y.jsxDEV("div",{className:ke($("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e}),w.className),"data-testid":"zep-drop-down-filter",...w,children:[y.jsxDEV(q,{as:"div",value:v,onChange:p,disabled:R,children:({open:P})=>{const F=Se(x.current)<Ot,A=e?"zep-text-opacity-disabled":"zep-text-typography-dark-100",c=$("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","zep-truncate",D?"zep-border-2 zep-border-error":"zep-border-1 zep-border-neutral-dark-default",E?"zep-pr-4":"zep-pr-0.75",A,"placeholder:zep-text-typography-dark-100/70",{"zep-ring":P},{"zep-bg-background-medium":a},{"zep-border-opacity-disabled":e},{"zep-active:zep-ring":!R},{"zep-ring-offset-1":!R},{"focus-visible:zep-ring":!R},{"zep-ring-focus":!R},{"zep-cursor-not-allowed":R}),T=$("zep-absolute","zep-shadow-sm","zep-py-0.25","zep-z-10","zep-right-0","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","zep-ring-1,","zep-ring-tertiary","zep-ring-opacity-1","focus:outline-none","zep-overflow-hidden","zep-overflow-y-auto",F?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":F}),M=$("zep-absolute","zep-top-0.75","zep-right-2.5","zep-flex","zep-items-center"),Y=$(R?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":P});return y.jsxDEV(y.Fragment,{children:[n&&y.jsxDEV(q.Label,{className:$("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e}),children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:139,columnNumber:17},globalThis),y.jsxDEV("div",{className:"zeb-block zep-relative zep-mt-0.5",children:[y.jsxDEV(q.Input,{className:c,autoComplete:"off",placeholder:a?void 0:l,readOnly:a,ref:x,"data-testid":"zep-drop-down-filter-input",onChange:d=>z(d.target.value)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:144,columnNumber:17},globalThis),!!v&&y.jsxDEV("button",{className:M,"data-testid":"zep-drop-down-filter-delete",disabled:R,onClick:()=>{z(""),p(null)},children:y.jsxDEV(ie,{className:A,name:"delete-circle",size:24},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:163,columnNumber:21},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:154,columnNumber:19},globalThis),y.jsxDEV(q.Button,{"data-testid":"zep-drop-down-filter-button",className:"zep-absolute zep-inset-y-[0px] zep-right-[0px] zep-flex zep-items-center zep-pr-0.75",children:y.jsxDEV(ie,{className:Y,name:"chevron-mini-down",role:"img",size:24},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:170,columnNumber:19},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:166,columnNumber:17},globalThis),k.length>0?y.jsxDEV(q.Options,{className:T,ref:u,"data-testid":"zep-drop-down-filter-menu",children:k.map(d=>y.jsxDEV(q.Option,{"data-testid":"zep-drop-down-filter-option",value:d.name,className:({active:H,selected:C})=>Rt(H,C),children:({selected:H})=>y.jsxDEV(y.Fragment,{children:[y.jsxDEV("span",{className:"zep-truncate",dangerouslySetInnerHTML:{__html:Nt(d.name,i)}},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:187,columnNumber:29},globalThis),H&&y.jsxDEV(ie,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:192,columnNumber:31},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:186,columnNumber:27},globalThis)},d.id,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:179,columnNumber:23},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:173,columnNumber:19},globalThis):y.jsxDEV(q.Options,{className:T,ref:u,children:y.jsxDEV(q.Option,{"data-testid":"zep-drop-down-filter-no-options",value:0,className:$("zep-block zep-py-0.75 zep-text-center"),children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:201,columnNumber:21},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:200,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:143,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:137,columnNumber:13},globalThis)}},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:65,columnNumber:7},globalThis),t&&y.jsxDEV("div",{className:$("zep-mt-0.25",{"zep-text-typography-dark-100":!D&&!r},"zep-text-0.875","zep-flex",G),children:[f!=="default"&&y.jsxDEV(ie,{name:f==="error"?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:226,columnNumber:13},globalThis),y.jsxDEV("span",{className:"zep-mt-0.125",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:233,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:216,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.tsx",lineNumber:55,columnNumber:5},globalThis)};try{de.displayName="DropDownFilter",de.__docgenInfo={description:"",displayName:"DropDownFilter",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownFilterItem[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},noOptionsLabel:{defaultValue:null,description:"",name:"noOptionsLabel",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"default"'}]}}}}}catch{}const B=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],_t={title:"Components/DropDown Filter",component:de,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>y.jsxDEV(Ge,{className:"zep-w-[326px]",children:y.jsxDEV(e,{},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.stories.tsx",lineNumber:60,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/drop-down-filter/DropDownFilter.stories.tsx",lineNumber:59,columnNumber:12},globalThis)]},le={args:{disabled:!1,items:B,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readOnly:!1,state:"default"},play:async({canvasElement:e,step:o})=>{const n=Te(e),t=n.getByTestId("zep-drop-down-filter-input"),s=n.getByTestId("zep-drop-down-filter-button");await o("Initial checks",async()=>{await V(t).toBeInTheDocument()}),await o("Select dropDown with keyboard",async()=>{await O.tab(),await V(t).toHaveFocus()}),await o("Open dropDown options with keyboard",async()=>{await O.keyboard("{arrowdown}"),await o("Check dropDown options",async()=>{B.forEach(l=>{V(n.getByText(l.name)).toBeInTheDocument()})})}),await o("Select dropDown first option with keyboard",async()=>{await O.keyboard("{arrowdown}"),await O.keyboard("{enter}"),await V(t).toHaveValue(B[1].name)}),await o("Select dropDown third option with keyboard",async()=>{await O.keyboard("{arrowdown}"),await O.keyboard("{arrowdown}"),await O.keyboard("{arrowdown}"),await O.keyboard("{enter}"),await V(t).toHaveValue(B[3].name)}),await o("Select dropDown second option with mouse",async()=>{await O.click(s),await O.click(n.getByText(B[2].name)),await V(t).toHaveValue(B[2].name)}),await o("Slect dropDown third option with mouse",async()=>{await O.click(s),await O.click(n.getByText(B[3].name)),await V(t).toHaveValue(B[3].name)}),await o("Delete dropDown option with mouse",async()=>{const l=n.getByTestId("zep-drop-down-filter-delete");await V(l).toBeInTheDocument(),await O.tab(),await V(t).not.toHaveFocus(),await O.click(l),await V(t).toHaveValue(""),await O.tab()}),await o("Blur dropDown",async()=>{await O.tab(),await V(t).not.toHaveFocus()})}},se={args:{disabled:!1,items:B,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readOnly:!1,state:"default"},play:async({canvasElement:e})=>{const o=Te(e);await O.click(o.getByTestId("zep-drop-down-filter-button")),await O.click(o.getByText(B[2].name)),await V(o.getByTestId("zep-drop-down-filter-input")).toHaveValue(B[2].name)}};var ye,De,ze;le.parameters={...le.parameters,docs:{...(ye=le.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    items,
    label: 'Dropdown Filter',
    noOptionsLabel: 'Keine Optionen',
    placeholder: 'Auswählen (Hint)',
    readOnly: false,
    state: 'default'
  } as DropDownFilterProps),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByTestId('zep-drop-down-filter-input');
    const comboboxButton = canvas.getByTestId('zep-drop-down-filter-button');
    await step('Initial checks', async () => {
      await expect(combobox).toBeInTheDocument();
    });
    await step('Select dropDown with keyboard', async () => {
      await userEvent.tab();
      await expect(combobox).toHaveFocus();
    });
    await step('Open dropDown options with keyboard', async () => {
      await userEvent.keyboard('{arrowdown}');
      await step('Check dropDown options', async () => {
        items.forEach(item => {
          expect(canvas.getByText(item.name)).toBeInTheDocument();
        });
      });
    });
    await step('Select dropDown first option with keyboard', async () => {
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{enter}');
      await expect(combobox).toHaveValue(items[1].name);
    });
    await step('Select dropDown third option with keyboard', async () => {
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{arrowdown}');
      await userEvent.keyboard('{enter}');
      await expect(combobox).toHaveValue(items[3].name);
    });
    await step('Select dropDown second option with mouse', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.click(canvas.getByText(items[2].name));
      await expect(combobox).toHaveValue(items[2].name);
    });
    await step('Slect dropDown third option with mouse', async () => {
      await userEvent.click(comboboxButton);
      await userEvent.click(canvas.getByText(items[3].name));
      await expect(combobox).toHaveValue(items[3].name);
    });
    await step('Delete dropDown option with mouse', async () => {
      const comboboxDeleteButton = canvas.getByTestId('zep-drop-down-filter-delete');
      await expect(comboboxDeleteButton).toBeInTheDocument();
      await userEvent.tab();
      await expect(combobox).not.toHaveFocus();
      await userEvent.click(comboboxDeleteButton);
      await expect(combobox).toHaveValue('');
      await userEvent.tab();
    });
    await step('Blur dropDown', async () => {
      await userEvent.tab();
      await expect(combobox).not.toHaveFocus();
    });
  }
}`,...(ze=(De=le.parameters)==null?void 0:De.docs)==null?void 0:ze.source}}};var Oe,Ne,Re;se.parameters={...se.parameters,docs:{...(Oe=se.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    items,
    label: 'Dropdown Filter',
    noOptionsLabel: 'Keine Optionen',
    placeholder: 'Auswählen (Hint)',
    readOnly: false,
    state: 'default'
  } as DropDownFilterProps),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByTestId('zep-drop-down-filter-button'));
    await userEvent.click(canvas.getByText(items[2].name));
    await expect(canvas.getByTestId('zep-drop-down-filter-input')).toHaveValue(items[2].name);
  }
}`,...(Re=(Ne=se.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};const qt=["Default","SelectAnItem"];export{le as Default,se as SelectAnItem,qt as __namedExportsOrder,_t as default};
//# sourceMappingURL=DropDownFilter.stories-f2238adb.js.map
