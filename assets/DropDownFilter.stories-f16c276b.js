import{r as b,R as m}from"./index-8db94870.js";import{c as M}from"./clsx.m-1229b3e0.js";import{l as V,g as Oe,o as O,S as be,D as H,T as ye,u as B,H as Ce,p as se,c as he,d as re,e as Ie,b as Se,f as we,R as Ee,X as j,I as Q,y as X,i as ue,s as Te,C as Pe,j as ke,k as De,m as I,n as E,r as Fe,q as fe,x as Ne,t as Le,v as Me,$ as _e}from"./getDistanceToBottom-0a023c77.js";import{F as oe}from"./Icon-d0877a49.js";import{t as Ae}from"./tw-merge-b02e8c47.js";import{S as Ve}from"./Spacing-8f1fefc8.js";import"./_commonjsHelpers-042e6b4d.js";function $e({container:e,accept:o,walk:l,enabled:t=!0}){let u=b.useRef(o),s=b.useRef(l);b.useEffect(()=>{u.current=o,s.current=l},[o,l]),V(()=>{if(!e||!t)return;let r=Oe(e);if(!r)return;let v=u.current,x=s.current,p=Object.assign(y=>v(y),{acceptNode:v}),z=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,p,!1);for(;z.nextNode();)x(z.currentNode)},[e,t,u,s])}function me(e,o){let l=b.useRef([]),t=O(e);b.useEffect(()=>{let u=[...l.current];for(let[s,r]of o.entries())if(l.current[s]!==r){let v=t(o,u);return l.current=o,v}},[t,...o])}function qe(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Be(){return/Android/gi.test(window.navigator.userAgent)}function He(){return qe()||Be()}var je=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(je||{}),Ke=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ke||{}),Ue=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ue||{}),Ge=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(Ge||{});function le(e,o=l=>l){let l=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=Le(o(e.options.slice()),s=>s.dataRef.current.domRef.current),u=l?t.indexOf(l):null;return u===-1&&(u=null),{options:t,activeOptionIndex:u}}let Qe={[1](e){var o;return(o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},[0](e){var o;if((o=e.dataRef.current)!=null&&o.disabled||e.comboboxState===0)return e;let l=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,u=e.options.findIndex(s=>t(s.dataRef.current.value));u!==-1&&(l=u)}return{...e,comboboxState:0,activeOptionIndex:l}},[2](e,o){var l,t,u,s;if((l=e.dataRef.current)!=null&&l.disabled||(t=e.dataRef.current)!=null&&t.optionsRef.current&&!((u=e.dataRef.current)!=null&&u.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let r=le(e);if(r.activeOptionIndex===null){let x=r.options.findIndex(p=>!p.dataRef.current.disabled);x!==-1&&(r.activeOptionIndex=x)}let v=Ne(o,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:x=>x.id,resolveDisabled:x=>x.dataRef.current.disabled});return{...e,...r,activeOptionIndex:v,activationTrigger:(s=o.trigger)!=null?s:1}},[3]:(e,o)=>{var l,t;let u={id:o.id,dataRef:o.dataRef},s=le(e,v=>[...v,u]);e.activeOptionIndex===null&&(l=e.dataRef.current)!=null&&l.isSelected(o.dataRef.current.value)&&(s.activeOptionIndex=s.options.indexOf(u));let r={...e,...s,activationTrigger:1};return(t=e.dataRef.current)!=null&&t.__demoMode&&e.dataRef.current.value===void 0&&(r.activeOptionIndex=0),r},[4]:(e,o)=>{let l=le(e,t=>{let u=t.findIndex(s=>s.id===o.id);return u!==-1&&t.splice(u,1),t});return{...e,...l,activationTrigger:1}},[5]:(e,o)=>({...e,labelId:o.id})},pe=b.createContext(null);pe.displayName="ComboboxActionsContext";function W(e){let o=b.useContext(pe);if(o===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,W),l}return o}let ce=b.createContext(null);ce.displayName="ComboboxDataContext";function K(e){let o=b.useContext(ce);if(o===null){let l=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,K),l}return o}function Xe(e,o){return B(o.type,Qe,e,o)}let We=b.Fragment;function Je(e,o){let{value:l,defaultValue:t,onChange:u,form:s,name:r,by:v=(f,R)=>f===R,disabled:x=!1,__demoMode:p=!1,nullable:z=!1,multiple:y=!1,...n}=e,[a=y?[]:void 0,h]=ye(l,u,t),[d,g]=b.useReducer(Xe,{dataRef:b.createRef(),comboboxState:p?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),C=b.useRef(!1),N=b.useRef({static:!1,hold:!1}),D=b.useRef(null),P=b.useRef(null),$=b.useRef(null),L=b.useRef(null),k=O(typeof v=="string"?(f,R)=>{let S=v;return(f==null?void 0:f[S])===(R==null?void 0:R[S])}:v),q=b.useCallback(f=>B(i.mode,{[1]:()=>a.some(R=>k(R,f)),[0]:()=>k(a,f)}),[a]),i=b.useMemo(()=>({...d,optionsPropsRef:N,labelRef:D,inputRef:P,buttonRef:$,optionsRef:L,value:a,defaultValue:t,disabled:x,mode:y?1:0,get activeOptionIndex(){if(C.current&&d.activeOptionIndex===null&&d.options.length>0){let f=d.options.findIndex(R=>!R.dataRef.current.disabled);if(f!==-1)return f}return d.activeOptionIndex},compare:k,isSelected:q,nullable:z,__demoMode:p}),[a,t,x,y,z,p,d]),w=b.useRef(i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null);b.useEffect(()=>{let f=i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null;w.current!==f&&(w.current=f)}),V(()=>{d.dataRef.current=i},[i]),Ce([i.buttonRef,i.inputRef,i.optionsRef],()=>ae.closeCombobox(),i.comboboxState===0);let _=b.useMemo(()=>({open:i.comboboxState===0,disabled:x,activeIndex:i.activeOptionIndex,activeOption:i.activeOptionIndex===null?null:i.options[i.activeOptionIndex].dataRef.current.value,value:a}),[i,x,a]),c=O(f=>{let R=i.options.find(S=>S.id===f);R&&G(R.dataRef.current.value)}),F=O(()=>{if(i.activeOptionIndex!==null){let{dataRef:f,id:R}=i.options[i.activeOptionIndex];G(f.current.value),ae.goToOption(I.Specific,R)}}),T=O(()=>{g({type:0}),C.current=!0}),U=O(()=>{g({type:1}),C.current=!1}),J=O((f,R,S)=>(C.current=!1,f===I.Specific?g({type:2,focus:I.Specific,id:R,trigger:S}):g({type:2,focus:f,trigger:S}))),Y=O((f,R)=>(g({type:3,id:f,dataRef:R}),()=>{var S;((S=w.current)==null?void 0:S.id)===f&&(C.current=!0),g({type:4,id:f})})),Z=O(f=>(g({type:5,id:f}),()=>g({type:5,id:null}))),G=O(f=>B(i.mode,{[0](){return h==null?void 0:h(f)},[1](){let R=i.value.slice(),S=R.findIndex(te=>k(te,f));return S===-1?R.push(f):R.splice(S,1),h==null?void 0:h(R)}})),ae=b.useMemo(()=>({onChange:G,registerOption:Y,registerLabel:Z,goToOption:J,closeCombobox:U,openCombobox:T,selectActiveOption:F,selectOption:c}),[]),ze=o===null?{}:{ref:o},ee=b.useRef(null),Re=se();return b.useEffect(()=>{ee.current&&t!==void 0&&Re.addEventListener(ee.current,"reset",()=>{G(t)})},[ee,G]),m.createElement(pe.Provider,{value:ae},m.createElement(ce.Provider,{value:i},m.createElement(he,{value:B(i.comboboxState,{[0]:re.Open,[1]:re.Closed})},r!=null&&a!=null&&Ie({[r]:a}).map(([f,R],S)=>m.createElement(Se,{features:we.Hidden,ref:S===0?te=>{var de;ee.current=(de=te==null?void 0:te.closest("form"))!=null?de:null}:void 0,...Ee({key:f,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:f,value:R})})),j({ourProps:ze,theirProps:n,slot:_,defaultTag:We,name:"Combobox"}))))}let Ye="input";function Ze(e,o){var l,t,u,s;let r=Q(),{id:v=`headlessui-combobox-input-${r}`,onChange:x,displayValue:p,type:z="text",...y}=e,n=K("Combobox.Input"),a=W("Combobox.Input"),h=X(n.inputRef,o),d=b.useRef(!1),g=se(),C=function(){var c;return typeof p=="function"&&n.value!==void 0?(c=p(n.value))!=null?c:"":typeof n.value=="string"?n.value:""}();me(([c,F],[T,U])=>{d.current||n.inputRef.current&&(U===0&&F===1||c!==T)&&(n.inputRef.current.value=c)},[C,n.comboboxState]),me(([c],[F])=>{if(c===0&&F===1){let T=n.inputRef.current;if(!T)return;let U=T.value,{selectionStart:J,selectionEnd:Y,selectionDirection:Z}=T;T.value="",T.value=U,Z!==null?T.setSelectionRange(J,Y,Z):T.setSelectionRange(J,Y)}},[n.comboboxState]);let N=b.useRef(!1),D=b.useRef(null),P=O(()=>{N.current=!0}),$=O(()=>{g.nextFrame(()=>{N.current=!1,D.current&&(a.openCombobox(),x==null||x(D.current),D.current=null)})}),L=O(c=>{switch(d.current=!0,c.key){case E.Backspace:case E.Delete:if(n.mode!==0||!n.nullable)return;let F=c.currentTarget;g.requestAnimationFrame(()=>{F.value===""&&(a.onChange(null),n.optionsRef.current&&(n.optionsRef.current.scrollTop=0),a.goToOption(I.Nothing))});break;case E.Enter:if(d.current=!1,n.comboboxState!==0||N.current)return;if(c.preventDefault(),c.stopPropagation(),n.activeOptionIndex===null){a.closeCombobox();return}a.selectActiveOption(),n.mode===0&&a.closeCombobox();break;case E.ArrowDown:return d.current=!1,c.preventDefault(),c.stopPropagation(),B(n.comboboxState,{[0]:()=>{a.goToOption(I.Next)},[1]:()=>{a.openCombobox()}});case E.ArrowUp:return d.current=!1,c.preventDefault(),c.stopPropagation(),B(n.comboboxState,{[0]:()=>{a.goToOption(I.Previous)},[1]:()=>{a.openCombobox(),g.nextFrame(()=>{n.value||a.goToOption(I.Last)})}});case E.Home:if(c.shiftKey)break;return d.current=!1,c.preventDefault(),c.stopPropagation(),a.goToOption(I.First);case E.PageUp:return d.current=!1,c.preventDefault(),c.stopPropagation(),a.goToOption(I.First);case E.End:if(c.shiftKey)break;return d.current=!1,c.preventDefault(),c.stopPropagation(),a.goToOption(I.Last);case E.PageDown:return d.current=!1,c.preventDefault(),c.stopPropagation(),a.goToOption(I.Last);case E.Escape:return d.current=!1,n.comboboxState!==0?void 0:(c.preventDefault(),n.optionsRef.current&&!n.optionsPropsRef.current.static&&c.stopPropagation(),a.closeCombobox());case E.Tab:if(d.current=!1,n.comboboxState!==0)return;n.mode===0&&a.selectActiveOption(),a.closeCombobox();break}}),k=O(c=>{if(N.current){D.current=c;return}a.openCombobox(),x==null||x(c)}),q=O(()=>{d.current=!1}),i=ue(()=>{if(n.labelId)return[n.labelId].join(" ")},[n.labelId]),w=b.useMemo(()=>({open:n.comboboxState===0,disabled:n.disabled}),[n]),_={ref:h,id:v,role:"combobox",type:z,"aria-controls":(l=n.optionsRef.current)==null?void 0:l.id,"aria-expanded":n.disabled?void 0:n.comboboxState===0,"aria-activedescendant":n.activeOptionIndex===null||(t=n.options[n.activeOptionIndex])==null?void 0:t.id,"aria-labelledby":i,"aria-autocomplete":"list",defaultValue:(s=(u=e.defaultValue)!=null?u:n.defaultValue!==void 0?p==null?void 0:p(n.defaultValue):null)!=null?s:n.defaultValue,disabled:n.disabled,onCompositionStart:P,onCompositionEnd:$,onKeyDown:L,onChange:k,onBlur:q};return j({ourProps:_,theirProps:y,slot:w,defaultTag:Ye,name:"Combobox.Input"})}let et="button";function tt(e,o){var l;let t=K("Combobox.Button"),u=W("Combobox.Button"),s=X(t.buttonRef,o),r=Q(),{id:v=`headlessui-combobox-button-${r}`,...x}=e,p=se(),z=O(d=>{switch(d.key){case E.ArrowDown:return d.preventDefault(),d.stopPropagation(),t.comboboxState===1&&u.openCombobox(),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})});case E.ArrowUp:return d.preventDefault(),d.stopPropagation(),t.comboboxState===1&&(u.openCombobox(),p.nextFrame(()=>{t.value||u.goToOption(I.Last)})),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})});case E.Escape:return t.comboboxState!==0?void 0:(d.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&d.stopPropagation(),u.closeCombobox(),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})}));default:return}}),y=O(d=>{if(Fe(d.currentTarget))return d.preventDefault();t.comboboxState===0?u.closeCombobox():(d.preventDefault(),u.openCombobox()),p.nextFrame(()=>{var g;return(g=t.inputRef.current)==null?void 0:g.focus({preventScroll:!0})})}),n=ue(()=>{if(t.labelId)return[t.labelId,v].join(" ")},[t.labelId,v]),a=b.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled,value:t.value}),[t]),h={ref:s,id:v,type:Te(e,t.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(l=t.optionsRef.current)==null?void 0:l.id,"aria-expanded":t.disabled?void 0:t.comboboxState===0,"aria-labelledby":n,disabled:t.disabled,onClick:y,onKeyDown:z};return j({ourProps:h,theirProps:x,slot:a,defaultTag:et,name:"Combobox.Button"})}let ot="label";function nt(e,o){let l=Q(),{id:t=`headlessui-combobox-label-${l}`,...u}=e,s=K("Combobox.Label"),r=W("Combobox.Label"),v=X(s.labelRef,o);V(()=>r.registerLabel(t),[t]);let x=O(()=>{var z;return(z=s.inputRef.current)==null?void 0:z.focus({preventScroll:!0})}),p=b.useMemo(()=>({open:s.comboboxState===0,disabled:s.disabled}),[s]);return j({ourProps:{ref:v,id:t,onClick:x},theirProps:u,slot:p,defaultTag:ot,name:"Combobox.Label"})}let rt="ul",at=be.RenderStrategy|be.Static;function lt(e,o){let l=Q(),{id:t=`headlessui-combobox-options-${l}`,hold:u=!1,...s}=e,r=K("Combobox.Options"),v=X(r.optionsRef,o),x=Pe(),p=(()=>x!==null?(x&re.Open)===re.Open:r.comboboxState===0)();V(()=>{var a;r.optionsPropsRef.current.static=(a=e.static)!=null?a:!1},[r.optionsPropsRef,e.static]),V(()=>{r.optionsPropsRef.current.hold=u},[r.optionsPropsRef,u]),$e({container:r.optionsRef.current,enabled:r.comboboxState===0,accept(a){return a.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});let z=ue(()=>{var a,h;return(h=r.labelId)!=null?h:(a=r.buttonRef.current)==null?void 0:a.id},[r.labelId,r.buttonRef.current]),y=b.useMemo(()=>({open:r.comboboxState===0}),[r]),n={"aria-labelledby":z,role:"listbox","aria-multiselectable":r.mode===1?!0:void 0,id:t,ref:v};return j({ourProps:n,theirProps:s,slot:y,defaultTag:rt,features:at,visible:p,name:"Combobox.Options"})}let it="li";function st(e,o){var l,t;let u=Q(),{id:s=`headlessui-combobox-option-${u}`,disabled:r=!1,value:v,...x}=e,p=K("Combobox.Option"),z=W("Combobox.Option"),y=p.activeOptionIndex!==null?p.options[p.activeOptionIndex].id===s:!1,n=p.isSelected(v),a=b.useRef(null),h=ke({disabled:r,value:v,domRef:a,textValue:(t=(l=a.current)==null?void 0:l.textContent)==null?void 0:t.toLowerCase()}),d=X(o,a),g=O(()=>z.selectOption(s));V(()=>z.registerOption(s,h),[h,s]);let C=b.useRef(!p.__demoMode);V(()=>{if(!p.__demoMode)return;let i=fe();return i.requestAnimationFrame(()=>{C.current=!0}),i.dispose},[]),V(()=>{if(p.comboboxState!==0||!y||!C.current||p.activationTrigger===0)return;let i=fe();return i.requestAnimationFrame(()=>{var w,_;(_=(w=a.current)==null?void 0:w.scrollIntoView)==null||_.call(w,{block:"nearest"})}),i.dispose},[a,y,p.comboboxState,p.activationTrigger,p.activeOptionIndex]);let N=O(i=>{if(r)return i.preventDefault();g(),p.mode===0&&z.closeCombobox(),He()||requestAnimationFrame(()=>{var w;return(w=p.inputRef.current)==null?void 0:w.focus()})}),D=O(()=>{if(r)return z.goToOption(I.Nothing);z.goToOption(I.Specific,s)}),P=De(),$=O(i=>P.update(i)),L=O(i=>{P.wasMoved(i)&&(r||y||z.goToOption(I.Specific,s,0))}),k=O(i=>{P.wasMoved(i)&&(r||y&&(p.optionsPropsRef.current.hold||z.goToOption(I.Nothing)))}),q=b.useMemo(()=>({active:y,selected:n,disabled:r}),[y,n,r]);return j({ourProps:{id:s,ref:d,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":n,disabled:void 0,onClick:N,onFocus:D,onPointerEnter:$,onMouseEnter:$,onPointerMove:L,onMouseMove:L,onPointerLeave:k,onMouseLeave:k},theirProps:x,slot:q,defaultTag:it,name:"Combobox.Option"})}let ut=H(Je),pt=H(tt),ct=H(Ze),dt=H(nt),bt=H(lt),ft=H(st),A=Object.assign(ut,{Input:ct,Button:pt,Label:dt,Options:bt,Option:ft});const mt=268,vt=(e,o)=>{const l=new RegExp(o,"gi");return e.replace(l,t=>"<b>"+t+"</b>")},xt=(e,o)=>M("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-background-medium":e},{"zep-bg-background-medium":o},{"zep-pr-3":o}),ie=({disabled:e=!1,items:o,label:l,message:t,noOptionsLabel:u,placeholder:s,readOnly:r=!1,state:v="default",...x})=>{const p=m.useRef(null),z=m.useRef(null),y=v==="error",[n,a]=m.useState(""),[h,d]=m.useState(null),g=n!==""||h!==null,C=e||r,N=y?"zep-text-error":v==="info"?"zep-text-info":"",D=n===""?o:o.filter(P=>P.name.toLowerCase().includes(n.toLowerCase()));return m.createElement("div",{className:Ae(M("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e}),x.className),"data-testid":"zep-drop-down-filter",...x},m.createElement(A,{as:"div",value:h,onChange:d,disabled:C},({open:P})=>{const L=Me(z.current)<mt,k=e?"zep-text-opacity-disabled":!g&&!r?"zep-text-typography-dark-100 zep-opacity-70":"zep-text-typography-dark-100",q=M("zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","zep-truncate",y?"zep-border-2":"zep-border-1",g?"zep-pr-4":"zep-pr-0.75",k,{"zep-ring":P},{"zep-bg-background-medium":r},{"zep-border-1":!e&&!y},{"zep-border-opacity-disabled":e},{"zep-border-error":y},{"zep-active:ring":!C},{"zep-ring-offset-1":!C},{"focus-visible:ring":!C},{"zep-ring-focus":!C},{"zep-cursor-not-allowed":C}),i=M("zep-absolute","zep-drop-shadow-sm","zep-py-0.25","zep-z-10","zep-right-0","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","zep-drop-shadow-sm","zep-ring-1,","zep-ring-tertiary","zep-ring-opacity-1","focus:outline-none","zep-overflow-hidden","zep-overflow-y-auto",L?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":L}),w=M("zep-absolute","zep-top-0.75","zep-right-2.5","zep-flex","zep-items-center"),_=M(C?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-transition-transform","zep-duration-500","zep-shrink-0",{"zep-rotate-180":P});return m.createElement(m.Fragment,null,l&&m.createElement(A.Label,{className:M("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e})},l),m.createElement("div",{className:"zeb-block zep-relative zep-mt-0.5"},m.createElement(A.Input,{className:q,autoComplete:"off",placeholder:r?void 0:s,readOnly:r,ref:z,"data-testid":"zep-drop-down-filter-input",onChange:c=>a(c.target.value)}),!!h&&m.createElement("button",{className:w,"data-testid":"zep-drop-down-filter-delete",disabled:C,onClick:()=>{a(""),d(null)}},m.createElement(oe,{className:k,name:"delete-circle",size:24})),m.createElement(A.Button,{className:"zep-absolute zep-inset-y-[0px] zep-right-[0px] zep-flex zep-items-center zep-pr-0.75"},m.createElement(oe,{className:_,name:"chevron-mini-down",role:"img",size:24})),m.createElement(_e,{as:b.Fragment,enter:"zep-transition zep-ease-out zep-duration-100",enterFrom:"zep-transform zep-opacity-0 zep-scale-95",enterTo:"zep-transform zep-opacity-100 zep-scale-100",leave:"zep-transition zep-ease-in zep-duration-25",leaveFrom:"zep-transform zep-opacity-100 zep-scale-100",leaveTo:"zep-transform zep-opacity-0 zep-scale-95"},D.length>0?m.createElement(A.Options,{className:i,ref:p,"data-testid":"zep-drop-down-filter-menu"},D.map(c=>m.createElement(A.Option,{key:c.id,"data-testid":"zep-drop-down-filter-option",value:c.name,className:({active:F,selected:T})=>xt(F,T)},({selected:F})=>m.createElement(m.Fragment,null,m.createElement("span",{className:"zep-truncate",dangerouslySetInnerHTML:{__html:vt(c.name,n)}}),F&&m.createElement(oe,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"}))))):m.createElement(A.Options,{className:i,ref:p},m.createElement(A.Option,{"data-testid":"zep-drop-down-filter-no-options",value:0,className:M("zep-block zep-py-0.75 zep-text-center")},u)))))}),t&&m.createElement("div",{className:M("zep-mt-[6px]","zep-text-typography-dark-100 zep-opacity-70","zep-text-0.875","zep-flex","zep-items-center",N)},v!=="default"&&m.createElement(oe,{name:v==="error"?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),m.createElement("span",null,t)))};try{ie.displayName="DropDownFilter",ie.__docgenInfo={description:"",displayName:"DropDownFilter",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownFilterItem[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},noOptionsLabel:{defaultValue:null,description:"",name:"noOptionsLabel",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}}}}}catch{}const gt=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],St={title:"Components/DropDown Filter",component:ie,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}}},decorators:[e=>m.createElement(Ve,{className:"zep-w-[326px]"},m.createElement(e,null))]},ne={args:{disabled:!1,items:gt,label:"Dropdown Filter",noOptionsLabel:"Keine Optionen",placeholder:"Auswählen (Hint)",readOnly:!1,state:"default"}};var ve,xe,ge;ne.parameters={...ne.parameters,docs:{...(ve=ne.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    items,
    label: 'Dropdown Filter',
    noOptionsLabel: 'Keine Optionen',
    placeholder: 'Auswählen (Hint)',
    readOnly: false,
    state: 'default'
  } as DropDownFilterProps)
}`,...(ge=(xe=ne.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};const wt=["Default"];export{ne as Default,wt as __namedExportsOrder,St as default};
//# sourceMappingURL=DropDownFilter.stories-f16c276b.js.map