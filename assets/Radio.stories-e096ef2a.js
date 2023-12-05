import{j as t}from"./clsx-42c82d7d.js";import{r as B}from"./index-39946eba.js";import{R as s}from"./Radio-449dcf38.js";import{w as A,u as z,e as p}from"./index-95c7b577.js";import{S as w}from"./Spacing-e48a303d.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";import"./index-356e4a49.js";const U={title:"Components/Radio",component:s,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[r=>{const[e,a]=B.useState("");return t.jsxDEV(r,{value:e,setValue:a},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:38,columnNumber:12},globalThis)}],parameters:{docs:{description:{component:"The Radio component is best used inside the Fieldset component, it allows setting hint and error messages."}}}},i={args:{label:"Label"},render:(r,e)=>{const{value:a,setValue:o}=e;return t.jsxDEV(s,{name:"example-default",id:"id-1",label:r.label,checked:a==="radio",onChange:()=>o("radio")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:59,columnNumber:12},globalThis)}},c={render:(r,e)=>{const{value:a,setValue:o}=e;return t.jsxDEV(w,{direction:"column",children:[t.jsxDEV(s,{name:"example-disabled",id:"id-2",label:"Disabled",checked:a==="disabled",onChange:()=>o("disabled"),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:69,columnNumber:9},globalThis),t.jsxDEV(s,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>o("disabled"),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:70,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:68,columnNumber:12},globalThis)}},l={render:(r,e)=>{const{value:a,setValue:o}=e;return t.jsxDEV(s,{name:"example-error",id:"id-3",label:"Error",checked:a==="error",onChange:()=>o("error"),error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:80,columnNumber:12},globalThis)}},n={render:(r,e)=>{const{value:a,setValue:o}=e;return t.jsxDEV(s,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:a==="error",onChange:()=>o("error"),error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:89,columnNumber:12},globalThis)}},d={render:(r,e)=>{const{value:a,setValue:o}=e;return t.jsxDEV(w,{direction:"column",gap:"0.5",children:[t.jsxDEV(s,{name:"example-group",id:"id-3-1",label:"Item 1",checked:a==="item-1",onChange:()=>o("item-1")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:99,columnNumber:9},globalThis),t.jsxDEV(s,{name:"example-group",id:"id-3-2",label:"Item 2",checked:a==="item-2",onChange:()=>o("item-2")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:100,columnNumber:9},globalThis),t.jsxDEV(s,{name:"example-group",id:"id-3-3",label:"Item 3",checked:a==="item-3",onChange:()=>o("item-3")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:101,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:98,columnNumber:12},globalThis)}},u="zep-radio-input-interactive",G="zep-radio-checked",m={args:{id:"id-4",onChange:()=>{}},render:(r,e)=>t.jsxDEV(s,{id:r.id,name:r.id,label:"Check an item",onChange:()=>{},"data-testid":u},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:113,columnNumber:12},globalThis),play:async({canvasElement:r})=>{const e=A(r);await z.click(e.getByTestId(u)),await p(e.getByTestId(G)).toBeInTheDocument(),await p(e.getByTestId(u)).toHaveStyle({display:"block"})}};var b,g,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,v,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var f,V,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(k=(V=l.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var R,j,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,E,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var T,y,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: ({
    id: 'id-4',
    onChange: () => {}
  } as RadioProps),
  render: (args, context) => {
    return <Radio id={args.id} name={args.id} label="Check an item" onChange={() => {}} data-testid={testItem} />;
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
}`,...(S=(y=m.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const W=["Default","Disabled","Error","AriaDescribedBy","Group","CheckAnItem"];export{n as AriaDescribedBy,m as CheckAnItem,i as Default,c as Disabled,l as Error,d as Group,W as __namedExportsOrder,U as default};
//# sourceMappingURL=Radio.stories-e096ef2a.js.map
