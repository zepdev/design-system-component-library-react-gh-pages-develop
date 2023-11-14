import{r as c,R as N}from"./index-39946eba.js";import{o as p,S as Y,D as E,y as F,T as be,u as C,l as U,h as ve,a as xe,b as ge,p as z,c as me,d as H,e as Oe,f as Re,g as Se,R as he,X as k,I as j,i as ee,s as ye,C as Le,j as Ie,k as $e,m as Te,n as L,q as g,r as De,t as K,x as Pe,v as Ce}from"./use-tracked-pointer-b77c549c.js";let Z=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function _(e){var o,i;let r=(o=e.innerText)!=null?o:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return r;let u=!1;for(let l of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),u=!0;let t=u?(i=a.innerText)!=null?i:"":r;return Z.test(t)&&(t=t.replace(Z,"")),t}function Ee(e){let o=e.getAttribute("aria-label");if(typeof o=="string")return o.trim();let i=e.getAttribute("aria-labelledby");if(i){let r=i.split(" ").map(a=>{let u=document.getElementById(a);if(u){let t=u.getAttribute("aria-label");return typeof t=="string"?t.trim():_(u).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return _(e).trim()}function Fe(e){let o=c.useRef(""),i=c.useRef("");return p(()=>{let r=e.current;if(!r)return"";let a=r.innerText;if(o.current===a)return i.current;let u=Ee(r).trim().toLowerCase();return o.current=a,i.current=u,u})}var ke=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ke||{}),we=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(we||{}),Me=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Me||{}),Ae=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ae||{});function G(e,o=i=>i){let i=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=Ce(o(e.options.slice()),u=>u.dataRef.current.domRef.current),a=i?r.indexOf(i):null;return a===-1&&(a=null),{options:r,activeOptionIndex:a}}let Be={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let o=e.activeOptionIndex,{isSelected:i}=e.dataRef.current,r=e.options.findIndex(a=>i(a.dataRef.current.value));return r!==-1&&(o=r),{...e,listboxState:0,activeOptionIndex:o}},2(e,o){var i;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=G(e),a=Pe(o,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:a,activationTrigger:(i=o.trigger)!=null?i:1}},3:(e,o)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let i=e.searchQuery!==""?0:1,r=e.searchQuery+o.value.toLowerCase(),a=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+i).concat(e.options.slice(0,e.activeOptionIndex+i)):e.options).find(t=>{var l;return!t.dataRef.current.disabled&&((l=t.dataRef.current.textValue)==null?void 0:l.startsWith(r))}),u=a?e.options.indexOf(a):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:u,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,o)=>{let i={id:o.id,dataRef:o.dataRef},r=G(e,a=>[...a,i]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(o.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(i)),{...e,...r}},6:(e,o)=>{let i=G(e,r=>{let a=r.findIndex(u=>u.id===o.id);return a!==-1&&r.splice(a,1),r});return{...e,...i,activationTrigger:1}},7:(e,o)=>({...e,labelId:o.id})},W=c.createContext(null);W.displayName="ListboxActionsContext";function w(e){let o=c.useContext(W);if(o===null){let i=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,w),i}return o}let X=c.createContext(null);X.displayName="ListboxDataContext";function M(e){let o=c.useContext(X);if(o===null){let i=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,M),i}return o}function Qe(e,o){return C(o.type,Be,e,o)}let Ne=c.Fragment;function Ue(e,o){let{value:i,defaultValue:r,form:a,name:u,onChange:t,by:l=(s,d)=>s===d,disabled:v=!1,horizontal:m=!1,multiple:O=!1,...I}=e;const D=m?"horizontal":"vertical";let $=F(o),[R=O?[]:void 0,y]=be(i,t,r),[x,n]=c.useReducer(Qe,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),f=c.useRef({static:!1,hold:!1}),P=c.useRef(null),A=c.useRef(null),q=c.useRef(null),S=p(typeof l=="string"?(s,d)=>{let h=l;return(s==null?void 0:s[h])===(d==null?void 0:d[h])}:l),T=c.useCallback(s=>C(b.mode,{1:()=>R.some(d=>S(d,s)),0:()=>S(R,s)}),[R]),b=c.useMemo(()=>({...x,value:R,disabled:v,mode:O?1:0,orientation:D,compare:S,isSelected:T,optionsPropsRef:f,labelRef:P,buttonRef:A,optionsRef:q}),[R,v,O,x]);U(()=>{x.dataRef.current=b},[b]),ve([b.buttonRef,b.optionsRef],(s,d)=>{var h;n({type:1}),xe(d,ge.Loose)||(s.preventDefault(),(h=b.buttonRef.current)==null||h.focus())},b.listboxState===0);let te=c.useMemo(()=>({open:b.listboxState===0,disabled:v,value:R}),[b,v,R]),re=p(s=>{let d=b.options.find(h=>h.id===s);d&&V(d.dataRef.current.value)}),ne=p(()=>{if(b.activeOptionIndex!==null){let{dataRef:s,id:d}=b.options[b.activeOptionIndex];V(s.current.value),n({type:2,focus:L.Specific,id:d})}}),oe=p(()=>n({type:0})),ie=p(()=>n({type:1})),ae=p((s,d,h)=>s===L.Specific?n({type:2,focus:L.Specific,id:d,trigger:h}):n({type:2,focus:s,trigger:h})),le=p((s,d)=>(n({type:5,id:s,dataRef:d}),()=>n({type:6,id:s}))),ue=p(s=>(n({type:7,id:s}),()=>n({type:7,id:null}))),V=p(s=>C(b.mode,{0(){return y==null?void 0:y(s)},1(){let d=b.value.slice(),h=d.findIndex(Q=>S(Q,s));return h===-1?d.push(s):d.splice(h,1),y==null?void 0:y(d)}})),se=p(s=>n({type:3,value:s})),ce=p(()=>n({type:4})),de=c.useMemo(()=>({onChange:V,registerOption:le,registerLabel:ue,goToOption:ae,closeListbox:ie,openListbox:oe,selectActiveOption:ne,selectOption:re,search:se,clearSearch:ce}),[]),pe={ref:$},B=c.useRef(null),fe=z();return c.useEffect(()=>{B.current&&r!==void 0&&fe.addEventListener(B.current,"reset",()=>{y==null||y(r)})},[B,y]),N.createElement(W.Provider,{value:de},N.createElement(X.Provider,{value:b},N.createElement(me,{value:C(b.listboxState,{0:H.Open,1:H.Closed})},u!=null&&R!=null&&Oe({[u]:R}).map(([s,d],h)=>N.createElement(Re,{features:Se.Hidden,ref:h===0?Q=>{var J;B.current=(J=Q==null?void 0:Q.closest("form"))!=null?J:null}:void 0,...he({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,name:s,value:d})})),k({ourProps:pe,theirProps:I,slot:te,defaultTag:Ne,name:"Listbox"}))))}let ze="button";function He(e,o){var i;let r=j(),{id:a=`headlessui-listbox-button-${r}`,...u}=e,t=M("Listbox.Button"),l=w("Listbox.Button"),v=F(t.buttonRef,o),m=z(),O=p(x=>{switch(x.key){case g.Space:case g.Enter:case g.ArrowDown:x.preventDefault(),l.openListbox(),m.nextFrame(()=>{t.value||l.goToOption(L.First)});break;case g.ArrowUp:x.preventDefault(),l.openListbox(),m.nextFrame(()=>{t.value||l.goToOption(L.Last)});break}}),I=p(x=>{switch(x.key){case g.Space:x.preventDefault();break}}),D=p(x=>{if(De(x.currentTarget))return x.preventDefault();t.listboxState===0?(l.closeListbox(),m.nextFrame(()=>{var n;return(n=t.buttonRef.current)==null?void 0:n.focus({preventScroll:!0})})):(x.preventDefault(),l.openListbox())}),$=ee(()=>{if(t.labelId)return[t.labelId,a].join(" ")},[t.labelId,a]),R=c.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),y={ref:v,id:a,type:ye(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(i=t.optionsRef.current)==null?void 0:i.id,"aria-expanded":t.listboxState===0,"aria-labelledby":$,disabled:t.disabled,onKeyDown:O,onKeyUp:I,onClick:D};return k({ourProps:y,theirProps:u,slot:R,defaultTag:ze,name:"Listbox.Button"})}let je="label";function qe(e,o){let i=j(),{id:r=`headlessui-listbox-label-${i}`,...a}=e,u=M("Listbox.Label"),t=w("Listbox.Label"),l=F(u.labelRef,o);U(()=>t.registerLabel(r),[r]);let v=p(()=>{var O;return(O=u.buttonRef.current)==null?void 0:O.focus({preventScroll:!0})}),m=c.useMemo(()=>({open:u.listboxState===0,disabled:u.disabled}),[u]);return k({ourProps:{ref:l,id:r,onClick:v},theirProps:a,slot:m,defaultTag:je,name:"Listbox.Label"})}let Ve="ul",Ge=Y.RenderStrategy|Y.Static;function Ke(e,o){var i;let r=j(),{id:a=`headlessui-listbox-options-${r}`,...u}=e,t=M("Listbox.Options"),l=w("Listbox.Options"),v=F(t.optionsRef,o),m=z(),O=z(),I=Le(),D=(()=>I!==null?(I&H.Open)===H.Open:t.listboxState===0)();c.useEffect(()=>{var n;let f=t.optionsRef.current;f&&t.listboxState===0&&f!==((n=Ie(f))==null?void 0:n.activeElement)&&f.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let $=p(n=>{switch(O.dispose(),n.key){case g.Space:if(t.searchQuery!=="")return n.preventDefault(),n.stopPropagation(),l.search(n.key);case g.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:f}=t.options[t.activeOptionIndex];l.onChange(f.current.value)}t.mode===0&&(l.closeListbox(),K().nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}));break;case C(t.orientation,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return n.preventDefault(),n.stopPropagation(),l.goToOption(L.Next);case C(t.orientation,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),l.goToOption(L.Previous);case g.Home:case g.PageUp:return n.preventDefault(),n.stopPropagation(),l.goToOption(L.First);case g.End:case g.PageDown:return n.preventDefault(),n.stopPropagation(),l.goToOption(L.Last);case g.Escape:return n.preventDefault(),n.stopPropagation(),l.closeListbox(),m.nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})});case g.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(l.search(n.key),O.setTimeout(()=>l.clearSearch(),350));break}}),R=ee(()=>{var n,f,P;return(P=(n=t.labelRef.current)==null?void 0:n.id)!=null?P:(f=t.buttonRef.current)==null?void 0:f.id},[t.labelRef.current,t.buttonRef.current]),y=c.useMemo(()=>({open:t.listboxState===0}),[t]),x={"aria-activedescendant":t.activeOptionIndex===null||(i=t.options[t.activeOptionIndex])==null?void 0:i.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":R,"aria-orientation":t.orientation,id:a,onKeyDown:$,role:"listbox",tabIndex:0,ref:v};return k({ourProps:x,theirProps:u,slot:y,defaultTag:Ve,features:Ge,visible:D,name:"Listbox.Options"})}let We="li";function Xe(e,o){let i=j(),{id:r=`headlessui-listbox-option-${i}`,disabled:a=!1,value:u,...t}=e,l=M("Listbox.Option"),v=w("Listbox.Option"),m=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===r:!1,O=l.isSelected(u),I=c.useRef(null),D=Fe(I),$=$e({disabled:a,value:u,domRef:I,get textValue(){return D()}}),R=F(o,I);U(()=>{if(l.listboxState!==0||!m||l.activationTrigger===0)return;let S=K();return S.requestAnimationFrame(()=>{var T,b;(b=(T=I.current)==null?void 0:T.scrollIntoView)==null||b.call(T,{block:"nearest"})}),S.dispose},[I,m,l.listboxState,l.activationTrigger,l.activeOptionIndex]),U(()=>v.registerOption(r,$),[$,r]);let y=p(S=>{if(a)return S.preventDefault();v.onChange(u),l.mode===0&&(v.closeListbox(),K().nextFrame(()=>{var T;return(T=l.buttonRef.current)==null?void 0:T.focus({preventScroll:!0})}))}),x=p(()=>{if(a)return v.goToOption(L.Nothing);v.goToOption(L.Specific,r)}),n=Te(),f=p(S=>n.update(S)),P=p(S=>{n.wasMoved(S)&&(a||m||v.goToOption(L.Specific,r,0))}),A=p(S=>{n.wasMoved(S)&&(a||m&&v.goToOption(L.Nothing))}),q=c.useMemo(()=>({active:m,selected:O,disabled:a}),[m,O,a]);return k({ourProps:{id:r,ref:R,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":O,disabled:void 0,onClick:y,onFocus:x,onPointerEnter:f,onMouseEnter:f,onPointerMove:P,onMouseMove:P,onPointerLeave:A,onMouseLeave:A},theirProps:t,slot:q,defaultTag:We,name:"Listbox.Option"})}let Je=E(Ue),Ye=E(He),Ze=E(qe),_e=E(Ke),et=E(Xe),nt=Object.assign(Je,{Button:Ye,Label:Ze,Options:_e,Option:et});export{nt as N};
//# sourceMappingURL=listbox-c7f2199f.js.map