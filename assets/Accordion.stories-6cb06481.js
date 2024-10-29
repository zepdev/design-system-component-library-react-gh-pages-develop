import{j as o,c as j}from"./clsx-42c82d7d.js";import{w as Z,u as G,e as J}from"./index-8d4015d3.js";import{R as v,r as i}from"./index-39946eba.js";import{F as W}from"./Icon-fd4d149d.js";import{f as ee}from"./focus-d7245c50.js";import{S as F,D as I,y as P,T as oe,o as A,u as w,X as k,I as X,s as ce,e as re,b as g}from"./keyboard-0ca52a30.js";import{c as ie,d as S,C as te,r as ne}from"./open-closed-8b62a719.js";import{S as se}from"./Spacing-0ac87ba5.js";import"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";import"./index-7d4e1659.js";var _;let le=(_=v.startTransition)!=null?_:function(e){e()};var ae=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ae||{}),me=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(me||{});let de={0:e=>({...e,disclosureState:w(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,c){return e.buttonId===c.buttonId?e:{...e,buttonId:c.buttonId}},3(e,c){return e.panelId===c.panelId?e:{...e,panelId:c.panelId}}},C=i.createContext(null);C.displayName="DisclosureContext";function R(e){let c=i.useContext(C);if(c===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,R),l}return c}let $=i.createContext(null);$.displayName="DisclosureAPIContext";function Q(e){let c=i.useContext($);if(c===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,Q),l}return c}let B=i.createContext(null);B.displayName="DisclosurePanelContext";function ue(){return i.useContext(B)}function pe(e,c){return w(c.type,de,e,c)}let he=i.Fragment;function be(e,c){let{defaultOpen:l=!1,...m}=e,h=i.useRef(null),r=P(c,oe(p=>{h.current=p},e.as===void 0||e.as===i.Fragment)),n=i.useRef(null),u=i.useRef(null),t=i.useReducer(pe,{disclosureState:l?0:1,linkedPanel:!1,buttonRef:u,panelRef:n,buttonId:null,panelId:null}),[{disclosureState:a,buttonId:d},x]=t,b=A(p=>{x({type:1});let s=re(h);if(!s||!d)return;let f=(()=>p?p instanceof HTMLElement?p:p.current instanceof HTMLElement?p.current:s.getElementById(d):s.getElementById(d))();f==null||f.focus()}),N=i.useMemo(()=>({close:b}),[b]),V=i.useMemo(()=>({open:a===0,close:b}),[a,b]),D={ref:r};return v.createElement(C.Provider,{value:t},v.createElement($.Provider,{value:N},v.createElement(ie,{value:w(a,{0:S.Open,1:S.Closed})},k({ourProps:D,theirProps:m,slot:V,defaultTag:he,name:"Disclosure"}))))}let fe="button";function xe(e,c){let l=X(),{id:m=`headlessui-disclosure-button-${l}`,...h}=e,[r,n]=R("Disclosure.Button"),u=ue(),t=u===null?!1:u===r.panelId,a=i.useRef(null),d=P(a,c,t?null:r.buttonRef);i.useEffect(()=>{if(!t)return n({type:2,buttonId:m}),()=>{n({type:2,buttonId:null})}},[m,n,t]);let x=A(s=>{var f;if(t){if(r.disclosureState===1)return;switch(s.key){case g.Space:case g.Enter:s.preventDefault(),s.stopPropagation(),n({type:0}),(f=r.buttonRef.current)==null||f.focus();break}}else switch(s.key){case g.Space:case g.Enter:s.preventDefault(),s.stopPropagation(),n({type:0});break}}),b=A(s=>{switch(s.key){case g.Space:s.preventDefault();break}}),N=A(s=>{var f;ne(s.currentTarget)||e.disabled||(t?(n({type:0}),(f=r.buttonRef.current)==null||f.focus()):n({type:0}))}),V=i.useMemo(()=>({open:r.disclosureState===0}),[r]),D=ce(e,a),p=t?{ref:d,type:D,onKeyDown:x,onClick:N}:{ref:d,id:m,type:D,"aria-expanded":r.disclosureState===0,"aria-controls":r.linkedPanel?r.panelId:void 0,onKeyDown:x,onKeyUp:b,onClick:N};return k({ourProps:p,theirProps:h,slot:V,defaultTag:fe,name:"Disclosure.Button"})}let Ne="div",je=F.RenderStrategy|F.Static;function ge(e,c){let l=X(),{id:m=`headlessui-disclosure-panel-${l}`,...h}=e,[r,n]=R("Disclosure.Panel"),{close:u}=Q("Disclosure.Panel"),t=P(c,r.panelRef,N=>{le(()=>n({type:N?4:5}))});i.useEffect(()=>(n({type:3,panelId:m}),()=>{n({type:3,panelId:null})}),[m,n]);let a=te(),d=(()=>a!==null?(a&S.Open)===S.Open:r.disclosureState===0)(),x=i.useMemo(()=>({open:r.disclosureState===0,close:u}),[r,u]),b={ref:t,id:m};return v.createElement(B.Provider,{value:r.panelId},k({ourProps:b,theirProps:h,slot:x,defaultTag:Ne,features:je,visible:d,name:"Disclosure.Panel"}))}let ve=I(be),De=I(xe),Ee=I(ge),z=Object.assign(ve,{Button:De,Panel:Ee});const y=i.forwardRef(({items:e,className:c,...l},m)=>o.jsxDEV(o.Fragment,{children:e.map((h,r)=>{const{title:n,content:u,disabled:t}=h;return o.jsxDEV(z,{children:({open:a})=>{const d=j("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":a});return o.jsxDEV("div",{"data-disabled":t,className:j("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!t},{"hover:!zep-border-neutral-dark-active":!t},c),children:[o.jsxDEV(z.Button,{disabled:t,className:j("zep-typography-headlineXS-fluid-cqi","zep-w-full",ee,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":t},{"zep-opacity-disabled":t}),...l,ref:m,"data-testid":`zep-accordion-button-${r}`,children:o.jsxDEV(se,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[o.jsxDEV("span",{className:"zep-text-left",children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:56,columnNumber:23},globalThis),o.jsxDEV(W,{className:j("zep-min-w-[24px] !zep-grow-0 zep-justify-end",d),name:"chevron-mini-down"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:57,columnNumber:23},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:55,columnNumber:21},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:37,columnNumber:19},globalThis),o.jsxDEV(z.Panel,{className:j({"zep-hidden":!a},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:63,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:21,columnNumber:17},globalThis)}},`${n}-${r}`,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:15,columnNumber:11},globalThis)})},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.tsx",lineNumber:11,columnNumber:5},globalThis));try{y.displayName="Accordion",y.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItem[]"}}}}}catch{}const _e={title:"Components/Accordion",component:y,tags:["autodocs"],argTypes:{}},Y=[{title:"Accordion 1",content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:18,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:19,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:17,columnNumber:12},globalThis)},{title:"Accordion 2",content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:25,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:26,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:27,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:28,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:29,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:30,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:31,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:32,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:33,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:34,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:35,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:36,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:37,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:38,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:39,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:40,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:41,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:42,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:43,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:44,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:45,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:46,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:47,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:48,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:49,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:50,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:51,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:52,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:53,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:54,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:24,columnNumber:12},globalThis)},{title:"Accordion 3 with a very long title that should wrap to the next line if there is not enough space",content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:59,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:60,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:58,columnNumber:12},globalThis)},{title:"Accordion 4",disabled:!0,content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:66,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:67,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:65,columnNumber:12},globalThis)},{title:"Accordion 5",content:o.jsxDEV(o.Fragment,{children:[o.jsxDEV("p",{children:"Some text here"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:72,columnNumber:9},globalThis),o.jsxDEV("p",{children:"Some text there"},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:73,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:71,columnNumber:12},globalThis)}],E={args:{items:Y},render:e=>o.jsxDEV("div",{className:"zep-max-w-[712px]",children:o.jsxDEV(y,{...e},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:81,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accordion/Accordion.stories.tsx",lineNumber:80,columnNumber:19},globalThis)},Te=2,O=`zep-accordion-button-${Te}`,T={args:{items:Y},play:async({canvasElement:e})=>{const c=Z(e);await G.click(c.getByTestId(O)),await J(c.getByTestId(O)).toHaveAttribute("data-headlessui-state","open")}};var M,H,L;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items
  },
  render: args => <div className="zep-max-w-[712px]">
      <Accordion {...args} />
    </div>
}`,...(L=(H=E.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var q,K,U;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: ({
    items
  } as AccordionProps),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await expect(canvas.getByTestId(testItem)).toHaveAttribute('data-headlessui-state', 'open');
  }
}`,...(U=(K=T.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const Oe=["Default","ExpandAnItem"];export{E as Default,T as ExpandAnItem,Oe as __namedExportsOrder,_e as default};
//# sourceMappingURL=Accordion.stories-6cb06481.js.map
