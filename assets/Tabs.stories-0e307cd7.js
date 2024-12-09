import{j as t,c as J}from"./clsx-24df0f47.js";import{f as ve}from"./focus-d7245c50.js";import{r as c,R as w}from"./index-b1e7e93e.js";import{l as C,O as te,U as M,a as q,y as A,o as z,C as G,I as Te,T as Pe,u as _,b as v}from"./keyboard-93128b4d.js";import{u as fe,s as je,t as Ee}from"./hidden-601067d7.js";import{I as k,N as U,O as I,M as P}from"./focus-management-5143e399.js";import{o as De}from"./owner-1e815d84.js";import{w as ze,u as ye,e as Ve}from"./index-f872ea10.js";import"./_commonjsHelpers-de833af9.js";import"./index-03bbf7d1.js";import"./_baseIsEqual-cf90f23b.js";import"./index-356e4a49.js";function Ie(){let e=c.useRef(!1);return C(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function we({onFocus:e}){let[a,r]=c.useState(!0),n=Ie();return a?w.createElement(fe,{as:"button",type:"button",features:je.Focusable,onFocus:o=>{o.preventDefault();let i,u=50;function T(){if(u--<=0){i&&cancelAnimationFrame(i);return}if(e()){if(cancelAnimationFrame(i),!n.current)return;r(!1);return}i=requestAnimationFrame(T)}i=requestAnimationFrame(T)}}):null}const he=c.createContext(null);function Le(){return{groups:new Map,get(e,a){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let o=(r=n.get(a))!=null?r:0;n.set(a,o+1);let i=Array.from(n.keys()).indexOf(a);function u(){let T=n.get(a);T>1?n.set(a,T-1):n.delete(a)}return[i,u]}}}function Se({children:e}){let a=c.useRef(Le());return c.createElement(he.Provider,{value:a},e)}function xe(e){let a=c.useContext(he);if(!a)throw new Error("You must wrap your component in a <StableCollection>");let r=Re(),[n,o]=a.current.get(e,r);return c.useEffect(()=>o,[]),n}function Re(){var e,a,r;let n=(r=(a=(e=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:a.current)!=null?r:null;if(!n)return Symbol();let o=[],i=n;for(;i;)o.push(i.index),i=i.return;return"$."+o.join(".")}var $e=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))($e||{}),ke=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ke||{}),_e=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(_e||{});let Ce={0(e,a){var r;let n=k(e.tabs,b=>b.current),o=k(e.panels,b=>b.current),i=n.filter(b=>{var g;return!((g=b.current)!=null&&g.hasAttribute("disabled"))}),u={...e,tabs:n,panels:o};if(a.index<0||a.index>n.length-1){let b=_(Math.sign(a.index-e.selectedIndex),{[-1]:()=>1,0:()=>_(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(i.length===0)return u;let g=_(b,{0:()=>n.indexOf(i[0]),1:()=>n.indexOf(i[i.length-1])});return{...u,selectedIndex:g===-1?e.selectedIndex:g}}let T=n.slice(0,a.index),j=[...n.slice(a.index),...T].find(b=>i.includes(b));if(!j)return u;let N=(r=n.indexOf(j))!=null?r:e.selectedIndex;return N===-1&&(N=e.selectedIndex),{...u,selectedIndex:N}},1(e,a){if(e.tabs.includes(a.tab))return e;let r=e.tabs[e.selectedIndex],n=k([...e.tabs,a.tab],i=>i.current),o=e.selectedIndex;return e.info.current.isControlled||(o=n.indexOf(r),o===-1&&(o=e.selectedIndex)),{...e,tabs:n,selectedIndex:o}},2(e,a){return{...e,tabs:e.tabs.filter(r=>r!==a.tab)}},3(e,a){return e.panels.includes(a.panel)?e:{...e,panels:k([...e.panels,a.panel],r=>r.current)}},4(e,a){return{...e,panels:e.panels.filter(r=>r!==a.panel)}}},Q=c.createContext(null);Q.displayName="TabsDataContext";function L(e){let a=c.useContext(Q);if(a===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,L),r}return a}let Z=c.createContext(null);Z.displayName="TabsActionsContext";function ee(e){let a=c.useContext(Z);if(a===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ee),r}return a}function Me(e,a){return _(a.type,Ce,e,a)}let Ae=c.Fragment;function Ge(e,a){let{defaultIndex:r=0,vertical:n=!1,manual:o=!1,onChange:i,selectedIndex:u=null,...T}=e;const j=n?"vertical":"horizontal",N=o?"manual":"auto";let b=u!==null,g=q({isControlled:b}),E=A(a),[d,m]=c.useReducer(Me,{info:g,selectedIndex:u??r,tabs:[],panels:[]}),S=c.useMemo(()=>({selectedIndex:d.selectedIndex}),[d.selectedIndex]),R=q(i||(()=>{})),h=q(d.tabs),x=c.useMemo(()=>({orientation:j,activation:N,...d}),[j,N,d]),D=z(p=>(m({type:1,tab:p}),()=>m({type:2,tab:p}))),y=z(p=>(m({type:3,panel:p}),()=>m({type:4,panel:p}))),V=z(p=>{$.current!==p&&R.current(p),b||m({type:0,index:p})}),$=q(b?e.selectedIndex:d.selectedIndex),Y=c.useMemo(()=>({registerTab:D,registerPanel:y,change:V}),[]);C(()=>{m({type:0,index:u??r})},[u]),C(()=>{if($.current===void 0||d.tabs.length<=0)return;let p=k(d.tabs,l=>l.current);p.some((l,f)=>d.tabs[f]!==l)&&V(p.indexOf(d.tabs[$.current]))});let X={ref:E};return w.createElement(Se,null,w.createElement(Z.Provider,{value:Y},w.createElement(Q.Provider,{value:x},x.tabs.length<=0&&w.createElement(we,{onFocus:()=>{var p,l;for(let f of h.current)if(((p=f.current)==null?void 0:p.tabIndex)===0)return(l=f.current)==null||l.focus(),!0;return!1}}),G({ourProps:X,theirProps:T,slot:S,defaultTag:Ae,name:"Tabs"}))))}let Oe="div";function Fe(e,a){let{orientation:r,selectedIndex:n}=L("Tab.List"),o=A(a);return G({ourProps:{ref:o,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:Oe,name:"Tabs.List"})}let qe="button";function Ue(e,a){var r,n;let o=Te(),{id:i=`headlessui-tabs-tab-${o}`,...u}=e,{orientation:T,activation:j,selectedIndex:N,tabs:b,panels:g}=L("Tab"),E=ee("Tab"),d=L("Tab"),m=c.useRef(null),S=A(m,a);C(()=>E.registerTab(m),[E,m]);let R=xe("tabs"),h=b.indexOf(m);h===-1&&(h=R);let x=h===N,D=z(l=>{var f;let F=l();if(F===U.Success&&j==="auto"){let Ne=(f=De(m))==null?void 0:f.activeElement,ae=d.tabs.findIndex(ge=>ge.current===Ne);ae!==-1&&E.change(ae)}return F}),y=z(l=>{let f=b.map(F=>F.current).filter(Boolean);if(l.key===v.Space||l.key===v.Enter){l.preventDefault(),l.stopPropagation(),E.change(h);return}switch(l.key){case v.Home:case v.PageUp:return l.preventDefault(),l.stopPropagation(),D(()=>I(f,P.First));case v.End:case v.PageDown:return l.preventDefault(),l.stopPropagation(),D(()=>I(f,P.Last))}if(D(()=>_(T,{vertical(){return l.key===v.ArrowUp?I(f,P.Previous|P.WrapAround):l.key===v.ArrowDown?I(f,P.Next|P.WrapAround):U.Error},horizontal(){return l.key===v.ArrowLeft?I(f,P.Previous|P.WrapAround):l.key===v.ArrowRight?I(f,P.Next|P.WrapAround):U.Error}}))===U.Success)return l.preventDefault()}),V=c.useRef(!1),$=z(()=>{var l;V.current||(V.current=!0,(l=m.current)==null||l.focus({preventScroll:!0}),E.change(h),Ee(()=>{V.current=!1}))}),Y=z(l=>{l.preventDefault()}),X=c.useMemo(()=>{var l;return{selected:x,disabled:(l=e.disabled)!=null?l:!1}},[x,e.disabled]),p={ref:S,onKeyDown:y,onMouseDown:Y,onClick:$,id:i,role:"tab",type:Pe(e,m),"aria-controls":(n=(r=g[h])==null?void 0:r.current)==null?void 0:n.id,"aria-selected":x,tabIndex:x?0:-1};return G({ourProps:p,theirProps:u,slot:X,defaultTag:qe,name:"Tabs.Tab"})}let Be="div";function We(e,a){let{selectedIndex:r}=L("Tab.Panels"),n=A(a),o=c.useMemo(()=>({selectedIndex:r}),[r]);return G({ourProps:{ref:n},theirProps:e,slot:o,defaultTag:Be,name:"Tabs.Panels"})}let He="div",Ke=te.RenderStrategy|te.Static;function Ye(e,a){var r,n,o,i;let u=Te(),{id:T=`headlessui-tabs-panel-${u}`,tabIndex:j=0,...N}=e,{selectedIndex:b,tabs:g,panels:E}=L("Tab.Panel"),d=ee("Tab.Panel"),m=c.useRef(null),S=A(m,a);C(()=>d.registerPanel(m),[d,m,T]);let R=xe("panels"),h=E.indexOf(m);h===-1&&(h=R);let x=h===b,D=c.useMemo(()=>({selected:x}),[x]),y={ref:S,id:T,role:"tabpanel","aria-labelledby":(n=(r=g[h])==null?void 0:r.current)==null?void 0:n.id,tabIndex:x?j:-1};return!x&&((o=N.unmount)==null||o)&&!((i=N.static)!=null&&i)?w.createElement(fe,{as:"span","aria-hidden":"true",...y}):G({ourProps:y,theirProps:N,slot:D,defaultTag:He,features:Ke,visible:x,name:"Tabs.Panel"})}let Xe=M(Ue),Je=M(Ge),Qe=M(Fe),Ze=M(We),ea=M(Ye),O=Object.assign(Xe,{Group:Je,List:Qe,Panels:Ze,Panel:ea});const aa=({children:e})=>t.jsxDEV(O.Group,{"data-testid":"zep-tab-group",as:"div",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:10,columnNumber:5},globalThis),s=({disabled:e,children:a})=>t.jsxDEV(O,{className:"zep-group zep-flex zep-flex-col zep-justify-between zep-gap-0.5 zep-outline-none",disabled:e,"data-testid":"zep-tab",children:({selected:r})=>t.jsxDEV(t.Fragment,{children:[t.jsxDEV("span",{className:J("zep-typography-bodyText zep-rounded-4 zep-px-1 zep-outline-none zep-ring-focus  group-focus-visible:zep-text-typography-dark-100 group-focus-visible:zep-ring",{"zep-text-typography-dark-100":r,"zep-text-typography-dark-70/70":!r,"zep-text-typography-neutral-dark-disabled/40":e}),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:25,columnNumber:11},globalThis),t.jsxDEV("span",{className:J("zep-w-full",{"zep-h-0.25 zep-bg-primary-default":r,"zep-h-[1px] zep-bg-transparent group-hover:zep-bg-primary-default":!r&&!e})},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:37,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:24,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:18,columnNumber:5},globalThis),ta=({children:e})=>t.jsxDEV(O.List,{className:"zep-relative zep-flex zep-w-full zep-flex-col zep-overflow-x-scroll zep-bg-greyscale-0 zep-pt-0.75 sm:zep-overflow-visible","data-testid":"zep-tab-list",children:[t.jsxDEV("span",{className:"zep-absolute zep-bottom-[0] zep-flex zep-w-full zep-border-b-1 zep-border-solid zep-border-greyscale-400"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:55,columnNumber:7},globalThis),t.jsxDEV("div",{className:"zep-relative zep-flex zep-gap-0.5 zep-whitespace-nowrap",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:56,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:51,columnNumber:5},globalThis),ra=({children:e})=>t.jsxDEV(O.Panel,{className:J(ve,"zep-rounded-4"),"data-testid":"zep-tab-panel",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:63,columnNumber:5},globalThis),sa=({children:e})=>t.jsxDEV(O.Panels,{className:"zep-pt-1","data-testid":"zep-tab-panels",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:71,columnNumber:5},globalThis);s.Group=aa;s.List=ta;s.Panel=ra;s.Panels=sa;try{s.displayName="Tab",s.__docgenInfo={description:"",displayName:"Tab",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const xa={title:"Components/Tabs",component:s,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},B={render:()=>t.jsxDEV(s.Group,{children:[t.jsxDEV(s.List,{children:[t.jsxDEV(s,{children:"Tab 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:27,columnNumber:9},globalThis),t.jsxDEV(s,{children:"Tab 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:28,columnNumber:9},globalThis),t.jsxDEV(s,{children:"Tab 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:29,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:26,columnNumber:7},globalThis),t.jsxDEV(s.Panels,{children:[t.jsxDEV(s.Panel,{children:"Panel 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:32,columnNumber:9},globalThis),t.jsxDEV(s.Panel,{children:"Panel 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:33,columnNumber:9},globalThis),t.jsxDEV(s.Panel,{children:"Panel 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:34,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:31,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:25,columnNumber:5},globalThis)},W={render:()=>t.jsxDEV(s.Group,{children:[t.jsxDEV(s.List,{children:[t.jsxDEV(s,{children:"Tab 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:44,columnNumber:9},globalThis),t.jsxDEV(s,{disabled:!0,children:"Tab 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:45,columnNumber:9},globalThis),t.jsxDEV(s,{children:"Tab 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:46,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:43,columnNumber:7},globalThis),t.jsxDEV(s.Panels,{children:[t.jsxDEV(s.Panel,{children:"Panel 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:49,columnNumber:9},globalThis),t.jsxDEV(s.Panel,{children:"Panel 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:50,columnNumber:9},globalThis),t.jsxDEV(s.Panel,{children:"Panel 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:51,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:48,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:42,columnNumber:5},globalThis)},H={render:()=>t.jsxDEV(s.Group,{children:[t.jsxDEV("span",{},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:60,columnNumber:7},globalThis),t.jsxDEV(s.List,{children:[t.jsxDEV(s,{children:"Short tab 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:62,columnNumber:9},globalThis),t.jsxDEV(s,{children:"Medium text tab 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:63,columnNumber:9},globalThis),t.jsxDEV(s,{children:"Long text for the great tab 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:64,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:61,columnNumber:7},globalThis),t.jsxDEV(s.Panels,{children:[t.jsxDEV(s.Panel,{children:[t.jsxDEV("h2",{className:"zep-text-3",children:"Panel 1 Title"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:68,columnNumber:11},globalThis),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:67,columnNumber:9},globalThis),t.jsxDEV(s.Panel,{children:[t.jsxDEV("h2",{className:"zep-text-3",children:"Panel 2 Title"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:74,columnNumber:11},globalThis),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:73,columnNumber:9},globalThis),t.jsxDEV(s.Panel,{children:[t.jsxDEV("h2",{className:"zep-text-3",children:"Panel 3 Title"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:80,columnNumber:11},globalThis),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:79,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:66,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:59,columnNumber:5},globalThis)},na="zep-tab-panel",K={args:{},render:(e,a)=>t.jsxDEV(s.Group,{children:[t.jsxDEV(s.List,{children:[t.jsxDEV(s,{children:"Tab 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:98,columnNumber:11},globalThis),t.jsxDEV(s,{children:"Tab 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:99,columnNumber:11},globalThis),t.jsxDEV(s,{children:"Tab 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:100,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:97,columnNumber:9},globalThis),t.jsxDEV(s.Panels,{children:[t.jsxDEV(s.Panel,{children:"Panel 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:103,columnNumber:11},globalThis),t.jsxDEV(s.Panel,{children:"Panel 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:104,columnNumber:11},globalThis),t.jsxDEV(s.Panel,{children:"Panel 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:105,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:102,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:96,columnNumber:7},globalThis),play:async({canvasElement:e})=>{const a=ze(e);await ye.click(a.getByText("Tab 2")),await Ve(a.getByTestId(na)).toHaveTextContent("Panel 2")}};var re,se,ne;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
        <Tab.Panel>Panel 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
}`,...(ne=(se=B.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ie,oe;W.parameters={...W.parameters,docs:{...(le=W.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab disabled>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Panel 1</Tab.Panel>
        <Tab.Panel>Panel 2</Tab.Panel>
        <Tab.Panel>Panel 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
}`,...(oe=(ie=W.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,ue,me;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Tab.Group>
      <span></span>
      <Tab.List>
        <Tab>Short tab 1</Tab>
        <Tab>Medium text tab 2</Tab>
        <Tab>Long text for the great tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 1 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 2 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
        <Tab.Panel>
          <h2 className="zep-text-3">Panel 3 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
}`,...(me=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,pe,de;K.parameters={...K.parameters,docs:{...(be=K.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {} as TabProps,
  render: (args, context) => {
    return <Tab.Group>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Panel 1</Tab.Panel>
          <Tab.Panel>Panel 2</Tab.Panel>
          <Tab.Panel>Panel 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Tab 2'));
    await expect(canvas.getByTestId(testTabPanelItem)).toHaveTextContent('Panel 2');
  }
}`,...(de=(pe=K.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};const Na=["Default","TabDisabled","TabVariableLength","SwitchPanel"];export{B as Default,K as SwitchPanel,W as TabDisabled,H as TabVariableLength,Na as __namedExportsOrder,xa as default};
