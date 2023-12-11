import{j as a}from"./clsx-42c82d7d.js";import{r as p}from"./index-39946eba.js";import{C as s}from"./Checkbox-57af1d67.js";import{w as _,e as n,u as r}from"./index-95c7b577.js";import{S as k}from"./Spacing-87985a96.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-49974f9a.js";import"./focus-d7245c50.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const $={title:"Components/Checkbox",component:s,tags:["autodocs"],argTypes:{checked:{control:{disable:!0}},error:{description:"Adds the visual reprensentation of the error state."},label:{description:"Sets the label text."}},decorators:[o=>{const[t,e]=p.useState(!1),[c,O]=p.useState({state1:!1,state2:!1,state3:!1});return a.jsxDEV(o,{checked:t,setChecked:e,multiChecked:c,setMultiChecked:O},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:36,columnNumber:12},globalThis)}],parameters:{docs:{description:{component:"The Checkbox component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},i={render:(o,t)=>{const{checked:e,setChecked:c}=t;return a.jsxDEV(s,{name:"id-1",id:"id-1",label:"Checkbox",...o,checked:e,onChange:()=>c(!e)},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:54,columnNumber:12},globalThis)},play:async({canvasElement:o,step:t})=>{const c=_(o).getByTestId("zep-checkbox-input");await t("Initial checks",async()=>{await n(c).toBeInTheDocument(),await n(c).not.toBeChecked()}),await t("Check checkbox focus",async()=>{await r.tab(),await n(c).toHaveFocus()}),await t("Fire check event with mouse and verify checked status",async()=>{await n(c).not.toBeChecked(),await r.click(c),await n(c).toBeChecked(),await r.click(c),await n(c).not.toBeChecked()}),await t("Blur checkbox with keyboard and check focus",async()=>{await r.tab(),await n(c).not.toHaveFocus()})}},d={render:(o,t)=>{const{checked:e,setChecked:c}=t;return a.jsxDEV(k,{direction:"column",children:[a.jsxDEV(s,{name:"id-2",id:"id-2",label:"Disabled",checked:!1,onChange:()=>c(!e),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:90,columnNumber:9},globalThis),a.jsxDEV(s,{name:"id-2-1",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>c(!e),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:91,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:89,columnNumber:12},globalThis)}},h={render:(o,t)=>a.jsxDEV(k,{direction:"column",children:[a.jsxDEV(s,{name:"id-3",id:"id-3",label:"Error",checked:!1,onChange:()=>{},error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:98,columnNumber:9},globalThis),a.jsxDEV(s,{name:"id-3-1",id:"id-3-1",label:"Error",checked:!0,onChange:()=>{},error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:99,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:97,columnNumber:12},globalThis)},l={render:(o,t)=>{const{checked:e,setChecked:c}=t;return a.jsxDEV(s,{name:"id-4",id:"id-4",label:"AutoFocus",checked:e,onChange:()=>c(!e),autoFocus:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:109,columnNumber:12},globalThis)}},m={render:(o,t)=>{const{checked:e,setChecked:c}=t;return a.jsxDEV(s,{"aria-describedby":"id-4",name:"id-4",id:"id-4",label:"AriaDescribedBy",checked:e,onChange:()=>c(!e)},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:118,columnNumber:12},globalThis)}},u={render:(o,t)=>{const{multiChecked:e,setMultiChecked:c}=t;return a.jsxDEV(k,{direction:"column",gap:"0.5",children:[a.jsxDEV(s,{id:"id-3-1",name:"id-3-1",label:"Item 1",checked:e==null?void 0:e.state1,onChange:()=>c({...e,state1:!(e!=null&&e.state1)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:128,columnNumber:9},globalThis),a.jsxDEV(s,{id:"id-3-2",name:"id-3-2",label:"Item 2",checked:e==null?void 0:e.state2,onChange:()=>c({...e,state2:!(e!=null&&e.state2)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:132,columnNumber:9},globalThis),a.jsxDEV(s,{id:"id-3-3",name:"id-3-3",label:"Item 3",checked:e==null?void 0:e.state3,onChange:()=>c({...e,state3:!(e!=null&&e.state3)})},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:136,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:127,columnNumber:12},globalThis)}},x="zep-checkbox-input",b={args:{id:"id-4",onChange:()=>{}},render:(o,t)=>{const{checked:e,setChecked:c}=t;return a.jsxDEV(s,{id:o.id,name:o.id,label:"Check an item",checked:e,onChange:()=>c(!e)},void 0,!1,{fileName:"/home/circleci/project/src/components/checkbox/Checkbox.stories.tsx",lineNumber:154,columnNumber:12},globalThis)},play:async({canvasElement:o})=>{const t=_(o);await r.click(t.getByTestId(x)),await n(t.getByTestId(x)).toHaveClass("checked:zep-bg-neutral-dark-default")}};var C,g,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-1" id="id-1" label="Checkbox" {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const checkboxInput = canvas.getByTestId('zep-checkbox-input');
    await step('Initial checks', async () => {
      await expect(checkboxInput).toBeInTheDocument();
      await expect(checkboxInput).not.toBeChecked();
    });
    await step('Check checkbox focus', async () => {
      await userEvent.tab();
      await expect(checkboxInput).toHaveFocus();
    });
    await step('Fire check event with mouse and verify checked status', async () => {
      await expect(checkboxInput).not.toBeChecked();
      await userEvent.click(checkboxInput);
      await expect(checkboxInput).toBeChecked();
      await userEvent.click(checkboxInput);
      await expect(checkboxInput).not.toBeChecked();
    });
    await step('Blur checkbox with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(checkboxInput).not.toHaveFocus();
    });
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,N,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var E,y,j;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args, context) => {
    return <Spacing direction="column">
        <Checkbox name="id-3" id="id-3" label="Error" checked={false} onChange={() => {}} error />
        <Checkbox name="id-3-1" id="id-3-1" label="Error" checked={true} onChange={() => {}} error />
      </Spacing>;
  }
}`,...(j=(y=h.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var I,D,T;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox name="id-4" id="id-4" label="AutoFocus" checked={checked} onChange={() => setChecked(!checked)} autoFocus />;
  }
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var B,S,V;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Checkbox aria-describedby="id-4" name="id-4" id="id-4" label="AriaDescribedBy" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(V=(S=m.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var F,A,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(H=(A=u.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var M,z,G;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const ee=["Default","Disabled","Error","AutoFocus","AriaDescribedBy","Group","CheckAnItem"];export{m as AriaDescribedBy,l as AutoFocus,b as CheckAnItem,i as Default,d as Disabled,h as Error,u as Group,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Checkbox.stories-a957107d.js.map
