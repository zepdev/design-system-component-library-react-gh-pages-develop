import{r as d,R as m}from"./index-8db94870.js";import{c as M}from"./clsx.m-1229b3e0.js";import{F as oe}from"./Icon-a1e3a7f8.js";import{l as V,g as Oe,o as O,S as be,D as j,T as ye,u as H,H as Ce,p as se,c as he,d as re,e as Ie,b as Se,f as we,R as Ee,X as K,I as Q,y as X,i as ue,s as Te,C as Pe,j as ke,k as De,m as I,n as T,r as Fe,q as fe,x as Ne,t as Le,v as Me,$ as _e}from"./transition-729c66c8.js";import{t as Ae}from"./tw-merge-b02e8c47.js";import{S as Ve}from"./Spacing-2c30780b.js";import"./_commonjsHelpers-042e6b4d.js";function $e({container:e,accept:o,walk:l,enabled:t=!0}){let u=d.useRef(o),s=d.useRef(l);d.useEffect(()=>{u.current=o,s.current=l},[o,l]),V(()=>{if(!e||!t)return;let r=Oe(e);if(!r)return;let v=u.current,x=s.current,p=Object.assign(y=>v(y),{acceptNode:v}),z=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,p,!1);for(;z.nextNode();)x(z.currentNode)},[e,t,u,s])}function me(e,o){let l=d.useRef([]),t=O(e);d.useEffect(()=>{let u=[...l.current];for(let[s,r]of o.entries())if(l.current[s]!==r){let v=t(o,u);return l.current=o,v}},[t,...o])}function qe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Be(){return/Android/gi.test(window.navigator.userAgent)}function He(){return qe()||Be()}var je=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(je||{}),Ke=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ke||{}),Ue=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ue||{}),Ge=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(Ge||{});function le(e,o=l=>l){let l=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=Le(o(e.options.slice()),s=>s.dataRef.current.domRef.current),u=l?t.indexOf(l):null;return u===-1&&(u=null),{options:t,activeOptionIndex:u}}let Qe={[1](e){var o;return(o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},[0](e){var o;if((o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===0)return e;let l=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,u=e.options.findIndex(s=>t(s.dataRef.current.value));u!==-1&&(l=u)}return{...e,comboboxState:0,activeOptionIndex:l}},[2](e,o){var l,t,u,s;if((l=e.dataRef.current)!=null&&l.disabled||(t=e.dataRef.current)!=null&&t.optionsRef.current&&!((u=e.dataRef.current)!=null&&u.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let r=le(e);if(r.activeOptionIndex===null){let x=r.options.findIndex(p=>!p.dataRef.current.disabled);x!==-1&&(r.activeOptionIndex=x)}let v=Ne(o,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:x=>x.id,resolveDisabled:x=>x.dataRef.current.disabled});return{...e,...r,activeOptionIndex:v,activationTrigger:(s=o.trigger)!=null?s:1}},[3]:(e,o)=>{var l,t;let u={id:o.id,dataRef:o.dataRef},s=le(e,v=>[...v,u]);e.activeOptionIndex===null&&(l=e.dataRef.current)!=null&&l.isSelected(o.dataRef.current.value)&&(s.activeOptionIndex=s.options.indexOf(u));let r={...e,...s,activationTrigger:1};return(t=e.dataRef.current)!=null&&t.__demoMode&&e.dataRef.current.value===void 0&&(r.activeOptionIndex=0),r},[4]:(e,o)=>{let l=le(e,t=>{let u=t.findIndex(s=>s.id===o.id);return u!==-1&&t.splice(u,1),t});return{...e,...l,activationTrigger:1}},[5]:(e,o)=>({...e,labelId:o.id})},pe=d.createContext(null);pe.displayName="ComboboxActionsContext";function W(e){let o=d.useContext(pe);if(o===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,W),l}return o}let ce=d.createContext(null);ce.displayName="ComboboxDataContext";function U(e){let o=d.useContext(ce);if(o===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,U),l}return o}function Xe(e,o){return H(o.type,Qe,e,o)}let We=d.Fragment;function Je(e,o){let{value:l,defaultValue:t,onChange:u,form:s,name:r,by:v=(f,R)=>f===R,disabled:x=!1,__demoMode:p=!1,nullable:z=!1,multiple:y=!1,...n}=e,[a=y?[]:void 0,h]=ye(l,u,t),[c,g]=d.useReducer(Xe,{dataRef:d.createRef(),comboboxState:p?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),C=d.useRef(!1),N=d.useRef({static:!1,hold:!1}),F=d.useRef(null),k=d.useRef(null),$=d.useRef(null),L=d.useRef(null),D=O(typeof v=="string"?(f,R)=>{let E=v;return(f==null?void 0:f[E])===(R==null?void 0:R[E])}:v),B=d.useCallback(f=>H(i.mode,{[1]:()=>a.some(R=>D(R,f)),[0]:()=>D(a,f)}),[a]),i=d.useMemo(()=>({...c,optionsPropsRef:N,labelRef:F,inputRef:k,buttonRef:$,optionsRef:L,value:a,defaultValue:t,disabled:x,mode:y?1:0,get activeOptionIndex(){if(C.current&&c.activeOptionIndex===null&&c.options.length>0){let f=c.options.findIndex(R=>!R.dataRef.current.disabled);if(f!==-1)return f}return c.activeOptionIndex},compare:D,isSelected:B,nullable:z,__demoMode:p}),[a,t,x,y,z,p,c]),S=d.useRef(i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null);d.useEffect(()=>{let f=i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null;S.current!==f&&(S.current=f)}),V(()=>{c.dataRef.current=i},[i]),Ce([i.buttonRef,i.inputRef,i.optionsRef],()=>ae.closeCombobox(),i.comboboxState===0);let _=d.useMemo(()=>({open:i.comboboxState===0,disabled:x,activeIndex:i.activeOptionIndex,activeOption:i.activeOptionIndex===null?null:i.options[i.activeOptionIndex].dataRef.current.value,value:a}),[i,x,a]),b=O(f=>{let R=i.options.find(E=>E.id===f);R&&G(R.dataRef.current.value)}),P=O(()=>{if(i.activeOptionIndex!==null){let{dataRef:f,id:R}=i.options[i.activeOptionIndex];G(f.current.value),ae.goToOption(I.Specific,R)}}),w=O(()=>{g({type:0}),C.current=!0}),q=O(()=>{g({type:1}),C.current=!1}),J=O((f,R,E)=>(C.current=!1,f===I.Specific?g({type:2,focus:I.Specific,id:R,trigger:E}):g({type:2,focus:f,trigger:E}))),Y=O((f,R)=>(g({type:3,id:f,dataRef:R}),()=>{var E;((E=S.current)==null?void 0:E.id)===f&&(C.current=!0),g({type:4,id:f})})),Z=O(f=>(g({type:5,id:f}),()=>g({type:5,id:null}))),G=O(f=>H(i.mode,{[0](){return h==null?void 0:h(f)},[1](){let R=i.value.slice(),E=R.findIndex(te=>D(te,f));return E===-1?R.push(f):R.splice(E,1),h==null?void 0:h(R)}})),ae=d.useMemo(()=>({onChange:G,registerOption:Y,registerLabel:Z,goToOption:J,closeCombobox:q,openCombobox:w,selectActiveOption:P,selectOption:b}),[]),ze=o===null?{}:{ref:o},ee=d.useRef(null),Re=se();return d.useEffect(()=>{ee.current&&t!==void 0&&Re.addEventListener(ee.current,"reset",()=>{G(t)})},[ee,G]),m.createElement(pe.Provider,{value:ae},m.createElement(ce.Provider,{value:i},m.createElement(he,{value:H(i.comboboxState,{[0]:re.Open,[1]:re.Closed})},r!=null&&a!=null&&Ie({[r]:a}).map(([f,R],E)=>m.createElement(Se,{features:we.Hidden,ref:E===0?te=>{var de;ee.current=(de=te==null?void 0:te.closest("form"))!=null?de:null}:void 0,...Ee({key:f,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:f,value:R})})),K({ourProps:ze,theirProps:n,slot:_,defaultTag:We,name:"Combobox"}))))}let Ye="input";function Ze(e,o){var l,t,u,s;let r=Q(),{id:v=`headlessui-combobox-input-${r}`,onChange:x,displayValue:p,type:z="text",...y}=e,n=U("Combobox.Input"),a=W("Combobox.Input"),h=X(n.inputRef,o),c=d.useRef(!1),g=se(),C=function(){var b;return typeof p=="function"&&n.value!==void 0?(b=p(n.value))!=null?b:"":typeof n.value=="string"?n.value:""}();me(([b,P],[w,q])=>{c.current||n.inputRef.current&&(q===0&&P===1||b!==w)&&(n.inputRef.current.value=b)},[C,n.comboboxState]),me(([b],[P])=>{if(b===0&&P===1){let w=n.inputRef.current;if(!w)return;let q=w.value,{selectionStart:J,selectionEnd:Y,selectionDirection:Z}=w;w.value="",w.value=q,Z!==null?w.setSelectionRange(J,Y,Z):w.setSelectionRange(J,Y)}},[n.comboboxState]);let N=d.useRef(!1),F=d.useRef(null),k=O(()=>{N.current=!0}),$=O(()=>{g.nextFrame(()=>{N.current=!1,F.current&&(a.openCombobox(),x==null||x(F.current),F.current=null)})}),L=O(b=>{switch(c.current=!0,b.key){case T.Backspace:case T.Delete:if(n.mode!==0||!n.nullable)return;let P=b.currentTarget;g.requestAnimationFrame(()=>{P.value===""&&(a.onChange(null),n.optionsRef.current&&(n.optionsRef.current.scrollTop=0),a.goToOption(I.Nothing))});break;case T.Enter:if(c.current=!1,n.comboboxState!==0||N.current)return;if(b.preventDefault(),b.stopPropagation(),n.activeOptionIndex===null){a.closeCombobox();return}a.selectActiveOption(),n.mode===0&&a.closeCombobox();break;case T.ArrowDown:return c.current=!1,b.preventDefault(),b.stopPropagation(),H(n.comboboxState,{[0]:()=>{a.goToOption(I.Next)},[1]:()=>{a.openCombobox()}});case T.ArrowUp:return c.current=!1,b.preventDefault(),b.stopPropagation(),H(n.comboboxState,{[0]:()=>{a.goToOption(I.Previous)},[1]:()=>{a.openCombobox(),g.nextFrame(()=>{n.value||a.goToOption(I.Last)})}});case T.Home:if(b.shiftKey)break;return c.current=!1,b.preventDefault(),b.stopPropagation(),a.goToOption(I.First);case T.PageUp:return c.current=!1,b.preventDefault(),b.stopPropagation(),a.goToOption(I.First);case T.End:if(b.shiftKey)break;return c.current=!1,b.preventDefault(),b.stopPropagation(),a.goToOption(I.Last);case T.PageDown:return c.current=!1,b.preventDefault(),b.stopPropagation(),a.goToOption(I.Last);case T.Escape:return c.current=!1,n.comboboxState!==0?void 0:(b.preventDefault(),n.optionsRef.current&&!n.optionsPropsRef.current.static&&b.stopPropagation(),a.closeCombobox());case T.Tab:if(c.current=!1,n.comboboxState!==0)return;n.mode===0&&a.selectActiveOption(),a.closeCombobox();break}}),D=O(b=>{if(N.current){F.current=b;return}a.openCombobox(),x==null||x(b)}),B=O(()=>{c.current=!1}),i=ue(()=>{if(n.labelId)return[n.labelId].join(" ")},[n.labelId]),S=d.useMemo(()=>({open:n.comboboxState===0,disabled:n.disabled}),[n]),_={ref:h,id:v,role:"combobox",type:z,"aria-controls":(l=n.optionsRef.current)==null?void 0:l.id,"aria-expanded":n.disabled?void 0:n.comboboxState===0,"aria-activedescendant":n.activeOptionIndex===null||(t=n.options[n.activeOptionIndex])==null?void 0:t.id,"aria-labelledby":i,"aria-autocomplete":"list",defaultValue:(s=(u=e.defaultValue)!=null?u:n.defaultValue!==void 0?p==null?void 0:p(n.defaultValue):null)!=null?s:n.defaultValue,disabled:n.disabled,onCompositionStart:k,onCompositionEnd:$,onKeyDown:L,onChange:D,onBlur:B};return K({ourProps:_,theirProps:y,slot:S,defaultTag:Ye,name:"Combobox.Input"})}let et="button";function tt(e,o){var l;let t=U("Combobox.Button"),u=W("Combobox.Button"),s=X(t.buttonRef,o),r=Q(),{id:v=`headlessui-combobox-button-${r}`,...x}=e,p=se(),z=O(c=>{switch(c.key){case T.ArrowDown:return c.preventDefault(),c.stopPropagation(),t.comboboxState===1&&u.openCombobox(),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})});case T.ArrowUp:return c.preventDefault(),c.stopPropagation(),t.comboboxState===1&&(u.openCombobox(),p.nextFrame(()=>{t.value||u.goToOption(I.Last)})),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})});case T.Escape:return t.comboboxState!==0?void 0:(c.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&c.stopPropagation(),u.closeCombobox(),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})}));default:return}}),y=O(c=>{if(Fe(c.currentTarget))return c.preventDefault();t.comboboxState===0?u.closeCombobox():(c.preventDefault(),u.openCombobox()),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})})}),n=ue(()=>{if(t.labelId)return[t.labelId,v].join(" ")},[t.labelId,v]),a=d.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled,value:t.value}),[t]),h={ref:s,id:v,type:Te(e,t.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(l=t.optionsRef.current)==null?void 0:l.id,"aria-expanded":t.disabled?void 0:t.comboboxState===0,"aria-labelledby":n,disabled:t.disabled,onClick:y,onKeyDown:z};return K({ourProps:h,theirProps:x,slot:a,defaultTag:et,name:"Combobox.Button"})}let ot="label";function nt(e,o){let l=Q(),{id:t=`headlessui-combobox-label-${l}`,...u}=e,s=U("Combobox.Label"),r=W("Combobox.Label"),v=X(s.labelRef,o);V(()=>r.registerLabel(t),[t]);let x=O(()=>{var z;return(z=s.inputRef.current)==null?void 0:z.focus({preventScroll:!0})}),p=d.useMemo(()=>({open:s.comboboxState===0,disabled:s.disabled}),[s]);return K({ourProps:{ref:v,id:t,onClick:x},theirProps:u,slot:p,defaultTag:ot,name:"Combobox.Label"})}let rt="ul",at=be.RenderStrategy|be.Static;function lt(e,o){let l=Q(),{id:t=`headlessui-combobox-options-${l}`,hold:u=!1,...s}=e,r=U("Combobox.Options"),v=X(r.optionsRef,o),x=Pe(),p=(()=>x!==null?(x&re.Open)===re.Open:r.comboboxState===0)();V(()=>{var a;r.optionsPropsRef.current.static=(a=e.static)!=null?a:!1},[r.optionsPropsRef,e.static]),V(()=>{r.optionsPropsRef.current.hold=u},[r.optionsPropsRef,u]),$e({container:r.optionsRef.current,enabled:r.comboboxState===0,accept(a){return a.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});let z=ue(()=>{var a,h;return(h=r.labelId)!=null?h:(a=r.buttonRef.current)==null?void 0:a.id},[r.labelId,r.buttonRef.current]),y=d.useMemo(()=>({open:r.comboboxState===0}),[r]),n={"aria-labelledby":z,role:"listbox","aria-multiselectable":r.mode===1?!0:void 0,id:t,ref:v};return K({ourProps:n,theirProps:s,slot:y,defaultTag:rt,features:at,visible:p,name:"Combobox.Options"})}let it="li";function st(e,o){var l,t;let u=Q(),{id:s=`headlessui-combobox-option-${u}`,disabled:r=!1,value:v,...x}=e,p=U("Combobox.Option"),z=W("Combobox.Option"),y=p.activeOptionIndex!==null?p.options[p.activeOptionIndex].id===s:!1,n=p.isSelected(v),a=d.useRef(null),h=ke({disabled:r,value:v,domRef:a,textValue:(t=(l=a.current)==null?void 0:l.textContent)==null?void 0:t.toLowerCase()}),c=X(o,a),g=O(()=>z.selectOption(s));V(()=>z.registerOption(s,h),[h,s]);let C=d.useRef(!p.__demoMode);V(()=>{if(!p.__demoMode)return;let i=fe();return i.requestAnimationFrame(()=>{C.current=!0}),i.dispose},[]),V(()=>{if(p.comboboxState!==0||!y||!C.current||p.activationTrigger===0)return;let i=fe();return i.requestAnimationFrame(()=>{var S,_;(_=(S=a.current)==null?void 0:S.scrollIntoView)==null||_.call(S,{block:"nearest"})}),i.dispose},[a,y,p.comboboxState,p.activationTrigger,p.activeOptionIndex]);let N=O(i=>{if(r)return i.preventDefault();g(),p.mode===0&&z.closeCombobox(),He()||requestAnimationFrame(()=>{var S;return(S=p.inputRef.current)==null?void 0:S.focus()})}),F=O(()=>{if(r)return z.goToOption(I.Nothing);z.goToOption(I.Specific,s)}),k=De(),$=O(i=>k.update(i)),L=O(i=>{k.wasMoved(i)&&(r||y||z.goToOption(I.Specific,s,0))}),D=O(i=>{k.wasMoved(i)&&(r||y&&(p.optionsPropsRef.current.hold||z.goToOption(I.Nothing)))}),B=d.useMemo(()=>({active:y,selected:n,disabled:r}),[y,n,r]);return K({ourProps:{id:s,ref:c,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":n,disabled:void 0,onClick:N,onFocus:F,onPointerEnter:$,onMouseEnter:$,onPointerMove:L,onMouseMove:L,onPointerLeave:D,onMouseLeave:D},theirProps:x,slot:B,defaultTag:it,name:"Combobox.Option"})}let ut=j(Je),pt=j(tt),ct=j(Ze),dt=j(nt),bt=j(lt),ft=j(st),A=Object.assign(ut,{Input:ct,Button:pt,Label:dt,Options:bt,Option:ft});const mt=268,vt=(e,o)=>{const l=new RegExp(o,"gi");return e.replace(l,t=>"<b>"+t+"</b>")},xt=(e,o)=>M("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-background-medium":e},{"zep-bg-background-medium":o},{"zep-pr-3":o}),ie=({disabled:e=!1,items:o,label:l,message:t,noOptionsLabel:u,placeholder:s,readonly:r=!1,state:v="default",...x})=>{const p=m.useRef(null),z=m.useRef(null),y=v==="error",[n,a]=m.useState(""),[h,c]=m.useState(null),g=n!==""||h!==null,C=e||r,N=y?"zep-text-error":v==="info"?"zep-text-info":"",F=n===""?o:o.filter(k=>k.name.toLowerCase().includes(n.toLowerCase()));return m.createElement("div",{className:Ae(M("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-opacity-disabled":C}),x.className),"data-testid":"zep-drop-down-filter",...x},m.createElement(A,{as:"div",value:h,onChange:c,disabled:C},({open:k})=>{const L=Me(z.current)<mt,D=e?"zep-text-opacity-disabled":!g&&!r?"zep-text-typography-dark-100 zep-opacity-70":"zep-text-typography-dark-100",i=M("zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","zep-truncate",y?"zep-border-2":"zep-border-1",g?"zep-pr-4":"zep-pr-0.75",D,e?"zep-text-opacity-disabled":r?"zep-text-typography-dark-100 zep-opacity-70":"zep-text-typography-dark-100",{"zep-ring":k},{"zep-bg-background-medium":r},{"zep-border-1":!e&&!y},{"zep-border-opacity-disabled":e},{"zep-border-error":y},{"zep-active:ring":!C},{"zep-ring-offset-1":!C},{"focus-visible:ring":!C},{"zep-ring-focus":!C},{"zep-cursor-not-allowed":C}),S=M("zep-absolute","zep-drop-shadow-sm","zep-py-0.25","zep-z-10","zep-right-0","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","zep-drop-shadow-sm","zep-ring-1,","zep-ring-tertiary","zep-ring-opacity-1","focus:outline-none","zep-overflow-hidden","zep-overflow-y-auto",L?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":L}),_=M("zep-absolute","zep-top-0.75","zep-right-2.5","zep-flex","zep-items-center"),b=M(C?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-transition-transform","zep-duration-500","zep-shrink-0",{"zep-rotate-180":k});return m.createElement(m.Fragment,null,l&&m.createElement(A.Label,{className:M("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e})},l),m.createElement("div",{className:"zeb-block zep-relative zep-mt-0.5"},m.createElement(A.Input,{className:i,autoComplete:"off",placeholder:s,ref:z,"data-testid":"zep-drop-down-filter-input",onChange:P=>a(P.target.value)}),!!h&&m.createElement("button",{className:_,"data-testid":"zep-drop-down-filter-delete",disabled:C,onClick:()=>{a(""),c(null)}},m.createElement(oe,{className:D,name:"delete-circle",size:24})),m.createElement(A.Button,{className:"zep-absolute zep-inset-y-[0px] zep-right-[0px] zep-flex zep-items-center zep-pr-0.75"},m.createElement(oe,{className:b,name:"chevron-mini-down",role:"img",size:24})),m.createElement(_e,{as:d.Fragment,enter:"zep-transition zep-ease-out zep-duration-100",enterFrom:"zep-transform zep-opacity-0 zep-scale-95",enterTo:"zep-transform zep-opacity-100 zep-scale-100",leave:"zep-transition zep-ease-in zep-duration-25",leaveFrom:"zep-transform zep-opacity-100 zep-scale-100",leaveTo:"zep-transform zep-opacity-0 zep-scale-95"},F.length>0?m.createElement(A.Options,{className:S,ref:p,"data-testid":"zep-drop-down-filter-menu"},F.map(P=>m.createElement(A.Option,{key:P.id,"data-testid":"zep-drop-down-filter-option",value:P.name,className:({active:w,selected:q})=>xt(w,q)},({selected:w})=>m.createElement(m.Fragment,null,m.createElement("span",{className:"zep-truncate",dangerouslySetInnerHTML:{__html:vt(P.name,n)}}),w&&m.createElement(oe,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"}))))):m.createElement(A.Options,{className:S,ref:p},m.createElement(A.Option,{"data-testid":"zep-drop-down-filter-no-options",value:0,className:M("zep-block zep-py-0.75 zep-text-center")},u)))))}),t&&m.createElement("div",{className:M("zep-mt-[6px]","zep-text-typography-dark-100 zep-opacity-70","zep-text-0.875","zep-flex","zep-items-center",N)},v!=="default"&&m.createElement(oe,{name:v==="error"?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),m.createElement("span",null,t)))};try{ie.displayName="DropDownFilter",ie.__docgenInfo={description:"",displayName:"DropDownFilter",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownFilterItem[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},noOptionsLabel:{defaultValue:null,description:"",name:"noOptionsLabel",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"info"'}]}}}}}catch{}const gt=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],St={title:"Components/DropDown Filter",component:ie,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>m.createElement(Ve,{className:"zep-w-[326px]"},m.createElement(e,null))]},ne={args:{disabled:!1,items:gt,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readonly:!1,state:"default"}};var ve,xe,ge;ne.parameters={...ne.parameters,docs:{...(ve=ne.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    items,
    label: 'Dropdown Filter',
    noOptionsLabel: 'Keine Optionen',
    placeholder: 'Auswählen (Hint)',
    readonly: false,
    state: 'default'
  } as DropDownFilterProps)
}`,...(ge=(xe=ne.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const wt=["Default"];export{ne as Default,wt as __namedExportsOrder,St as default};
//# sourceMappingURL=DropDownFilter.stories-7eda3d16.js.map
