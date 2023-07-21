import{r as c,R as p}from"./index-8db94870.js";import{c as C}from"./clsx.m-1229b3e0.js";import{F as W}from"./Icon-af1412c8.js";import{o as m,S as oe,D as A,y as B,T as Oe,u as F,l as j,H as Re,h as Se,a as we,p as G,c as Le,d as K,e as De,b as Ee,f as Ie,R as Te,X as V,I as X,i as pe,s as Ce,C as $e,g as Fe,j as Pe,k as ke,m as E,n as O,r as Ne,q as Z,x as Me,t as Ae,v as Be,$ as Ve}from"./transition-729c66c8.js";import{t as qe}from"./tw-merge-b02e8c47.js";import"./_commonjsHelpers-042e6b4d.js";let ae=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function le(e){var r,a;let n=(r=e.innerText)!=null?r:"",l=e.cloneNode(!0);if(!(l instanceof HTMLElement))return n;let i=!1;for(let s of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),i=!0;let t=i?(a=l.innerText)!=null?a:"":n;return ae.test(t)&&(t=t.replace(ae,"")),t}function He(e){let r=e.getAttribute("aria-label");if(typeof r=="string")return r.trim();let a=e.getAttribute("aria-labelledby");if(a){let n=a.split(" ").map(l=>{let i=document.getElementById(l);if(i){let t=i.getAttribute("aria-label");return typeof t=="string"?t.trim():le(i).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return le(e).trim()}function _e(e){let r=c.useRef(""),a=c.useRef("");return m(()=>{let n=e.current;if(!n)return"";let l=n.innerText;if(r.current===l)return a.current;let i=He(n).trim().toLowerCase();return r.current=l,a.current=i,i})}var Qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qe||{}),Ue=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ue||{}),je=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(je||{}),Ge=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ge||{});function Y(e,r=a=>a){let a=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=Ae(r(e.options.slice()),i=>i.dataRef.current.domRef.current),l=a?n.indexOf(a):null;return l===-1&&(l=null),{options:n,activeOptionIndex:l}}let Ke={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:a}=e.dataRef.current,n=e.options.findIndex(l=>a(l.dataRef.current.value));return n!==-1&&(r=n),{...e,listboxState:0,activeOptionIndex:r}},[2](e,r){var a;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=Y(e),l=Me(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:l,activationTrigger:(a=r.trigger)!=null?a:1}},[3]:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let a=e.searchQuery!==""?0:1,n=e.searchQuery+r.value.toLowerCase(),l=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+a).concat(e.options.slice(0,e.activeOptionIndex+a)):e.options).find(t=>{var s;return!t.dataRef.current.disabled&&((s=t.dataRef.current.textValue)==null?void 0:s.startsWith(n))}),i=l?e.options.indexOf(l):-1;return i===-1||i===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:i,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,r)=>{let a={id:r.id,dataRef:r.dataRef},n=Y(e,l=>[...l,a]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(a)),{...e,...n}},[6]:(e,r)=>{let a=Y(e,n=>{let l=n.findIndex(i=>i.id===r.id);return l!==-1&&n.splice(l,1),n});return{...e,...a,activationTrigger:1}},[7]:(e,r)=>({...e,labelId:r.id})},te=c.createContext(null);te.displayName="ListboxActionsContext";function q(e){let r=c.useContext(te);if(r===null){let a=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,q),a}return r}let ne=c.createContext(null);ne.displayName="ListboxDataContext";function H(e){let r=c.useContext(ne);if(r===null){let a=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,H),a}return r}function Xe(e,r){return F(r.type,Ke,e,r)}let Je=c.Fragment;function We(e,r){let{value:a,defaultValue:n,form:l,name:i,onChange:t,by:s=(u,f)=>u===f,disabled:d=!1,horizontal:g=!1,multiple:z=!1,...S}=e;const I=g?"horizontal":"vertical";let R=B(r),[y=z?[]:void 0,L]=Oe(a,t,n),[x,o]=c.useReducer(Xe,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),b=c.useRef({static:!1,hold:!1}),T=c.useRef(null),$=c.useRef(null),P=c.useRef(null),h=m(typeof s=="string"?(u,f)=>{let w=s;return(u==null?void 0:u[w])===(f==null?void 0:f[w])}:s),D=c.useCallback(u=>F(v.mode,{[1]:()=>y.some(f=>h(f,u)),[0]:()=>h(y,u)}),[y]),v=c.useMemo(()=>({...x,value:y,disabled:d,mode:z?1:0,orientation:I,compare:h,isSelected:D,optionsPropsRef:b,labelRef:T,buttonRef:$,optionsRef:P}),[y,d,z,x]);j(()=>{x.dataRef.current=v},[v]),Re([v.buttonRef,v.optionsRef],(u,f)=>{var w;o({type:1}),Se(f,we.Loose)||(u.preventDefault(),(w=v.buttonRef.current)==null||w.focus())},v.listboxState===0);let k=c.useMemo(()=>({open:v.listboxState===0,disabled:d,value:y}),[v,d,y]),J=m(u=>{let f=v.options.find(w=>w.id===u);f&&N(f.dataRef.current.value)}),de=m(()=>{if(v.activeOptionIndex!==null){let{dataRef:u,id:f}=v.options[v.activeOptionIndex];N(u.current.value),o({type:2,focus:E.Specific,id:f})}}),ce=m(()=>o({type:0})),fe=m(()=>o({type:1})),be=m((u,f,w)=>u===E.Specific?o({type:2,focus:E.Specific,id:f,trigger:w}):o({type:2,focus:u,trigger:w})),me=m((u,f)=>(o({type:5,id:u,dataRef:f}),()=>o({type:6,id:u}))),ve=m(u=>(o({type:7,id:u}),()=>o({type:7,id:null}))),N=m(u=>F(v.mode,{[0](){return L==null?void 0:L(u)},[1](){let f=v.value.slice(),w=f.findIndex(Q=>h(Q,u));return w===-1?f.push(u):f.splice(w,1),L==null?void 0:L(f)}})),xe=m(u=>o({type:3,value:u})),ge=m(()=>o({type:4})),ze=c.useMemo(()=>({onChange:N,registerOption:me,registerLabel:ve,goToOption:be,closeListbox:fe,openListbox:ce,selectActiveOption:de,selectOption:J,search:xe,clearSearch:ge}),[]),ye={ref:R},_=c.useRef(null),he=G();return c.useEffect(()=>{_.current&&n!==void 0&&he.addEventListener(_.current,"reset",()=>{N(n)})},[_,N]),p.createElement(te.Provider,{value:ze},p.createElement(ne.Provider,{value:v},p.createElement(Le,{value:F(v.listboxState,{[0]:K.Open,[1]:K.Closed})},i!=null&&y!=null&&De({[i]:y}).map(([u,f],w)=>p.createElement(Ee,{features:Ie.Hidden,ref:w===0?Q=>{var re;_.current=(re=Q==null?void 0:Q.closest("form"))!=null?re:null}:void 0,...Te({key:u,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:u,value:f})})),V({ourProps:ye,theirProps:S,slot:k,defaultTag:Je,name:"Listbox"}))))}let Ye="button";function Ze(e,r){var a;let n=X(),{id:l=`headlessui-listbox-button-${n}`,...i}=e,t=H("Listbox.Button"),s=q("Listbox.Button"),d=B(t.buttonRef,r),g=G(),z=m(x=>{switch(x.key){case O.Space:case O.Enter:case O.ArrowDown:x.preventDefault(),s.openListbox(),g.nextFrame(()=>{t.value||s.goToOption(E.First)});break;case O.ArrowUp:x.preventDefault(),s.openListbox(),g.nextFrame(()=>{t.value||s.goToOption(E.Last)});break}}),S=m(x=>{switch(x.key){case O.Space:x.preventDefault();break}}),I=m(x=>{if(Ne(x.currentTarget))return x.preventDefault();t.listboxState===0?(s.closeListbox(),g.nextFrame(()=>{var o;return(o=t.buttonRef.current)==null?void 0:o.focus({preventScroll:!0})})):(x.preventDefault(),s.openListbox())}),R=pe(()=>{if(t.labelId)return[t.labelId,l].join(" ")},[t.labelId,l]),y=c.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),L={ref:d,id:l,type:Ce(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(a=t.optionsRef.current)==null?void 0:a.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":R,disabled:t.disabled,onKeyDown:z,onKeyUp:S,onClick:I};return V({ourProps:L,theirProps:i,slot:y,defaultTag:Ye,name:"Listbox.Button"})}let et="label";function tt(e,r){let a=X(),{id:n=`headlessui-listbox-label-${a}`,...l}=e,i=H("Listbox.Label"),t=q("Listbox.Label"),s=B(i.labelRef,r);j(()=>t.registerLabel(n),[n]);let d=m(()=>{var z;return(z=i.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}),g=c.useMemo(()=>({open:i.listboxState===0,disabled:i.disabled}),[i]);return V({ourProps:{ref:s,id:n,onClick:d},theirProps:l,slot:g,defaultTag:et,name:"Listbox.Label"})}let nt="ul",rt=oe.RenderStrategy|oe.Static;function ot(e,r){var a;let n=X(),{id:l=`headlessui-listbox-options-${n}`,...i}=e,t=H("Listbox.Options"),s=q("Listbox.Options"),d=B(t.optionsRef,r),g=G(),z=G(),S=$e(),I=(()=>S!==null?(S&K.Open)===K.Open:t.listboxState===0)();c.useEffect(()=>{var o;let b=t.optionsRef.current;b&&t.listboxState===0&&b!==((o=Fe(b))==null?void 0:o.activeElement)&&b.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let R=m(o=>{switch(z.dispose(),o.key){case O.Space:if(t.searchQuery!=="")return o.preventDefault(),o.stopPropagation(),s.search(o.key);case O.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:b}=t.options[t.activeOptionIndex];s.onChange(b.current.value)}t.mode===0&&(s.closeListbox(),Z().nextFrame(()=>{var b;return(b=t.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})}));break;case F(t.orientation,{vertical:O.ArrowDown,horizontal:O.ArrowRight}):return o.preventDefault(),o.stopPropagation(),s.goToOption(E.Next);case F(t.orientation,{vertical:O.ArrowUp,horizontal:O.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),s.goToOption(E.Previous);case O.Home:case O.PageUp:return o.preventDefault(),o.stopPropagation(),s.goToOption(E.First);case O.End:case O.PageDown:return o.preventDefault(),o.stopPropagation(),s.goToOption(E.Last);case O.Escape:return o.preventDefault(),o.stopPropagation(),s.closeListbox(),g.nextFrame(()=>{var b;return(b=t.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})});case O.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(s.search(o.key),z.setTimeout(()=>s.clearSearch(),350));break}}),y=pe(()=>{var o,b,T;return(T=(o=t.labelRef.current)==null?void 0:o.id)!=null?T:(b=t.buttonRef.current)==null?void 0:b.id},[t.labelRef.current,t.buttonRef.current]),L=c.useMemo(()=>({open:t.listboxState===0}),[t]),x={"aria-activedescendant":t.activeOptionIndex===null||(a=t.options[t.activeOptionIndex])==null?void 0:a.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":y,"aria-orientation":t.orientation,id:l,onKeyDown:R,role:"listbox",tabIndex:0,ref:d};return V({ourProps:x,theirProps:i,slot:L,defaultTag:nt,features:rt,visible:I,name:"Listbox.Options"})}let at="li";function lt(e,r){let a=X(),{id:n=`headlessui-listbox-option-${a}`,disabled:l=!1,value:i,...t}=e,s=H("Listbox.Option"),d=q("Listbox.Option"),g=s.activeOptionIndex!==null?s.options[s.activeOptionIndex].id===n:!1,z=s.isSelected(i),S=c.useRef(null),I=_e(S),R=Pe({disabled:l,value:i,domRef:S,get textValue(){return I()}}),y=B(r,S);j(()=>{if(s.listboxState!==0||!g||s.activationTrigger===0)return;let h=Z();return h.requestAnimationFrame(()=>{var D,v;(v=(D=S.current)==null?void 0:D.scrollIntoView)==null||v.call(D,{block:"nearest"})}),h.dispose},[S,g,s.listboxState,s.activationTrigger,s.activeOptionIndex]),j(()=>d.registerOption(n,R),[R,n]);let L=m(h=>{if(l)return h.preventDefault();d.onChange(i),s.mode===0&&(d.closeListbox(),Z().nextFrame(()=>{var D;return(D=s.buttonRef.current)==null?void 0:D.focus({preventScroll:!0})}))}),x=m(()=>{if(l)return d.goToOption(E.Nothing);d.goToOption(E.Specific,n)}),o=ke(),b=m(h=>o.update(h)),T=m(h=>{o.wasMoved(h)&&(l||g||d.goToOption(E.Specific,n,0))}),$=m(h=>{o.wasMoved(h)&&(l||g&&d.goToOption(E.Nothing))}),P=c.useMemo(()=>({active:g,selected:z,disabled:l}),[g,z,l]);return V({ourProps:{id:n,ref:y,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":z,disabled:void 0,onClick:L,onFocus:x,onPointerEnter:b,onMouseEnter:b,onPointerMove:T,onMouseMove:T,onPointerLeave:$,onMouseLeave:$},theirProps:t,slot:P,defaultTag:at,name:"Listbox.Option"})}let it=A(We),st=A(Ze),ut=A(tt),pt=A(ot),dt=A(lt),M=Object.assign(it,{Button:st,Label:ut,Options:pt,Option:dt});const ct=268,ft=(e,r)=>C("zep-flex zep-w-full zep-items-center zep-justify-between zep-px-1 zep-py-0.75",{"zep-bg-dropdown-bg-readOnly/70":e},{"zep-bg-dropdown-bg-readOnly":r},{"zep-pr-3":r}),ee=({disabled:e=!1,items:r,message:a,label:n,placeholder:l,readonly:i=!1,state:t="default",...s})=>{const[d,g]=p.useState(),z=p.useRef(null),S=p.useRef(null),I=t==="error",R=e||i,y=I?"zep-text-dropdown-support-error":t==="info"?"zep-text-dropdown-support-info":"zep-text-dropdown-support-default";return p.createElement("div",{className:qe(C("zep-relative","zep-inline-block","zep-text-left",{"zep-pointer-events-none zep-opacity-disabled":e}),s.className),"data-testid":"zep-drop-down"},p.createElement(M,{disabled:R,value:d,onChange:g},({open:L})=>{const o=Be(S.current)<ct,b=(d==null?void 0:d.name)??l,T=e?"zep-text-dropdown-placeholder-disabled/40":!(d!=null&&d.name)&&!i?"zep-text-dropdown-placeholder-readOnly":"zep-text-dropdown-placeholder-default",$=C("zep-inline-flex","zep-justify-between","zep-rounded-dropdown","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-[326px]","zep-outline-none",I?"zep-border-2":"zep-border-1",T,{"zep-bg-dropdown-bg-readOnly":i},{"zep-ring":L},{"zep-border-error":I},{"zep-active:ring":!R},{"zep-ring-offset-1":!R},{"focus-visible:zep-ring":!R},{"zep-ring-focus":!R},{"zep-cursor-not-allowed":R}),P=C("zep-drop-down-menu","zep-absolute","zep-py-0.25","zep-z-10","zep-w-[326px]","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-dropdown","zep-bg-dropdown-bg-default","zep-drop-shadow-sm","focus:outline-none","zep-overflow-hidden","zep-overflow-y-auto",o?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":o}),h=C(R?"zep-text-dropdown-placeholder-default/40":"zep-text-dropdown-placeholder-default","zep-transition-transform","zep-duration-500","zep-shrink-0",{"zep-rotate-180":L});return p.createElement(p.Fragment,null,n&&p.createElement(M.Label,{className:C("zep-block","zep-mb-0.5",{"zep-text-dropdown-label-disabled/40":e})},n),p.createElement(M.Button,{className:$,ref:S,title:b,"data-testid":"zep-drop-down-button"},p.createElement(p.Fragment,null,p.createElement("span",{className:"zep-truncate"},b),p.createElement(W,{className:h,name:"ChevronMiniDown",role:"img",size:24}))),p.createElement(Ve,{as:c.Fragment,enter:"zep-transition zep-ease-out zep-duration-100",enterFrom:"zep-transform zep-opacity-0 zep-scale-95",enterTo:"zep-transform zep-opacity-100 zep-scale-100",leave:"zep-transition zep-ease-in zep-duration-25",leaveFrom:"zep-transform zep-opacity-100 zep-scale-100",leaveTo:"zep-transform zep-opacity-0 zep-scale-95"},p.createElement(M.Options,{className:P,ref:z,"data-testid":"zep-drop-down-menu"},r.map((D,v)=>p.createElement(M.Option,{key:D.id,value:D,title:D.name,className:({active:k,selected:J})=>ft(k,J)},({selected:k})=>p.createElement(p.Fragment,null,p.createElement("span",{className:"zep-truncate"},D.name),k&&p.createElement(W,{name:"Check",role:"img",size:24,className:"zep-absolute zep-right-1"})))))))}),a&&p.createElement("div",{className:C("zep-mt-[6px]","zep-tagline","zep-text-0.875","zep-flex","zep-items-center",y)},t!=="default"&&p.createElement(W,{name:"Info",role:"img",size:24,className:"zep-mr-0.5"}),p.createElement("span",null,a)))};try{ee.displayName="DropDown",ee.__docgenInfo={description:"",displayName:"DropDown",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownItem[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"info"'}]}}}}}catch{}const bt=[{id:1,name:"Navigation link"},{id:2,name:"Clickable action"},{id:3,name:"Archive"},{id:4,name:"Here is a really long text that should be truncated"},{id:5,name:"Duplicate"},{id:6,name:"License"},{id:7,name:"Move"},{id:8,name:"Sign out"}],ht={title:"Components/DropDown Select",component:ee,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},message:{control:{type:"text"}},readonly:{control:{type:"boolean"}}},decorators:[e=>p.createElement("div",{style:{height:350}},p.createElement(e,null))]},U={args:{disabled:!1,readonly:!1,items:bt,label:"Dropdown",className:"foo",state:"default",placeholder:"Auswählen (Hint)"}};var ie,se,ue;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: ({
    disabled: false,
    readonly: false,
    items,
    label: 'Dropdown',
    className: 'foo',
    state: 'default',
    placeholder: 'Auswählen (Hint)'
  } as DropDownProps)
}`,...(ue=(se=U.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};const Ot=["Default"];export{U as Default,Ot as __namedExportsOrder,ht as default};
//# sourceMappingURL=DropDown.stories-0c42cd54.js.map
