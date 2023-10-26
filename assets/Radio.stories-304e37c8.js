import{j as o}from"./clsx-7883870f.js";import{r as C}from"./index-9edec130.js";import{R as i}from"./Radio-202806bf.js";import{S as k}from"./Spacing-28ff9835.js";import"./_commonjsHelpers-de833af9.js";import"./focus-d7245c50.js";const F={title:"Components/Radio",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[s=>{const[a,e]=C.useState("");return o.jsxDEV(s,{value:a,setValue:e},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:35,columnNumber:12},globalThis)}],parameters:{docs:{description:{component:"The Radio component is best used inside the FormField component, it allows setting hint and error messages."}}}},l={args:{label:"Label"},render:(s,a)=>{const{value:e,setValue:r}=a;return o.jsxDEV(i,{name:"example-default",id:"id-1",label:s.label,checked:e==="radio",onChange:()=>r("radio")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:56,columnNumber:12},globalThis)}},t={render:(s,a)=>{const{value:e,setValue:r}=a;return o.jsxDEV(k,{direction:"column",children:[o.jsxDEV(i,{name:"example-disabled",id:"id-2",label:"Disabled",checked:e==="disabled",onChange:()=>r("disabled"),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:66,columnNumber:9},globalThis),o.jsxDEV(i,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>r("disabled"),disabled:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:67,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:65,columnNumber:12},globalThis)}},c={render:(s,a)=>{const{value:e,setValue:r}=a;return o.jsxDEV(i,{name:"example-error",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:77,columnNumber:12},globalThis)}},d={render:(s,a)=>{const{value:e,setValue:r}=a;return o.jsxDEV(i,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:86,columnNumber:12},globalThis)}},n={render:(s,a)=>{const{value:e,setValue:r}=a;return o.jsxDEV(k,{direction:"column",gap:"0.5",children:[o.jsxDEV(i,{name:"example-group",id:"id-3-1",label:"Item 1",checked:e==="item-1",onChange:()=>r("item-1")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:96,columnNumber:9},globalThis),o.jsxDEV(i,{name:"example-group",id:"id-3-2",label:"Item 2",checked:e==="item-2",onChange:()=>r("item-2")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:97,columnNumber:9},globalThis),o.jsxDEV(i,{name:"example-group",id:"id-3-3",label:"Item 3",checked:e==="item-3",onChange:()=>r("item-3")},void 0,!1,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:98,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/radio/Radio.stories.tsx",lineNumber:95,columnNumber:12},globalThis)}};var m,u,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,N,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(v=(N=c.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var V,f,j;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var R,D,E;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const G=["Default","Disabled","Error","AriaDescribedBy","Group"];export{d as AriaDescribedBy,l as Default,t as Disabled,c as Error,n as Group,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Radio.stories-304e37c8.js.map
