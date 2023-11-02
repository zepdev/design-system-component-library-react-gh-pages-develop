import{j as r,c as ee}from"./clsx-42c82d7d.js";import{r as o,R as $}from"./index-39946eba.js";import{l as k,S as ne,D as F,y as q,a as Z,o as V,X as U,I as Te,s as ve,u as A,e as je,b as j}from"./keyboard-0ca52a30.js";import{c as fe,p as Pe,I as M,N as X,O as L,M as P,t as Ee}from"./hidden-cb730d23.js";import{f as ye}from"./focus-d7245c50.js";import"./_commonjsHelpers-de833af9.js";function De(){let e=o.useRef(!1);return k(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ze({onFocus:e}){let[t,a]=o.useState(!0),s=De();return t?$.createElement(fe,{as:"button",type:"button",features:Pe.Focusable,onFocus:i=>{i.preventDefault();let n,c=50;function T(){if(c--<=0){n&&cancelAnimationFrame(n);return}if(e()){if(cancelAnimationFrame(n),!s.current)return;a(!1);return}n=requestAnimationFrame(T)}n=requestAnimationFrame(T)}}):null}const he=o.createContext(null);function _e(){return{groups:new Map,get(e,t){var a;let s=this.groups.get(e);s||(s=new Map,this.groups.set(e,s));let i=(a=s.get(t))!=null?a:0;s.set(t,i+1);let n=Array.from(s.keys()).indexOf(t);function c(){let T=s.get(t);T>1?s.set(t,T-1):s.delete(t)}return[n,c]}}}function Ie({children:e}){let t=o.useRef(_e());return o.createElement(he.Provider,{value:t},e)}function xe(e){let t=o.useContext(he);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let a=Ve(),[s,i]=t.current.get(e,a);return o.useEffect(()=>i,[]),s}function Ve(){var e,t,a;let s=(a=(t=(e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?a:null;if(!s)return Symbol();let i=[],n=s;for(;n;)i.push(n.index),n=n.return;return"$."+i.join(".")}var Le=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Le||{}),$e=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))($e||{}),we=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(we||{});let Re={0(e,t){var a;let s=M(e.tabs,m=>m.current),i=M(e.panels,m=>m.current),n=s.filter(m=>{var N;return!((N=m.current)!=null&&N.hasAttribute("disabled"))}),c={...e,tabs:s,panels:i};if(t.index<0||t.index>s.length-1){let m=A(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>A(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(n.length===0)return c;let N=A(m,{0:()=>s.indexOf(n[0]),1:()=>s.indexOf(n[n.length-1])});return{...c,selectedIndex:N===-1?e.selectedIndex:N}}let T=s.slice(0,t.index),E=[...s.slice(t.index),...T].find(m=>n.includes(m));if(!E)return c;let f=(a=s.indexOf(E))!=null?a:e.selectedIndex;return f===-1&&(f=e.selectedIndex),{...c,selectedIndex:f}},1(e,t){var a;if(e.tabs.includes(t.tab))return e;let s=e.tabs[e.selectedIndex],i=M([...e.tabs,t.tab],c=>c.current),n=(a=i.indexOf(s))!=null?a:e.selectedIndex;return n===-1&&(n=e.selectedIndex),{...e,tabs:i,selectedIndex:n}},2(e,t){return{...e,tabs:e.tabs.filter(a=>a!==t.tab)}},3(e,t){return e.panels.includes(t.panel)?e:{...e,panels:M([...e.panels,t.panel],a=>a.current)}},4(e,t){return{...e,panels:e.panels.filter(a=>a!==t.panel)}}},te=o.createContext(null);te.displayName="TabsDataContext";function w(e){let t=o.useContext(te);if(t===null){let a=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,w),a}return t}let ae=o.createContext(null);ae.displayName="TabsActionsContext";function re(e){let t=o.useContext(ae);if(t===null){let a=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,re),a}return t}function Se(e,t){return A(t.type,Re,e,t)}let Me=o.Fragment;function Ae(e,t){let{defaultIndex:a=0,vertical:s=!1,manual:i=!1,onChange:n,selectedIndex:c=null,...T}=e;const E=s?"vertical":"horizontal",f=i?"manual":"auto";let m=c!==null,N=q(t),[u,g]=o.useReducer(Se,{selectedIndex:c??a,tabs:[],panels:[]}),p=o.useMemo(()=>({selectedIndex:u.selectedIndex}),[u.selectedIndex]),R=Z(n||(()=>{})),S=Z(u.tabs),d=o.useMemo(()=>({orientation:E,activation:f,...u}),[E,f,u]),h=V(b=>(g({type:1,tab:b}),()=>g({type:2,tab:b}))),z=V(b=>(g({type:3,panel:b}),()=>g({type:4,panel:b}))),_=V(b=>{I.current!==b&&R.current(b),m||g({type:0,index:b})}),I=Z(m?e.selectedIndex:u.selectedIndex),J=o.useMemo(()=>({registerTab:h,registerPanel:z,change:_}),[]);k(()=>{g({type:0,index:c??a})},[c]),k(()=>{if(I.current===void 0||u.tabs.length<=0)return;let b=M(u.tabs,D=>D.current);b.some((D,l)=>u.tabs[l]!==D)&&_(b.indexOf(u.tabs[I.current]))});let Q={ref:N};return $.createElement(Ie,null,$.createElement(ae.Provider,{value:J},$.createElement(te.Provider,{value:d},d.tabs.length<=0&&$.createElement(ze,{onFocus:()=>{var b,D;for(let l of S.current)if(((b=l.current)==null?void 0:b.tabIndex)===0)return(D=l.current)==null||D.focus(),!0;return!1}}),U({ourProps:Q,theirProps:T,slot:p,defaultTag:Me,name:"Tabs"}))))}let ke="div";function Ce(e,t){let{orientation:a,selectedIndex:s}=w("Tab.List"),i=q(t);return U({ourProps:{ref:i,role:"tablist","aria-orientation":a},theirProps:e,slot:{selectedIndex:s},defaultTag:ke,name:"Tabs.List"})}let Ge="button";function Oe(e,t){var a,s;let i=Te(),{id:n=`headlessui-tabs-tab-${i}`,...c}=e,{orientation:T,activation:E,selectedIndex:f,tabs:m,panels:N}=w("Tab"),u=re("Tab"),g=w("Tab"),p=o.useRef(null),R=q(p,t);k(()=>u.registerTab(p),[u,p]);let S=xe("tabs"),d=m.indexOf(p);d===-1&&(d=S);let h=d===f,z=V(l=>{var y;let W=l();if(W===X.Success&&E==="auto"){let Ne=(y=je(p))==null?void 0:y.activeElement,se=g.tabs.findIndex(ge=>ge.current===Ne);se!==-1&&u.change(se)}return W}),_=V(l=>{let y=m.map(W=>W.current).filter(Boolean);if(l.key===j.Space||l.key===j.Enter){l.preventDefault(),l.stopPropagation(),u.change(d);return}switch(l.key){case j.Home:case j.PageUp:return l.preventDefault(),l.stopPropagation(),z(()=>L(y,P.First));case j.End:case j.PageDown:return l.preventDefault(),l.stopPropagation(),z(()=>L(y,P.Last))}if(z(()=>A(T,{vertical(){return l.key===j.ArrowUp?L(y,P.Previous|P.WrapAround):l.key===j.ArrowDown?L(y,P.Next|P.WrapAround):X.Error},horizontal(){return l.key===j.ArrowLeft?L(y,P.Previous|P.WrapAround):l.key===j.ArrowRight?L(y,P.Next|P.WrapAround):X.Error}}))===X.Success)return l.preventDefault()}),I=o.useRef(!1),J=V(()=>{var l;I.current||(I.current=!0,(l=p.current)==null||l.focus({preventScroll:!0}),u.change(d),Ee(()=>{I.current=!1}))}),Q=V(l=>{l.preventDefault()}),b=o.useMemo(()=>({selected:h}),[h]),D={ref:R,onKeyDown:_,onMouseDown:Q,onClick:J,id:n,role:"tab",type:ve(e,p),"aria-controls":(s=(a=N[d])==null?void 0:a.current)==null?void 0:s.id,"aria-selected":h,tabIndex:h?0:-1};return U({ourProps:D,theirProps:c,slot:b,defaultTag:Ge,name:"Tabs.Tab"})}let Fe="div";function qe(e,t){let{selectedIndex:a}=w("Tab.Panels"),s=q(t),i=o.useMemo(()=>({selectedIndex:a}),[a]);return U({ourProps:{ref:s},theirProps:e,slot:i,defaultTag:Fe,name:"Tabs.Panels"})}let Ue="div",Be=ne.RenderStrategy|ne.Static;function We(e,t){var a,s,i,n;let c=Te(),{id:T=`headlessui-tabs-panel-${c}`,tabIndex:E=0,...f}=e,{selectedIndex:m,tabs:N,panels:u}=w("Tab.Panel"),g=re("Tab.Panel"),p=o.useRef(null),R=q(p,t);k(()=>g.registerPanel(p),[g,p]);let S=xe("panels"),d=u.indexOf(p);d===-1&&(d=S);let h=d===m,z=o.useMemo(()=>({selected:h}),[h]),_={ref:R,id:T,role:"tabpanel","aria-labelledby":(s=(a=N[d])==null?void 0:a.current)==null?void 0:s.id,tabIndex:h?E:-1};return!h&&((i=f.unmount)==null||i)&&!((n=f.static)!=null&&n)?$.createElement(fe,{as:"span",..._}):U({ourProps:_,theirProps:f,slot:z,defaultTag:Ue,features:Be,visible:h,name:"Tabs.Panel"})}let Xe=F(Oe),Ye=F(Ae),He=F(Ce),Ke=F(qe),Je=F(We),B=Object.assign(Xe,{Group:Ye,List:He,Panels:Ke,Panel:Je});const x=({disabled:e,children:t})=>r.jsxDEV(B,{className:"zep-group zep-flex zep-flex-col zep-justify-between zep-gap-0.5 zep-outline-none",disabled:e,"data-testid":"zep-tab",children:({selected:a})=>r.jsxDEV(r.Fragment,{children:[r.jsxDEV("span",{className:ee("zep-typography-bodyText zep-rounded-4 zep-px-1 zep-outline-none zep-ring-focus  group-focus-visible:zep-text-typography-dark-100 group-focus-visible:zep-ring",{"zep-text-typography-dark-100":a,"zep-text-typography-dark-70/70":!a,"zep-text-typography-neutral-dark-disabled/40":e}),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:15,columnNumber:11},globalThis),r.jsxDEV("span",{className:ee("zep-w-full",{"zep-h-0.25 zep-bg-primary-default":a,"zep-h-[1px] zep-bg-transparent group-hover:zep-bg-primary-default":!a&&!e})},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:27,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:14,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tab.tsx",lineNumber:8,columnNumber:5},globalThis);try{x.displayName="Tab",x.__docgenInfo={description:"",displayName:"Tab",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const C=({children:e})=>r.jsxDEV(B.Group,{"data-testid":"zep-tab-group",as:"div",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/TabGroup.tsx",lineNumber:7,columnNumber:5},globalThis);try{C.displayName="TabGroup",C.__docgenInfo={description:"",displayName:"TabGroup",props:{}}}catch{}const G=({children:e})=>r.jsxDEV(B.List,{className:"zep-relative zep-flex zep-w-full zep-flex-col zep-overflow-x-scroll zep-bg-greyscale-0 zep-pt-0.75 sm:zep-overflow-visible","data-testid":"zep-tab-list",children:[r.jsxDEV("span",{className:"zep-absolute zep-bottom-[0] zep-flex zep-w-full zep-border-b-1 zep-border-solid zep-border-greyscale-400"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/TabList.tsx",lineNumber:11,columnNumber:7},globalThis),r.jsxDEV("div",{className:"zep-relative zep-flex zep-gap-0.5 zep-whitespace-nowrap",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/TabList.tsx",lineNumber:12,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/TabList.tsx",lineNumber:7,columnNumber:5},globalThis);try{G.displayName="TabList",G.__docgenInfo={description:"",displayName:"TabList",props:{}}}catch{}const v=({children:e})=>r.jsxDEV(B.Panel,{className:ee(ye,"zep-rounded-4"),"data-testid":"zep-tab-panel",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/TabPanel.tsx",lineNumber:9,columnNumber:5},globalThis);try{v.displayName="TabPanel",v.__docgenInfo={description:"",displayName:"TabPanel",props:{}}}catch{}const O=({children:e})=>r.jsxDEV(B.Panels,{className:"zep-pt-1","data-testid":"zep-tab-panels",children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/TabPanels.tsx",lineNumber:7,columnNumber:5},globalThis);try{O.displayName="TabPanels",O.__docgenInfo={description:"",displayName:"TabPanels",props:{}}}catch{}const st={title:"Components/Tabs",component:x,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},Y={render:()=>r.jsxDEV(C,{children:[r.jsxDEV(G,{children:[r.jsxDEV(x,{children:"Tab 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:22,columnNumber:9},globalThis),r.jsxDEV(x,{children:"Tab 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:23,columnNumber:9},globalThis),r.jsxDEV(x,{children:"Tab 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:24,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:21,columnNumber:7},globalThis),r.jsxDEV(O,{children:[r.jsxDEV(v,{children:"Panel 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:27,columnNumber:9},globalThis),r.jsxDEV(v,{children:"Panel 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:28,columnNumber:9},globalThis),r.jsxDEV(v,{children:"Panel 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:29,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:26,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:20,columnNumber:17},globalThis)},H={render:()=>r.jsxDEV(C,{children:[r.jsxDEV(G,{children:[r.jsxDEV(x,{children:"Tab 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:36,columnNumber:9},globalThis),r.jsxDEV(x,{disabled:!0,children:"Tab 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:37,columnNumber:9},globalThis),r.jsxDEV(x,{children:"Tab 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:38,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:35,columnNumber:7},globalThis),r.jsxDEV(O,{children:[r.jsxDEV(v,{children:"Panel 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:41,columnNumber:9},globalThis),r.jsxDEV(v,{children:"Panel 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:42,columnNumber:9},globalThis),r.jsxDEV(v,{children:"Panel 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:43,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:40,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:34,columnNumber:17},globalThis)},K={render:()=>r.jsxDEV(C,{children:[r.jsxDEV("span",{},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:49,columnNumber:7},globalThis),r.jsxDEV(G,{children:[r.jsxDEV(x,{children:"Short tab 1"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:51,columnNumber:9},globalThis),r.jsxDEV(x,{children:"Medium text tab 2"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:52,columnNumber:9},globalThis),r.jsxDEV(x,{children:"Long text for the great tab 3"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:53,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:50,columnNumber:7},globalThis),r.jsxDEV(O,{children:[r.jsxDEV(v,{children:[r.jsxDEV("h2",{className:"zep-text-3",children:"Panel 1 Title"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:57,columnNumber:11},globalThis),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:56,columnNumber:9},globalThis),r.jsxDEV(v,{children:[r.jsxDEV("h2",{className:"zep-text-3",children:"Panel 2 Title"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:63,columnNumber:11},globalThis),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:62,columnNumber:9},globalThis),r.jsxDEV(v,{children:[r.jsxDEV("h2",{className:"zep-text-3",children:"Panel 3 Title"},void 0,!1,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:69,columnNumber:11},globalThis),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur nesciunt deserunt in?"]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:68,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:55,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/tabs/Tabs.stories.tsx",lineNumber:48,columnNumber:17},globalThis)};var le,ie,oe;Y.parameters={...Y.parameters,docs:{...(le=Y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <TabGroup>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </TabGroup>
}`,...(oe=(ie=Y.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,ue,me;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <TabGroup>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab disabled>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </TabGroup>
}`,...(me=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,pe,de;K.parameters={...K.parameters,docs:{...(be=K.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <TabGroup>
      <span></span>
      <TabList>
        <Tab>Short tab 1</Tab>
        <Tab>Medium text tab 2</Tab>
        <Tab>Long text for the great tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <h2 className="zep-text-3">Panel 1 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </TabPanel>
        <TabPanel>
          <h2 className="zep-text-3">Panel 2 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </TabPanel>
        <TabPanel>
          <h2 className="zep-text-3">Panel 3 Title</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum inventore voluptatibus totam ipsa
          impedit quo assumenda modi aperiam. Mollitia, facilis. Impedit minima adipisci pariatur magnam aspernatur
          nesciunt deserunt in?
        </TabPanel>
      </TabPanels>
    </TabGroup>
}`,...(de=(pe=K.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};const nt=["Default","TabDisabled","TabVariableLength"];export{Y as Default,H as TabDisabled,K as TabVariableLength,nt as __namedExportsOrder,st as default};
//# sourceMappingURL=Tabs.stories-0fe7ae99.js.map
