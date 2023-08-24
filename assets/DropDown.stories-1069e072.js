import{r as d,R as p}from"./index-8db94870.js";import{c as k}from"./clsx.m-1229b3e0.js";import{F as W}from"./Icon-a1e3a7f8.js";import{o as b,S as ae,D as A,y as B,T as Oe,u as C,l as j,H as Re,h as Se,a as Le,p as G,c as De,d as K,e as Ee,b as we,f as Ie,R as Te,X as V,I as X,i as pe,s as ke,C as $e,g as Ce,j as Fe,k as Pe,m as w,n as O,r as Ne,q as Z,x as Me,t as Ae,v as Be,$ as Ve}from"./transition-729c66c8.js";import{t as qe}from"./tw-merge-b02e8c47.js";import{S as He}from"./Spacing-2c30780b.js";import"./_commonjsHelpers-042e6b4d.js";let oe=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function le(e){var r,o;let n=(r=e.innerText)!=null?r:"",l=e.cloneNode(!0);if(!(l instanceof HTMLElement))return n;let i=!1;for(let s of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),i=!0;let t=i?(o=l.innerText)!=null?o:"":n;return oe.test(t)&&(t=t.replace(oe,"")),t}function _e(e){let r=e.getAttribute("aria-label");if(typeof r=="string")return r.trim();let o=e.getAttribute("aria-labelledby");if(o){let n=o.split(" ").map(l=>{let i=document.getElementById(l);if(i){let t=i.getAttribute("aria-label");return typeof t=="string"?t.trim():le(i).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return le(e).trim()}function Qe(e){let r=d.useRef(""),o=d.useRef("");return b(()=>{let n=e.current;if(!n)return"";let l=n.innerText;if(r.current===l)return o.current;let i=_e(n).trim().toLowerCase();return r.current=l,o.current=i,i})}var Ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ue||{}),je=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(je||{}),Ge=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ge||{}),Ke=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ke||{});function Y(e,r=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=Ae(r(e.options.slice()),i=>i.dataRef.current.domRef.current),l=o?n.indexOf(o):null;return l===-1&&(l=null),{options:n,activeOptionIndex:l}}let Xe={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,n=e.options.findIndex(l=>o(l.dataRef.current.value));return n!==-1&&(r=n),{...e,listboxState:0,activeOptionIndex:r}},[2](e,r){var o;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=Y(e),l=Me(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:l,activationTrigger:(o=r.trigger)!=null?o:1}},[3]:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=e.searchQuery!==""?0:1,n=e.searchQuery+r.value.toLowerCase(),l=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+o).concat(e.options.slice(0,e.activeOptionIndex+o)):e.options).find(t=>{var s;return!t.dataRef.current.disabled&&((s=t.dataRef.current.textValue)==null?void 0:s.startsWith(n))}),i=l?e.options.indexOf(l):-1;return i===-1||i===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:i,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,r)=>{let o={id:r.id,dataRef:r.dataRef},n=Y(e,l=>[...l,o]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(o)),{...e,...n}},[6]:(e,r)=>{let o=Y(e,n=>{let l=n.findIndex(i=>i.id===r.id);return l!==-1&&n.splice(l,1),n});return{...e,...o,activationTrigger:1}},[7]:(e,r)=>({...e,labelId:r.id})},te=d.createContext(null);te.displayName="ListboxActionsContext";function q(e){let r=d.useContext(te);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,q),o}return r}let ne=d.createContext(null);ne.displayName="ListboxDataContext";function H(e){let r=d.useContext(ne);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,H),o}return r}function Je(e,r){return C(r.type,Xe,e,r)}let We=d.Fragment;function Ye(e,r){let{value:o,defaultValue:n,form:l,name:i,onChange:t,by:s=(u,f)=>u===f,disabled:c=!1,horizontal:g=!1,multiple:z=!1,...S}=e;const I=g?"horizontal":"vertical";let R=B(r),[y=z?[]:void 0,D]=Oe(o,t,n),[x,a]=d.useReducer(Je,{dataRef:d.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),m=d.useRef({static:!1,hold:!1}),T=d.useRef(null),$=d.useRef(null),F=d.useRef(null),h=b(typeof s=="string"?(u,f)=>{let L=s;return(u==null?void 0:u[L])===(f==null?void 0:f[L])}:s),E=d.useCallback(u=>C(v.mode,{[1]:()=>y.some(f=>h(f,u)),[0]:()=>h(y,u)}),[y]),v=d.useMemo(()=>({...x,value:y,disabled:c,mode:z?1:0,orientation:I,compare:h,isSelected:E,optionsPropsRef:m,labelRef:T,buttonRef:$,optionsRef:F}),[y,c,z,x]);j(()=>{x.dataRef.current=v},[v]),Re([v.buttonRef,v.optionsRef],(u,f)=>{var L;a({type:1}),Se(f,Le.Loose)||(u.preventDefault(),(L=v.buttonRef.current)==null||L.focus())},v.listboxState===0);let P=d.useMemo(()=>({open:v.listboxState===0,disabled:c,value:y}),[v,c,y]),J=b(u=>{let f=v.options.find(L=>L.id===u);f&&N(f.dataRef.current.value)}),ce=b(()=>{if(v.activeOptionIndex!==null){let{dataRef:u,id:f}=v.options[v.activeOptionIndex];N(u.current.value),a({type:2,focus:w.Specific,id:f})}}),de=b(()=>a({type:0})),fe=b(()=>a({type:1})),me=b((u,f,L)=>u===w.Specific?a({type:2,focus:w.Specific,id:f,trigger:L}):a({type:2,focus:u,trigger:L})),be=b((u,f)=>(a({type:5,id:u,dataRef:f}),()=>a({type:6,id:u}))),ve=b(u=>(a({type:7,id:u}),()=>a({type:7,id:null}))),N=b(u=>C(v.mode,{[0](){return D==null?void 0:D(u)},[1](){let f=v.value.slice(),L=f.findIndex(Q=>h(Q,u));return L===-1?f.push(u):f.splice(L,1),D==null?void 0:D(f)}})),xe=b(u=>a({type:3,value:u})),ge=b(()=>a({type:4})),ze=d.useMemo(()=>({onChange:N,registerOption:be,registerLabel:ve,goToOption:me,closeListbox:fe,openListbox:de,selectActiveOption:ce,selectOption:J,search:xe,clearSearch:ge}),[]),ye={ref:R},_=d.useRef(null),he=G();return d.useEffect(()=>{_.current&&n!==void 0&&he.addEventListener(_.current,"reset",()=>{N(n)})},[_,N]),p.createElement(te.Provider,{value:ze},p.createElement(ne.Provider,{value:v},p.createElement(De,{value:C(v.listboxState,{[0]:K.Open,[1]:K.Closed})},i!=null&&y!=null&&Ee({[i]:y}).map(([u,f],L)=>p.createElement(we,{features:Ie.Hidden,ref:L===0?Q=>{var re;_.current=(re=Q==null?void 0:Q.closest("form"))!=null?re:null}:void 0,...Te({key:u,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:u,value:f})})),V({ourProps:ye,theirProps:S,slot:P,defaultTag:We,name:"Listbox"}))))}let Ze="button";function et(e,r){var o;let n=X(),{id:l=`headlessui-listbox-button-${n}`,...i}=e,t=H("Listbox.Button"),s=q("Listbox.Button"),c=B(t.buttonRef,r),g=G(),z=b(x=>{switch(x.key){case O.Space:case O.Enter:case O.ArrowDown:x.preventDefault(),s.openListbox(),g.nextFrame(()=>{t.value||s.goToOption(w.First)});break;case O.ArrowUp:x.preventDefault(),s.openListbox(),g.nextFrame(()=>{t.value||s.goToOption(w.Last)});break}}),S=b(x=>{switch(x.key){case O.Space:x.preventDefault();break}}),I=b(x=>{if(Ne(x.currentTarget))return x.preventDefault();t.listboxState===0?(s.closeListbox(),g.nextFrame(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(x.preventDefault(),s.openListbox())}),R=pe(()=>{if(t.labelId)return[t.labelId,l].join(" ")},[t.labelId,l]),y=d.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),D={ref:c,id:l,type:ke(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(o=t.optionsRef.current)==null?void 0:o.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":R,disabled:t.disabled,onKeyDown:z,onKeyUp:S,onClick:I};return V({ourProps:D,theirProps:i,slot:y,defaultTag:Ze,name:"Listbox.Button"})}let tt="label";function nt(e,r){let o=X(),{id:n=`headlessui-listbox-label-${o}`,...l}=e,i=H("Listbox.Label"),t=q("Listbox.Label"),s=B(i.labelRef,r);j(()=>t.registerLabel(n),[n]);let c=b(()=>{var z;return(z=i.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}),g=d.useMemo(()=>({open:i.listboxState===0,disabled:i.disabled}),[i]);return V({ourProps:{ref:s,id:n,onClick:c},theirProps:l,slot:g,defaultTag:tt,name:"Listbox.Label"})}let rt="ul",at=ae.RenderStrategy|ae.Static;function ot(e,r){var o;let n=X(),{id:l=`headlessui-listbox-options-${n}`,...i}=e,t=H("Listbox.Options"),s=q("Listbox.Options"),c=B(t.optionsRef,r),g=G(),z=G(),S=$e(),I=(()=>S!==null?(S&K.Open)===K.Open:t.listboxState===0)();d.useEffect(()=>{var a;let m=t.optionsRef.current;m&&t.listboxState===0&&m!==((a=Ce(m))==null?void 0:a.activeElement)&&m.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let R=b(a=>{switch(z.dispose(),a.key){case O.Space:if(t.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),s.search(a.key);case O.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:m}=t.options[t.activeOptionIndex];s.onChange(m.current.value)}t.mode===0&&(s.closeListbox(),Z().nextFrame(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}));break;case C(t.orientation,{vertical:O.ArrowDown,horizontal:O.ArrowRight}):return a.preventDefault(),a.stopPropagation(),s.goToOption(w.Next);case C(t.orientation,{vertical:O.ArrowUp,horizontal:O.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),s.goToOption(w.Previous);case O.Home:case O.PageUp:return a.preventDefault(),a.stopPropagation(),s.goToOption(w.First);case O.End:case O.PageDown:return a.preventDefault(),a.stopPropagation(),s.goToOption(w.Last);case O.Escape:return a.preventDefault(),a.stopPropagation(),s.closeListbox(),g.nextFrame(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})});case O.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(s.search(a.key),z.setTimeout(()=>s.clearSearch(),350));break}}),y=pe(()=>{var a,m,T;return(T=(a=t.labelRef.current)==null?void 0:a.id)!=null?T:(m=t.buttonRef.current)==null?void 0:m.id},[t.labelRef.current,t.buttonRef.current]),D=d.useMemo(()=>({open:t.listboxState===0}),[t]),x={"aria-activedescendant":t.activeOptionIndex===null||(o=t.options[t.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":y,"aria-orientation":t.orientation,id:l,onKeyDown:R,role:"listbox",tabIndex:0,ref:c};return V({ourProps:x,theirProps:i,slot:D,defaultTag:rt,features:at,visible:I,name:"Listbox.Options"})}let lt="li";function it(e,r){let o=X(),{id:n=`headlessui-listbox-option-${o}`,disabled:l=!1,value:i,...t}=e,s=H("Listbox.Option"),c=q("Listbox.Option"),g=s.activeOptionIndex!==null?s.options[s.activeOptionIndex].id===n:!1,z=s.isSelected(i),S=d.useRef(null),I=Qe(S),R=Fe({disabled:l,value:i,domRef:S,get textValue(){return I()}}),y=B(r,S);j(()=>{if(s.listboxState!==0||!g||s.activationTrigger===0)return;let h=Z();return h.requestAnimationFrame(()=>{var E,v;(v=(E=S.current)==null?void 0:E.scrollIntoView)==null||v.call(E,{block:"nearest"})}),h.dispose},[S,g,s.listboxState,s.activationTrigger,s.activeOptionIndex]),j(()=>c.registerOption(n,R),[R,n]);let D=b(h=>{if(l)return h.preventDefault();c.onChange(i),s.mode===0&&(c.closeListbox(),Z().nextFrame(()=>{var E;return(E=s.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})}))}),x=b(()=>{if(l)return c.goToOption(w.Nothing);c.goToOption(w.Specific,n)}),a=Pe(),m=b(h=>a.update(h)),T=b(h=>{a.wasMoved(h)&&(l||g||c.goToOption(w.Specific,n,0))}),$=b(h=>{a.wasMoved(h)&&(l||g&&c.goToOption(w.Nothing))}),F=d.useMemo(()=>({active:g,selected:z,disabled:l}),[g,z,l]);return V({ourProps:{id:n,ref:y,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":z,disabled:void 0,onClick:D,onFocus:x,onPointerEnter:m,onMouseEnter:m,onPointerMove:T,onMouseMove:T,onPointerLeave:$,onMouseLeave:$},theirProps:t,slot:F,defaultTag:lt,name:"Listbox.Option"})}let st=A(Ye),ut=A(et),pt=A(nt),ct=A(ot),dt=A(it),M=Object.assign(st,{Button:ut,Label:pt,Options:ct,Option:dt});const ft=268,mt=(e,r)=>k("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-background-medium":e},{"zep-bg-background-medium":r},{"zep-pr-3":r}),ee=({disabled:e=!1,items:r,message:o,label:n,placeholder:l,readonly:i=!1,state:t="default",...s})=>{const[c,g]=p.useState(),z=p.useRef(null),S=p.useRef(null),I=t==="error",R=e||i,y=I?"zep-text-error":t==="info"?"zep-text-info":"";return p.createElement("div",{className:qe(k("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-pointer-events-none zep-opacity-disabled":e}),s.className),"data-testid":"zep-drop-down"},p.createElement(M,{disabled:R,value:c,onChange:g},({open:D})=>{const a=Be(S.current)<ft,m=(c==null?void 0:c.name)??l,T=e?"zep-text-opacity-disabled":!(c!=null&&c.name)&&!i?"zep-text-typography-dark-100 zep-opacity-70":"zep-text-typography-dark-100",$=k("zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",I?"zep-border-2":"zep-border-1",T,{"zep-bg-background-medium":i},{"zep-ring":D},{"zep-border-error":I},{"zep-active:ring":!R},{"zep-ring-offset-1":!R},{"focus-visible:zep-ring":!R},{"zep-ring-focus":!R},{"zep-cursor-not-allowed":R}),F=k("zep-absolute","zep-drop-shadow-sm","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","zep-drop-shadow-sm","focus:outline-none","zep-overflow-hidden","zep-overflow-y-auto",a?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":a}),h=k(R?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-transition-transform","zep-duration-500","zep-shrink-0",{"zep-rotate-180":D});return p.createElement(p.Fragment,null,n&&p.createElement(M.Label,{className:k("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e})},n),p.createElement(M.Button,{className:$,ref:S,title:m,"data-testid":"zep-drop-down-button"},p.createElement(p.Fragment,null,p.createElement("span",{className:"zep-truncate"},m),p.createElement(W,{className:h,name:"chevron-mini-down",role:"img",size:24}))),p.createElement(Ve,{as:d.Fragment,enter:"zep-transition zep-ease-out zep-duration-100",enterFrom:"zep-transform zep-opacity-0 zep-scale-95",enterTo:"zep-transform zep-opacity-100 zep-scale-100",leave:"zep-transition zep-ease-in zep-duration-25",leaveFrom:"zep-transform zep-opacity-100 zep-scale-100",leaveTo:"zep-transform zep-opacity-0 zep-scale-95"},p.createElement(M.Options,{className:F,ref:z,"data-testid":"zep-drop-down-menu"},r.map((E,v)=>p.createElement(M.Option,{key:E.id,value:E,title:E.name,className:({active:P,selected:J})=>mt(P,J)},({selected:P})=>p.createElement(p.Fragment,null,p.createElement("span",{className:"zep-truncate"},E.name),P&&p.createElement(W,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})))))))}),o&&p.createElement("div",{className:k("zep-mt-[6px]","zep-text-typography-dark-100 zep-opacity-70","zep-text-0.875","zep-flex","zep-items-center",y)},t!=="default"&&p.createElement(W,{name:"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5"}),p.createElement("span",null,o)))};try{ee.displayName="DropDown",ee.__docgenInfo={description:"",displayName:"DropDown",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownItem[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"info"'}]}}}}}catch{}const bt=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],Rt={title:"Components/DropDown Select",component:ee,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}},readonly:{control:{type:"boolean"}}},decorators:[e=>p.createElement(He,{className:"zep-w-[326px]"},p.createElement(e,null))]},U={args:{disabled:!1,readonly:!1,items:bt,label:"Dropdown",className:"foo",state:"default",placeholder:"Auswählen (Hint)"}};var ie,se,ue;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    readonly: false,
    items,
    label: 'Dropdown',
    className: 'foo',
    state: 'default',
    placeholder: 'Auswählen (Hint)'
  } as DropDownProps)
}`,...(ue=(se=U.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};const St=["Default"];export{U as Default,St as __namedExportsOrder,Rt as default};
//# sourceMappingURL=DropDown.stories-1069e072.js.map
