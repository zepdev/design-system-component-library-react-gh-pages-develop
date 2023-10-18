import{r as D,R as o}from"./index-9edec130.js";import{R as t}from"./Radio-461bddeb.js";import{S}from"./Spacing-bc043d67.js";import"./_commonjsHelpers-de833af9.js";import"./clsx.m-1229b3e0.js";import"./focus-d7245c50.js";var l="/home/circleci/project/src/components/radio/Radio.stories.tsx";const G={title:"Components/Radio",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:{disable:!0}},disabled:{control:{disable:!0}},error:{control:{disable:!0}}},decorators:[s=>{const[a,e]=D.useState("");return o.createElement(s,{value:a,setValue:e,__self:void 0,__source:{fileName:l,lineNumber:35,columnNumber:12}})}],parameters:{docs:{description:{component:"The Radio component is best used inside the FormField component, it allows setting hint and error messages."}}}},i={args:{label:"Label"},render:(s,a)=>{const{value:e,setValue:r}=a;return o.createElement(t,{name:"example-default",id:"id-1",label:s.label,checked:e==="radio",onChange:()=>r("radio"),__self:void 0,__source:{fileName:l,lineNumber:56,columnNumber:12}})}},d={render:(s,a)=>{const{value:e,setValue:r}=a;return o.createElement(S,{direction:"column",__self:void 0,__source:{fileName:l,lineNumber:65,columnNumber:12}},o.createElement(t,{name:"example-disabled",id:"id-2",label:"Disabled",checked:e==="disabled",onChange:()=>r("disabled"),disabled:!0,__self:void 0,__source:{fileName:l,lineNumber:66,columnNumber:9}}),o.createElement(t,{name:"example-disabled",id:"id-2-1",label:"Disabled",checked:!0,onChange:()=>r("disabled"),disabled:!0,__self:void 0,__source:{fileName:l,lineNumber:67,columnNumber:9}}))}},n={render:(s,a)=>{const{value:e,setValue:r}=a;return o.createElement(t,{name:"example-error",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0,__self:void 0,__source:{fileName:l,lineNumber:77,columnNumber:12}})}},c={render:(s,a)=>{const{value:e,setValue:r}=a;return o.createElement(t,{name:"example-aria-described-by","aria-describedby":"id-3",id:"id-3",label:"Error",checked:e==="error",onChange:()=>r("error"),error:!0,__self:void 0,__source:{fileName:l,lineNumber:86,columnNumber:12}})}},m={render:(s,a)=>{const{value:e,setValue:r}=a;return o.createElement(S,{direction:"column",gap:"0.5",__self:void 0,__source:{fileName:l,lineNumber:95,columnNumber:12}},o.createElement(t,{name:"example-group",id:"id-3-1",label:"Item 1",checked:e==="item-1",onChange:()=>r("item-1"),__self:void 0,__source:{fileName:l,lineNumber:96,columnNumber:9}}),o.createElement(t,{name:"example-group",id:"id-3-2",label:"Item 2",checked:e==="item-2",onChange:()=>r("item-2"),__self:void 0,__source:{fileName:l,lineNumber:97,columnNumber:9}}),o.createElement(t,{name:"example-group",id:"id-3-3",label:"Item 3",checked:e==="item-3",onChange:()=>r("item-3"),__self:void 0,__source:{fileName:l,lineNumber:98,columnNumber:9}}))}};var u,b,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(b=i.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,_,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(_=d.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var N,x,f;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-error" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,E,V;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args, context) => {
    const {
      value,
      setValue
    } = context;
    return <Radio name="example-aria-described-by" aria-describedby="id-3" id="id-3" label="Error" checked={value === 'error'} onChange={() => setValue('error')} error />;
  }
}`,...(V=(E=c.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var k,C,R;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const L=["Default","Disabled","Error","AriaDescribedBy","Group"];export{c as AriaDescribedBy,i as Default,d as Disabled,n as Error,m as Group,L as __namedExportsOrder,G as default};
//# sourceMappingURL=Radio.stories-ea8d620b.js.map
