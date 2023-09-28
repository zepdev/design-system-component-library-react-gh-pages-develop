import{c as $}from"./clsx.m-1229b3e0.js";import{r as p,R as d}from"./index-76fb7be0.js";import{o as b,S as ne,D as q,y as V,T as ge,u as C,l as H,h as ze,a as ye,b as he,p as U,c as Oe,d as j,e as Re,f as Se,g as Le,R as Ee,X as M,I as G,i as le,s as we,C as De,j as Ie,k as Te,m as $e,n as D,q as R,r as ke,t as Y,x as Ce,v as Pe,w as Fe,z as Ne}from"./getDistanceToBottom-05721c98.js";import{F as X}from"./Icon-9e5f2fad.js";import{t as qe}from"./tw-merge-1166cefb.js";let re=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ae(e){var r,o;let n=(r=e.innerText)!=null?r:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return n;let s=!1;for(let l of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),s=!0;let t=s?(o=i.innerText)!=null?o:"":n;return re.test(t)&&(t=t.replace(re,"")),t}function Ve(e){let r=e.getAttribute("aria-label");if(typeof r=="string")return r.trim();let o=e.getAttribute("aria-labelledby");if(o){let n=o.split(" ").map(i=>{let s=document.getElementById(i);if(s){let t=s.getAttribute("aria-label");return typeof t=="string"?t.trim():ae(s).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return ae(e).trim()}function Me(e){let r=p.useRef(""),o=p.useRef("");return b(()=>{let n=e.current;if(!n)return"";let i=n.innerText;if(r.current===i)return o.current;let s=Ve(n).trim().toLowerCase();return r.current=i,o.current=s,s})}var Ae=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ae||{}),Be=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Be||{}),Qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Qe||{}),_e=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(_e||{});function J(e,r=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=Pe(r(e.options.slice()),s=>s.dataRef.current.domRef.current),i=o?n.indexOf(o):null;return i===-1&&(i=null),{options:n,activeOptionIndex:i}}let He={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let r=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,n=e.options.findIndex(i=>o(i.dataRef.current.value));return n!==-1&&(r=n),{...e,listboxState:0,activeOptionIndex:r}},2(e,r){var o;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=J(e),i=Ce(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:i,activationTrigger:(o=r.trigger)!=null?o:1}},3:(e,r)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=e.searchQuery!==""?0:1,n=e.searchQuery+r.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+o).concat(e.options.slice(0,e.activeOptionIndex+o)):e.options).find(t=>{var l;return!t.dataRef.current.disabled&&((l=t.dataRef.current.textValue)==null?void 0:l.startsWith(n))}),s=i?e.options.indexOf(i):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:s,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,r)=>{let o={id:r.id,dataRef:r.dataRef},n=J(e,i=>[...i,o]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(r.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(o)),{...e,...n}},6:(e,r)=>{let o=J(e,n=>{let i=n.findIndex(s=>s.id===r.id);return i!==-1&&n.splice(i,1),n});return{...e,...o,activationTrigger:1}},7:(e,r)=>({...e,labelId:r.id})},Z=p.createContext(null);Z.displayName="ListboxActionsContext";function A(e){let r=p.useContext(Z);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,A),o}return r}let ee=p.createContext(null);ee.displayName="ListboxDataContext";function B(e){let r=p.useContext(ee);if(r===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,B),o}return r}function Ue(e,r){return C(r.type,He,e,r)}let je=p.Fragment;function Ge(e,r){let{value:o,defaultValue:n,form:i,name:s,onChange:t,by:l=(u,c)=>u===c,disabled:g=!1,horizontal:y=!1,multiple:m=!1,...z}=e;const I=y?"horizontal":"vertical";let S=V(r),[h=m?[]:void 0,E]=ge(o,t,n),[v,a]=p.useReducer(Ue,{dataRef:p.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),f=p.useRef({static:!1,hold:!1}),T=p.useRef(null),k=p.useRef(null),P=p.useRef(null),O=b(typeof l=="string"?(u,c)=>{let L=l;return(u==null?void 0:u[L])===(c==null?void 0:c[L])}:l),w=p.useCallback(u=>C(x.mode,{1:()=>h.some(c=>O(c,u)),0:()=>O(h,u)}),[h]),x=p.useMemo(()=>({...v,value:h,disabled:g,mode:m?1:0,orientation:I,compare:O,isSelected:w,optionsPropsRef:f,labelRef:T,buttonRef:k,optionsRef:P}),[h,g,m,v]);H(()=>{v.dataRef.current=x},[x]),ze([x.buttonRef,x.optionsRef],(u,c)=>{var L;a({type:1}),ye(c,he.Loose)||(u.preventDefault(),(L=x.buttonRef.current)==null||L.focus())},x.listboxState===0);let F=p.useMemo(()=>({open:x.listboxState===0,disabled:g,value:h}),[x,g,h]),K=b(u=>{let c=x.options.find(L=>L.id===u);c&&W(c.dataRef.current.value)}),ie=b(()=>{if(x.activeOptionIndex!==null){let{dataRef:u,id:c}=x.options[x.activeOptionIndex];W(u.current.value),a({type:2,focus:D.Specific,id:c})}}),se=b(()=>a({type:0})),ue=b(()=>a({type:1})),pe=b((u,c,L)=>u===D.Specific?a({type:2,focus:D.Specific,id:c,trigger:L}):a({type:2,focus:u,trigger:L})),de=b((u,c)=>(a({type:5,id:u,dataRef:c}),()=>a({type:6,id:u}))),ce=b(u=>(a({type:7,id:u}),()=>a({type:7,id:null}))),W=b(u=>C(x.mode,{0(){return E==null?void 0:E(u)},1(){let c=x.value.slice(),L=c.findIndex(_=>O(_,u));return L===-1?c.push(u):c.splice(L,1),E==null?void 0:E(c)}})),fe=b(u=>a({type:3,value:u})),me=b(()=>a({type:4})),be=p.useMemo(()=>({onChange:W,registerOption:de,registerLabel:ce,goToOption:pe,closeListbox:ue,openListbox:se,selectActiveOption:ie,selectOption:K,search:fe,clearSearch:me}),[]),ve={ref:S},Q=p.useRef(null),xe=U();return p.useEffect(()=>{Q.current&&n!==void 0&&xe.addEventListener(Q.current,"reset",()=>{E==null||E(n)})},[Q,E]),d.createElement(Z.Provider,{value:be},d.createElement(ee.Provider,{value:x},d.createElement(Oe,{value:C(x.listboxState,{0:j.Open,1:j.Closed})},s!=null&&h!=null&&Re({[s]:h}).map(([u,c],L)=>d.createElement(Se,{features:Le.Hidden,ref:L===0?_=>{var te;Q.current=(te=_==null?void 0:_.closest("form"))!=null?te:null}:void 0,...Ee({key:u,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:u,value:c})})),M({ourProps:ve,theirProps:z,slot:F,defaultTag:je,name:"Listbox"}))))}let Ke="button";function We(e,r){var o;let n=G(),{id:i=`headlessui-listbox-button-${n}`,...s}=e,t=B("Listbox.Button"),l=A("Listbox.Button"),g=V(t.buttonRef,r),y=U(),m=b(v=>{switch(v.key){case R.Space:case R.Enter:case R.ArrowDown:v.preventDefault(),l.openListbox(),y.nextFrame(()=>{t.value||l.goToOption(D.First)});break;case R.ArrowUp:v.preventDefault(),l.openListbox(),y.nextFrame(()=>{t.value||l.goToOption(D.Last)});break}}),z=b(v=>{switch(v.key){case R.Space:v.preventDefault();break}}),I=b(v=>{if(ke(v.currentTarget))return v.preventDefault();t.listboxState===0?(l.closeListbox(),y.nextFrame(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(v.preventDefault(),l.openListbox())}),S=le(()=>{if(t.labelId)return[t.labelId,i].join(" ")},[t.labelId,i]),h=p.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),E={ref:g,id:i,type:we(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(o=t.optionsRef.current)==null?void 0:o.id,"aria-expanded":t.listboxState===0,"aria-labelledby":S,disabled:t.disabled,onKeyDown:m,onKeyUp:z,onClick:I};return M({ourProps:E,theirProps:s,slot:h,defaultTag:Ke,name:"Listbox.Button"})}let Xe="label";function Je(e,r){let o=G(),{id:n=`headlessui-listbox-label-${o}`,...i}=e,s=B("Listbox.Label"),t=A("Listbox.Label"),l=V(s.labelRef,r);H(()=>t.registerLabel(n),[n]);let g=b(()=>{var m;return(m=s.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}),y=p.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return M({ourProps:{ref:l,id:n,onClick:g},theirProps:i,slot:y,defaultTag:Xe,name:"Listbox.Label"})}let Ye="ul",Ze=ne.RenderStrategy|ne.Static;function et(e,r){var o;let n=G(),{id:i=`headlessui-listbox-options-${n}`,...s}=e,t=B("Listbox.Options"),l=A("Listbox.Options"),g=V(t.optionsRef,r),y=U(),m=U(),z=De(),I=(()=>z!==null?(z&j.Open)===j.Open:t.listboxState===0)();p.useEffect(()=>{var a;let f=t.optionsRef.current;f&&t.listboxState===0&&f!==((a=Ie(f))==null?void 0:a.activeElement)&&f.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let S=b(a=>{switch(m.dispose(),a.key){case R.Space:if(t.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),l.search(a.key);case R.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:f}=t.options[t.activeOptionIndex];l.onChange(f.current.value)}t.mode===0&&(l.closeListbox(),Y().nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}));break;case C(t.orientation,{vertical:R.ArrowDown,horizontal:R.ArrowRight}):return a.preventDefault(),a.stopPropagation(),l.goToOption(D.Next);case C(t.orientation,{vertical:R.ArrowUp,horizontal:R.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),l.goToOption(D.Previous);case R.Home:case R.PageUp:return a.preventDefault(),a.stopPropagation(),l.goToOption(D.First);case R.End:case R.PageDown:return a.preventDefault(),a.stopPropagation(),l.goToOption(D.Last);case R.Escape:return a.preventDefault(),a.stopPropagation(),l.closeListbox(),y.nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})});case R.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(l.search(a.key),m.setTimeout(()=>l.clearSearch(),350));break}}),h=le(()=>{var a,f,T;return(T=(a=t.labelRef.current)==null?void 0:a.id)!=null?T:(f=t.buttonRef.current)==null?void 0:f.id},[t.labelRef.current,t.buttonRef.current]),E=p.useMemo(()=>({open:t.listboxState===0}),[t]),v={"aria-activedescendant":t.activeOptionIndex===null||(o=t.options[t.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":h,"aria-orientation":t.orientation,id:i,onKeyDown:S,role:"listbox",tabIndex:0,ref:g};return M({ourProps:v,theirProps:s,slot:E,defaultTag:Ye,features:Ze,visible:I,name:"Listbox.Options"})}let tt="li";function nt(e,r){let o=G(),{id:n=`headlessui-listbox-option-${o}`,disabled:i=!1,value:s,...t}=e,l=B("Listbox.Option"),g=A("Listbox.Option"),y=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===n:!1,m=l.isSelected(s),z=p.useRef(null),I=Me(z),S=Te({disabled:i,value:s,domRef:z,get textValue(){return I()}}),h=V(r,z);H(()=>{if(l.listboxState!==0||!y||l.activationTrigger===0)return;let O=Y();return O.requestAnimationFrame(()=>{var w,x;(x=(w=z.current)==null?void 0:w.scrollIntoView)==null||x.call(w,{block:"nearest"})}),O.dispose},[z,y,l.listboxState,l.activationTrigger,l.activeOptionIndex]),H(()=>g.registerOption(n,S),[S,n]);let E=b(O=>{if(i)return O.preventDefault();g.onChange(s),l.mode===0&&(g.closeListbox(),Y().nextFrame(()=>{var w;return(w=l.buttonRef.current)==null?void 0:w.focus({preventScroll:!0})}))}),v=b(()=>{if(i)return g.goToOption(D.Nothing);g.goToOption(D.Specific,n)}),a=$e(),f=b(O=>a.update(O)),T=b(O=>{a.wasMoved(O)&&(i||y||g.goToOption(D.Specific,n,0))}),k=b(O=>{a.wasMoved(O)&&(i||y&&g.goToOption(D.Nothing))}),P=p.useMemo(()=>({active:y,selected:m,disabled:i}),[y,m,i]);return M({ourProps:{id:n,ref:h,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":m,disabled:void 0,onClick:E,onFocus:v,onPointerEnter:f,onMouseEnter:f,onPointerMove:T,onMouseMove:T,onPointerLeave:k,onMouseLeave:k},theirProps:t,slot:P,defaultTag:tt,name:"Listbox.Option"})}let rt=q(Ge),at=q(We),ot=q(Je),lt=q(et),it=q(nt),N=Object.assign(rt,{Button:at,Label:ot,Options:lt,Option:it});const st=268,ut=(e,r)=>$("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-background-medium":e},{"zep-bg-background-medium":r},{"zep-pr-3":r}),oe=p.forwardRef(({disabled:e=!1,items:r,message:o,label:n,placeholder:i,readOnly:s=!1,state:t="default",...l},g)=>{const y=d.useRef(null),m=t==="error",z=e||s,I=m?"zep-text-error":t==="info"?"zep-text-info":"",S=l==null?void 0:l.value;return d.createElement("div",{className:qe($("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e},l.className)),"data-testid":"zep-drop-down"},d.createElement(N,{disabled:z,...l,ref:g},({open:h})=>{const v=Fe(y.current)<st,a=s?void 0:i,f=(S==null?void 0:S.name)||a,T=e?"zep-text-opacity-disabled":!(S!=null&&S.name)&&!s?"zep-text-typography-dark-100 zep-text-opacity-70":"zep-text-typography-dark-100",k=$("zep-inline-flex","zep-justify-between","zep-rounded-4","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",m?"zep-border-2":"zep-border-1",T,{"zep-bg-background-medium":s},{"zep-ring":h},{"zep-border-error":m},{"zep-active:ring":!z},{"zep-ring-offset-1":!z},{"focus-visible:zep-ring":!z},{"zep-ring-focus":!z},{"zep-cursor-not-allowed":z}),P=$("zep-absolute","zep-drop-shadow-md","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",v?"zep-mb-[-25px]":"zep-mt-0.25",{"zep-bottom-full":v}),O=$(z?"zep-text-opacity-disabled":"zep-text-typography-dark-100","zep-transition-transform","zep-duration-500","zep-shrink-0",{"zep-rotate-180":h});return d.createElement(d.Fragment,null,n&&d.createElement(N.Label,{className:$("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e})},n,!l.required&&d.createElement("span",{className:"zep-ml-0.25"},"(optional)")),d.createElement(N.Button,{className:k,ref:y,title:f,"data-testid":"zep-drop-down-button"},d.createElement(d.Fragment,null,d.createElement("span",{className:"zep-truncate"},f),d.createElement(X,{className:O,name:"chevron-mini-down",role:"img",size:24}))),d.createElement(Ne,{as:p.Fragment,enter:"zep-transition zep-ease-out zep-duration-100",enterFrom:"zep-transform zep-opacity-0 zep-scale-95",enterTo:"zep-transform zep-opacity-100 zep-scale-100",leave:"zep-transition zep-ease-in zep-duration-25",leaveFrom:"zep-transform zep-opacity-100 zep-scale-100",leaveTo:"zep-transform zep-opacity-0 zep-scale-95"},d.createElement(N.Options,{className:P,"data-testid":"zep-drop-down-menu"},r.map((w,x)=>d.createElement(N.Option,{key:w.id,value:w,title:w.name,className:({active:F,selected:K})=>ut(F,K)},({selected:F})=>d.createElement(d.Fragment,null,d.createElement("span",{className:"zep-truncate"},w.name),F&&d.createElement(X,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})))))))}),o&&d.createElement("div",{className:$("zep-mt-[6px]",{"zep-text-typography-dark-100 zep-opacity-70":!m},"zep-text-0.875","zep-flex","zep-items-center",I,{"zep-text-error":m})},t!=="default"&&d.createElement(X,{name:m?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),d.createElement("span",{className:"zep-mt-[2px]"},o)))});try{oe.displayName="DropDown",oe.__docgenInfo={description:"",displayName:"DropDown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropDownItem[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DropDownItem"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: string) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'}]}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | ((bag: ListboxRenderPropArg<any>) => string)"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},by:{defaultValue:null,description:"",name:"by",required:!1,type:{name:"string | ((a: any, z: any) => boolean)"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}}}}}catch{}export{oe as D};
//# sourceMappingURL=DropDown-ec80b9be.js.map