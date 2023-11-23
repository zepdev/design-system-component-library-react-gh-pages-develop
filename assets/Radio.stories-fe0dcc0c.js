import{j as s}from"./clsx-42c82d7d.js";import{r as B}from"./index-39946eba.js";import{R as t}from"./Radio-449dcf38.js";import{w as A,u as z,e as u}from"./index-95c7b577.js";import{S as w}from"./Spacing-87985a96.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const U={title:"Components/Radio",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[o=>{const[e,r]=B.useState("");return s.jsxDEV(o,{value:e,setValue:r},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:38,columnNumber:12},globalThis)}],parameters:{docs:{description:{component:"The Radio component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},i={args:{label:"Label"},render:(o,e)=>{const{value:r,setValue:a}=e;return s.jsxDEV(t,{name:"example-default",id:"id-1",label:o.label,checked:r==="radio",onChange:()=>a("radio")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:59,columnNumber:12},globalThis)}},c={render:(o,e)=>{const{value:r,setValue:a}=e;return s.jsxDEV(w,{direction:"column",children:[s.jsxDEV(t,{name:"example-disabled",id:"id-2",label:"Disabled",checked:r==="disabled",onChange:()=>a("disabled"),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:69,columnNumber:9},globalThis),s.jsxDEV(t,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>a("disabled"),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:70,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:68,columnNumber:12},globalThis)}},l={render:(o,e)=>{const{value:r,setValue:a}=e;return s.jsxDEV(t,{name:"example-error",id:"id-3",label:"Error",checked:r==="error",onChange:()=>a("error"),error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:80,columnNumber:12},globalThis)}},n={render:(o,e)=>{const{value:r,setValue:a}=e;return s.jsxDEV(t,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:r==="error",onChange:()=>a("error"),error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:89,columnNumber:12},globalThis)}},d={render:(o,e)=>{const{value:r,setValue:a}=e;return s.jsxDEV(w,{direction:"column",gap:"0.5",children:[s.jsxDEV(t,{name:"example-group",id:"id-3-1",label:"Item 1",checked:r==="item-1",onChange:()=>a("item-1")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:99,columnNumber:9},globalThis),s.jsxDEV(t,{name:"example-group",id:"id-3-2",label:"Item 2",checked:r==="item-2",onChange:()=>a("item-2")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:100,columnNumber:9},globalThis),s.jsxDEV(t,{name:"example-group",id:"id-3-3",label:"Item 3",checked:r==="item-3",onChange:()=>a("item-3")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:101,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:98,columnNumber:12},globalThis)}},p="zep-radio-input",G="zep-radio-checked",m={args:{id:"id-4",onChange:()=>{}},render:(o,e)=>{const{checked:r,setChecked:a}=e;return s.jsxDEV(t,{id:o.id,name:o.id,label:"Check an item",checked:r,onChange:()=>a(!r)},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:117,columnNumber:12},globalThis)},play:async({canvasElement:o})=>{const e=A(o);await z.click(e.getByTestId(p)),await u(e.getByTestId(G)).toBeInTheDocument(),await u(e.getByTestId(p)).toHaveStyle({display:"block"})}};var b,h,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  },
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-default" id="id-1" label={args.label} checked={value === 'radio'} onChange={() => setValue('radio')} />;
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column">
        <Radio name="example-disabled" id="id-2" label="Disabled" checked={value === 'disabled'} onChange={() => setValue('disabled')} disabled />
        <Radio name="example-disabled" id="id-2-1" label="Disabled" checked={true} onChange={() => setValue('disabled')} disabled />
      </Spacing>;
  }
}`,...(k=(v=c.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var N,f,V;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(V=(f=l.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var C,R,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(j=(R=n.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var D,E,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Spacing direction="column" gap="0.5">
        <Radio name="example-group" id="id-3-1" label="Item 1" checked={value === 'item-1'} onChange={() => setValue('item-1')} />
        <Radio name="example-group" id="id-3-2" label="Item 2" checked={value === 'item-2'} onChange={() => setValue('item-2')} />
        <Radio name="example-group" id="id-3-3" label="Item 3" checked={value === 'item-3'} onChange={() => setValue('item-3')} />
      </Spacing>;
  }
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var y,I,S;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ({
    id: 'id-4',
    onChange: () => {}
  } as RadioProps),
  render: (args, context) => {
    const {
      checked,
      setChecked
    } = context;
    return <Radio id={args.id} name={args.id} label="Check an item" checked={checked} onChange={() => setChecked(!checked)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(testItem));
    await expect(canvas.getByTestId(checkedItem)).toBeInTheDocument();
    await expect(canvas.getByTestId(testItem)).toHaveStyle({
      display: 'block'
    });
  }
}`,...(S=(I=m.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const W=["Default","Disabled","Error","AriaDescribedBy","Group","CheckAnItem"];export{n as AriaDescribedBy,m as CheckAnItem,i as Default,c as Disabled,l as Error,d as Group,W as __namedExportsOrder,U as default};
//# sourceMappingURL=Radio.stories-fe0dcc0c.js.map
