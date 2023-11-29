import{j as r}from"./clsx-42c82d7d.js";import{r as u}from"./index-39946eba.js";import{C as t}from"./Checkbox-14073efc.js";import{w as H,u as _,e as O}from"./index-95c7b577.js";import{S as b}from"./Spacing-87985a96.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-dcc01d5b.js";import"./focus-d7245c50.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const $={title:"Components/Checkbox",component:t,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}},error:{description:"Adds the visual reprensentation of the error state."},label:{description:"Sets the label text."}},decorators:[s=>{const[c,e]=u.useState(!1),[o,G]=u.useState({state1:!1,state2:!1,state3:!1});return r.jsxDEV(s,{checked:c,setChecked:e,multiChecked:o,setMultiChecked:G},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:36,columnNumber:12},globalThis)}],parameters:{docs:{description:{component:"The Checkbox component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},n={render:(s,c)=>{const{checked:e,setChecked:o}=c;return r.jsxDEV(t,{name:"id-1",id:"id-1",label:"Checkbox",...s,checked:e,onChange:()=>o(!e)},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:54,columnNumber:12},globalThis)}},a={render:(s,c)=>{const{checked:e,setChecked:o}=c;return r.jsxDEV(b,{direction:"column",children:[r.jsxDEV(t,{name:"id-2",id:"id-2",label:"Disabled",checked:!1,onChange:()=>o(!e),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:64,columnNumber:9},globalThis),r.jsxDEV(t,{name:"id-2-1",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>o(!e),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:65,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:63,columnNumber:12},globalThis)}},i={render:(s,c)=>r.jsxDEV(b,{direction:"column",children:[r.jsxDEV(t,{name:"id-3",id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:72,columnNumber:9},globalThis),r.jsxDEV(t,{name:"id-3-1",id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:73,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:71,columnNumber:12},globalThis)},d={render:(s,c)=>{const{checked:e,setChecked:o}=c;return r.jsxDEV(t,{name:"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>o(!e),autoFocus:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:83,columnNumber:12},globalThis)}},l={render:(s,c)=>{const{checked:e,setChecked:o}=c;return r.jsxDEV(t,{"aria-describedby":"id-4",name:"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>o(!e)},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:92,columnNumber:12},globalThis)}},m={render:(s,c)=>{const{multiChecked:e,setMultiChecked:o}=c;return r.jsxDEV(b,{direction:"column",gap:"0.5",children:[r.jsxDEV(t,{id:"id-3-1",name:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>o({...e,state1:!(e!=null&&e.state1)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:102,columnNumber:9},globalThis),r.jsxDEV(t,{id:"id-3-2",name:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>o({...e,state2:!(e!=null&&e.state2)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:106,columnNumber:9},globalThis),r.jsxDEV(t,{id:"id-3-3",name:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>o({...e,state3:!(e!=null&&e.state3)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:110,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:101,columnNumber:12},globalThis)}},k="zep-checkbox-input",h={args:{id:"id-4",onChange:()=>{}},render:(s,c)=>{const{checked:e,setChecked:o}=c;return r.jsxDEV(t,{id:s.id,name:s.id,label:"Check an item",checked:e,onChange:()=>o(!e)},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:128,columnNumber:12},globalThis)},play:async({canvasElement:s})=>{const c=H(s);await _.click(c.getByTestId(k)),await O(c.getByTestId(k)).toHaveClass("checked:zep-bg-neutral-dark-default")}};var p,x,C;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-1" id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,f,N;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(N=(f=a.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var j,D,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox name="id-3" id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox name="id-3-1" id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var v,T,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var y,I,V;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" name="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(V=(I=l.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var A,w,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var F,M,z;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: ({
    id: 'id-4',
    onChange: () => {}
  } as CheckboxProps),
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox id={args.id} name={args.id} label="Check an item" checked={checked} onChange={() => setChecked(!checked)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await expect(canvas.getByTestId(testItem)).toHaveClass('checked:zep-bg-neutral-dark-default');
  }
}`,...(z=(M=h.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const ee=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group","CheckAnItem"];export{l as AriaDescribedBy,d as AutoFocus,h as CheckAnItem,n as Default,a as Disabled,i as Error,m as Group,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Checkbox.stories-10f2b5ae.js.map
