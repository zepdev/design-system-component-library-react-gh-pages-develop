import{j as o,c as v}from"./clsx-24df0f47.js";import{R as D,r as i}from"./index-b1e7e93e.js";import{F as re}from"./Icon-b55ee1a6.js";import{f as ce}from"./focus-d7245c50.js";import{O as M,U as _,y as C,c as ie,o as P,u as O,C as k,I as W,d as ee,T as te,b as S}from"./keyboard-93128b4d.js";import{s as ne,d as I,u as se}from"./open-closed-23b462a4.js";import{r as le}from"./bugs-8e007c11.js";import{o as ae}from"./owner-1e815d84.js";import{S as me}from"./Spacing-dbf33a94.js";import"./_commonjsHelpers-de833af9.js";import"./index-b7fee60d.js";var K;let de=(K=D.startTransition)!=null?K:function(e){e()};var ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ue||{}),pe=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(pe||{});let he={0:e=>({...e,disclosureState:O(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,r){return e.buttonId===r.buttonId?e:{...e,buttonId:r.buttonId}},3(e,r){return e.panelId===r.panelId?e:{...e,panelId:r.panelId}}},w=i.createContext(null);w.displayName="DisclosureContext";function R(e){let r=i.useContext(w);if(r===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,R),a}return r}let $=i.createContext(null);$.displayName="DisclosureAPIContext";function oe(e){let r=i.useContext($);if(r===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,oe),a}return r}let F=i.createContext(null);F.displayName="DisclosurePanelContext";function be(){return i.useContext(F)}function Ne(e,r){return O(r.type,he,e,r)}let fe=i.Fragment;function xe(e,r){let{defaultOpen:a=!1,...m}=e,b=i.useRef(null),c=C(r,ie(h=>{b.current=h},e.as===void 0||e.as===i.Fragment)),t=i.useRef(null),d=i.useRef(null),s=i.useReducer(Ne,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:d,panelRef:t,buttonId:null,panelId:null}),[{disclosureState:p,buttonId:n},N]=s,u=P(h=>{N({type:1});let g=ae(b);if(!g||!n)return;let l=(()=>h?h instanceof HTMLElement?h:h.current instanceof HTMLElement?h.current:g.getElementById(n):g.getElementById(n))();l==null||l.focus()}),j=i.useMemo(()=>({close:u}),[u]),x=i.useMemo(()=>({open:p===0,close:u}),[p,u]),z={ref:c};return D.createElement(w.Provider,{value:s},D.createElement($.Provider,{value:j},D.createElement(ne,{value:O(p,{0:I.Open,1:I.Closed})},k({ourProps:z,theirProps:m,slot:x,defaultTag:fe,name:"Disclosure"}))))}let je="button";function ge(e,r){let a=W(),{id:m=`headlessui-disclosure-button-${a}`,...b}=e,[c,t]=R("Disclosure.Button"),d=be(),s=d===null?!1:d===c.panelId,p=i.useRef(null),n=C(p,r,s?null:c.buttonRef),N=ee();i.useEffect(()=>{if(!s)return t({type:2,buttonId:m}),()=>{t({type:2,buttonId:null})}},[m,t,s]);let u=P(l=>{var E;if(s){if(c.disclosureState===1)return;switch(l.key){case S.Space:case S.Enter:l.preventDefault(),l.stopPropagation(),t({type:0}),(E=c.buttonRef.current)==null||E.focus();break}}else switch(l.key){case S.Space:case S.Enter:l.preventDefault(),l.stopPropagation(),t({type:0});break}}),j=P(l=>{switch(l.key){case S.Space:l.preventDefault();break}}),x=P(l=>{var E;le(l.currentTarget)||e.disabled||(s?(t({type:0}),(E=c.buttonRef.current)==null||E.focus()):t({type:0}))}),z=i.useMemo(()=>({open:c.disclosureState===0}),[c]),h=te(e,p),g=s?{ref:n,type:h,onKeyDown:u,onClick:x}:{ref:n,id:m,type:h,"aria-expanded":c.disclosureState===0,"aria-controls":c.linkedPanel?c.panelId:void 0,onKeyDown:u,onKeyUp:j,onClick:x};return k({mergeRefs:N,ourProps:g,theirProps:b,slot:z,defaultTag:je,name:"Disclosure.Button"})}let Ee="div",ve=M.RenderStrategy|M.Static;function Se(e,r){let a=W(),{id:m=`headlessui-disclosure-panel-${a}`,...b}=e,[c,t]=R("Disclosure.Panel"),{close:d}=oe("Disclosure.Panel"),s=ee(),p=C(r,c.panelRef,x=>{de(()=>t({type:x?4:5}))});i.useEffect(()=>(t({type:3,panelId:m}),()=>{t({type:3,panelId:null})}),[m,t]);let n=se(),N=(()=>n!==null?(n&I.Open)===I.Open:c.disclosureState===0)(),u=i.useMemo(()=>({open:c.disclosureState===0,close:d}),[c,d]),j={ref:p,id:m};return D.createElement(F.Provider,{value:c.panelId},k({mergeRefs:s,ourProps:j,theirProps:b,slot:u,defaultTag:Ee,features:ve,visible:N,name:"Disclosure.Panel"}))}let De=_(xe),Ae=_(ge),Te=_(Se),L=Object.assign(De,{Button:Ae,Panel:Te});var f=(e=>(e.ALL_CLOSED="ALL_CLOSED",e.ALL_OPEN="ALL_OPEN",e.FIRST_OPEN="FIRST_OPEN",e))(f||{});const A=i.forwardRef(({items:e,initialState:r=f.ALL_CLOSED,className:a,...m},b)=>{const c=t=>{switch(r){case f.ALL_OPEN:return!0;case f.FIRST_OPEN:return t===0;case f.ALL_CLOSED:default:return!1}};return o.jsxDEV(o.Fragment,{children:e.map((t,d)=>{const{title:s,content:p,disabled:n}=t;return o.jsxDEV(L,{defaultOpen:c(d),children:({open:N})=>{const u=v("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":N});return o.jsxDEV("div",{"data-disabled":n,className:v("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!n},{"hover:!zep-border-neutral-dark-active":!n},a),children:[o.jsxDEV(L.Button,{disabled:n,className:v("zep-typography-headlineXS-fluid-cqi","zep-w-full",ce,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":n},{"zep-opacity-disabled":n}),...m,ref:b,"data-testid":`zep-accordion-button-${d}`,children:o.jsxDEV(me,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[o.jsxDEV("span",{className:"zep-text-left",children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:68,columnNumber:25},globalThis),o.jsxDEV(re,{className:v("zep-min-w-[24px] !zep-grow-0 zep-justify-end",u),name:"chevron-mini-down"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:69,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:67,columnNumber:23},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:49,columnNumber:21},globalThis),o.jsxDEV(L.Panel,{className:v({"zep-hidden":!N},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:p},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:75,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:33,columnNumber:19},globalThis)}},`${s}-${d}`,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:27,columnNumber:13},globalThis)})},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:23,columnNumber:7},globalThis)});try{A.displayName="Accordion",A.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItem[]"}},initialState:{defaultValue:{value:"AccordionInitialState.ALL_CLOSED"},description:"",name:"initialState",required:!1,type:{name:"enum",value:[{value:'"ALL_CLOSED"'},{value:'"ALL_OPEN"'},{value:'"FIRST_OPEN"'}]}}}}}catch{}const Re={title:"Components/Accordion",component:A,tags:["autodocs"],argTypes:{}},B=[{title:"Accordion 1",content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:22,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:23,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:21,columnNumber:7},globalThis)},{title:"Accordion 2",content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:32,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:33,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:34,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:35,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:36,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:37,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:38,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:39,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:40,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:41,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:42,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:43,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:44,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:45,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:46,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:47,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:48,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:49,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:50,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:51,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:52,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:53,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:54,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:55,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:56,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:57,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:58,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:59,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:60,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:61,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:31,columnNumber:7},globalThis)},{title:"Accordion 3 with a very long title that should wrap to the next line if there is not enough space",content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:69,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:70,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:68,columnNumber:7},globalThis)},{title:"Accordion 4",disabled:!0,content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:79,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:80,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:78,columnNumber:7},globalThis)},{title:"Accordion 5",content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:88,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:89,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:87,columnNumber:7},globalThis)}],T={args:{items:B},render:e=>o.jsxDEV("div",{className:"zep-max-w-[712px]",children:o.jsxDEV(A,{...e},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:101,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:100,columnNumber:5},globalThis)},V={args:{items:B,initialState:f.ALL_OPEN}},y={args:{items:B,initialState:f.FIRST_OPEN},render:e=>o.jsxDEV(A,{...e},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:118,columnNumber:21},globalThis)};var U,q,H;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => <div className="zep-max-w-[712px]">
      <Accordion {...args} />
    </div>
}`,...(H=(q=T.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var Q,X,Y;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items,
    initialState: AccordionInitialState.ALL_OPEN
  } as AccordionProps
}`,...(Y=(X=V.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,G,J;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items,
    initialState: AccordionInitialState.FIRST_OPEN
  },
  render: args => <Accordion {...args} />
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const $e=["Default","ExpandAll","ExpandFirstItem"];export{T as Default,V as ExpandAll,y as ExpandFirstItem,$e as __namedExportsOrder,Re as default};
