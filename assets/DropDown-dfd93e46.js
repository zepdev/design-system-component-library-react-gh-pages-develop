import{c as T}from"./clsx.m-1229b3e0.js";import{r as d,R as c}from"./index-9edec130.js";import{o as g,S as le,D as V,y as M,T as ye,u as P,l as U,h as ze,a as he,b as Re,p as G,c as Oe,d as K,e as Ne,f as _e,g as Se,R as Le,X as A,I as W,i as de,s as we,C as De,j as Ee,k as Ie,m as Te,n as L,q as R,r as ke,t as te,x as $e,v as Ce,w as Pe}from"./getDistanceToBottom-3038e987.js";import{F as Z}from"./Icon-00b0a328.js";import{t as Fe}from"./tw-merge-1166cefb.js";let ie=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ue(e){var r,o;let n=(r=e.innerText)!=null?r:"",l=e.cloneNode(!0);if(!(l instanceof HTMLElement))return n;let u=!1;for(let i of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),u=!0;let t=u?(o=l.innerText)!=null?o:"":n;return ie.test(t)&&(t=t.replace(ie,"")),t}function qe(e){let r=e.getAttribute("aria-label");if(typeof r=="string")return r.trim();let o=e.getAttribute("aria-labelledby");if(o){let n=o.split(" ").map(l=>{let u=document.getElementById(l);if(u){let t=u.getAttribute("aria-label");return typeof t=="string"?t.trim():ue(u).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return ue(e).trim()}function Ve(e){let r=d.useRef(""),o=d.useRef("");return g(()=>{let n=e.current;if(!n)return"";let l=n.innerText;if(r.current===l)return o.current;let u=qe(n).trim().toLowerCase();return r.current=l,o.current=u,u})}var Me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Me||{}),Ae=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ae||{}),Be=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Be||{}),He=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(He||{});function ee(e,r=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=Ce(r(e.options.slice()),u=>u.dataRef.current.domRef.current),l=o?n.indexOf(o):null;return l===-1&&(l=null),{options:n,activeOptionIndex:l}}let Qe={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,n=e.options.findIndex(l=>o(l.dataRef.current.value));return n!==-1&&(r=n),{...e,listboxState:0,activeOptionIndex:r}},2(e,r){var o;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=ee(e),l=$e(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:l,activationTrigger:(o=r.trigger)!=null?o:1}},3:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=e.searchQuery!==""?0:1,n=e.searchQuery+r.value.toLowerCase(),l=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+o).concat(e.options.slice(0,e.activeOptionIndex+o)):e.options).find(t=>{var i;return!t.dataRef.current.disabled&&((i=t.dataRef.current.textValue)==null?void 0:i.startsWith(n))}),u=l?e.options.indexOf(l):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:u,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,r)=>{let o={id:r.id,dataRef:r.dataRef},n=ee(e,l=>[...l,o]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(o)),{...e,...n}},6:(e,r)=>{let o=ee(e,n=>{let l=n.findIndex(u=>u.id===r.id);return l!==-1&&n.splice(l,1),n});return{...e,...o,activationTrigger:1}},7:(e,r)=>({...e,labelId:r.id})},ne=d.createContext(null);ne.displayName="ListboxActionsContext";function B(e){let r=d.useContext(ne);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,B),o}return r}let re=d.createContext(null);re.displayName="ListboxDataContext";function H(e){let r=d.useContext(re);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,H),o}return r}function je(e,r){return P(r.type,Qe,e,r)}let Ue=d.Fragment;function Ge(e,r){let{value:o,defaultValue:n,form:l,name:u,onChange:t,by:i=(s,f)=>s===f,disabled:b=!1,horizontal:v=!1,multiple:z=!1,...O}=e;const w=v?"horizontal":"vertical";let D=M(r),[m=z?[]:void 0,N]=ye(o,t,n),[p,a]=d.useReducer(je,{dataRef:d.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),y=d.useRef({static:!1,hold:!1}),E=d.useRef(null),k=d.useRef(null),$=d.useRef(null),h=g(typeof i=="string"?(s,f)=>{let _=i;return(s==null?void 0:s[_])===(f==null?void 0:f[_])}:i),I=d.useCallback(s=>P(x.mode,{1:()=>m.some(f=>h(f,s)),0:()=>h(m,s)}),[m]),x=d.useMemo(()=>({...p,value:m,disabled:b,mode:z?1:0,orientation:w,compare:h,isSelected:I,optionsPropsRef:y,labelRef:E,buttonRef:k,optionsRef:$}),[m,b,z,p]);U(()=>{p.dataRef.current=x},[x]),ze([x.buttonRef,x.optionsRef],(s,f)=>{var _;a({type:1}),he(f,Re.Loose)||(s.preventDefault(),(_=x.buttonRef.current)==null||_.focus())},x.listboxState===0);let X=d.useMemo(()=>({open:x.listboxState===0,disabled:b,value:m}),[x,b,m]),C=g(s=>{let f=x.options.find(_=>_.id===s);f&&Y(f.dataRef.current.value)}),ae=g(()=>{if(x.activeOptionIndex!==null){let{dataRef:s,id:f}=x.options[x.activeOptionIndex];Y(s.current.value),a({type:2,focus:L.Specific,id:f})}}),F=g(()=>a({type:0})),J=g(()=>a({type:1})),pe=g((s,f,_)=>s===L.Specific?a({type:2,focus:L.Specific,id:f,trigger:_}):a({type:2,focus:s,trigger:_})),ce=g((s,f)=>(a({type:5,id:s,dataRef:f}),()=>a({type:6,id:s}))),fe=g(s=>(a({type:7,id:s}),()=>a({type:7,id:null}))),Y=g(s=>P(x.mode,{0(){return N==null?void 0:N(s)},1(){let f=x.value.slice(),_=f.findIndex(j=>h(j,s));return _===-1?f.push(s):f.splice(_,1),N==null?void 0:N(f)}})),me=g(s=>a({type:3,value:s})),be=g(()=>a({type:4})),ve=d.useMemo(()=>({onChange:Y,registerOption:ce,registerLabel:fe,goToOption:pe,closeListbox:J,openListbox:F,selectActiveOption:ae,selectOption:C,search:me,clearSearch:be}),[]),xe={ref:D},Q=d.useRef(null),ge=G();return d.useEffect(()=>{Q.current&&n!==void 0&&ge.addEventListener(Q.current,"reset",()=>{N==null||N(n)})},[Q,N]),c.createElement(ne.Provider,{value:ve},c.createElement(re.Provider,{value:x},c.createElement(Oe,{value:P(x.listboxState,{0:K.Open,1:K.Closed})},u!=null&&m!=null&&Ne({[u]:m}).map(([s,f],_)=>c.createElement(_e,{features:Se.Hidden,ref:_===0?j=>{var oe;Q.current=(oe=j==null?void 0:j.closest("form"))!=null?oe:null}:void 0,...Le({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:s,value:f})})),A({ourProps:xe,theirProps:O,slot:X,defaultTag:Ue,name:"Listbox"}))))}let Ke="button";function We(e,r){var o;let n=W(),{id:l=`headlessui-listbox-button-${n}`,...u}=e,t=H("Listbox.Button"),i=B("Listbox.Button"),b=M(t.buttonRef,r),v=G(),z=g(p=>{switch(p.key){case R.Space:case R.Enter:case R.ArrowDown:p.preventDefault(),i.openListbox(),v.nextFrame(()=>{t.value||i.goToOption(L.First)});break;case R.ArrowUp:p.preventDefault(),i.openListbox(),v.nextFrame(()=>{t.value||i.goToOption(L.Last)});break}}),O=g(p=>{switch(p.key){case R.Space:p.preventDefault();break}}),w=g(p=>{if(ke(p.currentTarget))return p.preventDefault();t.listboxState===0?(i.closeListbox(),v.nextFrame(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(p.preventDefault(),i.openListbox())}),D=de(()=>{if(t.labelId)return[t.labelId,l].join(" ")},[t.labelId,l]),m=d.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),N={ref:b,id:l,type:we(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(o=t.optionsRef.current)==null?void 0:o.id,"aria-expanded":t.listboxState===0,"aria-labelledby":D,disabled:t.disabled,onKeyDown:z,onKeyUp:O,onClick:w};return A({ourProps:N,theirProps:u,slot:m,defaultTag:Ke,name:"Listbox.Button"})}let Xe="label";function Je(e,r){let o=W(),{id:n=`headlessui-listbox-label-${o}`,...l}=e,u=H("Listbox.Label"),t=B("Listbox.Label"),i=M(u.labelRef,r);U(()=>t.registerLabel(n),[n]);let b=g(()=>{var z;return(z=u.buttonRef.current)==null?void 0:z.focus({preventScroll:!0})}),v=d.useMemo(()=>({open:u.listboxState===0,disabled:u.disabled}),[u]);return A({ourProps:{ref:i,id:n,onClick:b},theirProps:l,slot:v,defaultTag:Xe,name:"Listbox.Label"})}let Ye="ul",Ze=le.RenderStrategy|le.Static;function et(e,r){var o;let n=W(),{id:l=`headlessui-listbox-options-${n}`,...u}=e,t=H("Listbox.Options"),i=B("Listbox.Options"),b=M(t.optionsRef,r),v=G(),z=G(),O=De(),w=(()=>O!==null?(O&K.Open)===K.Open:t.listboxState===0)();d.useEffect(()=>{var a;let y=t.optionsRef.current;y&&t.listboxState===0&&y!==((a=Ee(y))==null?void 0:a.activeElement)&&y.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let D=g(a=>{switch(z.dispose(),a.key){case R.Space:if(t.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),i.search(a.key);case R.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:y}=t.options[t.activeOptionIndex];i.onChange(y.current.value)}t.mode===0&&(i.closeListbox(),te().nextFrame(()=>{var y;return(y=t.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})}));break;case P(t.orientation,{vertical:R.ArrowDown,horizontal:R.ArrowRight}):return a.preventDefault(),a.stopPropagation(),i.goToOption(L.Next);case P(t.orientation,{vertical:R.ArrowUp,horizontal:R.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),i.goToOption(L.Previous);case R.Home:case R.PageUp:return a.preventDefault(),a.stopPropagation(),i.goToOption(L.First);case R.End:case R.PageDown:return a.preventDefault(),a.stopPropagation(),i.goToOption(L.Last);case R.Escape:return a.preventDefault(),a.stopPropagation(),i.closeListbox(),v.nextFrame(()=>{var y;return(y=t.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})});case R.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(i.search(a.key),z.setTimeout(()=>i.clearSearch(),350));break}}),m=de(()=>{var a,y,E;return(E=(a=t.labelRef.current)==null?void 0:a.id)!=null?E:(y=t.buttonRef.current)==null?void 0:y.id},[t.labelRef.current,t.buttonRef.current]),N=d.useMemo(()=>({open:t.listboxState===0}),[t]),p={"aria-activedescendant":t.activeOptionIndex===null||(o=t.options[t.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":m,"aria-orientation":t.orientation,id:l,onKeyDown:D,role:"listbox",tabIndex:0,ref:b};return A({ourProps:p,theirProps:u,slot:N,defaultTag:Ye,features:Ze,visible:w,name:"Listbox.Options"})}let tt="li";function nt(e,r){let o=W(),{id:n=`headlessui-listbox-option-${o}`,disabled:l=!1,value:u,...t}=e,i=H("Listbox.Option"),b=B("Listbox.Option"),v=i.activeOptionIndex!==null?i.options[i.activeOptionIndex].id===n:!1,z=i.isSelected(u),O=d.useRef(null),w=Ve(O),D=Ie({disabled:l,value:u,domRef:O,get textValue(){return w()}}),m=M(r,O);U(()=>{if(i.listboxState!==0||!v||i.activationTrigger===0)return;let h=te();return h.requestAnimationFrame(()=>{var I,x;(x=(I=O.current)==null?void 0:I.scrollIntoView)==null||x.call(I,{block:"nearest"})}),h.dispose},[O,v,i.listboxState,i.activationTrigger,i.activeOptionIndex]),U(()=>b.registerOption(n,D),[D,n]);let N=g(h=>{if(l)return h.preventDefault();b.onChange(u),i.mode===0&&(b.closeListbox(),te().nextFrame(()=>{var I;return(I=i.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})}))}),p=g(()=>{if(l)return b.goToOption(L.Nothing);b.goToOption(L.Specific,n)}),a=Te(),y=g(h=>a.update(h)),E=g(h=>{a.wasMoved(h)&&(l||v||b.goToOption(L.Specific,n,0))}),k=g(h=>{a.wasMoved(h)&&(l||v&&b.goToOption(L.Nothing))}),$=d.useMemo(()=>({active:v,selected:z,disabled:l}),[v,z,l]);return A({ourProps:{id:n,ref:m,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":z,disabled:void 0,onClick:N,onFocus:p,onPointerEnter:y,onMouseEnter:y,onPointerMove:E,onMouseMove:E,onPointerLeave:k,onMouseLeave:k},theirProps:t,slot:$,defaultTag:tt,name:"Listbox.Option"})}let rt=V(Ge),at=V(We),ot=V(Je),lt=V(et),it=V(nt),q=Object.assign(rt,{Button:at,Label:ot,Options:lt,Option:it});var S="/home/circleci/project/src/components/drop-down/DropDown.tsx";const ut=268,st=(e,r)=>T("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-background-medium":e},{"zep-bg-background-medium":r},{"zep-pr-3":r}),se=d.forwardRef(({disabled:e=!1,items:r,message:o,label:n,placeholder:l,required:u,notRequiredHint:t="(optional)",readOnly:i=!1,state:b="default",...v},z)=>{const O=c.useRef(null),w=b==="error",D=b==="info",m=e||i,N=w?"zep-text-error":D?"zep-text-info":"",p=v==null?void 0:v.value;return c.createElement("div",{className:Fe(T("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e},v.className)),"data-testid":"zep-drop-down",__self:void 0,__source:{fileName:S,lineNumber:44,columnNumber:7}},c.createElement(q,{disabled:m,...v,ref:z,__self:void 0,__source:{fileName:S,lineNumber:59,columnNumber:9}},({open:a})=>{const E=Pe(O.current)<ut,k=i?void 0:l,$=(p==null?void 0:p.name)||k,h=e?"zep-text-opacity-disabled":!(p!=null&&p.name)&&!i?"zep-text-typography-dark-100/70":"zep-text-typography-dark-100",I=T("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",w?"zep-border-2 zep-border-error":"zep-border-1 zep-border-neutral-dark-default",h,{"zep-bg-background-medium":i},{"zep-ring":a},{"zep-active:zep-ring":!m},{"zep-ring-offset-1":!m},{"focus-visible:zep-ring":!m},{"zep-ring-focus":!m},{"zep-cursor-not-allowed":m}),x=T("zep-absolute","zep-shadow-sm","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",E?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":E}),X=T(m?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":a});return c.createElement(c.Fragment,null,n&&c.createElement(q.Label,{className:T("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e}),__self:void 0,__source:{fileName:S,lineNumber:125,columnNumber:19}},n,!u&&c.createElement("span",{className:"zep-ml-0.25",__self:void 0,__source:{fileName:S,lineNumber:131,columnNumber:35}},t)),c.createElement(q.Button,{className:I,ref:O,title:$,"data-testid":"zep-drop-down-button",__self:void 0,__source:{fileName:S,lineNumber:135,columnNumber:17}},c.createElement(c.Fragment,null,c.createElement("span",{className:"zep-truncate",__self:void 0,__source:{fileName:S,lineNumber:142,columnNumber:21}},$),c.createElement(Z,{className:X,name:"chevron-mini-down",role:"img",size:24,__self:void 0,__source:{fileName:S,lineNumber:143,columnNumber:21}}))),c.createElement(q.Options,{className:x,"data-testid":"zep-drop-down-menu",__self:void 0,__source:{fileName:S,lineNumber:146,columnNumber:17}},r.map((C,ae)=>c.createElement(q.Option,{key:C.id,value:C,title:C.name,className:({active:F,selected:J})=>st(F,J),__self:void 0,__source:{fileName:S,lineNumber:148,columnNumber:21}},({selected:F})=>c.createElement(c.Fragment,null,c.createElement("span",{className:"zep-truncate",__self:void 0,__source:{fileName:S,lineNumber:157,columnNumber:29}},C.name),F&&c.createElement(Z,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1",__self:void 0,__source:{fileName:S,lineNumber:159,columnNumber:31}}))))))}),o&&c.createElement("div",{className:T("zep-mt-0.25",{"zep-text-typography-dark-100":!w&&!D},"zep-text-0.875","zep-flex",N),__self:void 0,__source:{fileName:S,lineNumber:172,columnNumber:11}},b!=="default"&&c.createElement(Z,{name:w?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0",__self:void 0,__source:{fileName:S,lineNumber:182,columnNumber:15}}),c.createElement("span",{className:"zep-mt-0.125",__self:void 0,__source:{fileName:S,lineNumber:189,columnNumber:13}},o)))});try{se.displayName="DropDown",se.__docgenInfo={description:"",displayName:"DropDown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownItem[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DropDownItem"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},notRequiredHint:{defaultValue:{value:"(optional)"},description:"",name:"notRequiredHint",required:!1,type:{name:"string"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: string) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: ListboxRenderPropArg<any>) => string)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},by:{defaultValue:null,description:"",name:"by",required:!1,type:{name:"string | ((a: any, z: any) => boolean)"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}}}}}catch{}export{se as D};
//# sourceMappingURL=DropDown-dfd93e46.js.map
