import{j as o}from"./clsx-42c82d7d.js";import{r as b}from"./index-39946eba.js";import{C as s}from"./Checkbox-0206cd10.js";import{S as h}from"./Spacing-93fcb547.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-cc0a57f7.js";import"./focus-d7245c50.js";const q={title:"Components/Checkbox",component:s,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}},error:{description:"Adds the visual reprensentation of the error state."},label:{description:"Sets the label text."}},decorators:[t=>{const[r,e]=b.useState(!1),[c,I]=b.useState({state1:!1,state2:!1,state3:!1});return o.jsxDEV(t,{checked:r,setChecked:e,multiChecked:c,setMultiChecked:I},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:33,columnNumber:12},globalThis)}],parameters:{docs:{description:{component:"The Checkbox component is best used inside the FormField component, it allows setting hint and error messages."}}}},n={render:(t,r)=>{const{checked:e,setChecked:c}=r;return o.jsxDEV(s,{name:"id-1",id:"id-1",label:"Checkbox",...t,checked:e,onChange:()=>c(!e)},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:51,columnNumber:12},globalThis)}},a={render:(t,r)=>{const{checked:e,setChecked:c}=r;return o.jsxDEV(h,{direction:"column",children:[o.jsxDEV(s,{name:"id-2",id:"id-2",label:"Disabled",checked:!1,onChange:()=>c(!e),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:61,columnNumber:9},globalThis),o.jsxDEV(s,{name:"id-2-1",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>c(!e),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:62,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:60,columnNumber:12},globalThis)}},i={render:(t,r)=>o.jsxDEV(h,{direction:"column",children:[o.jsxDEV(s,{name:"id-3",id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:69,columnNumber:9},globalThis),o.jsxDEV(s,{name:"id-3-1",id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:70,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:68,columnNumber:12},globalThis)},d={render:(t,r)=>{const{checked:e,setChecked:c}=r;return o.jsxDEV(s,{name:"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>c(!e),autoFocus:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:80,columnNumber:12},globalThis)}},l={render:(t,r)=>{const{checked:e,setChecked:c}=r;return o.jsxDEV(s,{"aria-describedby":"id-4",name:"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>c(!e)},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:89,columnNumber:12},globalThis)}},m={render:(t,r)=>{const{multiChecked:e,setMultiChecked:c}=r;return o.jsxDEV(h,{direction:"column",gap:"0.5",children:[o.jsxDEV(s,{id:"id-3-1",name:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>c({...e,state1:!(e!=null&&e.state1)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:99,columnNumber:9},globalThis),o.jsxDEV(s,{id:"id-3-2",name:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>c({...e,state2:!(e!=null&&e.state2)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:103,columnNumber:9},globalThis),o.jsxDEV(s,{id:"id-3-3",name:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>c({...e,state3:!(e!=null&&e.state3)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:107,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:98,columnNumber:12},globalThis)}};var u,k,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-1" id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var p,C,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Spacing direction="column">
        <Checkbox name="id-2" id="id-2" label="Disabled" checked={false} onChange={() => setChecked(!checked)} disabled />
        <Checkbox name="id-2-1" id="id-2-1" label="Disabled" checked={true} onChange={() => setChecked(!checked)} disabled />
      </Spacing>;
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var N,f,j;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox name="id-3" id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox name="id-3-1" id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var D,E,S;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(S=(E=d.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var v,T,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" name="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var A,F,y;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      multiChecked,
      setMultiChecked
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Checkbox id="id-3-1" name="id-3-1" label="Item 1" checked={multiChecked?.state1} onChange={() => setMultiChecked({
        ...multiChecked,
        state1: !multiChecked?.state1
      })} />
        <Checkbox id="id-3-2" name="id-3-2" label="Item 2" checked={multiChecked?.state2} onChange={() => setMultiChecked({
        ...multiChecked,
        state2: !multiChecked?.state2
      })} />
        <Checkbox id="id-3-3" name="id-3-3" label="Item 3" checked={multiChecked?.state3} onChange={() => setMultiChecked({
        ...multiChecked,
        state3: !multiChecked?.state3
      })} />
      </Spacing>;
  }
}`,...(y=(F=m.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};const z=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group"];export{l as AriaDescribedBy,d as AutoFocus,n as Default,a as Disabled,i as Error,m as Group,z as __namedExportsOrder,q as default};
//# sourceMappingURL=Checkbox.stories-bae16ecc.js.map
