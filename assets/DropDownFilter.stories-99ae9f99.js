import{r as c,R as m}from"./index-8db94870.js";import{c as M}from"./clsx.m-1229b3e0.js";import{F as oe}from"./Icon-83bc61a0.js";import{l as V,g as Oe,o as O,S as fe,D as j,T as Ce,u as H,H as he,p as ue,c as we,d as re,e as ye,b as Ie,f as Se,R as Ee,X as K,I as Q,y as W,i as se,s as Te,C as Pe,j as De,k as Fe,m as y,n as T,r as ke,q as be,x as Ne,t as Le,v as Me,$ as _e}from"./transition-729c66c8.js";import{t as Ae}from"./tw-merge-b02e8c47.js";import"./_commonjsHelpers-042e6b4d.js";function Ve({container:e,accept:o,walk:l,enabled:t=!0}){let s=c.useRef(o),u=c.useRef(l);c.useEffect(()=>{s.current=o,u.current=l},[o,l]),V(()=>{if(!e||!t)return;let r=Oe(e);if(!r)return;let v=s.current,x=u.current,p=Object.assign(C=>v(C),{acceptNode:v}),z=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,p,!1);for(;z.nextNode();)x(z.currentNode)},[e,t,s,u])}function me(e,o){let l=c.useRef([]),t=O(e);c.useEffect(()=>{let s=[...l.current];for(let[u,r]of o.entries())if(l.current[u]!==r){let v=t(o,s);return l.current=o,v}},[t,...o])}function $e(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function qe(){return/Android/gi.test(window.navigator.userAgent)}function Be(){return $e()||qe()}var He=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(He||{}),je=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(je||{}),Ke=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ke||{}),Ue=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(Ue||{});function le(e,o=l=>l){let l=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=Le(o(e.options.slice()),u=>u.dataRef.current.domRef.current),s=l?t.indexOf(l):null;return s===-1&&(s=null),{options:t,activeOptionIndex:s}}let Ge={[1](e){var o;return(o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},[0](e){var o;if((o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===0)return e;let l=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,s=e.options.findIndex(u=>t(u.dataRef.current.value));s!==-1&&(l=s)}return{...e,comboboxState:0,activeOptionIndex:l}},[2](e,o){var l,t,s,u;if((l=e.dataRef.current)!=null&&l.disabled||(t=e.dataRef.current)!=null&&t.optionsRef.current&&!((s=e.dataRef.current)!=null&&s.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let r=le(e);if(r.activeOptionIndex===null){let x=r.options.findIndex(p=>!p.dataRef.current.disabled);x!==-1&&(r.activeOptionIndex=x)}let v=Ne(o,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:x=>x.id,resolveDisabled:x=>x.dataRef.current.disabled});return{...e,...r,activeOptionIndex:v,activationTrigger:(u=o.trigger)!=null?u:1}},[3]:(e,o)=>{var l,t;let s={id:o.id,dataRef:o.dataRef},u=le(e,v=>[...v,s]);e.activeOptionIndex===null&&(l=e.dataRef.current)!=null&&l.isSelected(o.dataRef.current.value)&&(u.activeOptionIndex=u.options.indexOf(s));let r={...e,...u,activationTrigger:1};return(t=e.dataRef.current)!=null&&t.__demoMode&&e.dataRef.current.value===void 0&&(r.activeOptionIndex=0),r},[4]:(e,o)=>{let l=le(e,t=>{let s=t.findIndex(u=>u.id===o.id);return s!==-1&&t.splice(s,1),t});return{...e,...l,activationTrigger:1}},[5]:(e,o)=>({...e,labelId:o.id})},pe=c.createContext(null);pe.displayName="ComboboxActionsContext";function X(e){let o=c.useContext(pe);if(o===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,X),l}return o}let de=c.createContext(null);de.displayName="ComboboxDataContext";function U(e){let o=c.useContext(de);if(o===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,U),l}return o}function Qe(e,o){return H(o.type,Ge,e,o)}let We=c.Fragment;function Xe(e,o){let{value:l,defaultValue:t,onChange:s,form:u,name:r,by:v=(b,R)=>b===R,disabled:x=!1,__demoMode:p=!1,nullable:z=!1,multiple:C=!1,...n}=e,[a=C?[]:void 0,w]=Ce(l,s,t),[d,g]=c.useReducer(Qe,{dataRef:c.createRef(),comboboxState:p?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),h=c.useRef(!1),N=c.useRef({static:!1,hold:!1}),k=c.useRef(null),D=c.useRef(null),$=c.useRef(null),L=c.useRef(null),F=O(typeof v=="string"?(b,R)=>{let E=v;return(b==null?void 0:b[E])===(R==null?void 0:R[E])}:v),B=c.useCallback(b=>H(i.mode,{[1]:()=>a.some(R=>F(R,b)),[0]:()=>F(a,b)}),[a]),i=c.useMemo(()=>({...d,optionsPropsRef:N,labelRef:k,inputRef:D,buttonRef:$,optionsRef:L,value:a,defaultValue:t,disabled:x,mode:C?1:0,get activeOptionIndex(){if(h.current&&d.activeOptionIndex===null&&d.options.length>0){let b=d.options.findIndex(R=>!R.dataRef.current.disabled);if(b!==-1)return b}return d.activeOptionIndex},compare:F,isSelected:B,nullable:z,__demoMode:p}),[a,t,x,C,z,p,d]),I=c.useRef(i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null);c.useEffect(()=>{let b=i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null;I.current!==b&&(I.current=b)}),V(()=>{d.dataRef.current=i},[i]),he([i.buttonRef,i.inputRef,i.optionsRef],()=>ae.closeCombobox(),i.comboboxState===0);let _=c.useMemo(()=>({open:i.comboboxState===0,disabled:x,activeIndex:i.activeOptionIndex,activeOption:i.activeOptionIndex===null?null:i.options[i.activeOptionIndex].dataRef.current.value,value:a}),[i,x,a]),f=O(b=>{let R=i.options.find(E=>E.id===b);R&&G(R.dataRef.current.value)}),P=O(()=>{if(i.activeOptionIndex!==null){let{dataRef:b,id:R}=i.options[i.activeOptionIndex];G(b.current.value),ae.goToOption(y.Specific,R)}}),S=O(()=>{g({type:0}),h.current=!0}),q=O(()=>{g({type:1}),h.current=!1}),J=O((b,R,E)=>(h.current=!1,b===y.Specific?g({type:2,focus:y.Specific,id:R,trigger:E}):g({type:2,focus:b,trigger:E}))),Y=O((b,R)=>(g({type:3,id:b,dataRef:R}),()=>{var E;((E=I.current)==null?void 0:E.id)===b&&(h.current=!0),g({type:4,id:b})})),Z=O(b=>(g({type:5,id:b}),()=>g({type:5,id:null}))),G=O(b=>H(i.mode,{[0](){return w==null?void 0:w(b)},[1](){let R=i.value.slice(),E=R.findIndex(te=>F(te,b));return E===-1?R.push(b):R.splice(E,1),w==null?void 0:w(R)}})),ae=c.useMemo(()=>({onChange:G,registerOption:Y,registerLabel:Z,goToOption:J,closeCombobox:q,openCombobox:S,selectActiveOption:P,selectOption:f}),[]),ze=o===null?{}:{ref:o},ee=c.useRef(null),Re=ue();return c.useEffect(()=>{ee.current&&t!==void 0&&Re.addEventListener(ee.current,"reset",()=>{G(t)})},[ee,G]),m.createElement(pe.Provider,{value:ae},m.createElement(de.Provider,{value:i},m.createElement(we,{value:H(i.comboboxState,{[0]:re.Open,[1]:re.Closed})},r!=null&&a!=null&&ye({[r]:a}).map(([b,R],E)=>m.createElement(Ie,{features:Se.Hidden,ref:E===0?te=>{var ce;ee.current=(ce=te==null?void 0:te.closest("form"))!=null?ce:null}:void 0,...Ee({key:b,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:u,name:b,value:R})})),K({ourProps:ze,theirProps:n,slot:_,defaultTag:We,name:"Combobox"}))))}let Je="input";function Ye(e,o){var l,t,s,u;let r=Q(),{id:v=`headlessui-combobox-input-${r}`,onChange:x,displayValue:p,type:z="text",...C}=e,n=U("Combobox.Input"),a=X("Combobox.Input"),w=W(n.inputRef,o),d=c.useRef(!1),g=ue(),h=function(){var f;return typeof p=="function"&&n.value!==void 0?(f=p(n.value))!=null?f:"":typeof n.value=="string"?n.value:""}();me(([f,P],[S,q])=>{d.current||n.inputRef.current&&(q===0&&P===1||f!==S)&&(n.inputRef.current.value=f)},[h,n.comboboxState]),me(([f],[P])=>{if(f===0&&P===1){let S=n.inputRef.current;if(!S)return;let q=S.value,{selectionStart:J,selectionEnd:Y,selectionDirection:Z}=S;S.value="",S.value=q,Z!==null?S.setSelectionRange(J,Y,Z):S.setSelectionRange(J,Y)}},[n.comboboxState]);let N=c.useRef(!1),k=c.useRef(null),D=O(()=>{N.current=!0}),$=O(()=>{g.nextFrame(()=>{N.current=!1,k.current&&(a.openCombobox(),x==null||x(k.current),k.current=null)})}),L=O(f=>{switch(d.current=!0,f.key){case T.Backspace:case T.Delete:if(n.mode!==0||!n.nullable)return;let P=f.currentTarget;g.requestAnimationFrame(()=>{P.value===""&&(a.onChange(null),n.optionsRef.current&&(n.optionsRef.current.scrollTop=0),a.goToOption(y.Nothing))});break;case T.Enter:if(d.current=!1,n.comboboxState!==0||N.current)return;if(f.preventDefault(),f.stopPropagation(),n.activeOptionIndex===null){a.closeCombobox();return}a.selectActiveOption(),n.mode===0&&a.closeCombobox();break;case T.ArrowDown:return d.current=!1,f.preventDefault(),f.stopPropagation(),H(n.comboboxState,{[0]:()=>{a.goToOption(y.Next)},[1]:()=>{a.openCombobox()}});case T.ArrowUp:return d.current=!1,f.preventDefault(),f.stopPropagation(),H(n.comboboxState,{[0]:()=>{a.goToOption(y.Previous)},[1]:()=>{a.openCombobox(),g.nextFrame(()=>{n.value||a.goToOption(y.Last)})}});case T.Home:if(f.shiftKey)break;return d.current=!1,f.preventDefault(),f.stopPropagation(),a.goToOption(y.First);case T.PageUp:return d.current=!1,f.preventDefault(),f.stopPropagation(),a.goToOption(y.First);case T.End:if(f.shiftKey)break;return d.current=!1,f.preventDefault(),f.stopPropagation(),a.goToOption(y.Last);case T.PageDown:return d.current=!1,f.preventDefault(),f.stopPropagation(),a.goToOption(y.Last);case T.Escape:return d.current=!1,n.comboboxState!==0?void 0:(f.preventDefault(),n.optionsRef.current&&!n.optionsPropsRef.current.static&&f.stopPropagation(),a.closeCombobox());case T.Tab:if(d.current=!1,n.comboboxState!==0)return;n.mode===0&&a.selectActiveOption(),a.closeCombobox();break}}),F=O(f=>{if(N.current){k.current=f;return}a.openCombobox(),x==null||x(f)}),B=O(()=>{d.current=!1}),i=se(()=>{if(n.labelId)return[n.labelId].join(" ")},[n.labelId]),I=c.useMemo(()=>({open:n.comboboxState===0,disabled:n.disabled}),[n]),_={ref:w,id:v,role:"combobox",type:z,"aria-controls":(l=n.optionsRef.current)==null?void 0:l.id,"aria-expanded":n.disabled?void 0:n.comboboxState===0,"aria-activedescendant":n.activeOptionIndex===null||(t=n.options[n.activeOptionIndex])==null?void 0:t.id,"aria-labelledby":i,"aria-autocomplete":"list",defaultValue:(u=(s=e.defaultValue)!=null?s:n.defaultValue!==void 0?p==null?void 0:p(n.defaultValue):null)!=null?u:n.defaultValue,disabled:n.disabled,onCompositionStart:D,onCompositionEnd:$,onKeyDown:L,onChange:F,onBlur:B};return K({ourProps:_,theirProps:C,slot:I,defaultTag:Je,name:"Combobox.Input"})}let Ze="button";function et(e,o){var l;let t=U("Combobox.Button"),s=X("Combobox.Button"),u=W(t.buttonRef,o),r=Q(),{id:v=`headlessui-combobox-button-${r}`,...x}=e,p=ue(),z=O(d=>{switch(d.key){case T.ArrowDown:return d.preventDefault(),d.stopPropagation(),t.comboboxState===1&&s.openCombobox(),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})});case T.ArrowUp:return d.preventDefault(),d.stopPropagation(),t.comboboxState===1&&(s.openCombobox(),p.nextFrame(()=>{t.value||s.goToOption(y.Last)})),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})});case T.Escape:return t.comboboxState!==0?void 0:(d.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&d.stopPropagation(),s.closeCombobox(),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})}));default:return}}),C=O(d=>{if(ke(d.currentTarget))return d.preventDefault();t.comboboxState===0?s.closeCombobox():(d.preventDefault(),s.openCombobox()),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})})}),n=se(()=>{if(t.labelId)return[t.labelId,v].join(" ")},[t.labelId,v]),a=c.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled,value:t.value}),[t]),w={ref:u,id:v,type:Te(e,t.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(l=t.optionsRef.current)==null?void 0:l.id,"aria-expanded":t.disabled?void 0:t.comboboxState===0,"aria-labelledby":n,disabled:t.disabled,onClick:C,onKeyDown:z};return K({ourProps:w,theirProps:x,slot:a,defaultTag:Ze,name:"Combobox.Button"})}let tt="label";function ot(e,o){let l=Q(),{id:t=`headlessui-combobox-label-${l}`,...s}=e,u=U("Combobox.Label"),r=X("Combobox.Label"),v=W(u.labelRef,o);V(()=>r.registerLabel(t),[t]);let x=O(()=>{var z;return(z=u.inputRef.current)==null?void 0:z.focus({preventScroll:!0})}),p=c.useMemo(()=>({open:u.comboboxState===0,disabled:u.disabled}),[u]);return K({ourProps:{ref:v,id:t,onClick:x},theirProps:s,slot:p,defaultTag:tt,name:"Combobox.Label"})}let nt="ul",rt=fe.RenderStrategy|fe.Static;function at(e,o){let l=Q(),{id:t=`headlessui-combobox-options-${l}`,hold:s=!1,...u}=e,r=U("Combobox.Options"),v=W(r.optionsRef,o),x=Pe(),p=(()=>x!==null?(x&re.Open)===re.Open:r.comboboxState===0)();V(()=>{var a;r.optionsPropsRef.current.static=(a=e.static)!=null?a:!1},[r.optionsPropsRef,e.static]),V(()=>{r.optionsPropsRef.current.hold=s},[r.optionsPropsRef,s]),Ve({container:r.optionsRef.current,enabled:r.comboboxState===0,accept(a){return a.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});let z=se(()=>{var a,w;return(w=r.labelId)!=null?w:(a=r.buttonRef.current)==null?void 0:a.id},[r.labelId,r.buttonRef.current]),C=c.useMemo(()=>({open:r.comboboxState===0}),[r]),n={"aria-labelledby":z,role:"listbox","aria-multiselectable":r.mode===1?!0:void 0,id:t,ref:v};return K({ourProps:n,theirProps:u,slot:C,defaultTag:nt,features:rt,visible:p,name:"Combobox.Options"})}let lt="li";function it(e,o){var l,t;let s=Q(),{id:u=`headlessui-combobox-option-${s}`,disabled:r=!1,value:v,...x}=e,p=U("Combobox.Option"),z=X("Combobox.Option"),C=p.activeOptionIndex!==null?p.options[p.activeOptionIndex].id===u:!1,n=p.isSelected(v),a=c.useRef(null),w=De({disabled:r,value:v,domRef:a,textValue:(t=(l=a.current)==null?void 0:l.textContent)==null?void 0:t.toLowerCase()}),d=W(o,a),g=O(()=>z.selectOption(u));V(()=>z.registerOption(u,w),[w,u]);let h=c.useRef(!p.__demoMode);V(()=>{if(!p.__demoMode)return;let i=be();return i.requestAnimationFrame(()=>{h.current=!0}),i.dispose},[]),V(()=>{if(p.comboboxState!==0||!C||!h.current||p.activationTrigger===0)return;let i=be();return i.requestAnimationFrame(()=>{var I,_;(_=(I=a.current)==null?void 0:I.scrollIntoView)==null||_.call(I,{block:"nearest"})}),i.dispose},[a,C,p.comboboxState,p.activationTrigger,p.activeOptionIndex]);let N=O(i=>{if(r)return i.preventDefault();g(),p.mode===0&&z.closeCombobox(),Be()||requestAnimationFrame(()=>{var I;return(I=p.inputRef.current)==null?void 0:I.focus()})}),k=O(()=>{if(r)return z.goToOption(y.Nothing);z.goToOption(y.Specific,u)}),D=Fe(),$=O(i=>D.update(i)),L=O(i=>{D.wasMoved(i)&&(r||C||z.goToOption(y.Specific,u,0))}),F=O(i=>{D.wasMoved(i)&&(r||C&&(p.optionsPropsRef.current.hold||z.goToOption(y.Nothing)))}),B=c.useMemo(()=>({active:C,selected:n,disabled:r}),[C,n,r]);return K({ourProps:{id:u,ref:d,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":n,disabled:void 0,onClick:N,onFocus:k,onPointerEnter:$,onMouseEnter:$,onPointerMove:L,onMouseMove:L,onPointerLeave:F,onMouseLeave:F},theirProps:x,slot:B,defaultTag:lt,name:"Combobox.Option"})}let ut=j(Xe),st=j(et),pt=j(Ye),dt=j(ot),ct=j(at),ft=j(it),A=Object.assign(ut,{Input:pt,Button:st,Label:dt,Options:ct,Option:ft});const bt=268,mt=(e,o)=>{const l=new RegExp(o,"gi");return e.replace(l,t=>"<b>"+t+"</b>")},vt=(e,o)=>M("zep-flex zep-w-full zep-items-center zep-justify-between zep-px-1 zep-py-0.75",{"zep-bg-dropdown-bg-readOnly/70":e},{"zep-bg-dropdown-bg-readOnly":o},{"zep-pr-3":o}),ie=({disabled:e=!1,items:o,label:l,message:t,noOptionsLabel:s,placeholder:u,readonly:r=!1,state:v="default",...x})=>{const p=m.useRef(null),z=m.useRef(null),C=v==="error",[n,a]=m.useState(""),[w,d]=m.useState(null),g=n!==""||w!==null,h=e||r,N=C?"zep-text-dropdown-supportText-error":v==="info"?"zep-text-dropdown-supportText-info":"zep-text-dropdown-supportText-default",k=n===""?o:o.filter(D=>D.name.toLowerCase().includes(n.toLowerCase()));return m.createElement("div",{className:Ae(M("zep-relative","zep-inline-block","zep-text-left","zep-w-[326px]"),x.className),"data-testid":"zep-drop-down-filter",...x},m.createElement(A,{as:"div",value:w,onChange:d,disabled:h},({open:D})=>{const L=Me(z.current)<bt,F=e?"zep-text-dropdown-placeholder-default/40":!g&&!r?"zep-text-dropdown-placeholder-default/70":"zep-text-dropdown-placeholder-default",i=M("zep-inline-flex","zep-justify-between","zep-rounded-dropdown","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","zep-truncate",C?"zep-border-2":"zep-border-1",g?"zep-pr-4":"zep-pr-0.75",F,e?"zep-text-dropdown-placeholder-default/40":r?"zep-text-dropdown-placeholder-default/70":"zep-text-dropdown-placeholder-default",{"zep-ring":D},{"zep-bg-dropdown-bg-readOnly":r},{"zep-border-dropdown-default":!e&&!C},{"border-zep-typography-dark-70/40":e},{"zep-border-error":C},{"zep-active:ring":!h},{"zep-ring-offset-1":!h},{"focus-visible:ring":!h},{"zep-ring-focus":!h},{"zep-cursor-not-allowed":h}),I=M("zep-absolute","zep-py-0.25","zep-z-10","zep-right-0","zep-w-[326px]","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-dropdown","zep-bg-dropdown-bg-default","zep-drop-shadow-sm","zep-ring-1,","zep-ring-tertiary","zep-ring-opacity-1","focus:outline-none","zep-overflow-hidden","zep-overflow-y-auto",L?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":L}),_=M("zep-absolute","zep-top-0.75","zep-right-2.5","zep-flex","zep-items-center"),f=M(h?"zep-text-dropdown-placeholder-default/40":"zep-text-dropdown-placeholder-default","zep-transition-transform","zep-duration-500","zep-shrink-0",{"zep-rotate-180":D});return m.createElement(m.Fragment,null,l&&m.createElement(A.Label,{className:M("zep-block","zep-mb-0.5",{"text-zep-typography-dark-70/40":e})},l),m.createElement("div",{className:"zeb-block zep-relative zep-mt-0.5"},m.createElement(A.Input,{className:i,autoComplete:"off",placeholder:u,ref:z,"data-testid":"zep-drop-down-filter-input",onChange:P=>a(P.target.value)}),!!w&&m.createElement("button",{className:_,"data-testid":"zep-drop-down-filter-delete",disabled:h,onClick:()=>{a(""),d(null)}},m.createElement(oe,{className:F,name:"DelectCircle",size:24})),m.createElement(A.Button,{className:"zep-absolute zep-inset-y-[0px] zep-right-[0px] zep-flex zep-items-center zep-pr-0.5"},m.createElement(oe,{className:f,name:"ChevronMiniDown",role:"img",size:24})),m.createElement(_e,{as:c.Fragment,enter:"zep-transition zep-ease-out zep-duration-100",enterFrom:"zep-transform zep-opacity-0 zep-scale-95",enterTo:"zep-transform zep-opacity-100 zep-scale-100",leave:"zep-transition zep-ease-in zep-duration-25",leaveFrom:"zep-transform zep-opacity-100 zep-scale-100",leaveTo:"zep-transform zep-opacity-0 zep-scale-95"},k.length>0?m.createElement(A.Options,{className:I,ref:p,"data-testid":"zep-drop-down-filter-menu"},k.map(P=>m.createElement(A.Option,{key:P.id,"data-testid":"zep-drop-down-filter-option",value:P.name,className:({active:S,selected:q})=>vt(S,q)},({selected:S})=>m.createElement(m.Fragment,null,m.createElement("span",{className:"zep-truncate",dangerouslySetInnerHTML:{__html:mt(P.name,n)}}),S&&m.createElement(oe,{name:"Check",role:"img",size:24,className:"zep-absolute zep-right-1"}))))):m.createElement(A.Options,{className:I,ref:p},m.createElement(A.Option,{"data-testid":"zep-drop-down-filter-no-options",value:0,className:M("zep-block zep-py-0.75 zep-text-center")},s)))))}),t&&m.createElement("div",{className:M("zep-mt-[6px]","zep-tagline","zep-text-0.875","zep-flex","zep-items-center",N)},v!=="default"&&m.createElement(oe,{name:v==="error"?"WarningTriangleFilled":"InfoCircleFilled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),m.createElement("span",null,t)))};try{ie.displayName="DropDownFilter",ie.__docgenInfo={description:"",displayName:"DropDownFilter",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownFilterItem[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},noOptionsLabel:{defaultValue:null,description:"",name:"noOptionsLabel",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"info"'}]}}}}}catch{}const xt=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],wt={title:"Components/DropDown Filter",component:ie,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>m.createElement("div",{style:{height:350}},m.createElement(e,null))]},ne={args:{disabled:!1,items:xt,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readonly:!1,state:"default"}};var ve,xe,ge;ne.parameters={...ne.parameters,docs:{...(ve=ne.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    items,
    label: 'Dropdown Filter',
    noOptionsLabel: 'Keine Optionen',
    placeholder: 'Auswählen (Hint)',
    readonly: false,
    state: 'default'
  } as DropDownFilterProps)
}`,...(ge=(xe=ne.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const yt=["Default"];export{ne as Default,yt as __namedExportsOrder,wt as default};
//# sourceMappingURL=DropDownFilter.stories-99ae9f99.js.map
